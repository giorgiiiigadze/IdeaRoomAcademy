import ClientResponse from "@/components/clientResponse/clientDisplay";
import WorkInAction from "@/components/workDisplay/workDisplay";
import BlogDisplay from "@/components/blogDisplay/blogDisplay";
import SplitTextReveal from "@/components/ui/SplitTextReveal";
import SeeAll from "@/components/ui/seeAll";

import LandingPageHero from "@/components/landingPageHero/landingPageHero";
import BrandsGrid from "@/components/brandsGrid/brandsGrid";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import ServicesDisplay from "@/components/servicesDisplay/servicesDisplay";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">

      <main className="w-full flex items-center justify-around flex-col gap-6">

        <LandingPageHero />        

        <BrandsGrid />

        <FeaturesSection />

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

        <div className="h-[1px] w-full bg-gray-200 mt-10 mb-10"/>

        <ServicesDisplay />

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