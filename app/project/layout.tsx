"use client"

import { usePathname } from "next/navigation"
import HeroSection from "@/components/projectLayout/Hero"
import ProjectNavigation from "@/components/projectLayout/ProjectNavigation"

const heroConfig = {
  "video-editing": {
    title: "Video Editing",
    description: `

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful
    
    `,
    buttonText: "Read the Case Study",
    buttonUrl: "/project/video-editing",
    image: "/project-images/video-editing.png",
    badge: "Project"
  },
  "branding": {
    title: "Branding",
    description: `

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful
    
    `,
    buttonText: "Read the Case Study",
    buttonUrl: "/project/branding",
    image: "/project-images/branding.png",
    badge: "Project"
  },
  "motion-design": {
    title: "Motion Design",
    description: `

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful
    
    `,
    buttonText: "Read the Case Study",
    buttonUrl: "/project/motion-design",
    image: "/project-images/motion-design.png",
    badge: "Project"
  },
  "social-media": {
    title: "Social Media",
    description: `

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful
    
    `,
    buttonText: "Read the Case Study",
    buttonUrl: "/project/social-media",
    image: "/project-images/social-media.png",
    badge: "Project"
  },
  "web-development": {
    title: "Web Development",
    description: `

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

      We build meaningful long-term partnerships and deliver
      the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful
    
    `,
    buttonText: "Read the Case Study",
    buttonUrl: "/project/web-development",
    image: "/project-images/web-development.png",
    badge: "Project"
  },
}

function ProjectLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const slug = pathname.split("/").filter(Boolean).pop() ?? ""
  const hero = heroConfig[slug as keyof typeof heroConfig]

  return (
    <div className="flex flex-col items-center justify-between gap-8">
      {hero && <HeroSection {...hero} />}

      <div className="w-full flex flex-col items-center justify-center gap-2 text-center">
        <span
          className="text-sm font-bold uppercase tracking-widest"
          style={{
            backgroundImage: "linear-gradient(to right, #7B2FBE, #F5A623)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Portfolio
        </span>

        <span className="text-[36px] font-bold leading-tight">Recent Project</span>

        <span className="text-[16px] text-muted-foreground text-[#535353]">
          Here&apos;s a selection of our recent projects across the digital landscape.
        </span>
      </div>

      <ProjectNavigation />
      {children}
    </div>
  )
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <ProjectLayoutClient>{children}</ProjectLayoutClient>
}
