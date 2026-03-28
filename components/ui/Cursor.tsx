"use client"

import { useEffect, useState } from "react"

export default function Cursor({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMove = (e: MouseEvent) => {
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      }, 75)
    }

    const onEnter = () => setIsVisible(true)
    const onLeave = () => setIsVisible(false)

    container.addEventListener("mousemove", onMove)
    container.addEventListener("mouseenter", onEnter)
    container.addEventListener("mouseleave", onLeave)

    return () => {
      container.removeEventListener("mousemove", onMove)
      container.removeEventListener("mouseenter", onEnter)
      container.removeEventListener("mouseleave", onLeave)
    }
  }, [containerRef])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 w-3 h-3 bg-[#222] rounded-full flex items-center justify-center"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        opacity: isVisible ? 1 : 0,
        transition: "transform 0.1s, opacity 0.2s",
      }}
    >
    </div>
  )
}