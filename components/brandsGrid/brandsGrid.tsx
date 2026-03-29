"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"

const brands = [
  { name: "React", logo: "/next.svg" },
  { name: "Next.js", logo: "/next.svg" },
  { name: "TypeScript", logo: "/next.svg" },
  { name: "GSAP", logo: "/next.svg" },
  { name: "MUX", logo: "/next.svg" },
  { name: "Tailwind", logo: "/next.svg" },
  { name: "Supabase", logo: "/next.svg" },
  { name: "Vercel", logo: "/next.svg" },
  { name: "Figma", logo: "/next.svg" },
  { name: "Figma", logo: "/next.svg" },
]

const duplicated = [...brands, ...brands]

export default function BrandsGrid() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const totalWidth = track.scrollWidth / 2

    gsap.to(track, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    })
  }, [])

  return (
    <div className="w-full max-w-[1389px] flex flex-col items-center py-10">
      {/* <span className="font-semibold text-xl mb-10 text-brand-purple-5 text-center px-4">
        Trusted by current and soon to be world-class brands.
      </span> */}

      <div className="w-full overflow-hidden md:hidden border-t border-b border-border py-6">
        <div ref={trackRef} className="flex gap-12 w-max">
          {duplicated.map((brand, i) => (
            <div key={brand.name + i} className="flex items-center justify-center px-4 shrink-0">
              <Image src={brand.logo} alt={brand.name} width={80} height={36} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex w-full flex-col">
        <div className="w-full grid grid-cols-3 h-[270px]">
          {brands.slice(0, 3).map((brand) => (
            <div
              key={brand.name}
              className="border-r border-b border-border flex items-center justify-center py-20 px-8"
            >
              <Image src={brand.logo} alt={brand.name} width={130} height={50} className="object-contain" />
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-7 border-border h-[240px]">
          {brands.slice(3).map((brand, i) => (
            <div
              key={brand.name + i}
              className={`border-r border-b border-border flex items-center justify-center py-14 px-4 ${
                i === 6 ? "bg-foreground" : ""
              }`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={80}
                height={36}
                className={`object-contain ${i === 6 ? "invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}