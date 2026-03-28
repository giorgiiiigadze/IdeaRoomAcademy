"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScaleReveal() {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        end: "top 70%",
        scrub: 0.25,
      },
      scale: 0.9,
    })
  }, [])

  return ref
}