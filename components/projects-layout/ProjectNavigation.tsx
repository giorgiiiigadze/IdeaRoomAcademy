"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const servicesLinks = [
  { label: "Video Editing", href: "/project/video-editing" },
  { label: "Branding", href: "/project/branding" },
  { label: "Social Media", href: "/project/social-media" },
  { label: "Web Development", href: "/project/web-development" },
  { label: "UI/UX Design", href: "#" },
  { label: "Motion Design", href: "/project/motion-design" },
]

export default function ProjectNavigation() {
  const pathname = usePathname()

  return (
    <div className="w-full flex items-center justify-center">
      <nav className="flex items-center outline rounded-full p-2">
        <ul className="flex items-center">
          {servicesLinks.map((l) => {
            const isActive = pathname === l.href

            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`
                    block px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-full
                    ${isActive
                      ? "bg-gray-300 text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                    }
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