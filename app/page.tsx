import Image from "next/image";
import Link from "next/link";

import SeeAll from "@/components/ui/seeAll";

import LandingPageHero from "@/components/landingPageHero/landingPageHero";
import BrandsGrid from "@/components/brandsGrid/brandsGrid";
import ServicesDisplay from "@/components/servicesDisplay/servicesDisplay";
import MapDisplay from "@/components/mapDisplay/mapDisplay";
import WorkInAction from "@/components/workDisplay/workDisplay";
import ClientResponse from "@/components/clientResponse/clientDisplay";
import AboutDisplay from "@/components/aboutSection/aboutDisplay";
import BlogDisplay from "@/components/blogDisplay/blogDisplay";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">

      <main className="w-full flex items-center justify-around flex-col gap-14">

        <LandingPageHero />        

        <BrandsGrid />

        <ServicesDisplay />

        <ClientResponse />

        <AboutDisplay mainText={"About"} secondaryText={"We build meaningful long-term partnerships and deliver the best experience of digital services across the world"}/>

        <MapDisplay />

        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 px-4">
          <WorkInAction count={4} text="See our work in action"/>
          <SeeAll href="/works" label="View Collections" hint="Find inspiration for your projects" />
        </div>
        
        <div className="flex flex-col items-center bg-[#EFF2F5] w-full py-10">
          <BlogDisplay count={3} mainText="Blog" secondaryText={"We build meaningful long-term partnerships and deliver the best experience of digital services across the world"}/>
          <Link href={"/blogs"} className="px-5 py-2.5 text-medium rounded-xl bg-[#FBA834] hover:opacity-90 text-white">View All</Link>
        </div>

        <section className="h-[120px] w-[1376px] flex items-center bg-[#EFF2F5] justify-between gap-6 mb-12 rounded-[20px] px-10">

          <div className="bg-[#552583] w-[80px] h-[80px] flex items-center justify-center rounded-full">
            <Image
              src="/logo-vector.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />
          </div>

          <span className="text-[32px] text-brand-purple-4">Start Growing Your Business Today</span>

          <button className="p-3.5 cursor-pointer px-6 rounded-3xl text-white font-bold" style={{
            background: "linear-gradient(to right, #7B2FBE, #F5A623)"
            }}>Let&apos;s Talk
          </button>

        </section>

      </main>

    </div>
  );
}