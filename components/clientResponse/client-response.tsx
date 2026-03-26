import { getClientResponses } from "@/lib/api"
import ClientResponseCard from "./client-response-card"

export default async function ClientResponse() {
  const clientResponses = await getClientResponses()

  return (
    <div className="w-full max-w-[1391px] px-4 sm:px-6 lg:px-8 flex flex-col items-center mb-5 gap-2">
      <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 m-2 text-center">
        What Our Clients Say
      </h1>
      <span className="text-lg sm:text-[20px] font-bold text-brand-purple-3 text-center">
        We Strive To Create A Painless Client Experience.
      </span>

      <div className="w-full flex items-center justify-between gap-4">
        {clientResponses.map((testimonial) => (
          <ClientResponseCard
            key={testimonial.id}
            text={testimonial.text}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
          />
        ))}
      </div>
    </div>
  )
}