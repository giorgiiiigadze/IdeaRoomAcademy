import ServiceItem from "./serviceItem"

const servicesLinks = [
  {
    label: "Video Editing",
    href: "/project/video-editing",
    description: "Cinematic cuts and seamless edits that bring your story to life.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800",
  },
  {
    label: "Branding",
    href: "/project/branding",
    description: "Bold identities that make your brand impossible to forget.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
  },
  {
    label: "Social Media",
    href: "/project/social-media",
    description: "Scroll-stopping content that grows your audience and drives engagement.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
  },
  {
    label: "Web Development",
    href: "/project/web-development",
    description: "Fast, scalable websites built with clean code and great UX.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800",
  },
  {
    label: "UI/UX Design",
    href: "#",
    description: "Intuitive interfaces designed to delight users at every click.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  },
  {
    label: "Motion Design",
    href: "/project/motion-design",
    description: "Animations and visuals that add energy to your brand.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800",
  },
]

export default function ServicesDisplay() {
    return (
        <section className="w-full max-w-[1389px] py-16 px-6">

            <div className="mb-4">
                <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight max-w-4xl">
                    <div className="overflow-hidden">
                        <span className="block text-brand-purple-6">
                            Services provided by us
                        </span>
                    </div>
                </h2>
            </div>

            <div className="w-full grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {servicesLinks.map((service) => (
                    <ServiceItem
                        key={service.label}
                        label={service.label}
                        description={service.description}
                        image={service.image}
                        href={service.href}
                    />
                ))}
            </div>

        </section>
    )
}