"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { usePageTransition } from "@/hooks/usePageTransition"

interface ServiceItemProps {
    label: string
    description: string
    href: string
}

export default function ServiceItem({ label, description, href }: ServiceItemProps) {
    const { navigate } = usePageTransition()

    const overlayRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    const animateIn = () => {
        gsap.killTweensOf([overlayRef.current, textRef.current])
        gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" })
        gsap.fromTo(textRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        )
    }

    const animateOut = () => {
        gsap.killTweensOf([overlayRef.current, textRef.current])
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" })
        gsap.to(textRef.current, { opacity: 0, y: 10, duration: 0.2, ease: "power2.in" })
    }

    return (
        <div className="flex-1 h-auto flex items-start flex-col" onClick={() => navigate(href)}>
            <main
                className="relative w-full h-[260px] sm:h-[340px] border rounded-xl cursor-pointer overflow-hidden"
                onMouseEnter={animateIn}
                onMouseLeave={animateOut}
                onTouchStart={animateIn}
                onTouchEnd={animateOut}
                style={{
                    backgroundImage: "url('/test-image.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 z-10" />

                <div ref={textRef} className="absolute bottom-0 left-0 p-4 sm:p-5 z-20 flex flex-col gap-1 opacity-0">
                    <span className="text-white text-lg sm:text-xl font-bold">{label}</span>
                    <span className="text-white/70 text-xs sm:text-sm">{description}</span>
                </div>
            </main>
        </div>
    )
}