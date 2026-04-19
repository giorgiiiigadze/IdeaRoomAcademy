import LandingPageHero from "@/components/landingPageHero/landingPageHero";
import BrandsGrid from "@/components/brandsGrid/brandsGrid";
import ServicesDisplay from "@/components/servicesDisplay/servicesDisplay";
import MapDisplay from "@/components/mapDisplay/mapDisplay";
import WorkInAction from "@/components/workDisplay/workDisplay";
import ClientResponse from "@/components/clientResponse/clientDisplay";
import AboutDisplay from "@/components/aboutSection/aboutDisplay";
import BlogDisplay from "@/components/blogDisplay/blogDisplay";
import LandingImageDisplay from "@/components/landingImageDisplay/ImageDisplay";
import CTASection from "@/components/CTAsection/CTAsection";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">

      <main className="w-full flex items-center justify-around flex-col gap-14">

        <LandingPageHero />        

        <BrandsGrid />

        <ServicesDisplay />

        <ClientResponse />

        <LandingImageDisplay />

        <AboutDisplay/>

        <MapDisplay />

        <div className="w-full max-w-[1389px] flex flex-col items-center gap-8 px-4">
          <WorkInAction count={4} viewAllLink/>
        </div>
        
        <div className="flex flex-col items-center bg-[#EFF2F5] w-full py-10">
          <BlogDisplay count={3} viewAllLink/>
        </div>

        <CTASection />

      </main>

    </div>
  );
}