"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function useTextReveal(count: number, delay: number = 0.2) {
  const refs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
    })

    refs.current.forEach((el, i) => {
      tl.from(
        el,
        {
          yPercent: 100,
          duration: 1,
          delay: i === 0 ? delay : 0,
        },
        i === 0 ? undefined : "-=90%"
      )
    })
  }, [count, delay])

  return Array.from({ length: count }, (_, i) => (el: HTMLElement | null) => {
    refs.current[i] = el
  })
}