"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"

const servicesLinks = [
  { label: "Web Development", href: "/projects/web-development", description: "Inspiring web development.", icon: "/header-icons/header-icon-test.svg" },
  { label: "UI/UX Design", href: "projects/ui-ux-design", description: "Inspiring web & mobile app Design.", icon: "/header-icons/header-icon-test.svg" },
  { label: "Branding", href: "/projects/branding", description: "Dazzling end-to-end brand identity creation.", icon: "/header-icons/header-icon-test.svg" },
  { label: "Social Media", href: "/projects/social-media", description: "Engaging social media management.", icon: "/header-icons/header-icon-test.svg" },
  { label: "Video Editing", href: "/projects/video-editing", description: "Create video your business needs.", icon: "/header-icons/header-icon-test.svg" },
  { label: "Motion Design", href: "/projects/motion-design", description: "Dazzling end-to-end brand identity creation.", icon: "/header-icons/header-icon-test.svg" },
]

const worksLinks = [
  {
    label: "NovaBank Platform",
    href: "/project/nova-bank",
    description: "A modern fintech platform built for seamless digital banking.",
    icon: "/header-icons/header-icon-test.svg",
  },
  {
    label: "FitTrack App",
    href: "/project/fittrack",
    description: "A fitness tracking app focused on user engagement and simplicity.",
    icon: "/header-icons/header-icon-test.svg",
  },
  {
    label: "Lume Cosmetics Branding",
    href: "/project/lume-cosmetics",
    description: "Complete brand identity for a fast-growing beauty company.",
    icon: "/header-icons/header-icon-test.svg",
  },
  {
    label: "SocialBoost Campaign",
    href: "/project/socialboost",
    description: "High-performing social media campaign for audience growth.",
    icon: "/header-icons/header-icon-test.svg",
  },
  {
    label: "VisionX Promo Video",
    href: "/project/visionx-video",
    description: "Cinematic promotional video designed for product launch.",
    icon: "/header-icons/header-icon-test.svg",
  },
  {
    label: "MotionLab Explainer",
    href: "/project/motionlab",
    description: "Animated explainer video simplifying complex ideas.",
    icon: "/header-icons/header-icon-test.svg",
  },
]

function DropdownMenu({ label, links }: { label: string; links: { label: string; href: string; description?: string; icon?: string }[] }) {
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
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">
        {label}
        <ChevronDown width={14} height={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-[#1A1A1A] rounded-2xl p-4 shadow-2xl transition-all duration-200 z-50
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="flex items-center justify-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group"
              >
                <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center">
                  <Image src={l.icon!} width={36} height={36} alt={l.label} />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm leading-tight group-hover:text-brand-orange-5 transition-colors">
                    {l.label}
                  </span>
                  {l.description && (
                    <span className="text-gray-400 text-xs mt-0.5 leading-snug">
                      {l.description}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function AcademyButton() {
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
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden cursor-pointer px-6 py-2.5 rounded-full bg-brand-orange-5 text-brand-purple-5 font-bold"
    >
      <span ref={defaultTextRef} className="block">Academy</span>
      <span ref={hoverTextRef} className="absolute inset-0 flex items-center justify-center opacity-0">Academy</span>
    </button>
  )
}

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="w-full max-w-[1389px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between mt-2 backdrop-blur-md rounded-2xl">
        <Link href="/">
          <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-1">
            <Link href="/" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">Main</Link>
            <DropdownMenu label="Works" links={worksLinks} />
            <DropdownMenu label="Services" links={servicesLinks} />
            <Link href="/about" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">About</Link>
            <Link href="/contact" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-brand-purple-6 transition-colors duration-200">Contact</Link>
          </nav>

          <AcademyButton />
        </div>
      </div>
    </header>
  )
}