"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

export default function BrandsGrid() {
  const t = useTranslations("brands")

  return (
    <div className="w-full max-w-[1390px] mx-auto px-4 flex flex-col items-center gap-6 mt-20">
      <h4>
        <span className="text-brand-purple-4 uppercase">
          {t("title")}
        </span>
      </h4>

      <div className="relative w-full h-[280px]">
        <Image
          src="/brands-images/brands.png"
          fill
          className="object-contain"
          alt="Trusted brands"
        />
      </div>
    </div>
  )
}