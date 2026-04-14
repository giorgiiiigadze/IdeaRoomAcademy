import HeroSection from "@/components/projectLayout/Hero"
import BlogDisplay from "@/components/blogDisplay/blogDisplay"

export default async function BlogsPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#EFF2F5]">

      <HeroSection />

      <BlogDisplay text={false}/>

    </div>
  )
}