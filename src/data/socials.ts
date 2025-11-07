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
    url: 'https://x.com/web3Bard101',
    icon: 'twitter',
    username: '@web3Bard101',
    description: 'Follow me for blockchain insights and development updates',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/blockchainBard101',
    icon: 'github',
    username: 'blockchainBard101',
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
    url: 'https://www.linkedin.com/in/george-junior-alainengiya-5b44b5251',
    icon: 'linkedin',
    username: 'george-junior-alainengiya',
    description: 'Connect with me professionally',
  },
  {
    name: 'Email',
    url: 'mailto:bchainbard.annonymousasquare@gmail.com',
    icon: 'mail',
    username: 'bchainbard.annonymousasquare@gmail.com',
    description: 'Get in touch for collaborations or opportunities',
  },
]

export const primarySocials = socials.filter(social => 
  ['X (Twitter)', 'GitHub', 'YouTube', 'Medium'].includes(social.name)
)
