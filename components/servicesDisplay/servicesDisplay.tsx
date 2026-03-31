import ServiceCard from "./serviceCard"

const services = [
  {
    label: "Video Editing",
    href: "/projects/video-editing",
    description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you're a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
    icon: "/service-icons/service-icon-test.svg",
  },
  {
    label: "Motion Design",
    href: "/projects/motion-design",
    description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you're a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
    icon: "/service-icons/service-icon-test.svg",
  },
  {
    label: "Social Media",
    href: "/projects/social-media",
    description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you're a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
    icon: "/service-icons/service-icon-test.svg",
  },
  {
    label: "Web Development",
    href: "/projects/web-development",
    description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress,  Shopify & HubSpot. Whether you're a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
    icon: "/service-icons/service-icon-test.svg",
  },
  {
    label: "UI/UX Design",
    href: "#",
    description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you're a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
    icon: "/service-icons/service-icon-test.svg",
  },
  {
    label: "Branding",
    href: "/projects/branding",
    description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you're a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website.",
    icon: "/service-icons/service-icon-test.svg",
  },
]

export default function ServicesDisplay() {
  return (
    <section className="w-full bg-[#EFF2F5] flex items-center justify-around">
      <main className="max-w-[1389px] flex flex-col items-center gap-10 py-20">
        <h3 className="text-[16px] font-bold tracking-[0.2em] uppercase text-[#8471D9]">
          Our Services
        </h3>

        <div className="w-full grid grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.label}
              label={service.label}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>        
      </main>

    </section>
  )
}