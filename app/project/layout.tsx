"use client"

import HeroSection from "@/components/projects-layout/Hero"
import { usePathname } from "next/navigation"

const heroConfig = {
  "video-editing": {
    title: "Video Editing",
    description: "Your description here",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/video-editing",
    image: "/video-editing.jpg",
  },
  "branding": {
    title: "Branding",
    description: "Your description here",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/branding",
    image: "/branding.jpg",
  },
  "motion-design": {
    title: "Motin Design",
    description: `
      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful`,

    buttonText: "Read the Case Study",
    buttonUrl: "/project/motion-design",
    image: "/motion-design.jpg",
  },
  "social-media": {
    title: "Social Media",
    description: "Your description here",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/social-media",
    image: "/social-media.jpg",
  },
  "web-development": {
    title: "Web Development",
    description: "Your description here",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/web-development",
    image: "/web-development.jpg",
  },
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const slug = pathname.split("/").filter(Boolean).pop() ?? ""
  const hero = heroConfig[slug as keyof typeof heroConfig]

  return (
    <div>
      {hero && <HeroSection {...hero} />}
      {children}
    </div>
  )
}