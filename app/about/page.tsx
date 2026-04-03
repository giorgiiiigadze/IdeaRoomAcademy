import HeroSection from "@/components/projectLayout/Hero"
import AboutVideoDialog from "@/components/aboutSection/aboutVideoDialog"
import TeamMember from "@/components/TeamMember"

const teamMembers = [
  { id: 1, name: "Ioseb Khvicia", role: "UI/UX Designer", image: "/about-images/about-test-pfp.png" },
  { id: 2, name: "Ioseb Khvicia", role: "UI/UX Designer", image: "/about-images/about-test-pfp.png" },
  { id: 3, name: "Ioseb Khvicia", role: "UI/UX Designer", image: "/about-images/about-test-pfp.png" },
  { id: 4, name: "Ioseb Khvicia", role: "UI/UX Designer", image: "/about-images/about-test-pfp.png" },
  { id: 5, name: "Ioseb Khvicia", role: "UI/UX Designer", image: "/about-images/about-test-pfp.png" },
  { id: 6, name: "Ioseb Khvicia", role: "UI/UX Designer", image: "/about-images/about-test-pfp.png" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#EFF2F5]">
        <HeroSection />

        <main className="w-full max-w-[1389px] flex flex-col items-center justify-center py-10 gap-10">
            <span className="w-[60%] text-center">
                Burst is home to a hive of talented creatives who put digital first. We have cultivated deep experience across the digital
                landscape, making us leaders in designing your complete online presence. From building brand identity to web design,
                managing social media platforms, digital marketing &amp; everything in between &ndash; we thrive on making your brand shine in
                the spotlight. Since Burst was founded in 2018, we&apos;ve already helped bring 100s of high-profile clients into the new digital
                age, working tirelessly to ensure that we leave brands looking brilliantly bright.
                <br />
                Burst is home to a hive of talented creatives who put digital first. We have cultivated deep experience across the digital
                landscape, making us leaders in designing your complete online presence. From building brand identity to web design,
                managing social media platforms, digital marketing &amp; everything in between &ndash; we thrive on making your brand shine in
                the spotlight. Since Burst was founded in 2018, we&apos;ve already helped bring 100s of high-profile clients into the new digital
                age, working tirelessly to ensure that we leave brands looking brilliantly bright.
            </span>

            <div className="w-full h-[718px] flex items-center justify-center mt-6">
            <AboutVideoDialog
                videoUrl="/videos/test-video.mp4"
                thumbnail="/about-images/about-us-test-image.png"
            />
            </div>

            <div className="w-full flex flex-col items-center gap-8 mt-30">
            <span className="text-[24px] font-bold">
                The dream teams
            </span>

            {/* Ar dagvaviwydes es backendtan mivabat mere */}

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {teamMembers.map((member) => (
                <TeamMember
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                />
                ))}
            </div>
            </div>
        </main>
    </div>
  )
}