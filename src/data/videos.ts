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
    title: 'Sui Development Tutorials - Part 1',
    platform: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLJm5g76LAUuree2ABqs8REUxEFCvfor0T',
    publishedAt: '2024-12-01',
    tags: ['Sui', 'Tutorial', 'Playlist'],
    description: 'Collection of tutorials covering various aspects of Sui blockchain development and smart contract programming.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    title: 'Sui Development Tutorials - Part 2',
    platform: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLJm5g76LAUur4YzeloQBcPbO5QMutYiNN',
    publishedAt: '2024-11-15',
    tags: ['Sui', 'Tutorial', 'Playlist'],
    description: 'Advanced tutorials on building with Sui, including DeFi protocols, smart contract best practices, and SDK integration.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
  {
    title: 'Sui Development Tutorials - Part 3',
    platform: 'YouTube',
    url: 'https://www.youtube.com/playlist?list=PLJm5g76LAUuoz9XqKp1r9RATIi6_ofpJY',
    publishedAt: '2024-10-20',
    tags: ['Sui', 'Tutorial', 'Playlist'],
    description: 'Comprehensive tutorial series on Sui development, covering fundamentals, practical examples, and real-world applications.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
  },
]

export const latestVideos = videos.slice(0, 3)
export const tutorialVideos = videos
export const advancedVideos = videos.filter(video => video.tags.includes('Advanced'))
