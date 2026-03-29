export type Testimonial = {
  id: number
  text: string
  name: string
  title: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs.",
    name: "Giorgi Giorgadze",
    title: "The Queen of Tennis",
    image: "/globe.svg",
  },
  {
    id: 2,
    text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs.",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/globe.svg",
  },
  {
    id: 3,
    text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs.",
    name: "Maria Sharapova",
    title: "The Queen of Tennis",
    image: "/globe.svg",
  },
  {
    id: 4,
    text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs.",
    name: "Maria Sharapova",
    title: "The Queen of Tennis",
    image: "/globe.svg",
  },
]

export async function getClientResponses(): Promise<Testimonial[]> {
  return testimonials
}