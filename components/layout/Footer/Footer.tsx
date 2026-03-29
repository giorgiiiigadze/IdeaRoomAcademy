import Image from "next/image"
import FooterColumn from "./FooterColumn"
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md"

const socialLinks = [
  { icon: FaFacebook,  href: "#", label: "Facebook" },
  { icon: FaYoutube,   href: "#", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter,   href: "#", label: "X (Twitter)" },
  { icon: FaLinkedin,  href: "#", label: "LinkedIn" },
]

const contactInfo = [
  { icon: MdPhone,       text: "+995 555 25 14 36" },
  { icon: MdEmail,       text: "Idearoom@gmail.com" },
  { icon: MdLocationOn,  text: "Kutaisi, Georgia Kostava st #38" },
]

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center bg-footer-dark border-t-8 border-brand-orange-5 mt-auto">

      <main className="w-full max-w-[1392px] px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div className="flex flex-col gap-3">
          <Image
            src="/logo.svg"
            alt="Idearoom logo"
            width={100}
            height={54}
            priority
          />
          <p className="text-[#CACACA] text-sm leading-relaxed">
            About Us 1B1B1B About Us 1B1B1BAbout Us 1B1B1B
            1B1B1BAbout Us1B1B1BAbout Us1B1B1BAbout Us
            1B1B1BAbout Us1B1B1BAbout Us
            1B1B1BAbout Us1B1B1BAbout Us1B1B1BAbout Us
            1B1B1BAbout Us
          </p>
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
          label="Services"
          links={[
            { label: "Web Development", href: "#" },
            { label: "Graphic Designer", href: "#" },
            { label: "UI/UX Designer", href: "#" },
            { label: "Motion Designer", href: "#" },
            { label: "Video Editing", href: "#" },
          ]}
        />

        <FooterColumn
          label="Company"
          links={[
            { label: "About Us", href: "#" },
            { label: "Idearoom Academy", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Blog", href: "#" },
          ]}
        />

        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-base mb-2">Contact</h4>
          {contactInfo.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-[#CACACA] text-sm">
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
        <span>© 2026 Copyright Idearoom. All rights reserved.</span>
      </div>

    </footer>
  )
}