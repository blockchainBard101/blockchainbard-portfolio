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
    status: 'in-progress',
    startDate: '2025-06-20',
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
      docs: 'https://www.moveregistry.com/package/@pkg/formatter',
    },
    highlights: [
      'Template-based formatting with placeholder support (`{}`)',
      'Builder-style formatting with chaining methods',
      'Support for common types: u64, bool, address, String, vector<u8>',
      'Braces escaping for literal braces in templates',
      'Clean and readable string formatting logic for Move programs',
    ],
    image: '/images/mvr.png',
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
    featured: true,
    status: 'in-progress',
    startDate: '2025-01-15',
    techStack: ['Move', 'Sui SDK', 'DeFi'],
  },
  {
    slug: 'decentralized-voting-app-sui',
    title: 'Decentralized Voting Application on Sui',
    summary: 'A decentralized voting system built on the Sui blockchain',
    description: 'A decentralized voting system built on the Sui blockchain, enabling secure, transparent, and tamper-proof elections. Built with Move smart contracts and a React frontend for seamless user experience.',
    tags: ['Sui', 'DeFi', 'Voting', 'Blockchain'],
    links: {
      github: 'https://github.com/blockchainBard101/Decentralized-voting-app-sui',
      demo: 'https://www.youtube.com/watch?v=KiHmlAuvpRI',
    },
    highlights: [
      'Smart contract-based elections',
      'Secure voting mechanism',
      'Real-time results display',
      'Immutable and transparent voting records',
      'Privacy-preserving voter anonymity',
    ],
    featured: false,
    status: 'completed',
    startDate: '2024-09-01',
    endDate: '2024-10-19',
    techStack: ['Move', 'React', 'TypeScript', 'Sui SDK', 'Node.js'],
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
    slug: 'handwritten-digit-recognition',
    title: 'Handwritten Digit Recognition System',
    summary: 'Deep learning-based system for recognizing handwritten digits using CNN',
    description: 'A deep learning-based system for recognizing handwritten digits using a Convolutional Neural Network (CNN). The system processes images in real-time and accurately classifies handwritten digits.',
    tags: ['AI/ML', 'Deep Learning', 'Computer Vision', 'CNN'],
    links: {},
    highlights: [
      'Digit classification using CNN',
      'Real-time image processing',
      'High accuracy recognition',
      'OpenCV integration for image handling',
    ],
    featured: false,
    status: 'completed',
    startDate: '2022-06-01',
    endDate: '2022-08-01',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
  },
  {
    slug: 'movie-recommendation-system',
    title: 'Movie Recommendation System',
    summary: 'Machine learning model for personalized movie recommendations',
    description: 'A machine learning model that recommends movies based on user preferences and viewing history. Implements both collaborative filtering and content-based recommendation approaches.',
    tags: ['AI/ML', 'Machine Learning', 'Recommendation System', 'Data Science'],
    links: {},
    highlights: [
      'Collaborative filtering',
      'Content-based recommendation',
      'User preference analysis',
      'Personalized movie suggestions',
    ],
    featured: false,
    status: 'completed',
    startDate: '2022-03-01',
    endDate: '2022-05-01',
    techStack: ['Python', 'scikit-learn', 'Pandas', 'NumPy'],
  },
]

export const featuredProjects = projects.filter(project => project.featured)
export const completedProjects = projects.filter(project => project.status === 'completed')
export const inProgressProjects = projects.filter(project => project.status === 'in-progress')
