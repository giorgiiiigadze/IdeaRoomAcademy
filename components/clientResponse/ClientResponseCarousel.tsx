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

const SLIDES_PER_PAGE = 3

export default function ClientResponseCarousel({
  testimonials,
}: {
  testimonials: Testimonial[]
}) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    const onReInit = () => setCurrent(api.selectedScrollSnap())

    api.on("select", onSelect)
    api.on("reInit", onReInit)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onReInit)
    }
  }, [api])

  const activeTestimonials = testimonials.filter((t) => t.is_active !== false)
  const count = Math.ceil(activeTestimonials.length / SLIDES_PER_PAGE)

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, slidesToScroll: SLIDES_PER_PAGE }}
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
              onClick={() => api?.scrollTo(index * SLIDES_PER_PAGE)}
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