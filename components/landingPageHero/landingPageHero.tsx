"use client"

import { useTextReveal } from "@/hooks/useTextReveal"

export default function HeroHeading() {
  const [ref1, ref2] = useTextReveal(2, 0.2)

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center font-bold text-center leading-tight bg-neutral-900">
      <video
        src="/landing-page-files/hero-video-compressed.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10" style={{ fontSize: "calc(1.5rem + 3.5vw)" }}>
        <div className="overflow-hidden">
          <span ref={ref1} className="h1 text-white block font-bold">
            Where Great Ideas
          </span>
        </div>
        <div className="overflow-hidden">
          <span ref={ref2} className="h1 text-white block font-bold">
            Come to{" "}
            <span
              style={{
                background: "linear-gradient(to right, #7B2FBE, #F5A623)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Life.
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}