"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export type Service = {
  title: string
  description: string
  icon: string
  slug: string
  image: string
  status: string
  is_active: boolean
}

type Props = {
  services: Service[]
}

export default function ProjectNavigation({ services }: Props) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const servicesLinks = services
    .filter((s) => s.is_active)
    .map((s) => ({
      label: s.title,
      href: `/projects/${s.slug}`,
    }))

  const activeLink = servicesLinks.find((l) => pathname.startsWith(l.href)) ?? servicesLinks[0]

  return (
    <div className="w-full flex items-center justify-center px-4">

      <div className="relative w-full max-w-sm lg:hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-3 rounded-full outline text-sm font-medium bg-white"
        >
          {activeLink?.label}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <ul className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl overflow-hidden shadow-lg z-10">
            {servicesLinks.map((l) => {
              const isActive = pathname.startsWith(l.href)
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-5 py-3 text-sm font-medium transition-colors duration-200
                      ${isActive ? "bg-white text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                    `}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <nav className="hidden lg:flex items-center justify-center rounded-full w-full max-w-[1389px] p-4 bg-white">
        <ul className="flex items-center flex-wrap justify-center gap-1">
          {servicesLinks.map((l) => {
            const isActive = pathname.startsWith(l.href)
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block px-6 py-3 text-sm font-bold whitespace-nowrap transition-colors duration-200 rounded-full
                    ${isActive ? "bg-[#EFF2F5] text-foreground" : "hover:bg-[#EFF2F5]/50"}
                  `}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

    </div>
  )
}