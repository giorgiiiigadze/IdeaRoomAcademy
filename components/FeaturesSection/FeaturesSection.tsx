"use client"

import Image from "next/image"
import { useRef } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { useClipReveal } from "@/hooks/useClipReveal"
import Cursor from "../ui/Cursor"

const features = [
  {
    fig: "Work",
    title: "Built for Results",
    description: "Every project is shaped by strategy and creativity working together to deliver outcomes that actually move the needle.",
    image: "/test-image.png",
  },
  {
    fig: "Services",
    title: "Powered by Creativity",
    description: "From motion design to branding, we craft experiences that stop the scroll and start the conversation.",
    image: "/test-image.png",
  },
  {
    fig: "Projects",
    title: "Designed to Grow",
    description: "Scalable services built for startups and enterprises alike. We grow with you, not just for you.",
    image: "/test-image.png",
  },
]

export default function FeaturesSection() {
  const [ref1, ref2] = useScrollReveal(2)
  const gridRef = useRef<HTMLDivElement>(null)
  const cardRefs = useClipReveal(3, 0.075)

  return (
    <section className="w-full max-w-[1389px] py-16 px-6">

      <div className="max-w-[1389px] mx-auto mb-12 md:mb-20 flex items-center justify-center md:justify-start">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight max-w-4xl text-center md:text-left">
          <div className="overflow-hidden">
            <span ref={ref1} className="block">
              The academy built for doers.
            </span>
          </div>
          <div className="overflow-hidden">
            <span ref={ref2} className="block text-neutral-500">
              Real skills, real mentors, real results.
            </span>
          </div>
        </h2>
      </div>

      <div ref={gridRef} className="mx-auto w-full grid grid-cols-1 md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-border place-items-center md:place-items-start">
        <Cursor containerRef={gridRef} />

        {features.map((feature, i) => (
          <div key={feature.fig} ref={cardRefs[i]} className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 gap-6 md:gap-8">

            <span className="text-xs tracking-[0.3em] text-neutral-600 uppercase">
              {feature.fig}
            </span>

            <div className="flex-1 flex w-full items-center justify-center py-6 md:py-10 min-h-[200px] md:min-h-[280px]">
              <Image
                src={feature.image}
                alt={feature.title}
                width={200}
                height={200}
                className="object-contain opacity-80 md:w-[250px] md:h-[250px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-bold text-base">{feature.title}</span>
              <span className="text-neutral-400 text-sm leading-relaxed">{feature.description}</span>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}