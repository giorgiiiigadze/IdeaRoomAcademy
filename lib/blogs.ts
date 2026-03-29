export type Blog = {
  id: number
  title: string
  slug: string
  description: string
  image: string
  category: string
  author: string
  date: string
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of AI and Robotics — AI VS RPA",
    slug: "future-of-ai-and-robotics",
    description: "Artificial intelligence and robotics, when used correctly, can significantly improve COVID-19 basic healthcare management.",
    image: "/test-image.png",
    category: "AI",
    author: "John Doe",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "How Machine Learning is Changing the World",
    slug: "machine-learning-changing-world",
    description: "Machine learning algorithms are transforming industries from healthcare to finance, creating new opportunities every day.",
    image: "/test-image.png",
    category: "Machine Learning",
    author: "Jane Smith",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Web Development Trends in 2024",
    slug: "web-development-trends-2024",
    description: "From server components to edge computing, discover the biggest trends shaping modern web development this year.",
    image: "/test-image.png",
    category: "Web Dev",
    author: "Alex Johnson",
    date: "2024-03-05",
  },
  {
    id: 4,
    title: "Branding in the Digital Age",
    slug: "branding-digital-age",
    description: "Building a strong brand identity online requires consistency, creativity, and a deep understanding of your target audience.",
    image: "/test-image.png",
    category: "Branding",
    author: "Sarah Lee",
    date: "2024-02-28",
  },
  {
    id: 5,
    title: "Motion Design: The Art of Storytelling",
    slug: "motion-design-storytelling",
    description: "Motion design has become one of the most powerful tools for brands to communicate complex ideas in a simple and engaging way.",
    image: "/test-image.png",
    category: "Motion Design",
    author: "Mike Brown",
    date: "2024-02-20",
  },
  {
    id: 6,
    title: "Social Media Strategy for 2024",
    slug: "social-media-strategy-2024",
    description: "Learn how to craft a winning social media strategy that drives engagement, builds community, and grows your brand.",
    image: "/test-image.png",
    category: "Social Media",
    author: "Emily Davis",
    date: "2024-02-15",
  },
]

export async function getBlogs(): Promise<Blog[]> {
  return blogs
}