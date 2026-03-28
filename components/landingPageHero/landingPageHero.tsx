"use client"

import { useTextReveal } from "@/hooks/useTextReveal"

export default function HeroHeading() {
  const [ref1, ref2] = useTextReveal(2, 0.2)

  return (
    <h2 className="text-[72px] h-screen w-full flex flex-col bg-amber-500 items-center justify-center font-bold text-center leading-tight">
      <div className="overflow-hidden">
        <span ref={ref1} className="block">
          Where Great Ideas
        </span>
      </div>
      <div className="overflow-hidden">
        <span ref={ref2} className="block">
          Come to{" "}
          <span className="text-brand-orange-5">Life.</span>
        </span>
      </div>
    </h2>
  )
}