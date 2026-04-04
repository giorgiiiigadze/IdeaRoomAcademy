import { getTranslations } from "next-intl/server"
import { Mail, MapPin, Phone } from "lucide-react"

export default async function ContactsPage() {
  const t = await getTranslations("contact")

  return (
    <div className="flex flex-col items-center gap-6 mb-6">
      <section className="h-[826px] w-full" style={{
        backgroundImage: "url('/contact-page-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />

      <div className="flex items-center justify-between gap-6 w-full max-w-[1389px] h-[428px] rounded-2xl">

        <div className="flex flex-col gap-4 h-full flex-[0.7]">
          <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
            <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
              <Phone width={36} height={36} stroke="#fff" fill="#552583" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] text-[#552583]">{t("phone_label")}</span>
              <span className="text-[16px] text-[#552583]">+995 555 25 14 36</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
            <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
              <Mail width={36} height={36} stroke="#552583" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] text-[#552583]">{t("email_label")}</span>
              <span className="text-[16px] text-[#552583]">Idearoom@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
            <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
              <MapPin width={36} height={36} stroke="#fff" fill="#552583" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] text-[#552583]">{t("location_label")}</span>
              <span className="text-[16px] text-[#552583]">Kutaisi, Georgia Kostava st #38</span>
            </div>
          </div>
        </div>

        <div className="flex bg-[#F3EFF8F3] rounded-2xl h-full flex-1 flex-col gap-6 p-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder={t("name_placeholder")}
              className="flex-1 h-[48px] rounded-lg px-4 text-sm outline-none"
              style={{ background: "#fff" }}
            />
            <input
              type="email"
              placeholder={t("email_placeholder")}
              className="flex-1 h-[48px] rounded-lg px-4 text-sm outline-none"
              style={{ background: "#fff" }}
            />
          </div>

          <textarea
            placeholder={t("message_placeholder")}
            className="w-full flex-1 min-h-[160px] rounded-lg px-4 py-3 text-sm outline-none resize-none"
            style={{ background: "#fff" }}
          />

          <div className="flex justify-end">
            <button className="px-10 py-3 bg-[#F5A623] hover:bg-[#e09510] transition-colors text-white font-semibold rounded-full">
              {t("send_button")}
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}