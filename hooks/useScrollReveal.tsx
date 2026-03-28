"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(count: number) {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    refs.current.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 70%",
          scrub: true,
        },
        y: "100%",
      })
    })
  }, [count])

  return Array.from({ length: count }, (_, i) => (el: HTMLElement | null) => {
    refs.current[i] = el
  })
}