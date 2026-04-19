import { getLocale } from "next-intl/server"
import HeroSection from "@/components/projectLayout/Hero"
import AboutVideoDialog from "@/components/aboutSection/aboutVideoDialog"
import TeamMember from "@/components/aboutSection/TeamMember"
import { createClient } from "@/lib/supabase/server"

export default async function AboutPage() {
  const [supabase, locale] = await Promise.all([
    createClient(),
    getLocale(),
  ])

  const { data: aboutUs } = await supabase
    .from("about_us")
    .select("*")
    .single()

  const { data: members } = await supabase
    .from("members")
    .select("*")

  const videoPublicUrl = aboutUs?.video_url
    ? supabase.storage.from("about-images").getPublicUrl(aboutUs.video_url).data.publicUrl
    : "/videos/test-video.mp4"

  const isKa = locale === "ka"

  const description = (isKa && aboutUs?.description_ka)
    ? aboutUs.description_ka
    : aboutUs?.description

  const membersWithPublicUrl = (members ?? []).map((member) => ({
    ...member,
    name: (isKa && member.name_ka) ? member.name_ka : member.name,
    role: (isKa && member.role_ka) ? member.role_ka : member.role,
    publicImageUrl: member.image_url
      ? supabase.storage.from("member-images").getPublicUrl(member.image_url).data.publicUrl
      : "/about-images/about-test-pfp.png",
  }))

  return (
    <div className="flex flex-col items-center justify-center bg-[#EFF2F5]">
      <HeroSection />

      <main className="w-full max-w-[1389px] flex flex-col items-center justify-center py-10 gap-10">
        {description && (
          <span className="w-[60%] text-center">
            {description}
          </span>
        )}

        <div className="w-full h-[718px] flex items-center justify-center mt-6">
          <AboutVideoDialog videoUrl={videoPublicUrl} />
        </div>

        <div className="w-full flex flex-col items-center gap-8 mt-30">
          <span className="text-[24px] font-bold">
            The dream teams
          </span>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {membersWithPublicUrl.map((member) => (
              <TeamMember
                key={member.id}
                data={member}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}