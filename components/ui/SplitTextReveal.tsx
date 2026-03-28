"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SplitTextRevealProps {
  text: string
  className?: string
}

export default function SplitTextReveal({ text, className = "" }: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = containerRef.current?.querySelectorAll(".letter")
      if (!letters) return

      gsap.from(Array.from(letters), {
        y: (i) => (i % 2 === 0 ? -150 : 150),
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.04,
          from: "start",
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reset play reverse",
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [text])

  return (
    <div
      ref={containerRef}
      className={`flex flex-wrap justify-center w-full px-4 ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter inline-block"
          aria-hidden="true"
          style={{ fontSize: "clamp(2.5rem, 10vw, 9rem)" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}