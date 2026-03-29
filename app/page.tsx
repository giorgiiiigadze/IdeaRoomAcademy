import ClientResponse from "@/components/clientResponse/clientDisplay";
import WorkInAction from "@/components/workDisplay/workDisplay";
import BlogDisplay from "@/components/blogDisplay/blogDisplay";
import SeeAll from "@/components/ui/seeAll";

import LandingPageHero from "@/components/landingPageHero/landingPageHero";
import BrandsGrid from "@/components/brandsGrid/brandsGrid";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import ServicesDisplay from "@/components/servicesDisplay/servicesDisplay";

import GrowingSection from "@/components/growingSection/growingSection";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">

      <main className="w-full flex items-center justify-around flex-col gap-6">

        <LandingPageHero />        

        <BrandsGrid />

        <FeaturesSection />

        <GrowingSection />

        <ServicesDisplay />

        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 px-4">
          <WorkInAction count={4} text="See our work in action"/>
          <SeeAll href="/works" label="View Collections" hint="Find inspiration for your projects" />
        </div>

        <div className="h-[1px] w-full bg-gray-200 mt-4 mb-4"/>

        <ClientResponse />
        
        <div className="h-[1px] w-full bg-gray-200 mt-4 mb-4"/>
        
        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 px-4">
          <BlogDisplay count={3} mainText="Blog" secondaryText="Get interesting stories about people, projects and career opportunities directly to your mailbox"/>
          <SeeAll href="/blogs" label="View all" />
        </div>

        <section className="h-[700px] bg-brand-orange-5 w-full flex items-center justify-center flex-col gap-6">
          <h2 className="text-[72px] font-extrabold text-center leading-tight text-brand-purple-4">
            Start Growing <br />Your Business Today.
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