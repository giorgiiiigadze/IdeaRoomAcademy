import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin("./i18n.ts")

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ydmrddcflkmsdwfqizki.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
}

export default withNextIntl(nextConfig)