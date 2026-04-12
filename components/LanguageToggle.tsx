"use client"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", label: "English", flag: "/languages/english-flag.png" },
  { code: "ka", label: "Georgian", flag: "/languages/georgia-flag.png" },
]

export default function LanguageToggle() {
  const router = useRouter()
  const locale = useLocale()

  const switchTo = async (lang: string) => {
    await fetch("/api/set-lang", {
      method: "POST",
      body: JSON.stringify({ lang }),
    })
    router.refresh()
  }

  const current = languages.find((l) => l.code === locale) ?? languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-200">
          <Image
            src={current.flag}
            alt={current.label}
            width={20}
            height={14}
            style={{ width: "20px", height: "auto" }}
            className="rounded-sm object-cover"
          />
          <span className="text-black text-xs font-semibold tracking-wide">
            {current.code.toUpperCase()}
          </span>
          <ChevronDown size={12} className="text-black" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => switchTo(l.code)}
            className={`flex items-center gap-2 ${locale === l.code ? "font-bold" : ""}`}
          >
            <Image
              src={l.flag}
              alt={l.label}
              width={20}
              height={14}
              style={{ width: "20px", height: "auto" }}
              className="rounded-sm object-cover"
            />
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}