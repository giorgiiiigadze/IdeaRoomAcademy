"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"
import { useTranslations, useLocale } from "next-intl"

import LanguageToggle from "../LanguageToggle"
import { createClient } from "@/lib/supabase/client"

type ServiceLink = {
  label: string
  href: string
  description?: string
  icon?: string
}

function DropdownMenu({ label, links }: {
  label: string
  links: { label: string; href: string; description?: string; icon?: string }[]
}) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 100)
  }

  return (
    <div className="static" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">
        {label}
        <ChevronDown width={14} height={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[800px] bg-[#1A1A1A] rounded-2xl p-4 shadow-2xl transition-opacity duration-200 z-50
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
          {links.length === 0 ? (
            <li className="col-span-2 py-6 text-center text-gray-400 text-sm">
              No items yet.
            </li>
          ) : (
            links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
                >
                  <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                    <Image src={l.icon!} width={36} height={36} alt={l.label} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-sm leading-tight group-hover:text-brand-orange-5 transition-colors">
                      {l.label}
                    </span>
                    {l.description && (
                      <span className="text-gray-400 text-xs mt-0.5 leading-snug line-clamp-1">
                        {l.description}
                      </span>
                    )}
                  </div>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

function AcademyButton({ label }: { label: string }) {
  const defaultTextRef = useRef<HTMLSpanElement>(null)
  const hoverTextRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    gsap.fromTo(hoverTextRef.current, { y: "-100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" })
    gsap.to(defaultTextRef.current, { y: "100%", opacity: 0, duration: 0.3, ease: "power2.out" })
  }

  const handleMouseLeave = () => {
    gsap.to(hoverTextRef.current, { y: "-100%", opacity: 0, duration: 0.3, ease: "power2.out" })
    gsap.fromTo(defaultTextRef.current, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" })
  }

  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden cursor-pointer px-6 py-2.5 rounded-full bg-brand-orange-5 text-brand-purple-5 font-bold"
      href="https://academy.idearoom.ge"
    >
      <span ref={defaultTextRef} className="block">{label}</span>
      <span ref={hoverTextRef} className="absolute inset-0 flex items-center justify-center opacity-0">{label}</span>
    </a>
  )
}

export default function Header() {
  const t = useTranslations("nav")
  const locale = useLocale()

  const [servicesLinks, setServicesLinks] = useState<ServiceLink[]>([])
  const [worksLinks, setWorksLinks] = useState<ServiceLink[]>([])

  useEffect(() => {
    const supabase = createClient()
    const isKa = locale === "ka"

    async function fetchServices() {
      const { data } = await supabase.from("services").select("*").eq("is_active", true)
      if (data) {
        setServicesLinks(
          data.map((s) => ({
            label: isKa && s.title_ka ? s.title_ka : s.title,
            href: `/projects/${s.slug}`,
            description: isKa && s.description_ka ? s.description_ka : s.description,
            icon: s.icon ?? "/header-icons/header-icon-test.svg",
          }))
        )
      }
    }

    async function fetchWorks() {
      const { data } = await supabase.from("works").select("*").eq("published", true)
      if (data) {
        setWorksLinks(
          data.map((w) => ({
            label: isKa && w.title_ka ? w.title_ka : w.title,
            href: `/works/${w.slug}`,
            description: isKa && w.description_ka ? w.description_ka : w.description,
            icon: "/header-icons/header-icon-test.svg",
          }))
        )
      }
    }

    fetchServices()
    fetchWorks()
  }, [locale])

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="w-full max-w-[1389px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between mt-2 backdrop-blur-md rounded-2xl">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Idearoom logo"
            width={100}
            height={54}
            priority
            style={{ width: "100px", height: "auto" }}
          />
        </Link>

        <div className="flex items-center gap-4">
          <nav className="relative flex items-center gap-1">
            <Link href="/" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">
              {t("main")}
            </Link>
            <DropdownMenu label={t("works")} links={worksLinks} />
            <DropdownMenu label={t("services")} links={servicesLinks} />
            <Link href="/about" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">
              {t("about")}
            </Link>
            <Link href="/contact" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">
              {t("contact")}
            </Link>
          </nav>

          <AcademyButton label={t("academy")} />

          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}