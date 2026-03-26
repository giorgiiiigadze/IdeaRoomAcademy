"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { ThemeToggle } from "../theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronUp } from "lucide-react"
import gsap from "gsap"

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
      <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
      <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
      <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
    </div>
  )
}

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

function MobileAccordion({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between font-semibold py-3">
        {label}
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <ChevronUp width={20} height={20} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="pl-4 pb-2 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
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
  const btnRef = useRef<HTMLButtonElement>(null)
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
      ref={btnRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden cursor-pointer p-2.5 px-6 rounded-full bg-brand-orange-5 text-brand-purple-5 font-bold"
    >
      <span ref={defaultTextRef} className="block">Academy</span>
      <span ref={hoverTextRef} className="absolute inset-0 flex items-center justify-center opacity-0">Academy</span>
    </button>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 h-[54px] bg-white lg:bg-transparent ${mobileOpen ? "bg-white" : ""}`}>
      <div className="w-full max-w-[1389px] mx-auto px-4 lg:px-0 flex items-center justify-between h-[54px] lg:mt-2">
        <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />

        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="font-medium px-3 py-2">Main</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Works</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[300px] gap-1">
                    {worksLinks.map((l) => (
                      <li key={l.label}>
                        <NavigationMenuLink asChild>
                          <Link href={l.href} className="block px-3 py-2 rounded-md hover:bg-muted text-sm">{l.label}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[300px] gap-1">
                    {servicesLinks.map((l) => (
                      <li key={l.label}>
                        <NavigationMenuLink asChild>
                          <Link href={l.href} className="block px-3 py-2 rounded-md hover:bg-muted text-sm">{l.label}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#" className="font-medium py-2">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#" className="font-medium py-2">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
          <AcademyButton />
        </div>

        <button
          className="lg:hidden p-2 -mr-2 rounded-md"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <BurgerIcon open={mobileOpen} />
        </button>
      </div>

      <div className={`transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-screen opacity-100 bg-white overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <nav className="w-full max-w-[1389px] mx-auto px-4 pb-6 divide-y divide-border">
          <Link href="#" className="block font-semibold text-lg py-3 hover:text-muted-foreground transition-colors">Main</Link>
          <MobileAccordion label="Works" links={worksLinks} />
          <MobileAccordion label="Services" links={servicesLinks} />
          <Link href="#" className="block font-semibold text-lg py-3 hover:text-muted-foreground transition-colors">About</Link>
          <Link href="#" className="block font-semibold text-lg py-3 hover:text-muted-foreground transition-colors">Contact</Link>
          <div className="pt-4">
            <Button className="cursor-pointer w-full rounded-full bg-orange-4 text-purple-4">Academy</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}