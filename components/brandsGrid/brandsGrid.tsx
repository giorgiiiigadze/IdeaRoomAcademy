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
  const gridRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    const grid = gridRef.current
    const spotlight = spotlightRef.current
    if (!grid || !spotlight) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      gsap.to(spotlight, {
        x,
        y,
        duration: 0.4,
        ease: "power2.out",
      })
      gsap.to(spotlight, { opacity: 1, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      gsap.to(spotlight, { opacity: 0, duration: 0.3 })
    }

    grid.addEventListener("mousemove", handleMouseMove)
    grid.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      grid.removeEventListener("mousemove", handleMouseMove)
      grid.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="w-full max-w-[1389px] flex flex-col items-center py-10">

      <div className="w-full overflow-hidden md:hidden py-6">
        <div ref={trackRef} className="flex gap-12 w-max">
          {duplicated.map((brand, i) => (
            <div key={brand.name + i} className="flex items-center justify-center px-4 shrink-0">
              <Image src={brand.logo} alt={brand.name} width={80} height={36} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div ref={gridRef} className="relative hidden md:flex w-full flex-col overflow-hidden">

        <div
          ref={spotlightRef}
          className="pointer-events-none absolute z-10 opacity-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(245,166,35,0.2) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="w-full grid grid-cols-3 h-[270px]">
          {brands.slice(0, 3).map((brand) => (
            <div
              key={brand.name}
              className="border-r border-b border-border flex items-center justify-center py-20 px-8 transition-colors duration-300"
            >
              {/* oklch(87% 0 0) */}
              <Image src={brand.logo} alt={brand.name} width={130} height={50} className="object-contain" />
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-7 border-border h-[240px]">
          {brands.slice(3).map((brand, i) => (
            <div
              key={brand.name + i}
              className={`border-r border-b border-border flex items-center justify-center py-14 px-4 transition-colors duration-300
              
              `}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={80}
                height={36}
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}