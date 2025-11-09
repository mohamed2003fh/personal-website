export type BlogPost = {
  id: "threat_modeling" | "ai_security" | "network_resilience"
  date: string
  readingTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "threat_modeling",
    date: "Jan 2025",
    readingTime: "5 min"
  },
  {
    id: "ai_security",
    date: "Dec 2024",
    readingTime: "6 min"
  },
  {
    id: "network_resilience",
    date: "Nov 2024",
    readingTime: "4 min"
  }
]
