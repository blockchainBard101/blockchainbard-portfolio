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
    title: 'Sui Move Smart Contract Development Series',
    platform: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLJm5g76LAUuree2ABqs8REUxEFCvfor0T',
    publishedAt: '2024-12-01',
    tags: ['Sui', 'Move', 'Smart Contracts', 'Tutorial'],
    description: 'Comprehensive series covering Sui Move smart contract development from basics to advanced concepts, including module design, testing, and deployment.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    title: 'Enoki Dev Series',
    platform: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLJm5g76LAUur4YzeloQBcPbO5QMutYiNN',
    publishedAt: '2024-11-15',
    tags: ['Enoki', 'Dev Tools', 'Infrastructure', 'Tutorial'],
    description: 'Deep dive into Enoki development tools and infrastructure for building scalable decentralized applications on Sui.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    title: 'Walrus Dev Series',
    platform: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLJm5g76LAUuoz9XqKp1r9RATIi6_ofpJY',
    publishedAt: '2024-10-20',
    tags: ['Walrus', 'DeFi', 'Protocol', 'Tutorial'],
    description: 'Building with Walrus Protocol - tutorials on integrating and developing DeFi applications using Walrus infrastructure on Sui.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
]

export const latestVideos = videos.slice(0, 3)
export const tutorialVideos = videos
export const advancedVideos = videos.filter(video => video.tags.includes('Advanced'))
