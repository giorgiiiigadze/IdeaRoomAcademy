"use client"

import { useTranslations } from "next-intl"

export default function HeroHeading() {
  const t = useTranslations("hero")

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center font-bold text-center leading-tight bg-[#D9D9D9]">
      <video
        src="/landing-page-files/hero-video-compressed.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <h1>{t("title")}</h1>
    </div>
  )
}