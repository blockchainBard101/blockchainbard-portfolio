export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  links: {
    github?: string
    demo?: string
    docs?: string
  }
  highlights: string[]
  image?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  startDate: string
  endDate?: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    slug: 'sui-dev-tools',
    title: 'Sui Dev Tools Collection',
    summary: 'CLI + SDK snippets to speed up Sui development',
    description: 'A comprehensive collection of development tools and utilities for the Sui blockchain, including CLI commands, SDK snippets, and helper functions to accelerate smart contract development.',
    tags: ['Sui', 'Open Source', 'Dev Tools', 'CLI'],
    links: {
      github: 'https://github.com/blockchainbard/sui-dev-tools',
      demo: 'https://sui-dev-tools.vercel.app',
      docs: 'https://docs.sui-dev-tools.com',
    },
    highlights: [
      'Streamlined smart contract deployment process',
      'Automated testing and validation tools',
      'Interactive CLI with helpful commands',
      'SDK integration examples and snippets',
    ],
    image: '/images/sui-dev-tools.png',
    featured: true,
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-06-01',
    techStack: ['TypeScript', 'Node.js', 'Sui SDK', 'CLI'],
  },
  {
    slug: 'team-sushi',
    title: 'Team Sushi Protocol',
    summary: 'Protocol and dev tooling contributions',
    description: 'Lead developer for Team Sushi, contributing to protocol development and creating essential developer tooling for the Sui ecosystem.',
    tags: ['Sui', 'DeFi', 'Protocol', 'Lead Dev'],
    links: {
      github: 'https://github.com/team-sushi',
      demo: 'https://sushi.sui.io',
    },
    highlights: [
      'Protocol architecture and implementation',
      'Developer tooling and documentation',
      'Smart contract optimization',
      'Community engagement and support',
    ],
    image: '/images/team-sushi.png',
    featured: true,
    status: 'in-progress',
    startDate: '2024-03-01',
    techStack: ['Move', 'Sui SDK', 'TypeScript', 'React'],
  },
  {
    slug: 'voultron-games',
    title: 'Voultron Games',
    summary: 'On-chain game experiments and development',
    description: 'Leading development of innovative on-chain games and gaming infrastructure on the Sui blockchain, exploring new paradigms in blockchain gaming.',
    tags: ['Sui', 'Gaming', 'On-chain', 'Lead Dev'],
    links: {
      github: 'https://github.com/voultron-games',
      demo: 'https://games.voultron.io',
    },
    highlights: [
      'On-chain game mechanics and systems',
      'NFT integration and marketplace',
      'Real-time multiplayer functionality',
      'Gaming infrastructure development',
    ],
    image: '/images/voultron-games.png',
    featured: true,
    status: 'in-progress',
    startDate: '2024-02-01',
    techStack: ['Move', 'Unity', 'TypeScript', 'Sui SDK'],
  },
  {
    slug: 'sui-on-campus',
    title: 'Sui on Campus (DevRel)',
    summary: 'Developer relations and educational content',
    description: 'Developer Relations role for Sui on Campus, creating educational content, workshops, and starter repositories to onboard new developers to the Sui ecosystem.',
    tags: ['Sui', 'DevRel', 'Education', 'Community'],
    links: {
      github: 'https://github.com/sui-on-campus',
      demo: 'https://campus.sui.io',
    },
    highlights: [
      'Educational workshops and tutorials',
      'Starter repository templates',
      'Community building and engagement',
      'Technical documentation and guides',
    ],
    image: '/images/sui-on-campus.png',
    featured: false,
    status: 'in-progress',
    startDate: '2024-01-01',
    techStack: ['TypeScript', 'React', 'MDX', 'Sui SDK'],
  },
  {
    slug: 'walrus-integrations',
    title: 'Walrus Protocol Integrations',
    summary: 'Integration tools and SDK for Walrus Protocol',
    description: 'Developed integration tools and SDK components for Walrus Protocol, enabling seamless connection between various DeFi protocols on Sui.',
    tags: ['Sui', 'DeFi', 'Integration', 'SDK'],
    links: {
      github: 'https://github.com/walrus-protocol/integrations',
      demo: 'https://integrations.walrus.io',
    },
    highlights: [
      'Protocol integration SDK',
      'Cross-protocol compatibility',
      'Automated testing suite',
      'Developer documentation',
    ],
    image: '/images/walrus-integrations.png',
    featured: false,
    status: 'completed',
    startDate: '2024-04-01',
    endDate: '2024-08-01',
    techStack: ['TypeScript', 'Sui SDK', 'Move', 'Testing'],
  },
  {
    slug: 'nft-marketplace',
    title: 'Sui NFT Marketplace',
    summary: 'Decentralized NFT marketplace on Sui',
    description: 'Built a comprehensive NFT marketplace on Sui with advanced features including auctions, collections, and creator royalties.',
    tags: ['Sui', 'NFT', 'Marketplace', 'Web3'],
    links: {
      github: 'https://github.com/blockchainbard/sui-nft-marketplace',
      demo: 'https://nft-marketplace.sui.io',
    },
    highlights: [
      'Advanced auction mechanisms',
      'Creator royalty system',
      'Collection management',
      'Cross-chain compatibility',
    ],
    image: '/images/nft-marketplace.png',
    featured: false,
    status: 'completed',
    startDate: '2023-11-01',
    endDate: '2024-02-01',
    techStack: ['Move', 'React', 'TypeScript', 'Sui SDK'],
  },
  {
    slug: 'amm-dashboard',
    title: 'AMM/CLMM Dashboard',
    summary: 'Analytics dashboard for AMM and CLMM protocols',
    description: 'Comprehensive analytics dashboard for Automated Market Makers and Concentrated Liquidity Market Makers on Sui, providing real-time data and insights.',
    tags: ['Sui', 'DeFi', 'Analytics', 'Dashboard'],
    links: {
      github: 'https://github.com/blockchainbard/amm-dashboard',
      demo: 'https://amm-dashboard.sui.io',
    },
    highlights: [
      'Real-time analytics and metrics',
      'Liquidity pool visualization',
      'Trading volume analysis',
      'Yield farming insights',
    ],
    image: '/images/amm-dashboard.png',
    featured: false,
    status: 'completed',
    startDate: '2024-05-01',
    endDate: '2024-07-01',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Sui SDK'],
  },
]

export const featuredProjects = projects.filter(project => project.featured)
export const completedProjects = projects.filter(project => project.status === 'completed')
export const inProgressProjects = projects.filter(project => project.status === 'in-progress')
