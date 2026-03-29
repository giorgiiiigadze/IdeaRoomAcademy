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
    const panelRef = useRef<HTMLDivElement>(null)

    const animateIn = () => {
        gsap.killTweensOf(panelRef.current)
        gsap.fromTo(panelRef.current,
            { y: "-100%" },
            { y: "0%", duration: 0.4, ease: "power3.out" }
        )
    }

    const animateOut = () => {
        gsap.killTweensOf(panelRef.current)
        gsap.to(panelRef.current, {
            y: "-100%",
            duration: 0.35,
            ease: "power3.in"
        })
    }

    return (
        <div className="flex-1 h-auto flex items-start flex-col" onClick={() => navigate(href)}>
            <main
                className="relative w-full h-[260px] sm:h-[340px] rounded-xl cursor-pointer overflow-hidden"
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
                <div
                    ref={panelRef}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 sm:p-5 gap-1"
                    style={{
                        transform: "translateY(-100%)",
                        background: "linear-gradient(to bottom, #FFB800 0%, #FFB800 100%)",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <span className="text-white text-7xl sm:text-xl font-bold text-center">{label}</span>
                    <span className="text-white text-xs sm:text-sm text-center">{description}</span>
                </div>
            </main>
        </div>
    )
}