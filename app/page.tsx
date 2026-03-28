import Image from "next/image";
import Link from "next/link";

import ClientResponse from "@/components/clientResponse/clientDisplay";
import WorkInAction from "@/components/workDisplay/workDisplay";
import BlogDisplay from "@/components/blogDisplay/blogDisplay";
import SplitTextReveal from "@/components/ui/SplitTextReveal";
import SeeAll from "@/components/ui/seeAll";

import LandingPageHero from "@/components/landingPageHero/landingPageHero";
import BrandsGrid from "@/components/brandsGrid/brandsGrid";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";

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

        <LandingPageHero />        

        <BrandsGrid />

        <FeaturesSection />

        <span className="text-2xl font-bold tracking-widest text-brand-purple-5 text-center">
          Our services
        </span>

        <div className="w-full max-w-[1389px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicesLinks.map((service) => (
            <div key={service.label} className="border border-border rounded-2xl p-6 flex flex-col items-start justify-between gap-4 hover:border-brand-orange-4 transition-colors duration-200">

              <Image
                src="/test-image.png"
                width={68}
                height={68}
                alt={service.label}
                className="rounded-lg object-cover"
              />

              <span className="text-xl font-bold">
                {service.label}
              </span>

              <span className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </span>

              <Link href={service.href} className="bg-brand-orange-4 hover:bg-brand-orange-5 transition-colors duration-200 rounded-lg py-2 px-4 text-white text-sm font-semibold">
                Learn More
              </Link>
            </div>
          ))}
        </div>


        <div className="h-[1px] w-full bg-gray-200 mt-10 mb-10"/>

        <section className="h-screen max-h-[700px] w-full flex items-center justify-center">
          
          <div aria-hidden="true" className="w-full overflow-hidden py-6  gap-6 flex items-center flex-col">
            <SplitTextReveal
              text="Start Growing"
              className="text-[144px] font-black uppercase leading-none tracking-tight text-foreground"
            />
            <SplitTextReveal
              text="With Idearoom"
              className="text-[144px] font-black uppercase leading-none tracking-tight text-brand-orange-5"
            />
          </div>

        </section>

        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 px-4">
          <WorkInAction />
          <SeeAll href="/works" label="View Collections" hint="Find inspiration for your projects" />
        </div>

        <div className="h-[1px] w-full bg-gray-200 mt-10 mb-10"/>

        <ClientResponse />
        
        <div className="h-[1px] w-full bg-gray-200 mt-10 mb-10"/>
        
        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 px-4">
          <BlogDisplay count={3} mainText="Blog" secondaryText="Get interesting stories about people, projects and career opportunities directly to your mailbox"/>
          <SeeAll href="/blogs" label="View all" />
        </div>

        <section className="h-[700px] bg-brand-orange-5 w-full flex items-center justify-center flex-col gap-6">
          <h2 className="text-[72px] font-extrabold text-center leading-tight">
            Your Academy For<br />Your Growth.
          </h2>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors duration-200">
              Register
            </button>
            <button className="px-6 py-3 bg-neutral-700 text-white font-semibold rounded-md hover:bg-neutral-600 transition-colors duration-200">
              Contact
            </button>
          </div>
        </section>

      </main>

    </div>
  );
}