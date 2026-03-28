import { getClientResponses } from "@/lib/api"
import ClientResponseCard from "./clientCard"

export default async function ClientResponse() {
  const clientResponses = await getClientResponses()

  return (
    <div className="w-full max-w-[1389px] flex flex-col items-center gap-4 mt-8">
      <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 m-2 text-center">
        What Our Clients Say
      </h1>
      <span className="text-lg sm:text-[20px] font-bold text-brand-purple-3 text-center">
        We Strive To Create A Painless Client Experience.
      </span>

      <div className="w-full flex flex-wrap gap-4 mt-4">
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