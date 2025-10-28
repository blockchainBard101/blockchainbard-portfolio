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
    slug: 'sui-move-runner',
    title: 'Sui Move Runner',
    summary: 'One-Click Deploy & Interact with Move Smart Contracts on Sui',
    description: 'A comprehensive VS Code extension that streamlines Sui Move development with an intuitive sidebar interface, automated CLI management, and cross-platform compatibility. Features include one-click package creation, smart build system, integrated testing, wallet management, and network switching.',
    tags: ['Sui', 'VS Code Extension', 'Move', 'Dev Tools'],
    links: {
      github: 'https://github.com/blockchainBard101/SuiMoveRunner',
      demo: 'https://marketplace.visualstudio.com/items?itemName=blockchainBard.suimoverunner',
    },
    highlights: [
      'Intuitive sidebar interface for all Sui Move operations',
      'One-click package creation, build, test, and publish',
      'Automated Sui CLI management with cross-platform support',
      'Integrated wallet management and balance tracking',
      'Multi-environment support (Testnet, Devnet, Mainnet)',
    ],
    image: '/images/icon.png',
    featured: true,
    status: 'completed',
    startDate: '2025-06-20',
    endDate: 'in progress',
    techStack: ['TypeScript', 'VS Code API', 'Sui CLI', 'Node.js'],
  },
  {
    slug: 'sui-string-formatter',
    title: 'Sui String Formatter',
    summary: 'Lightweight string formatting utility for Sui Move',
    description: 'A lightweight string formatting module for the Sui Move language, supporting both template-based formatting (like `{}` placeholders) and builder-style formatting using a `Formatter` struct. Bridges the gap left by native string formatting utilities in Sui Move.',
    tags: ['Sui', 'Move', 'Library', 'Utility'],
    links: {
      github: 'https://github.com/blockchainBard101/formatter',
    },
    highlights: [
      'Template-based formatting with placeholder support (`{}`)',
      'Builder-style formatting with chaining methods',
      'Support for common types: u64, bool, address, String, vector<u8>',
      'Braces escaping for literal braces in templates',
      'Clean and readable string formatting logic for Move programs',
    ],
    featured: true,
    status: 'completed',
    startDate: '2025-09-15',
    endDate: '2025-09-16',
    techStack: ['Move', 'Sui SDK'],
  },
  {
    slug: 'lending-borrowing-sui',
    title: 'Lending & Borrowing App on Sui',
    summary: 'DeFi lending and borrowing protocol built on Sui',
    description: 'A decentralized lending and borrowing application on the Sui blockchain, enabling users to lend their assets and earn interest, or borrow against their collateral. Built with Move smart contracts for secure and efficient DeFi operations.',
    tags: ['Sui', 'DeFi', 'Lending', 'Borrowing'],
    links: {
      github: 'https://github.com/blockchainBard101/lending-borrowing-app-sui',
    },
    highlights: [
      'Secure collateral management system',
      'Interest rate calculation and distribution',
      'Liquidation mechanism for protocol stability',
      'Real-time borrowing limits and health factors',
      'Move-based smart contracts for DeFi operations',
    ],
    featured: false,
    status: 'in-progress',
    startDate: '2025-01-15',
    techStack: ['Move', 'Sui SDK', 'DeFi'],
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
    featured: false,
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
