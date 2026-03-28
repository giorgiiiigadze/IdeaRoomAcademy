"use client"

import { ArrowRight } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import { usePageTransition } from "@/hooks/usePageTransition"

interface SeeAllProps {
  href: string
  label?: string
  hint?: string
}

export default function SeeAll({ href, label = "See all", hint }: SeeAllProps) {
  const { navigate } = usePageTransition()
  const underlineRef = useRef<HTMLSpanElement>(null)

  const handleMouseEnter = () => {
    gsap.fromTo(underlineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.3, ease: "power2.out" }
    )
  }

  const handleMouseLeave = () => {
    gsap.to(underlineRef.current, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.3,
      ease: "power2.in"
    })
  }

  return (
    <div className="flex items-center gap-3">
      {hint && (
        <span className="text-muted-foreground text-base">{hint}</span>
      )}

      {hint && <ArrowRight size={16} className="text-muted-foreground" />}

      <button
        onClick={() => navigate(href)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative flex items-center gap-2 text-foreground font-bold text-base cursor-pointer"
      >
        {!hint && <ArrowRight size={16} />}
        {label}
        <span
          ref={underlineRef}
          className="absolute bottom-0 left-0 w-full h-[1.5px] bg-foreground scale-x-0"
        />
      </button>
    </div>
  )
}