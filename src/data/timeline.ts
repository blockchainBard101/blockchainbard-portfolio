export interface TimelineEvent {
  yearOrDate: string
  title: string
  org: string
  description: string
  tags: string[]
  type: 'work' | 'education' | 'achievement' | 'project'
  current?: boolean
}

export const timeline: TimelineEvent[] = [
  {
    yearOrDate: '2025 - Present',
    title: 'Developer Relations',
    org: 'Sui on Campus',
    description: 'Leading developer relations for Sui on Campus, creating educational content, workshops, and starter repositories to onboard new developers to the Sui ecosystem.',
    tags: ['DevRel', 'Education', 'Community', 'Sui'],
    type: 'work',
    current: true,
  },
  {
    yearOrDate: '2024 - Present',
    title: 'Open Source Contributor',
    org: 'Sui Network Ecosystem',
    description: 'Active contributor to the Sui Network ecosystem, building tools, documentation, and developer resources for the community.',
    tags: ['Open Source', 'Community', 'Tools', 'Sui'],
    type: 'work',
    current: true,
  },
  {
    yearOrDate: '2024 - 2025',
    title: 'Tech Lead',
    org: 'SOCSC FUTMINNA',
    description: 'Led technical initiatives and development projects at the Students\' Online Services and Support Center, managing technology infrastructure and supporting student services.',
    tags: ['Tech Lead', 'Leadership', 'Student Services', 'FUT Minna'],
    type: 'work',
    current: false,
  },
  {
    yearOrDate: '2023 - 2024',
    title: 'AI/ML Freelancer',
    org: 'Fiverr',
    description: 'Provided AI and machine learning services as a freelancer, developing custom solutions for clients including data analysis, model development, and automation systems.',
    tags: ['Freelance', 'AI/ML', 'Data Science', 'Automation'],
    type: 'work',
    current: false,
  },
  {
    yearOrDate: '2022 - 2024',
    title: 'Forex Trading Bot Developer',
    org: 'Freelance',
    description: 'Developed automated forex trading bots implementing algorithmic trading strategies and market analysis systems.',
    tags: ['Trading Bots', 'Forex', 'Algorithmic Trading', 'Automation'],
    type: 'project',
    current: false,
  },
  {
    yearOrDate: '2025',
    title: 'B.Eng Mechatronics Engineering',
    org: 'FUT Minna',
    description: 'Completed Bachelor of Engineering in Mechatronics Engineering, focusing on robotics, automation, and systems integration.',
    tags: ['Education', 'Engineering', 'Mechatronics', 'Completed'],
    type: 'education',
    current: false,
  },
  {
    yearOrDate: '2024',
    title: 'AI/ML Research',
    org: 'FUT Minna',
    description: 'Research project on computer vision and machine learning applications in robotics, using OpenCV and TensorFlow.',
    tags: ['Research', 'AI/ML', 'Computer Vision', 'Robotics'],
    type: 'project',
    current: false,
  },
  {
    yearOrDate: '2021',
    title: 'Python Development Bootcamp',
    org: 'Self-Directed Learning',
    description: 'Intensive self-study of Python programming, web development, and data science, building multiple personal projects.',
    tags: ['Learning', 'Python', 'Web Development', 'Data Science'],
    type: 'achievement',
    current: false,
  },
]

export const currentRoles = timeline.filter(event => event.current)
export const workExperience = timeline.filter(event => event.type === 'work')
export const education = timeline.filter(event => event.type === 'education')
export const achievements = timeline.filter(event => event.type === 'achievement')
