export type Work = {
  image: string
  title: string
  category: string
  href: string
}

export const works: Work[] = [
  { image: "/work-images/test-work-image.png", title: "Meridian", category: "Logo Design", href: "/works/meridian" },
  { image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800", title: "NovaPulse", category: "Brand Film", href: "/works/novapulse" },
  { image: "/work-images/test-image.png", title: "Fable Studio", category: "Brand Identity", href: "/works/fable-studio" },
  { image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800", title: "Kova Apparel", category: "Social Media", href: "/works/kova-apparel" },
  { image: "/work-images/test-work-image.png", title: "Solaris Tech", category: "Rebranding", href: "/works/solaris-tech" },
  { image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800", title: "Orion Financial", category: "Brand System", href: "/works/orion-financial" },
  { image: "/work-images/test-image.png", title: "LumenX", category: "Video Campaign", href: "/works/lumenx" },
  { image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800", title: "Bloom Skincare", category: "Social Growth", href: "/works/bloom-skincare" },
  { image: "/work-images/test-work-image.png", title: "Plex AI", category: "Motion Design", href: "/works/plex-ai" },
  { image: "/work-images/test-image.png", title: "Arcadia Summit", category: "Event Highlight", href: "/works/arcadia-summit" },
]

export function getWorks(count?: number): Work[] {
  return count ? works.slice(0, count) : works
}