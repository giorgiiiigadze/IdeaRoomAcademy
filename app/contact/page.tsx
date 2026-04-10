import { getTranslations } from "next-intl/server"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/ContactForm"

import { getContactData } from "@/lib/actions/contact"

export default async function ContactsPage() {
  const t = await getTranslations("contact")

  const contactData = await getContactData()

  return (
    <div className="flex flex-col items-center gap-6 mb-6">

      <section
        className="h-[826px] w-full"
        style={{
          backgroundImage: "url('/contact-page-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex items-center justify-between gap-6 w-full max-w-[1389px] h-[428px] rounded-2xl">

        <div className="flex flex-col gap-4 h-full flex-[0.7]">

          <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
            <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
              <Phone width={36} height={36} stroke="#fff" fill="#552583" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] text-[#552583]">
                {t("phone_label")}
              </span>
              <span className="text-[16px] text-[#552583]">
                {contactData.phone_number}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
            <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
              <Mail width={36} height={36} stroke="#552583" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] text-[#552583]">
                {t("email_label")}
              </span>
              <span className="text-[16px] text-[#552583]">
                {contactData.academy_email}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full flex-1 bg-[#F3EFF8F3] rounded-2xl p-4">
            <div className="w-[84px] h-[84px] bg-[#fff] flex items-center justify-center rounded-full">
              <MapPin width={36} height={36} stroke="#fff" fill="#552583" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[20px] text-[#552583]">
                {t("location_label")}
              </span>
              <span className="text-[16px] text-[#552583]">
                {contactData.academy_adress}
              </span>
            </div>
          </div>

        </div>

        <ContactForm
          namePlaceholder={t("name_placeholder")}
          emailPlaceholder={t("email_placeholder")}
          messagePlaceholder={t("message_placeholder")}
          sendButton={t("send_button")}
        />

      </div>
    </div>
  )
}