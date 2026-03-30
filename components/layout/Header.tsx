"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import gsap from "gsap"

const worksLinks = [
  { label: "Work Item 1", href: "#" },
  { label: "Work Item 2", href: "#" },
  { label: "Work Item 3", href: "#" },
]

const servicesLinks = [
  { label: "Video Editing", href: "/project/video-editing" },
  { label: "Branding", href: "/project/branding" },
  { label: "Social Media", href: "/project/social-media" },
  { label: "Web Development", href: "/project/web-development" },
  { label: "UI/UX Design", href: "#" },
  { label: "Motion Design", href: "/project/motion-design" },
]

const mobileGroups = [
  {
    group: "Works",
    links: worksLinks,
  },
  {
    group: "Services",
    links: servicesLinks,
  },
  {
    group: "Company",
    links: [
      { label: "Main", href: "/" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
      
    ],
  },
]

function DropdownMenu({ label, links }: { label: string; links: { label: string; href: string }[] }) {
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
      <button className="flex items-center gap-1 font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">
        {label}
        <ChevronDown width={14} height={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`absolute top-full left-0 mt-1 w-[220px] bg-white border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-200 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"}`}>
        <ul className="flex flex-col p-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="block px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200 text-sm">
                {l.label}
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
      className="relative overflow-hidden cursor-pointer px-6 py-2.5 rounded-xl bg-brand-orange-5 text-brand-purple-5 font-bold"
    >
      <span ref={defaultTextRef} className="block">Academy</span>
      <span ref={hoverTextRef} className="absolute inset-0 flex items-center justify-center opacity-0">Academy</span>
    </button>
  )
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
      <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
      <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  useEffect(() => {
    if (!menuRef.current || !itemsRef.current) return

    if (mobileOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
      gsap.fromTo(itemsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.05, delay: 0.1 }
      )
    } else {
      gsap.to(menuRef.current, { opacity: 0, y: -10, duration: 0.2, ease: "power2.in" })
    }
  }, [mobileOpen])

  return (
    <>
        <header className="w-full absolute top-0 left-0 right-0 z-50 px-4 lg:px-8">
            <div className={`w-full max-w-[1389px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between mt-2 backdrop-blur-md rounded-2xl ${mobileOpen ? "bg-gray-500" : ""}`}>
            <Link href="/">
              <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />
            </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">Main</Link>
            <Link href="/blogs" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">Blogs</Link>
            <Link href="/works" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">Works</Link>
            <DropdownMenu label="Services" links={servicesLinks} />
            <Link href="/contact" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <AcademyButton />
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-brand-orange-5 text-brand-purple-5">
              Academy
            </button>
            <button
              className="p-2 -mr-2 rounded-md"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <BurgerIcon open={mobileOpen} />
            </button>
          </div>

        </div>
      </header>

      {mobileOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-white/60 backdrop-blur-xl flex flex-col opacity-0"
        >
          <div className="flex items-center justify-between px-6 py-4 mt-2">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />
            </Link>
            <div className="flex items-center gap-3">
              <button className="px-4 py-1.5 text-sm font-semibold rounded-lg bg-brand-orange-5 text-brand-purple-5">
                Academy
              </button>
              <button
                className="p-2 -mr-2 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                <BurgerIcon open={true} />
              </button>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <div ref={itemsRef} className="flex flex-col gap-8">
              {mobileGroups.map((group) => (
                <div key={group.group} className="flex flex-col gap-1">
                  <span className="text-xs text-white uppercase tracking-widest mb-2">
                    {group.group}
                  </span>
                  {group.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-3xl font-semibold text-[#7B2FBE] py-1 hover:opacity-60 transition-opacity"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  )
}