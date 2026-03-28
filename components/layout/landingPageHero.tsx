"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowBigRight } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function HeroSection() {
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLSpanElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.fromTo(
      line1Ref.current,
      { opacity: 0, filter: "blur(12px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.9 }
    )
    .fromTo(
      line2Ref.current,
      { opacity: 0, filter: "blur(12px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.9 },
      "-=0.6"
    )
    .fromTo(
      descRef.current,
      { opacity: 0, filter: "blur(8px)", y: 10 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.7 },
      "-=0.5"
    )
    .fromTo(
      btnRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=0.4"
    )
    .fromTo(
      videoRef.current,
      { opacity: 0, filter: "blur(16px)", y: 30 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1 },
      "-=0.3"
    )
  }, [])

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center gap-4 overflow-hidden"
      style={{ background: "linear-gradient(to right, #7B2FBE, #F5A623)" }}
    >
      <div className="w-full max-w-[1389px] flex flex-col font-light gap-2 px-6 mt-10">
        <h1 className="text-[4rem] flex flex-col w-full text-white">
          <span ref={line1Ref} style={{ opacity: 0 }} className="font-medium">The idearoom academy</span>
          <span ref={line2Ref} style={{ opacity: 0 }} className="font-medium">Start Growing Today</span>
        </h1>

        <span ref={descRef} className="text-white/90" style={{ opacity: 0 }}>
          Some description of idearoom academy to attract the users.
        </span>

        <div ref={btnRef} style={{ opacity: 0 }}>
          <Button asChild className="group w-[240px] h-[48px] rounded-full cursor-pointer border-0 bg-brand-orange-5 text-[#7B2FBE]">
            <Link href={"/"}>
              {"Register Now"}
              <ArrowBigRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="max-h-[460px] w-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl object-cover h-full mt-4"
            style={{ opacity: 0 }}
          >
            <source src="/landing-page-files/dog-video.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  )
}