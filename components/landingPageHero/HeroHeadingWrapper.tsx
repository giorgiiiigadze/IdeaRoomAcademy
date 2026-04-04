import { useLocale } from "next-intl"
import HeroHeading from "./landingPageHero"

export default function HeroHeadingWrapper() {
  const locale = useLocale()
  return <HeroHeading locale={locale as "en" | "ka"} />
}