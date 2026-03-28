import { NextResponse } from "next/server"

const blogs = [
  {
    id: 1,
    title: "The Future of AI and Robotics — AI VS RPA",
    slug: "future-of-ai-and-robotics",
    description: `
      Artificial intelligence and robotics, when used correctly, can significantly improve COVID-19 basic healthcare management. Artificial intelligence and robotics, when used correctly, can significantly improve COVID-19 basic healthcare management. Artificial intelligence and robotics, when used correctly, can significantly improve COVID-19 basic healthcare management.
      In the fast-paced world of digital marketing, where trends come and go like shooting stars, there is one term that reigns supreme, illuminating the path to online success: Search Engine Optimization (SEO). It’s the mystical force that propels your website to new heights, thrusting it into the limelight and enchanting your target audience. But here’s the thing: SEO has evolved. It has transcended its humble beginnings of keyword research and now demands a strategic approach infused with a touch of corporate playfulness.

      Gone are the days when simply sprinkling a few keywords throughout your website would make the search engines bow at your digital doorstep. Today, SEO is an art, a symphony of techniques and tactics that harmonize to create an unforgettable online presence. It requires a keen understanding of the intricate dance between technology and human behavior, as well as the ability to adapt to the ever-changing algorithms that rule the digital realm.

      So, buckle up and prepare to embark on a transformative journey. Together, we will unravel SEO principles and search engine optimization, unlocking the full potential of your online presence. We will delve into the depths of data, wield the power of creativity, and harness the energy of innovation to craft a strategy that not only boosts your website’s visibility but also captivates the hearts and minds of your target audience.

      In this post, we will explore the nooks and crannies of SEO, unraveling its secrets and uncovering the hidden gems that will set you apart from the competition. From the technical intricacies that lie beneath the surface to the captivating content that enthralls your visitors, we will leave no stone unturned in our quest for digital supremacy.
    `,
    image: "/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg",
    category: "AI",
    author: "John Doe",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "How Machine Learning is Changing the World",
    slug: "machine-learning-changing-world",
    description: "Machine learning algorithms are transforming industries from healthcare to finance, creating new opportunities every day.",
    image: "/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg",
    category: "Machine Learning",
    author: "Jane Smith",
    date: "2024-03-10",
  },
  {
    id: 3,
    title: "Web Development Trends in 2024",
    slug: "web-development-trends-2024",
    description: "From server components to edge computing, discover the biggest trends shaping modern web development this year.",
    image: "/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg",
    category: "Web Dev",
    author: "Alex Johnson",
    date: "2024-03-05",
  },
  {
    id: 4,
    title: "Branding in the Digital Age",
    slug: "branding-digital-age",
    description: "Building a strong brand identity online requires consistency, creativity, and a deep understanding of your target audience.",
    image: "/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg",
    category: "Branding",
    author: "Sarah Lee",
    date: "2024-02-28",
  },
  {
    id: 5,
    title: "Motion Design: The Art of Storytelling",
    slug: "motion-design-storytelling",
    description: "Motion design has become one of the most powerful tools for brands to communicate complex ideas in a simple and engaging way.",
    image: "/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg",
    category: "Motion Design",
    author: "Mike Brown",
    date: "2024-02-20",
  },
  {
    id: 6,
    title: "Social Media Strategy for 2024",
    slug: "social-media-strategy-2024",
    description: "Learn how to craft a winning social media strategy that drives engagement, builds community, and grows your brand.",
    image: "/project-images/55c4d981b39c3019f00330a0931ca7a12d746830.jpg",
    category: "Social Media",
    author: "Emily Davis",
    date: "2024-02-15",
  },
]

export async function GET() {
  return NextResponse.json(blogs)
}

