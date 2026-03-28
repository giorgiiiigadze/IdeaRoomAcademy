import Image from "next/image"

const brands = [
  { name: "React", logo: "/next.svg" },
  { name: "Next.js", logo: "/next.svg" },
  { name: "TypeScript", logo: "/next.svg" },
  { name: "GSAP", logo: "/next.svg" },
  { name: "MUX", logo: "/next.svg" },
  { name: "Tailwind", logo: "/next.svg" },
  { name: "Supabase", logo: "/next.svg" },
  { name: "Vercel", logo: "/next.svg" },
  { name: "Figma", logo: "/next.svg", },
  { name: "Figma", logo: "/next.svg", },
]


export default function BrandsGrid(){
    return (
        <div className="w-full max-w-[1389px] flex flex-col items-center py-10">
          <span className="font-semibold text-xl mb-10 text-brand-purple-5">Trusted by current and soon to be world-class brands.</span>
  
          <div className="w-full grid grid-cols-3 border-t border-l border-border">
            {brands.slice(0, 3).map((brand) => (
              <div
                key={brand.name}
                className="border-r border-b border-border flex items-center justify-center py-20 px-8"
              >
                <Image src={brand.logo} alt={brand.name} width={130} height={50} className="object-contain" />
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-7 border-l border-border">
            {brands.slice(3).map((brand, i) => (
              <div
                key={brand.name + i}
                className={`border-r border-b border-border flex items-center justify-center py-14 px-4 ${
                  i === 6 ? "bg-foreground" : ""
                }`}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={36}
                  className={`object-contain ${i === 6 ? "invert" : ""}`}
                />
              </div>
            ))}
          </div>

        </div>
    )
}