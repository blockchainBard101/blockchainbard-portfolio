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
    yearOrDate: '2024 - Present',
    title: 'Developer Relations',
    org: 'Sui on Campus',
    description: 'Leading developer relations for Sui on Campus, creating educational content, workshops, and starter repositories to onboard new developers to the Sui ecosystem.',
    tags: ['DevRel', 'Education', 'Community', 'Sui'],
    type: 'work',
    current: true,
  },
  {
    yearOrDate: '2024 - Present',
    title: 'Lead Developer',
    org: 'Team Sushi',
    description: 'Leading development of protocol and dev tooling contributions for Team Sushi, focusing on DeFi infrastructure and developer experience.',
    tags: ['Lead Dev', 'DeFi', 'Protocol', 'Sui'],
    type: 'work',
    current: true,
  },
  {
    yearOrDate: '2024 - Present',
    title: 'Lead Developer',
    org: 'Voultron Games',
    description: 'Leading development of innovative on-chain games and gaming infrastructure on the Sui blockchain, exploring new paradigms in blockchain gaming.',
    tags: ['Lead Dev', 'Gaming', 'On-chain', 'Sui'],
    type: 'work',
    current: true,
  },
  {
    yearOrDate: '2023 - Present',
    title: 'Open Source Contributor',
    org: 'Sui Network Ecosystem',
    description: 'Active contributor to the Sui Network ecosystem, building tools, documentation, and developer resources for the community.',
    tags: ['Open Source', 'Community', 'Tools', 'Sui'],
    type: 'work',
    current: true,
  },
  {
    yearOrDate: '2024',
    title: 'B.Eng Mechatronics Engineering',
    org: 'FUT Minna',
    description: 'Completed Bachelor of Engineering in Mechatronics Engineering, focusing on robotics, automation, and systems integration.',
    tags: ['Education', 'Engineering', 'Mechatronics', 'Completed'],
    type: 'education',
    current: false,
  },
  {
    yearOrDate: '2023',
    title: 'First Sui Smart Contract',
    org: 'Personal Project',
    description: 'Deployed my first smart contract on Sui testnet, marking the beginning of my blockchain development journey.',
    tags: ['Milestone', 'Sui', 'Smart Contracts', 'Learning'],
    type: 'achievement',
    current: false,
  },
  {
    yearOrDate: '2022',
    title: 'AI/ML Research Project',
    org: 'FUT Minna',
    description: 'Led a research project on computer vision and machine learning applications in robotics, using OpenCV and TensorFlow.',
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
