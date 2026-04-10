import { getTranslations } from "next-intl/server"
import AboutVideoDialog from "./aboutVideoDialog"
import { createClient } from "@/lib/supabase/server"

export default async function AboutDisplay() {
  const t = await getTranslations("about")
  const supabase = await createClient()

  const { data: aboutUs } = await supabase
    .from("about_us")
    .select("video_url")
    .single()

  const videoPublicUrl = aboutUs?.video_url
    ? supabase.storage.from("about-images").getPublicUrl(aboutUs.video_url).data.publicUrl
    : null

  return (
    <div className="w-full max-w-[1389px] flex flex-col items-center gap-4 mt-8 mb-20">
      <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 m-2 text-center">
        {t("title")}
      </h1>

      <span className="text-lg sm:text-[20px] font-light text-brand-purple-6 text-center max-w-[700px] mb-6">
        {t("subtitle")}
      </span>

      <div className="w-full h-[718px] flex items-center justify-center mt-6">
        {videoPublicUrl ? (
          <AboutVideoDialog videoUrl={videoPublicUrl} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            No video available.
          </div>
        )}
      </div>
    </div>
  )
}