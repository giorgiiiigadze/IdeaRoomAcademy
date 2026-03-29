export type Work = {
  image: string
  title: string
  category: string
  href: string
}

export const works: Work[] = [
  { image: "/work-images/test-work-image.png", title: "Meridian", category: "Logo Design", href: "/works/meridian" },
  { image: "/work-images/test-work-image.png", title: "NovaPulse", category: "Brand Film", href: "/works/novapulse" },
  { image: "/work-images/test-image.png", title: "Fable Studio", category: "Brand Identity", href: "/works/fable-studio" },
  { image: "/work-images/test-image.png", title: "Kova Apparel", category: "Social Media", href: "/works/kova-apparel" },
  { image: "/work-images/test-work-image.png", title: "Solaris Tech", category: "Rebranding", href: "/works/solaris-tech" },
  { image: "/work-images/test-work-image.png", title: "Orion Financial", category: "Brand System", href: "/works/orion-financial" },
  { image: "/work-images/test-image.png", title: "LumenX", category: "Video Campaign", href: "/works/lumenx" },
  { image: "/work-images/test-work-image.png", title: "Bloom Skincare", category: "Social Growth", href: "/works/bloom-skincare" },
  { image: "/work-images/test-work-image.png", title: "Plex AI", category: "Motion Design", href: "/works/plex-ai" },
  { image: "/work-images/test-image.png", title: "Arcadia Summit", category: "Event Highlight", href: "/works/arcadia-summit" },
]

export function getWorks(count?: number): Work[] {
  return count ? works.slice(0, count) : works
}