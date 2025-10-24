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
    title: 'How Transactions Work on Sui (No BS Guide)',
    platform: 'Medium',
    url: 'https://medium.com/@blockchainbard/how-transactions-work-on-sui-no-bs-guide',
    publishedAt: '2024-10-15',
    tags: ['Sui', 'Smart Contracts', 'Developers'],
    description: 'A builder-first walkthrough of Sui transactions, validators, and gas mechanics. No marketing fluff, just the technical details you need.',
    readTime: 8,
  },
  {
    title: 'The Psychology of DeFi: Why We Make Bad Trading Decisions',
    platform: 'Medium',
    url: 'https://medium.com/@blockchainbard/the-psychology-of-defi-why-we-make-bad-trading-decisions',
    publishedAt: '2024-09-28',
    tags: ['DeFi', 'Psychology', 'Trading'],
    description: 'Exploring the cognitive biases that affect DeFi traders and how to make better decisions in volatile markets.',
    readTime: 12,
  },
  {
    title: 'Building Your First Sui Smart Contract: A Complete Tutorial',
    platform: 'Medium',
    url: 'https://medium.com/@blockchainbard/building-your-first-sui-smart-contract-complete-tutorial',
    publishedAt: '2024-09-10',
    tags: ['Sui', 'Tutorial', 'Smart Contracts'],
    description: 'Step-by-step guide to building and deploying your first smart contract on Sui, from setup to deployment.',
    readTime: 15,
  },
  {
    title: 'The Future of On-Chain Gaming: Lessons from Voultron Games',
    platform: 'Substack',
    url: 'https://blockchainbard.substack.com/p/future-of-on-chain-gaming',
    publishedAt: '2024-08-22',
    tags: ['Gaming', 'Blockchain', 'On-chain'],
    description: 'Insights from building on-chain games and what the future holds for blockchain gaming infrastructure.',
    readTime: 10,
  },
  {
    title: 'Sui vs Other Blockchains: A Developer\'s Perspective',
    platform: 'Medium',
    url: 'https://medium.com/@blockchainbard/sui-vs-other-blockchains-developers-perspective',
    publishedAt: '2024-08-05',
    tags: ['Sui', 'Blockchain', 'Comparison'],
    description: 'Comparing Sui with other blockchain platforms from a developer\'s perspective, focusing on practical differences.',
    readTime: 14,
  },
  {
    title: 'The Art of Smart Contract Security: Common Pitfalls and How to Avoid Them',
    platform: 'Substack',
    url: 'https://blockchainbard.substack.com/p/smart-contract-security-pitfalls',
    publishedAt: '2024-07-18',
    tags: ['Security', 'Smart Contracts', 'Best Practices'],
    description: 'Essential security practices for smart contract development, covering common vulnerabilities and mitigation strategies.',
    readTime: 18,
  },
]

export const mediumPosts = writing.filter(post => post.platform === 'Medium')
export const substackPosts = writing.filter(post => post.platform === 'Substack')
export const personalPosts = writing.filter(post => post.platform === 'Personal')
