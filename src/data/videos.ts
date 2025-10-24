export interface Video {
  title: string
  platform: 'YouTube'
  url: string
  publishedAt: string
  tags: string[]
  description: string
  duration?: string
  thumbnail?: string
}

export const videos: Video[] = [
  {
    title: 'Sui Smart Contract Development: Complete Beginner Guide',
    platform: 'YouTube',
    url: 'https://youtube.com/watch?v=sui-smart-contract-beginner',
    publishedAt: '2024-10-20',
    tags: ['Sui', 'Tutorial', 'Smart Contracts', 'Beginner'],
    description: 'Learn how to build and deploy your first smart contract on Sui from scratch. Perfect for developers new to blockchain development.',
    duration: '45:30',
    thumbnail: '/images/video-thumbnails/sui-smart-contract-beginner.jpg',
  },
  {
    title: 'Building DeFi Protocols on Sui: AMM Implementation',
    platform: 'YouTube',
    url: 'https://youtube.com/watch?v=sui-defi-amm-implementation',
    publishedAt: '2024-10-10',
    tags: ['Sui', 'DeFi', 'AMM', 'Advanced'],
    description: 'Deep dive into building an Automated Market Maker (AMM) on Sui, covering liquidity pools, swaps, and yield farming.',
    duration: '1:25:15',
    thumbnail: '/images/video-thumbnails/sui-defi-amm.jpg',
  },
  {
    title: 'Sui SDK Integration: Building Frontend dApps',
    platform: 'YouTube',
    url: 'https://youtube.com/watch?v=sui-sdk-frontend-integration',
    publishedAt: '2024-09-25',
    tags: ['Sui', 'Frontend', 'SDK', 'React'],
    description: 'Complete guide to integrating Sui SDK with React frontend applications, including wallet connection and transaction handling.',
    duration: '38:45',
    thumbnail: '/images/video-thumbnails/sui-sdk-frontend.jpg',
  },
  {
    title: 'On-Chain Gaming with Sui: Building Voultron Games',
    platform: 'YouTube',
    url: 'https://youtube.com/watch?v=sui-onchain-gaming-voultron',
    publishedAt: '2024-09-15',
    tags: ['Sui', 'Gaming', 'On-chain', 'Case Study'],
    description: 'Behind-the-scenes look at building on-chain games with Sui, featuring real examples from Voultron Games development.',
    duration: '52:20',
    thumbnail: '/images/video-thumbnails/sui-onchain-gaming.jpg',
  },
  {
    title: 'Sui Network Architecture: Understanding Validators and Consensus',
    platform: 'YouTube',
    url: 'https://youtube.com/watch?v=sui-network-architecture-validators',
    publishedAt: '2024-09-05',
    tags: ['Sui', 'Architecture', 'Validators', 'Consensus'],
    description: 'Technical deep dive into Sui\'s unique consensus mechanism and validator architecture that enables high throughput.',
    duration: '1:10:30',
    thumbnail: '/images/video-thumbnails/sui-network-architecture.jpg',
  },
  {
    title: 'Sui Development Tools: CLI, Testing, and Debugging',
    platform: 'YouTube',
    url: 'https://youtube.com/watch?v=sui-development-tools-cli-testing',
    publishedAt: '2024-08-28',
    tags: ['Sui', 'Dev Tools', 'CLI', 'Testing'],
    description: 'Comprehensive overview of Sui development tools, including CLI commands, testing frameworks, and debugging techniques.',
    duration: '41:15',
    thumbnail: '/images/video-thumbnails/sui-dev-tools.jpg',
  },
]

export const latestVideos = videos.slice(0, 3)
export const tutorialVideos = videos.filter(video => video.tags.includes('Tutorial'))
export const advancedVideos = videos.filter(video => video.tags.includes('Advanced'))
