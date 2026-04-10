"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    if (!api) return

    const init = () => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("init", init)
    api.on("reInit", init)
    api.on("select", onSelect)

    return () => {
      api.off("init", init)
      api.off("reInit", init)
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, slidesToScroll: 3 }}
        className="w-full px-12"
      >
      <CarouselContent className="-ml-4">
        {testimonials
          .filter((t) => t.is_active !== false)
          .map((testimonial) => (
            <CarouselItem key={testimonial.id.toString()} className="pl-4 md:basis-1/3">
              <ClientResponseCard data={testimonial} />
            </CarouselItem>
          ))}
      </CarouselContent>

        <CarouselPrevious/>
        <CarouselNext/>
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