export interface Skill {
  name: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming', level: 'expert' },
  { name: 'C++', category: 'Programming', level: 'advanced' },
  { name: 'TypeScript', category: 'Programming', level: 'expert' },
  { name: 'JavaScript', category: 'Programming', level: 'expert' },
  { name: 'Move', category: 'Programming', level: 'advanced' },
  { name: 'Rust', category: 'Programming', level: 'intermediate' },
  { name: 'Solidity', category: 'Programming', level: 'intermediate' },

  // Backend Technologies
  { name: 'Flask', category: 'Backend', level: 'expert' },
  { name: 'FastAPI', category: 'Backend', level: 'expert' },
  { name: 'Uvicorn', category: 'Backend', level: 'advanced' },
  { name: 'Node.js', category: 'Backend', level: 'expert' },
  { name: 'NestJS', category: 'Backend', level: 'advanced' },
  { name: 'Express', category: 'Backend', level: 'expert' },

  // Blockchain
  { name: 'Sui SDK (Mysten)', category: 'Blockchain', level: 'expert' },
  { name: 'Smart Contracts', category: 'Blockchain', level: 'expert' },
  { name: 'dApps', category: 'Blockchain', level: 'expert' },

  // AI/Data Science
  { name: 'TensorFlow', category: 'AI/DS', level: 'advanced' },
  { name: 'PyTorch', category: 'AI/DS', level: 'advanced' },
  { name: 'OpenCV', category: 'AI/DS', level: 'intermediate' },
  { name: 'MediaPipe', category: 'AI/DS', level: 'intermediate' },
  { name: 'scikit-learn', category: 'AI/DS', level: 'advanced' },
  { name: 'NLTK', category: 'AI/DS', level: 'intermediate' },
  { name: 'LangChain', category: 'AI/DS', level: 'advanced' },
  { name: 'Seaborn', category: 'AI/DS', level: 'advanced' },
  { name: 'Matplotlib', category: 'AI/DS', level: 'advanced' },
  { name: 'Pandas', category: 'AI/DS', level: 'expert' },

  // Databases
  { name: 'PostgreSQL', category: 'Database', level: 'advanced' },
  { name: 'MongoDB', category: 'Database', level: 'advanced' },
  { name: 'MySQL', category: 'Database', level: 'intermediate' },

  // Frontend
  { name: 'React', category: 'Frontend', level: 'expert' },
  { name: 'Next.js', category: 'Frontend', level: 'expert' },

  // Other
  { name: 'pygame', category: 'Other', level: 'intermediate' },
  { name: 'Telegram Bot API', category: 'Other', level: 'advanced' },
  { name: 'python-telegram-bot', category: 'Other', level: 'advanced' },
]

export const skillCategories = [
  'Programming',
  'Backend',
  'Blockchain',
  'AI/DS',
  'Database',
  'Frontend',
  'Other',
] as const

export type SkillCategory = typeof skillCategories[number]
