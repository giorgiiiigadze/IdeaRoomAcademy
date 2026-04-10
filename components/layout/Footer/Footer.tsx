import Image from "next/image"
import { getTranslations } from "next-intl/server"
import FooterColumn from "./FooterColumn"
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"

import { createClient } from "@/lib/supabase/server"
import { getContactData } from "@/lib/actions/contact"

const socialLinks = [
  { icon: FaFacebook,  href: "#", label: "Facebook" },
  { icon: FaYoutube,   href: "#", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter,   href: "#", label: "X (Twitter)" },
  { icon: FaLinkedin,  href: "#", label: "LinkedIn" },
]

export default async function Footer() {
  const t = await getTranslations("footer")
  const supabase = await createClient()

  const contactData = await getContactData()

  const contactInfo = contactData
    ? [
        { icon: MdPhone, text: contactData.phone_number },
        { icon: MdEmail, text: contactData.academy_email },
        { icon: MdLocationOn, text: contactData.academy_adress },
      ]
    : []

  const { data: aboutUsData } = await supabase
    .from("about_us")
    .select("*")
    .single()
    
  return (
    <footer className="w-full flex flex-col items-center bg-footer-dark border-t-8 border-brand-orange-5 mt-auto">

      <main className="w-full max-w-[1392px] px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div className="flex flex-col gap-3">
          <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />
          <p className="text-[#CACACA] text-sm leading-relaxed">{aboutUsData.description}</p>

          <div className="flex gap-2 mt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Icon size={18} color="#552583" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn
          label={t("services_title")}
          links={[
            { label: t("services_web"),     href: "#" },
            { label: t("services_graphic"), href: "#" },
            { label: t("services_uiux"),    href: "#" },
            { label: t("services_motion"),  href: "#" },
            { label: t("services_video"),   href: "#" },
          ]}
        />

        <FooterColumn
          label={t("company_title")}
          links={[
            { label: t("company_about"),    href: "/about" },
            { label: t("company_academy"),  href: "#" },
            { label: t("company_privacy"),  href: "#" },
            { label: t("company_blog"),     href: "/blogs" },
          ]}
        />

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-base mb-2">
            {t("contact_title")}
          </h4>

          {contactInfo.map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center gap-3 text-[#CACACA] text-sm">
              <div className="w-9 h-9 rounded-full bg-white shrink-0 flex items-center justify-center">
                <Icon size={16} color="#552583" />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>

      </main>

      <div className="w-full max-w-[1392px] px-4 sm:px-6 lg:px-8 h-px bg-[#505050]" />

      <div className="w-full max-w-[1392px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 text-[#CACACA] text-sm text-center">
        <span>{t("copyright")}</span>
      </div>

    </footer>
  )
}