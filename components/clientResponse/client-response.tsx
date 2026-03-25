import ClientResponseCard from "./client-response-card"

type Testimonial = {
  id: number
  text: string
  name: string
  title: string
  image: string
}

export default async function ClientResponse() {
  const request = await fetch("http://localhost:3000/api/client-responses")
  const clientResponses: Testimonial[] = await request.json()

  return (
    <div className="w-full max-w-[1391px] px-4 sm:px-6 lg:px-8 flex flex-col items-center mb-5">
      
      <h1 className="text-2xl sm:text-[32px] font-bold text-brand-orange-5 m-2 text-center">
        What Our Clients Say
      </h1>
      <span className="text-lg sm:text-[20px] font-bold text-brand-purple-3 text-center">
        We Strive To Create A Painless Client Experience.
      </span>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
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