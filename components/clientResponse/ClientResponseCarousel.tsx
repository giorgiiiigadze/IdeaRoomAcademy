"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import ClientResponseCard from "./clientCard"
import type { Testimonial } from "@/lib/api"

export default function ClientResponseCarousel({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const init = useCallback(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())

    // Initialize synchronously outside the effect body via the event system
    api.on("reInit", init)
    api.on("select", onSelect)

    // Trigger init as a side-effect after subscribing, not inline
    const timer = setTimeout(init, 0)

    return () => {
      clearTimeout(timer)
      api.off("reInit", init)
      api.off("select", onSelect)
    }
  }, [api, init])

  const activeTestimonials = testimonials.filter((t) => t.is_active !== false)

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, slidesToScroll: 3 }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-4">
          {activeTestimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id.toString()}
              className="pl-4 md:basis-1/3"
            >
              <ClientResponseCard data={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {count > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === current
                  ? "bg-brand-purple-6"
                  : "border border-brand-purple-6 bg-transparent"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}