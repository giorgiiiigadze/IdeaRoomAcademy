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
      title: "Cinematic Brand Film – NovaPulse",
      description: "NovaPulse needed a high-energy brand film to launch their new product line. We handled the full post-production pipeline — color grading, motion graphics, sound design, and final delivery across multiple formats.",
      thumbnail: "/images/thumbnails/video-editing-1.jpg",
      video: "/videos/video-editing-1.mp4",
      slug: "cinematic-brand-film-novapulse",
    },
    {
      id: 2,
      title: "Documentary Series Edit – Vivenne Foundation",
      description: "The Vivenne Foundation came to us looking for a memorable brand and beautiful website. We created a cohesive brand identity that effectively communicates their important missions and values.",
      thumbnail: "/images/thumbnails/video-editing-2.jpg",
      video: "/videos/video-editing-2.mp4",
      slug: "documentary-series-vivenne-foundation",
    },
    {
      id: 3,
      title: "Social Media Video Campaign – LumenX",
      description: "LumenX approached us to produce a series of short-form videos optimized for Instagram Reels and TikTok. The campaign achieved over 2 million organic views within the first two weeks.",
      thumbnail: "/images/thumbnails/video-editing-3.jpg",
      video: "/videos/video-editing-3.mp4",
      slug: "social-media-campaign-lumenx",
    },
    {
      id: 4,
      title: "Event Highlight Reel – Arcadia Summit",
      description: "Our team captured, edited, and delivered a polished 3-minute recap within 4 hours of shooting, showcasing the energy and key moments of the event.",
      thumbnail: "/images/thumbnails/video-editing-4.jpg",
      video: "/videos/video-editing-4.mp4",
      slug: "event-highlight-reel-arcadia-summit",
    },
  ],
  "branding": [
    {
      id: 1,
      title: "K2 Company Branding",
      description: "We created a cohesive brand identity that effectively communicates their missions and values.",
      thumbnail: "/images/thumbnails/branding-1.jpg",
      video: "/videos/branding-1.mp4",
      slug: "k2-company-branding",
    },
    {
      id: 2,
      title: "Rebranding – Solaris Tech",
      description: "The outcome was a modernized logo system, a new color palette, and a full brand guidelines document delivered to their internal team.",
      thumbnail: "/images/thumbnails/branding-2.jpg",
      video: "/videos/branding-2.mp4",
      slug: "rebranding-solaris-tech",
    },
    {
      id: 3,
      title: "Startup Identity – Fable Studio",
      description: "Starting from zero, we built their entire brand identity from scratch — naming, logo, typography, brand voice, and packaging mockups.",
      thumbnail: "/images/thumbnails/branding-3.jpg",
      video: "/videos/branding-3.mp4",
      slug: "startup-identity-fable-studio",
    },
    {
      id: 4,
      title: "Brand System – Orion Financial",
      description: "We developed a comprehensive brand system including primary and secondary logos, iconography, stationery, and digital templates.",
      thumbnail: "/images/thumbnails/branding-4.jpg",
      video: "/videos/branding-4.mp4",
      slug: "brand-system-orion-financial",
    },
  ],
  "social-media": [
    {
      id: 1,
      title: "Social Growth Campaign – Bloom Skincare",
      description: "By month four, they had surpassed the 100k milestone, with a 6.2% average engagement rate across all posts.",
      thumbnail: "/images/thumbnails/social-media-1.jpg",
      video: "/videos/social-media-1.mp4",
      slug: "social-growth-bloom-skincare",
    },
    {
      id: 2,
      title: "LinkedIn Strategy – Vertex Consulting",
      description: "Over 90 days, their page grew by 4,800 followers and generated 14 qualified sales calls directly from LinkedIn.",
      thumbnail: "/images/thumbnails/social-media-2.jpg",
      video: "/videos/social-media-2.mp4",
      slug: "linkedin-strategy-vertex-consulting",
    },
    {
      id: 3,
      title: "TikTok Launch – Kova Apparel",
      description: "Their first video hit 400k views organically within 48 hours of posting.",
      thumbnail: "/images/thumbnails/social-media-3.jpg",
      video: "/videos/social-media-3.mp4",
      slug: "tiktok-launch-kova-apparel",
    },
    {
      id: 4,
      title: "Paid Social Campaign – Nexum SaaS",
      description: "CAC dropped by 38% while monthly signups increased by 2.1x over a 60-day period.",
      thumbnail: "/images/thumbnails/social-media-4.jpg",
      video: "/videos/social-media-4.mp4",
      slug: "paid-social-nexum-saas",
    },
  ],
  "web-development": [
    {
      id: 1,
      title: "E-Commerce Platform – Halo Goods",
      description: "Page load times improved by 60% compared to their previous theme-based setup.",
      thumbnail: "/images/thumbnails/web-development-1.jpg",
      video: "/videos/web-development-1.mp4",
      slug: "ecommerce-platform-halo-goods",
    },
    {
      id: 2,
      title: "SaaS Dashboard – Trackr",
      description: "The product launched to 500 beta users with zero critical bugs in the first week.",
      thumbnail: "/images/thumbnails/web-development-2.jpg",
      video: "/videos/web-development-2.mp4",
      slug: "saas-dashboard-trackr",
    },
    {
      id: 3,
      title: "Corporate Website Redesign – Meridian Group",
      description: "Organic traffic increased by 74% in 90 days and their contact form submission rate doubled.",
      thumbnail: "/images/thumbnails/web-development-3.jpg",
      video: "/videos/web-development-3.mp4",
      slug: "corporate-redesign-meridian-group",
    },
    {
      id: 4,
      title: "Booking System – Aura Wellness",
      description: "Staff time spent on scheduling dropped by over 80%.",
      thumbnail: "/images/thumbnails/web-development-4.jpg",
      video: "/videos/web-development-4.mp4",
      slug: "booking-system-aura-wellness",
    },
  ],
  "motion-design": [
    {
      id: 1,
      title: "Animated Explainer – Plex AI",
      description: "First-week churn dropped by 22% and support ticket volume fell by 30% after embedding the explainer video.",
      thumbnail: "/images/thumbnails/motion-design-1.jpg",
      video: "/videos/motion-design-1.mp4",
      slug: "animated-explainer-plex-ai",
    },
    {
      id: 2,
      title: "Brand Motion System – Crest Media",
      description: "We developed a full motion design system including logo animations, transition templates, and an After Effects component library.",
      thumbnail: "/images/thumbnails/motion-design-2.jpg",
      video: "/videos/motion-design-2.mp4",
      slug: "brand-motion-system-crest-media",
    },
    {
      id: 3,
      title: "Product Demo Animation – Synk App",
      description: "The demo contributed directly to a 40% increase in landing page conversions in the month following launch.",
      thumbnail: "/images/thumbnails/motion-design-3.jpg",
      video: "/videos/motion-design-3.mp4",
      slug: "product-demo-animation-synk-app",
    },
    {
      id: 4,
      title: "Event Opener – Luminary Conference",
      description: "The piece received a standing ovation from the 3,000-person audience at the live event.",
      thumbnail: "/images/thumbnails/motion-design-4.jpg",
      video: "/videos/motion-design-4.mp4",
      slug: "event-opener-luminary-conference",
    },
  ],
}

export async function getProjectInformation(category: string): Promise<Project[]> {
  return projectsData[category] ?? []
}