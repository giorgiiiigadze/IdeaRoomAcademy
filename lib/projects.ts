export type Project = {
  id: number
  title: string
  description: string
  thumbnail: string
  video: string
  slug: string
}

const projectsData: Record<string, Project[]> = {
  "video-editing": [
    {
      id: 1,
      title: "Comercial Project",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/video-editing-1.jpg",
      video: "/videos/test-video.mp4",
      slug: "cinematic-brand-film-novapulse",
    },
    {
      id: 2,
      title: "Instagram, Facebook Tiktok Reels",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values..",
      thumbnail: "/images/thumbnails/video-editing-2.jpg",
      video: "/videos/test-video.mp4",
      slug: "documentary-series-vivenne-foundation",
    },
    {
      id: 3,
      title: "Youtube Project",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values..",
      thumbnail: "/images/thumbnails/video-editing-3.jpg",
      video: "/videos/test-video.mp4",
      slug: "social-media-campaign-lumenx",
    },
    {
      id: 4,
      title: "Event Highlight Reel – Arcadia Summit",
      description: "Our team captured, edited, and delivered a polished 3-minute recap within 4 hours of shooting, showcasing the energy and key moments of the event.",
      thumbnail: "/images/thumbnails/video-editing-4.jpg",
      video: "/videos/test-video.mp4",
      slug: "event-highlight-reel-arcadia-summit",
    },
  ],
  "branding": [
    {
      id: 1,
      title: "K2 Company Branding",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/branding-1.jpg",
      video: "/videos/test-video.mp4",
      slug: "k2-company-branding",
    },
    {
      id: 2,
      title: "Rebranding – Solaris Tech",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/branding-2.jpg",
      video: "/videos/test-video.mp4",
      slug: "rebranding-solaris-tech",
    },
    {
      id: 3,
      title: "Startup Identity – Fable Studio",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/branding-3.jpg",
      video: "/videos/test-video.mp4",
      slug: "startup-identity-fable-studio",
    },
    {
      id: 4,
      title: "Brand System – Orion Financial",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/branding-4.jpg",
      video: "/videos/test-video.mp4",
      slug: "brand-system-orion-financial",
    },
  ],
  "social-media": [
    {
      id: 1,
      title: "Social Growth Campaign – Bloom Skincare",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/social-media-1.jpg",
      video: "/videos/social-media-1.mp4",
      slug: "social-growth-bloom-skincare",
    },
    {
      id: 2,
      title: "LinkedIn Strategy – Vertex Consulting",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/social-media-2.jpg",
      video: "/videos/social-media-2.mp4",
      slug: "linkedin-strategy-vertex-consulting",
    },
    {
      id: 3,
      title: "TikTok Launch – Kova Apparel",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/social-media-3.jpg",
      video: "/videos/social-media-3.mp4",
      slug: "tiktok-launch-kova-apparel",
    },
    {
      id: 4,
      title: "Paid Social Campaign – Nexum SaaS",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/social-media-4.jpg",
      video: "/videos/social-media-4.mp4",
      slug: "paid-social-nexum-saas",
    },
  ],
  "web-development": [
    {
      id: 1,
      title: "E-Commerce Platform – Halo Goods",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/web-development-1.jpg",
      video: "/videos/web-development-1.mp4",
      slug: "ecommerce-platform-halo-goods",
    },
    {
      id: 2,
      title: "SaaS Dashboard – Trackr",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/web-development-2.jpg",
      video: "/videos/web-development-2.mp4",
      slug: "saas-dashboard-trackr",
    },
    {
      id: 3,
      title: "Corporate Website Redesign – Meridian Group",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/web-development-3.jpg",
      video: "/videos/web-development-3.mp4",
      slug: "corporate-redesign-meridian-group",
    },
    {
      id: 4,
      title: "Booking System – Aura Wellness",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/web-development-4.jpg",
      video: "/videos/web-development-4.mp4",
      slug: "booking-system-aura-wellness",
    },
  ],
  "motion-design": [
    {
      id: 1,
      title: "Animated Explainer – Plex AI",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/motion-design-1.jpg",
      video: "/videos/motion-design-1.mp4",
      slug: "animated-explainer-plex-ai",
    },
    {
      id: 2,
      title: "Brand Motion System – Crest Media",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/motion-design-2.jpg",
      video: "/videos/motion-design-2.mp4",
      slug: "brand-motion-system-crest-media",
    },
    {
      id: 3,
      title: "Product Demo Animation – Synk App",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/motion-design-3.jpg",
      video: "/videos/motion-design-3.mp4",
      slug: "product-demo-animation-synk-app",
    },
    {
      id: 4,
      title: "Event Opener – Luminary Conference",
      description: "The Vivienne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website.We worked closely with The Vivienne Foundation to understand their four inextricably linked pillars of change: halting climate change, stopping war, defending human rights, and protesting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/motion-design-4.jpg",
      video: "/videos/motion-design-4.mp4",
      slug: "event-opener-luminary-conference",
    },
  ],
}

export async function getProjectInformation(category: string): Promise<Project[]> {
  return projectsData[category] ?? []
}