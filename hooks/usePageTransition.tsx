"use client"

import { useRouter } from "next/navigation"
import gsap from "gsap"

export function usePageTransition() {
  const router = useRouter()

  const navigate = (href: string) => {
    const overlay = document.createElement("div")
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: #fff;
      z-index: 9999;
      transform: translateY(100%);
      pointer-events: none;
    `
    document.body.appendChild(overlay)

    gsap.to(overlay, {
      yPercent: -100,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        router.push(href)
        gsap.to(overlay, {
          yPercent: -200,
          duration: 0.6,
          ease: "power3.inOut",
          delay: 0.1,
          onComplete: () => overlay.remove(),
        })
      },
    })
  }

  return { navigate }
}