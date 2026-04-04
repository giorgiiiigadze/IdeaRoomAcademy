import { getTranslations } from "next-intl/server"
import { ArrowRightCircleIcon } from "lucide-react"

export default async function LandingImageDisplay() {
  const t = await getTranslations("academy")

  return (
    <div className="w-full flex items-center justify-center">
      <main className="w-full max-w-[1389px] flex items-center justify-between py-16">
        <div className="flex flex-col flex-1 items-start gap-20">
          <h1 style={{ color: "#FBA834" }} className="text-[32px]">
            {t("title")}
          </h1>

          <p className="text-[16px] text-gray-700">
            {t("description")}
          </p>

          <button style={{ color: "#FBA834" }} className="flex gap-2">
            <ArrowRightCircleIcon />
            {t("button")}
          </button>
        </div>

        <div className="flex-1">
          <h1>Aq image iqneba</h1>
        </div>
      </main>
    </div>
  )
}