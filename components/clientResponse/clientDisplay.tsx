import { getTranslations } from "next-intl/server"
import { getClientResponses } from "@/lib/api"
import ClientResponseCarousel from "./ClientResponseCarousel"

export default async function ClientResponse() {
  const t = await getTranslations("testimonials")
  const clientResponses = await getClientResponses()

  return (
    <div className="w-full max-w-[1389px] flex flex-col items-center gap-4 mt-8">
      <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 m-2 text-center">
        {t("title")}
      </h1>
      <span className="text-lg sm:text-[20px] font-light text-brand-purple-6 text-center">
        {t("subtitle")}
      </span>

      <ClientResponseCarousel testimonials={clientResponses} />
    </div>
  )
}