export type Blog = {
  id: number
  title: string
  slug: string
  description: string
  image: string
  author: string
  date: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of AI and Robotics — AI VS RPA",
    slug: "future-of-ai-and-robotics",
    description: "ხელოვნური ინტელექტი და რობოტები, ისინი ერთად ქმნიან ჩვენს წარმატებას და COVID-19 ამის ნათელი მაგალით იყო",
    image: "/test-image.png",
    author: "John Doe",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Web Development Trends in 2024",
    slug: "web-development-trends-2024",
    description: "ხელოვნური ინტელექტი და რობოტები, ისინი ერთად ქმნიან ჩვენს წარმატებას და COVID-19 ამის ნათელი მაგალით იყო",
    image: "/test-image.png",
    author: "Alex Johnson",
    date: "2024-03-05",
  },
  {
    id: 3,
    title: "Branding in the Digital Age",
    slug: "branding-digital-age",
    description: "ხელოვნური ინტელექტი და რობოტები, ისინი ერთად ქმნიან ჩვენს წარმატებას და COVID-19 ამის ნათელი მაგალით იყო",
    image: "/test-image.png",
    author: "Sarah Lee",
    date: "2024-02-28",
  },
  {
    id: 4,
    title: "Motion Design: The Art of Storytelling",
    slug: "motion-design-storytelling",
    description: "Motion design has become one of the most powerful tools for brands to communicate complex ideas in a simple and engaging way.",
    image: "/test-image.png",
    author: "Mike Brown",
    date: "2024-02-20",
  },
  {
    id: 5,
    title: "Social Media Strategy for 2024",
    slug: "social-media-strategy-2024",
    description: "Learn how to craft a winning social media strategy that drives engagement, builds community, and grows your brand.",
    image: "/test-image.png",
    author: "Emily Davis",
    date: "2024-02-15",
  },
]

export async function getBlogs(): Promise<Blog[]> {
  return blogs
}