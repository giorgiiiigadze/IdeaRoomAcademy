"use client"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { PlayCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function VideoDialog({ url, thumbnail }: { url: string, thumbnail: string }) {
  const [open, setOpen] = useState(false)

  if (!url || !thumbnail) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="relative w-full h-full min-h-[220px] sm:min-h-[300px] rounded-[16px] overflow-hidden cursor-pointer group">
          <Image
            src={thumbnail}
            alt="Video thumbnail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        {open && (
          <video
            src={url}
            width="100%"
            height="400px"
            controls
            autoPlay
            className="w-full h-[400px] bg-black"
          />
        )}
      </DialogContent>
    </Dialog>
  )
}