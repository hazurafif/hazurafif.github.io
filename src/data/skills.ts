export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Go', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'AI & ML',
    skills: ['AI Agents', 'LLMs', 'RAG', 'Prompt Engineering'],
  },
  {
    category: 'Backend',
    skills: ['API Design', 'Microservices', 'Database Design', 'Concurrency'],
  },
  {
    category: 'DevOps',
    skills: ['Docker', 'Linux', 'Git', 'CI/CD', 'Zabbix', 'Infrastructure Automation'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
]
