"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

type ServiceLink = {
  label: string
  href: string
}

export default function ProjectNavigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesLinks, setServicesLinks] = useState<ServiceLink[]>([])

  useEffect(() => {
    async function fetchServices() {
      const supabase = createClient()
      const { data } = await supabase
        .from("services")
        .select("title, slug")
        .eq("is_active", true)

      if (data) {
        setServicesLinks(
          data.map((s) => ({
            label: s.title,
            href: `/projects/${s.slug}`,
          }))
        )
      }
    }
    fetchServices()
  }, [])

  const activeLink = servicesLinks.find((l) => l.href === pathname) ?? servicesLinks[0]

  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="relative w-full max-w-sm lg:hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-3 rounded-full outline text-sm font-medium"
        >
          {activeLink?.label}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <ul className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl overflow-hidden shadow-lg z-10">
            {servicesLinks.map((l) => {
              const isActive = pathname === l.href
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

      <nav className="lg:flex items-center flex items-center justify-center rounded-full w-full max-w-[1389px] p-4 bg-white">
        <ul className="flex items-center">
          {servicesLinks.map((l) => {
            const isActive = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`block px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors duration-200 rounded-full
                    ${isActive ? "bg-[#EFF2F5] text-foreground" : ""}
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