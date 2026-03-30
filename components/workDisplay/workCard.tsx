"use client"

import Image from "next/image";
import { usePageTransition } from "@/hooks/usePageTransition";

interface WorkCardProps {
  image: string;
  title: string;
  category: string;
  href?: string;
  variant?: "hover" | "always"
}

export default function WorkCard({ image, title, category, href = "#", variant = "hover" }: WorkCardProps) {
  const { navigate } = usePageTransition()

  const always = variant === "always"

  return (
    <div
      onClick={() => navigate(href)}
      className="relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden group cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500"
      />

      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${always ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />

      <div className={`absolute bottom-0 left-0 p-6 flex flex-col items-start gap-1 transition-all duration-300 ${always ? "opacity-100 translate-y-0" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>
        <h3 className="text-white text-2xl font-bold leading-tight">{title}</h3>
        <p className="text-white/70 text-sm">{category}</p>
      </div>
    </div>
  );
}