export interface Writing {
  title: string
  platform: 'Medium' | 'Substack' | 'Personal'
  url: string
  publishedAt: string
  tags: string[]
  description: string
  readTime?: number
}

export const writing: Writing[] = [
  {
    title: 'Sui Blockchain Consensus Mechanism',
    platform: 'Medium',
    url: 'https://medium.com/@bchainbard.annonymousasquare/sui-blockchain-consensus-mechanism-05888e248291',
    publishedAt: '2024-12-01',
    tags: ['Sui', 'Consensus', 'Blockchain'],
    description: 'Deep dive into Sui\'s unique consensus mechanism and how it enables high throughput and low latency.',
    readTime: 10,
  },
  {
    title: 'How Transactions Work on Sui',
    platform: 'Medium',
    url: 'https://medium.com/@bchainbard.annonymousasquare/how-transactions-work-on-sui-2bed38d4aaf2',
    publishedAt: '2024-11-15',
    tags: ['Sui', 'Transactions', 'Smart Contracts'],
    description: 'Comprehensive guide to understanding transaction processing, gas mechanics, and execution flow on Sui.',
    readTime: 12,
  },
  {
    title: 'Sui Isn\'t Just Faster, It\'s Built Differently: Understanding the Object-Based Blockchain Revolution',
    platform: 'Medium',
    url: 'https://medium.com/@bchainbard.annonymousasquare/sui-isnt-just-faster-it-s-built-differently-understanding-the-object-based-blockchain-revolution-00c32e24da51',
    publishedAt: '2024-10-20',
    tags: ['Sui', 'Architecture', 'Innovation'],
    description: 'Exploring Sui\'s revolutionary object-based model and how it fundamentally differs from traditional blockchain architectures.',
    readTime: 15,
  },
  {
    title: 'Sui Security Explained: 7 Powerful Reasons It\'s the Most Trusted Blockchain Ecosystem',
    platform: 'Medium',
    url: 'https://medium.com/@bchainbard.annonymousasquare/sui-security-explained-7-powerful-reasons-its-the-most-trusted-blockchain-ecosystem-b2c24f50a576',
    publishedAt: '2024-09-25',
    tags: ['Sui', 'Security', 'Trust'],
    description: 'Detailed analysis of Sui\'s security features and why it\'s considered one of the most secure blockchain platforms.',
    readTime: 14,
  },
  {
    title: 'Think Sui Is Cheap? Let\'s Break Down the Real Compute and Storage Costs',
    platform: 'Medium',
    url: 'https://medium.com/@bchainbard.annonymousasquare/think-sui-is-cheap-lets-break-down-the-real-compute-and-storage-costs-6f36e59afb0f',
    publishedAt: '2024-08-30',
    tags: ['Sui', 'Economics', 'Cost Analysis'],
    description: 'In-depth analysis of Sui\'s pricing model, including compute costs, storage fees, and economic sustainability.',
    readTime: 11,
  },
]

export const mediumPosts = writing.filter(post => post.platform === 'Medium')
export const substackPosts = writing.filter(post => post.platform === 'Substack')
export const personalPosts = writing.filter(post => post.platform === 'Personal')
