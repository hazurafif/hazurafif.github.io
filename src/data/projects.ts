export interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  tags: string[]
  links: {
    label: string
    url: string
  }[]
}

export const projects: Project[] = [
  {
    title: 'Pawly — Pet Care Shop Platform',
    slug: 'pawly',
    description: 'A full-featured pet care shop platform handling both service bookings and retail inventory.',
    longDescription:
      'Designed with a focus on clean user experience and robust data management, Pawly manages service bookings, retail inventory, customer management, and seamless checkout flow.',
    tags: ['Web', 'Full-Stack', 'Database'],
    links: [],
  },
  {
    title: 'POS Service — Point of Sale System',
    slug: 'pos-service',
    description: 'A high-performance Point of Sale backend service built with Go.',
    longDescription:
      'Designed for concurrent transaction processing and real-time inventory tracking. Built with Go for fast, reliable payment processing and scalable backend architecture.',
    tags: ['Go', 'Backend', 'Concurrency'],
    links: [],
  },
  {
    title: 'RBAC Chat Apps — Role-Based Access Control Platform',
    slug: 'rbac-chat',
    description: 'A secure conversational platform with granular Role-Based Access Control.',
    longDescription:
      'Ensures data privacy and proper permission management across multi-room chat environments. Features granular permissions, secure multi-room architecture, and data privacy protection.',
    tags: ['Security', 'RBAC', 'Real-Time'],
    links: [],
  },
]
