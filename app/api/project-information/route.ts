import { NextRequest, NextResponse } from "next/server"

type Project = {
  id: number
  title: string
  description: string
  thumbnail: string
  video: string
  slug: string
}

type ProjectsData = {
  [key: string]: Project[]
}

const projectsData: ProjectsData = {
  "video-editing": [
    {
      id: 1,
      title: "Cinematic Brand Film – NovaPulse",
      description:
        "NovaPulse needed a high-energy brand film to launch their new product line. We handled the full post-production pipeline — color grading, motion graphics, sound design, and final delivery across multiple formats. The result was a 90-second cinematic piece that drove a 3x increase in social engagement on launch day.",
      thumbnail: "/images/thumbnails/video-editing-1.jpg",
      video: "/videos/video-editing-1.mp4",
      slug: "cinematic-brand-film-novapulse",
    },
    {
      id: 2,
      title: "Documentary Series Edit – Vivenne Foundation",
      description:
        "The Vivenne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website. We worked closely with The Vivenne Foundation to understand their four memorably lived pillars of change: halting climate change, stopping war, defending human rights, and protecting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/video-editing-2.jpg",
      video: "/videos/video-editing-2.mp4",
      slug: "documentary-series-vivenne-foundation",
    },
    {
      id: 3,
      title: "Social Media Video Campaign – LumenX",
      description:
        "LumenX approached us to produce a series of short-form videos optimized for Instagram Reels and TikTok. We edited 24 individual clips from raw footage, added dynamic captions, transitions, and branded lower thirds. The campaign achieved over 2 million organic views within the first two weeks.",
      thumbnail: "/images/thumbnails/video-editing-3.jpg",
      video: "/videos/video-editing-3.mp4",
      slug: "social-media-campaign-lumenx",
    },
    {
      id: 4,
      title: "Event Highlight Reel – Arcadia Summit",
      description:
        "Arcadia Summit is an annual tech conference bringing together 5,000+ industry leaders. They needed a same-day highlight reel edited and published before the closing keynote. Our team captured, edited, and delivered a polished 3-minute recap within 4 hours of shooting, showcasing the energy and key moments of the event.",
      thumbnail: "/images/thumbnails/video-editing-4.jpg",
      video: "/videos/video-editing-4.mp4",
      slug: "event-highlight-reel-arcadia-summit",
    },
  ],

  "branding": [
    {
      id: 1,
      title: "K2 Company Branding",
      description:
        "The Vivenne Foundation is the new non-profit organization founded by the fashion icon, aiming to fight against injustices and climate change. They came to us looking for a memorable brand and beautiful website. We worked closely with The Vivenne Foundation to understand their four memorably lived pillars of change: halting climate change, stopping war, defending human rights, and protecting capitalism. After this research, we created a cohesive brand identity that effectively communicates these important missions and values.",
      thumbnail: "/images/thumbnails/branding-1.jpg",
      video: "/videos/branding-1.mp4",
      slug: "k2-company-branding",
    },
    {
      id: 2,
      title: "Rebranding – Solaris Tech",
      description:
        "Solaris Tech had grown beyond their original identity and needed a brand refresh to reflect their evolution into enterprise software. We conducted stakeholder interviews, competitive audits, and brand workshops. The outcome was a modernized logo system, a new color palette, and a full brand guidelines document delivered to their internal team.",
      thumbnail: "/images/thumbnails/branding-2.jpg",
      video: "/videos/branding-2.mp4",
      slug: "rebranding-solaris-tech",
    },
    {
      id: 3,
      title: "Startup Identity – Fable Studio",
      description:
        "Fable Studio is a creative agency launching its first physical location. Starting from zero, we built their entire brand identity from scratch — naming exploration, logo design, typography system, brand voice, and packaging mockups. The brand launched to strong reception, earning features in two design publications within the first month.",
      thumbnail: "/images/thumbnails/branding-3.jpg",
      video: "/videos/branding-3.mp4",
      slug: "startup-identity-fable-studio",
    },
    {
      id: 4,
      title: "Brand System – Orion Financial",
      description:
        "Orion Financial required a trustworthy, modern identity to differentiate in a saturated market. We developed a comprehensive brand system including primary and secondary logos, iconography, stationery, and digital templates. The new identity tested significantly higher in consumer trust surveys compared to their previous branding.",
      thumbnail: "/images/thumbnails/branding-4.jpg",
      video: "/videos/branding-4.mp4",
      slug: "brand-system-orion-financial",
    },
  ],

  "social-media": [
    {
      id: 1,
      title: "Social Growth Campaign – Bloom Skincare",
      description:
        "Bloom Skincare wanted to grow their Instagram following from 10k to 100k in six months. We developed a full content calendar, designed branded post templates, wrote copy, and managed community engagement. By month four, they had surpassed the 100k milestone, with a 6.2% average engagement rate across all posts.",
      thumbnail: "/images/thumbnails/social-media-1.jpg",
      video: "/videos/social-media-1.mp4",
      slug: "social-growth-bloom-skincare",
    },
    {
      id: 2,
      title: "LinkedIn Strategy – Vertex Consulting",
      description:
        "Vertex Consulting needed to establish thought leadership on LinkedIn to generate inbound B2B leads. We crafted a content strategy built around long-form posts, carousel documents, and founder storytelling. Over 90 days, their page grew by 4,800 followers and generated 14 qualified sales calls directly from LinkedIn.",
      thumbnail: "/images/thumbnails/social-media-2.jpg",
      video: "/videos/social-media-2.mp4",
      slug: "linkedin-strategy-vertex-consulting",
    },
    {
      id: 3,
      title: "TikTok Launch – Kova Apparel",
      description:
        "Kova Apparel was entering the TikTok space with zero presence. We planned and produced 30 short-form videos in a single shoot day, developed a posting schedule, and coached their internal team on trend-jacking and community interaction. Their first video hit 400k views organically within 48 hours of posting.",
      thumbnail: "/images/thumbnails/social-media-3.jpg",
      video: "/videos/social-media-3.mp4",
      slug: "tiktok-launch-kova-apparel",
    },
    {
      id: 4,
      title: "Paid Social Campaign – Nexum SaaS",
      description:
        "Nexum SaaS needed to reduce their customer acquisition cost while scaling paid social spend. We restructured their Meta ad account, rebuilt their creative testing framework, and launched 40+ ad variants across three audiences. CAC dropped by 38% while monthly signups increased by 2.1x over a 60-day period.",
      thumbnail: "/images/thumbnails/social-media-4.jpg",
      video: "/videos/social-media-4.mp4",
      slug: "paid-social-nexum-saas",
    },
  ],

  "web-development": [
    {
      id: 1,
      title: "E-Commerce Platform – Halo Goods",
      description:
        "Halo Goods needed a fast, scalable e-commerce experience to support their product expansion. We built a custom Next.js storefront integrated with Shopify's Storefront API, featuring real-time inventory, dynamic product filtering, and a streamlined checkout flow. Page load times improved by 60% compared to their previous theme-based setup.",
      thumbnail: "/images/thumbnails/web-development-1.jpg",
      video: "/videos/web-development-1.mp4",
      slug: "ecommerce-platform-halo-goods",
    },
    {
      id: 2,
      title: "SaaS Dashboard – Trackr",
      description:
        "Trackr is a project management tool targeting remote-first teams. We developed their core dashboard from the ground up using React, Supabase, and Tailwind CSS — including real-time collaboration features, role-based access control, and a custom analytics panel. The product launched to 500 beta users with zero critical bugs in the first week.",
      thumbnail: "/images/thumbnails/web-development-2.jpg",
      video: "/videos/web-development-2.mp4",
      slug: "saas-dashboard-trackr",
    },
    {
      id: 3,
      title: "Corporate Website Redesign – Meridian Group",
      description:
        "Meridian Group's existing website was slow, outdated, and failing to convert visitors. We rebuilt the site in Next.js with a focus on performance, SEO, and conversion optimization. Post-launch, organic traffic increased by 74% in 90 days and their contact form submission rate doubled.",
      thumbnail: "/images/thumbnails/web-development-3.jpg",
      video: "/videos/web-development-3.mp4",
      slug: "corporate-redesign-meridian-group",
    },
    {
      id: 4,
      title: "Booking System – Aura Wellness",
      description:
        "Aura Wellness needed a custom booking and membership management system to replace their manual spreadsheet workflow. We built a full-stack solution with Next.js and PostgreSQL, supporting online bookings, automated reminders, membership tiers, and an admin dashboard. Staff time spent on scheduling dropped by over 80%.",
      thumbnail: "/images/thumbnails/web-development-4.jpg",
      video: "/videos/web-development-4.mp4",
      slug: "booking-system-aura-wellness",
    },
  ],

  "motion-design": [
    {
      id: 1,
      title: "Animated Explainer – Plex AI",
      description:
        "Plex AI needed a 2-minute animated explainer video to onboard new users and reduce support tickets. We scripted, storyboarded, and animated the full piece using After Effects and Cinema 4D. After embedding the video on their onboarding page, first-week churn dropped by 22% and support ticket volume fell by 30%.",
      thumbnail: "/images/thumbnails/motion-design-1.jpg",
      video: "/videos/motion-design-1.mp4",
      slug: "animated-explainer-plex-ai",
    },
    {
      id: 2,
      title: "Brand Motion System – Crest Media",
      description:
        "Crest Media wanted cohesive motion guidelines to unify how their brand moves across all touchpoints — ads, presentations, and social content. We developed a full motion design system including logo animations, transition templates, kinetic typography rules, and an After Effects component library their in-house team could use.",
      thumbnail: "/images/thumbnails/motion-design-2.jpg",
      video: "/videos/motion-design-2.mp4",
      slug: "brand-motion-system-crest-media",
    },
    {
      id: 3,
      title: "Product Demo Animation – Synk App",
      description:
        "Synk App needed an eye-catching product demo to use on their landing page and at trade shows. We created a 60-second 3D animation showcasing the app's core features in an engaging visual narrative. The demo contributed directly to a 40% increase in landing page conversions in the month following launch.",
      thumbnail: "/images/thumbnails/motion-design-3.jpg",
      video: "/videos/motion-design-3.mp4",
      slug: "product-demo-animation-synk-app",
    },
    {
      id: 4,
      title: "Event Opener – Luminary Conference",
      description:
        "Luminary Conference needed a cinematic motion opener to kick off their flagship annual event. We produced a 90-second animated opener combining 3D environments, particle effects, and dynamic typography timed to a custom soundtrack. The piece received a standing ovation from the 3,000-person audience at the live event.",
      thumbnail: "/images/thumbnails/motion-design-4.jpg",
      video: "/videos/motion-design-4.mp4",
      slug: "event-opener-luminary-conference",
    },
  ],
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  if (category) {
    return NextResponse.json(projectsData[category] ?? [])
  }

  return NextResponse.json(projectsData)
}