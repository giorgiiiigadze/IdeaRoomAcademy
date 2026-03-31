"use client"

import Image from "next/image"
import { usePageTransition } from "@/hooks/usePageTransition"

interface WorkCardProps {
  image: string
  title: string
  category: string
  href?: string
}

export default function WorkCard({ image, title, category, href = "#" }: WorkCardProps) {
  const { navigate } = usePageTransition()

  return (
    <div
      onClick={() => navigate(href)}
      className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6 flex flex-col items-start gap-2">
        <h3 className="text-white text-2xl font-bold leading-tight">{title}</h3>
        <p className="text-white/70 text-sm mb-2">{category}</p>
        <button className="bg-[#FBA834] text-white cursor-pointer text-sm font-semibold px-5 py-3 rounded-lg">
          View Project
        </button>
      </div>
    </div>
  )
}