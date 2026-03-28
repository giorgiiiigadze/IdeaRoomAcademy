import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4">
      <h1 className="text-[8rem] font-bold leading-none text-brand-purple-5">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild className="rounded-full px-8 h-12 border-0" style={{
        background: "linear-gradient(to right, #7B2FBE, #F5A623)"
      }}>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  )
}