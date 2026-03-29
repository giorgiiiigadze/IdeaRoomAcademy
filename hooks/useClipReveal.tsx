"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useClipReveal(count: number, stagger: number = 0.075) {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      refs.current.forEach((el, i) => {
        gsap.from(el, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.2,
          delay: i * stagger,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      })
    })

    return () => ctx.revert()
  }, [count, stagger])

  return Array.from({ length: count }, (_, i) => (el: HTMLDivElement | null) => {
    refs.current[i] = el
  })
}