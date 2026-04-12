"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

const brands = [
  { name: "React", logo: "/next.svg" },
  { name: "Next.js", logo: "/next.svg" },
  { name: "TypeScript", logo: "/next.svg" },
  { name: "GSAP", logo: "/next.svg" },
  { name: "MUX", logo: "/next.svg" },
]

export default function BrandsGrid() {
  const t = useTranslations("brands")

  return (
    <div className="w-full max-w-[1390px] mx-auto px-4 flex flex-col items-center gap-6 mt-20">
      <h4>
        <span className="text-brand-purple-4 uppercase">
          {t("title")}
        </span>
      </h4>

      <div className="flex w-full items-center gap-4">
        {brands.map((brand) => (
          <div key={brand.name} className="flex-1 h-[142px] border border-gray-100 flex items-center justify-center gap-4 rounded-[13px]">
            <span>{brand.name}</span>
            <Image
              src="/logo-vector.png"
              width={34}
              height={34}
              alt={brand.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}