"use client"

import Image from "next/image"
import { usePageTransition } from "@/hooks/usePageTransition"

interface ServiceItemProps {
  label: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ label, description, icon, href }: ServiceItemProps) {
  const { navigate } = usePageTransition()

  return (
    <div className="rounded-2xl p-8 flex flex-col gap-6 bg-white">
      <Image src={icon} alt={label} width={48} height={48} className="object-contain" />

      <div className="flex flex-col gap-3">
        <h4 className="text-[17px] font-bold text-gray-900">{label}</h4>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>

      <button
        onClick={() => navigate(href)}
        className="mt-auto w-fit flex items-center cursor-pointer gap-2 bg-brand-orange-5 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
      >
        Learn More
        <span>→</span>
      </button>
    </div>
  )
}