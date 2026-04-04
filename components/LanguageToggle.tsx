"use client"
import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"

export default function LanguageToggle() {
  const router = useRouter()
  const locale = useLocale()

  const toggle = async () => {
    const next = locale === "en" ? "ka" : "en"
    await fetch("/api/set-lang", {
      method: "POST",
      body: JSON.stringify({ lang: next }),
    })
    router.refresh()
  }

  return (
    <button
      onClick={toggle}
      title={locale === "en" ? "Switch to Georgian" : "Switch to English"}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 transition-all duration-200"
    >
      <span className="text-black text-xs font-semibold tracking-wide">
        {locale === "en" ? "GEO" : "ENG"}
      </span>
    </button>
  )
}