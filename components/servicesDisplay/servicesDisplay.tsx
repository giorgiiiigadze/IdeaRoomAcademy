import { getTranslations } from "next-intl/server"
import ServiceCard from "./serviceCard"
import { createClient } from "@/lib/supabase/server"

type Service = {
  id: string
  title: string
  slug: string
  description: string
  icon: string | null
  is_active: boolean
}

export default async function ServicesDisplay() {
  const t = await getTranslations("services")
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)

  if (error) {
    console.error("Supabase error:", error.message)
  }

  const services: Service[] = (data ?? []).filter(Boolean)

  return (
    <section className="w-full bg-[#EFF2F5] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-[1389px] flex flex-col items-center gap-10 py-20">
        <h3 className="text-[16px] font-bold tracking-[0.2em] uppercase text-[#8471D9]">
          {t("title")}
        </h3>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length === 0 ? (
            <p className="col-span-full text-center text-gray-400 text-sm py-10">
              No services yet.
            </p>
          ) : (
            services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))
          )}
        </div>
      </main>
    </section>
  )
}