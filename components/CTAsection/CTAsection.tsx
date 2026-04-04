import { getTranslations } from "next-intl/server"
import Image from "next/image"

export default async function CTASection() {
  const t = await getTranslations("cta")

  return (
    <section className="h-[120px] w-[1376px] flex items-center bg-[#EFF2F5] justify-between gap-6 mb-12 rounded-[20px] px-10">
      <div className="bg-[#552583] w-[80px] h-[80px] flex items-center justify-center rounded-full">
        <Image
          src="/logo-vector.png"
          width={40}
          height={40}
          alt="Picture of the author"
        />
      </div>

      <span className="text-[32px] text-brand-purple-4">{t("title")}</span>

      <button
        className="p-3.5 cursor-pointer px-6 rounded-3xl text-white font-bold"
        style={{ background: "linear-gradient(to right, #7B2FBE, #F5A623)" }}
      >
        {t("button")}
      </button>
    </section>
  )
}