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
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Giorgi Giorgadze",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 2,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 3,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 4,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 5,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 6,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 7,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  {
    id: 8,
    text: "“We’re most impressed with BurstDigital’s flexibility and willingness to go the extra mile to cater to our needs  to go the extra mile to cater to our needs most impressed with the extra mile to cater”",
    name: "Datuna",
    title: "The Queen of Tennis",
    image: "/client-files/client-image.png",
  },
  
]

export async function getClientResponses(): Promise<Testimonial[]> {
  return testimonials
}