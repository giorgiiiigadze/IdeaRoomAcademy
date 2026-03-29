"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"

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
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between font-semibold py-3 text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">
        {label}
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <ChevronUp width={20} height={20} />
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="pl-4 pb-2 flex flex-col gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="block py-1.5 text-sm text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">
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
      className="relative overflow-hidden cursor-pointer p-2.5 px-6 rounded-xl bg-brand-orange-5 text-brand-purple-5 font-bold"
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
    <header className={`w-full absolute top-0 left-0 right-0 z-50 h-[54px] lg:bg-transparent sm:px-6 lg:px-8 `}>
      {/* <div className={`w-full max-w-[1389px] mx-auto p-4 flex items-center justify-between mt-2 border border-brand-purple-3/30 bg-brand-purple-5/10 backdrop-blur-md rounded-2xl ${mobileOpen ? "bg-white" : ""}`}> */}
      <div className={`w-full max-w-[1389px] mx-auto p-4 flex items-center justify-between mt-2 backdrop-blur-md rounded-2xl ${mobileOpen ? "bg-white" : ""}`}>

        <Link href={"/"}>
          <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-2">

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200"
                  >
                    Main
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blogs"
                    className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200"
                  >
                    Blogs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200 bg-transparent"
                >
                  Works
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[300px] gap-1">
                    {worksLinks.map((l) => (
                      <li key={l.label}>
                        <NavigationMenuLink asChild>
                          <Link href={l.href} className="block px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200 text-sm">
                            {l.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200 bg-transparent"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[300px] gap-1">
                    {servicesLinks.map((l) => (
                      <li key={l.label}>
                        <NavigationMenuLink asChild>
                          <Link href={l.href} className="block px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200 text-sm">
                            {l.label}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="w-px h-5 bg-border mx-2" />


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
          <Link href="#" className="block font-semibold text-lg py-3 text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">Main</Link>
          <MobileAccordion label="Works" links={worksLinks} />
          <MobileAccordion label="Services" links={servicesLinks} />
          <Link href="#" className="block font-semibold text-lg py-3 text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">About</Link>
          <Link href="#" className="block font-semibold text-lg py-3 text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">Contact</Link>
          <div className="pt-4">
            <Button className="relative overflow-hidden cursor-pointer p-2.5 px-6 rounded-full bg-brand-orange-5 text-[#7B2FBE] font-bold w-full">Academy</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useState, useEffect, useRef } from "react"
// import { ChevronDown } from "lucide-react"
// import gsap from "gsap"

// const worksLinks = [
//   { label: "Work Item 1", href: "#" },
//   { label: "Work Item 2", href: "#" },
//   { label: "Work Item 3", href: "#" },
// ]

// const servicesLinks = [
//   { label: "Video Editing", href: "/project/video-editing" },
//   { label: "Branding", href: "/project/branding" },
//   { label: "Social Media", href: "/project/social-media" },
//   { label: "Web Development", href: "/project/web-development" },
//   { label: "UI/UX Design", href: "#" },
//   { label: "Motion Design", href: "/project/motion-design" },
// ]

// function DropdownMenu({ label, links }: { label: string; links: { label: string; href: string }[] }) {
//   const [open, setOpen] = useState(false)
//   const dropdownRef = useRef<HTMLDivElement>(null)
//   const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current)
//     setOpen(true)
//   }

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => setOpen(false), 100)
//   }

//   return (
//     <div
//       className="relative"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <button className="flex items-center gap-1 font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">
//         {label}
//         <ChevronDown
//           width={14}
//           height={14}
//           className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//         />
//       </button>

//       <div
//         ref={dropdownRef}
//         className={`absolute top-full left-0 mt-1 w-[220px] bg-white border border-border rounded-xl shadow-lg overflow-hidden transition-all duration-200 ${
//           open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
//         }`}
//       >
//         <ul className="flex flex-col p-1">
//           {links.map((l) => (
//             <li key={l.label}>
//               <Link
//                 href={l.href}
//                 className="block px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200 text-sm"
//               >
//                 {l.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function MobileAccordion({ label, links }: { label: string; links: { label: string; href: string }[] }) {
//   const [open, setOpen] = useState(false)

//   return (
//     <div className="border-b border-border">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className="w-full flex items-center justify-between font-semibold py-3 text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors"
//       >
//         {label}
//         <ChevronDown
//           width={18}
//           height={18}
//           className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
//         />
//       </button>
//       <div
//         className={`overflow-hidden transition-all duration-300 ${
//           open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
//         }`}
//       >
//         <ul className="pl-4 pb-2 flex flex-col gap-1">
//           {links.map((l) => (
//             <li key={l.label}>
//               <Link
//                 href={l.href}
//                 className="block py-1.5 text-sm text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors"
//               >
//                 {l.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// function BurgerIcon({ open }: { open: boolean }) {
//   return (
//     <div className="flex flex-col justify-center items-center w-6 h-6 gap-[5px]">
//       <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
//       <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
//       <span className={`block h-[2px] w-6 bg-current rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
//     </div>
//   )
// }

// function AcademyButton() {
//   const defaultTextRef = useRef<HTMLSpanElement>(null)
//   const hoverTextRef = useRef<HTMLSpanElement>(null)

//   const handleMouseEnter = () => {
//     gsap.fromTo(hoverTextRef.current, { y: "-100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" })
//     gsap.to(defaultTextRef.current, { y: "100%", opacity: 0, duration: 0.3, ease: "power2.out" })
//   }

//   const handleMouseLeave = () => {
//     gsap.to(hoverTextRef.current, { y: "-100%", opacity: 0, duration: 0.3, ease: "power2.out" })
//     gsap.fromTo(defaultTextRef.current, { y: "100%", opacity: 0 }, { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" })
//   }

//   return (
//     <button
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className="relative overflow-hidden cursor-pointer px-6 py-2.5 rounded-xl bg-brand-orange-5 text-brand-purple-5 font-bold"
//     >
//       <span ref={defaultTextRef} className="block">Academy</span>
//       <span ref={hoverTextRef} className="absolute inset-0 flex items-center justify-center opacity-0">Academy</span>
//     </button>
//   )
// }

// export default function Header() {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) setMobileOpen(false)
//     }
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // lock body scroll when mobile menu is open
//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : ""
//     return () => { document.body.style.overflow = "" }
//   }, [mobileOpen])

//   return (
//     <header className="w-full absolute top-0 left-0 right-0 z-50 sm:px-6 lg:px-8">
//       <div className={`w-full max-w-[1389px] mx-auto px-4 py-3 flex items-center justify-between mt-2 backdrop-blur-md rounded-2xl ${mobileOpen ? "bg-white" : ""}`}>

//         <Link href="/">
//           <Image src="/logo.svg" alt="Idearoom logo" width={100} height={54} priority />
//         </Link>

//         {/* Desktop nav */}
//         <nav className="hidden lg:flex items-center gap-1">
//           <Link href="/" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">
//             Main
//           </Link>
//           <Link href="/blogs" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">
//             Blogs
//           </Link>
//           <DropdownMenu label="Works" links={worksLinks} />
//           <DropdownMenu label="Services" links={servicesLinks} />
//           <Link href="/contact" className="font-medium px-3 py-2 rounded-md text-brand-orange-5 hover:bg-purple-100 transition-colors duration-200">
//             Contact
//           </Link>
//         </nav>

//         <div className="hidden lg:flex items-center gap-4">
//           <div className="w-px h-5 bg-border" />
//           <AcademyButton />
//         </div>

//         {/* Mobile burger */}
//         <button
//           className="lg:hidden p-2 -mr-2 rounded-md"
//           onClick={() => setMobileOpen((o) => !o)}
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//         >
//           <BurgerIcon open={mobileOpen} />
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`lg:hidden transition-all duration-300 ease-in-out bg-white ${
//           mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         <nav className="w-full max-w-[1389px] mx-auto px-4 pb-6 flex flex-col">
//           <Link href="/" className="block font-semibold text-lg py-3 border-b border-border text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">
//             Main
//           </Link>
//           <Link href="/blogs" className="block font-semibold text-lg py-3 border-b border-border text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">
//             Blogs
//           </Link>
//           <MobileAccordion label="Works" links={worksLinks} />
//           <MobileAccordion label="Services" links={servicesLinks} />
//           <Link href="/contact" className="block font-semibold text-lg py-3 border-b border-border text-[#7B2FBE] hover:bg-purple-50 px-2 rounded-md transition-colors">
//             Contact
//           </Link>
//           <div className="pt-4">
//             <button className="w-full px-6 py-2.5 rounded-xl bg-brand-orange-5 text-brand-purple-5 font-bold">
//               Academy
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   )
// }