export interface SocialLink {
  name: string
  url: string
  icon: string
  username: string
  description: string
}

export const socials: SocialLink[] = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/blockchainbard',
    icon: 'twitter',
    username: '@blockchainbard',
    description: 'Follow me for blockchain insights and development updates',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/blockchainbard',
    icon: 'github',
    username: 'blockchainbard',
    description: 'Check out my open source projects and contributions',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@blockchainbard_ai',
    icon: 'youtube',
    username: '@blockchainbard_ai',
    description: 'Watch my tutorials and technical deep dives',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@blockchainbard',
    icon: 'medium',
    username: '@blockchainbard',
    description: 'Read my articles on blockchain development and DeFi',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/aj-george-blockchain',
    icon: 'linkedin',
    username: 'aj-george-blockchain',
    description: 'Connect with me professionally',
  },
  {
    name: 'Email',
    url: 'mailto:hello@blockchainbard.dev',
    icon: 'mail',
    username: 'hello@blockchainbard.dev',
    description: 'Get in touch for collaborations or opportunities',
  },
]

export const primarySocials = socials.filter(social => 
  ['X (Twitter)', 'GitHub', 'YouTube', 'Medium'].includes(social.name)
)
