import Image from "next/image";

import HeroSection from "@/components/layout/landingPageHero";
import ClientResponse from "@/components/clientResponse/client-response";
import BlogDisplay from "@/components/blogDisplay/blogDisplay";
import Link from "next/link";

const brands = [
  { name: "Brand 1", logo: "/next.svg" },
  { name: "Brand 2", logo: "/next.svg" },
  { name: "Brand 3", logo: "/next.svg" },
  { name: "Brand 4", logo: "/next.svg" },
  { name: "Brand 5", logo: "/next.svg" },
  { name: "Brand 6", logo: "/next.svg" },
]

const servicesLinks = [
  { label: "Video Editing", href: "/project/video-editing", description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website."},
  { label: "Branding", href: "/project/branding", description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website."},
  { label: "Social Media", href: "/project/social-media", description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website."},
  { label: "Web Development", href: "/project/web-development", description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website."},
  { label: "UI/UX Design", href: "#", description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website."},
  { label: "Motion Design", href: "/project/motion-design", description: "Our team of techie talents have decades of combined experience in creating completely bespoke websites using WordPress, Shopify & HubSpot. Whether you’re a startupor an established enterprise, we can sprinkle our digital magic to conjure you up a beautiful website."},
]

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">

      <main className="w-full flex items-center justify-around flex-col gap-6">

        <section className="relative w-full h-screen flex flex-col items-center justify-center gap-4 overflow-hidden" style={{
          background: "linear-gradient(to right, #7B2FBE, #F5A623)"
        }}>

          <HeroSection />

        </section>
        
        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 py-10 px-4">

          <span className="text-sm font-bold uppercase tracking-widest text-brand-purple-5 text-center">
            Trusted by current and soon to be world-class brands
          </span>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center px-4 py-4 border border-border bg-background"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <span className="text-2xl font-bold uppercase tracking-widest text-brand-purple-5 text-center">
            Our services
          </span>

          <div className="flex items-center flex-wrap max-w-[1389px] gap-2">
            {servicesLinks.map((service) => (
              <div key={service.label} className="w-[440px] h-[378px] rounded-2xl p-4 flex flex-col items-start justify-between">

                <span className="text-2xl font-bold">
                  {service.label}
                </span>

                <span>
                  {service.description}
                </span>

                <Link href={service.href} className="bg-brand-orange-4 rounded-[8px] p-2 px-4 text-white flex">Learn More</Link>
              </div>
            ))}
          </div>

        </div>


        <ClientResponse />

        <BlogDisplay showViewAll count={3} mainText="Blog" secondaryText="Get intresting stories about people, projects and career oportunities directly to your mailbox"/>
      </main>

    </div>
  );
}