type Testimonial = {
  id: number
  text: string
  name: string
  title: string
  image: string
}

export function GET() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater",
      name: "Giorgi Giorgadze",
      title: "The Queen of Tennis",
      image: "/globe.svg",
    },
    {
      id: 2,
      text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater",
      name: "Datuna",
      title: "The Queen of Tennis",
      image: "/globe.svg",
    },
    {
      id: 3,
      text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater",
      name: "Maria Sharapova",
      title: "The Queen of Tennis",
      image: "/globe.svg",
    },
    {
      id: 4,
      text: "We're most impressed with BurstDigital's flexibility and willingness to go the extra mile to cater to our needs to go the extra mile to cater to our needs most impressed with the extra mile to cater",
      name: "Maria Sharapova",
      title: "The Queen of Tennis",
      image: "/globe.svg",
    },
  ]

  return Response.json(testimonials)
}