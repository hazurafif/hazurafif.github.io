export interface Project {
  id: string
  title: string
  description: string
  pubDate: string
  icon: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  content: {
    overview: string
    features: string[]
    architecture?: string
    techStack?: string
  }
}

export const projects: Project[] = [
  {
    id: "pawly",
    title: "Pawly — Pet Care Shop Platform",
    description:
      "Developed a comprehensive web application for pet care services and retail. Focused on a seamless user experience and clean database architecture for managing inventory and bookings.",
    pubDate: "2024-06-15",
    icon: "🐾",
    tags: ["Web", "Full-Stack", "Database"],
    content: {
      overview:
        "Pawly is a full-featured pet care shop platform that handles both service bookings and retail inventory. The application was designed with a focus on clean user experience and robust data management.",
      features: [
        "Service booking and scheduling system",
        "Retail inventory management",
        "Customer management dashboard",
        "Seamless checkout flow",
      ],
      techStack:
        "Built with a modern web stack designed for maintainability and performance. The database architecture was carefully planned to handle the dual inventory-service model efficiently.",
    },
  },
  {
    id: "pos-service",
    title: "POS Service — Point of Sale System",
    description:
      "Built a high-performance, concurrent backend service using Go (Golang). Designed to handle fast, reliable transaction processing and inventory tracking.",
    pubDate: "2024-03-10",
    icon: "⚡",
    tags: ["Go", "Backend", "Concurrency"],
    content: {
      overview:
        "A high-performance Point of Sale backend service built with Go, designed for concurrent transaction processing and real-time inventory tracking.",
      features: [
        "Concurrent transaction processing",
        "Real-time inventory tracking and updates",
        "Fast, reliable payment processing",
        "Scalable backend architecture",
      ],
      architecture:
        "Built with Go's concurrency primitives to handle high-volume transaction loads efficiently. The system prioritizes data consistency and reliability while maintaining low latency for point-of-sale operations.",
    },
  },
  {
    id: "rbac-chat",
    title: "RBAC Chat Apps — Role-Based Access Control Platform",
    description:
      "Developed a secure chat application featuring granular Role-Based Access Control (RBAC). Ensured data privacy and secure user permission levels across chat rooms.",
    pubDate: "2023-11-20",
    icon: "🔒",
    tags: ["Security", "RBAC", "Real-Time"],
    content: {
      overview:
        "A secure conversational platform with granular Role-Based Access Control, designed to ensure data privacy and proper permission management across multi-room chat environments.",
      features: [
        "Role-Based Access Control (RBAC) with granular permissions",
        "Secure multi-room chat architecture",
        "User permission management and enforcement",
        "Data privacy protection at every level",
      ],
      architecture:
        "The system implements a robust RBAC model where permissions are checked at every access point, ensuring that users only have access to what they're explicitly authorized to see and do.",
    },
  },
]
