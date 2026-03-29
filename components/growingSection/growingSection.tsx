"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitTextReveal from "@/components/ui/SplitTextReveal"

gsap.registerPlugin(ScrollTrigger)

export default function GrowingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { backgroundColor: "#1c0a00" },
      {
        backgroundColor: "#6200B3",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="h-screen w-full flex items-center justify-center">
      <div aria-hidden="true" className="w-full overflow-hidden py-6 gap-6 flex items-center flex-col">
        <SplitTextReveal
          text="Start Growing"
          className="text-[144px] text-white font-black uppercase leading-none tracking-tight text-foreground"
        />
        <SplitTextReveal
          text="With Idearoom"
          className="text-[144px] font-black uppercase leading-none tracking-tight text-brand-orange-5"
        />
      </div>
    </section>
  )
}