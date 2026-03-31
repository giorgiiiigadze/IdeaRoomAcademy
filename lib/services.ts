export type Service = {
  title: string
  description: string
  icon?: string
  href: string
  slug: string
  buttonText: string
  buttonUrl: string
  image: string
  badge: string
}

const servicesData: Service[] = [
  {
    title: "Video Editing",
    description: `We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful`,
    
    href: "/project/video-editing",
    slug: "video-editing",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/video-editing",
    image: "/project-images/video-editing.png",
    badge: "Project"
  },
  {
    title: "Branding",
    description: `We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful`,
    href: "/project/branding",
    slug: "branding",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/branding",
    image: "/project-images/branding.png",
    badge: "Project"
  },
  {
    title: "Motion Design",
    description: `We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful`,
    href: "/project/motion-design",
    slug: "motion-design",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/motion-design",
    image: "/project-images/motion-design.png",
    badge: "Project"
  },
  {
    title: "Social Media",
    description: `We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful`,
    href: "/project/social-media",
    slug: "social-media",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/social-media",
    image: "/project-images/social-media.png",
    badge: "Project"
  },
  {
    title: "Web Development",
    description: `We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful

We build meaningful long-term partnerships and deliver
the best experience of digital services across the worlde build meaningful long-term services across the worlde build meaningful`,
    href: "/project/web-development",
    slug: "web-development",
    buttonText: "Read the Case Study",
    buttonUrl: "/project/web-development",
    image: "/project-images/web-development.png",
    badge: "Project"
  },
]

export async function getServices(): Promise<Service[]> {
  return servicesData
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return servicesData.find((s) => s.slug === slug) ?? null
}