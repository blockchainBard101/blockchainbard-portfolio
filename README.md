# BlockchainBard Portfolio

A production-ready Next.js portfolio for A. J. George (BlockchainBard) - AI, Backend & Smart Contract Developer building on Sui.

## 🚀 Features

- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS** with dark mode support
- **shadcn/ui** components for consistent design
- **MDX blog** with Contentlayer for type-safe content
- **SEO optimized** with next-seo and sitemap generation
- **OG image generation** for social sharing
- **Contact form** with server actions
- **Responsive design** with mobile-first approach
- **Accessibility** features and keyboard navigation
- **Performance optimized** with static generation

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui + Radix UI
- **Content**: MDX with Contentlayer
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (OG images)
│   ├── projects/          # Project pages
│   ├── writing/           # Blog posts
│   ├── videos/            # Video gallery
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── nav.tsx           # Navigation
│   ├── footer.tsx        # Footer
│   ├── hero.tsx          # Hero section
│   └── ...               # Other components
├── data/                 # Static data
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills data
│   ├── writing.ts        # Writing data
│   ├── videos.ts         # Video data
│   ├── timeline.ts       # Timeline data
│   └── socials.ts        # Social links
└── lib/                  # Utilities
    └── utils.ts          # Helper functions

content/                  # MDX blog posts
├── writing/
└── *.mdx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bard-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Content Management

### Adding a New Project

1. Edit `src/data/projects.ts`
2. Add your project object with required fields:
```typescript
{
  slug: 'project-name',
  title: 'Project Title',
  summary: 'Brief description',
  description: 'Detailed description',
  tags: ['Sui', 'DeFi'],
  links: {
    github: 'https://github.com/...',
    demo: 'https://demo.com'
  },
  highlights: ['Key feature 1', 'Key feature 2'],
  image: '/images/project.png',
  featured: true,
  status: 'completed',
  startDate: '2024-01-01',
  techStack: ['TypeScript', 'React']
}
```

### Adding a New Blog Post

1. Create a new `.mdx` file in `content/writing/`
2. Add frontmatter:
```markdown
---
title: "Post Title"
description: "Post description"
date: "2024-01-01"
tags: ["Sui", "Tutorial"]
image: "/og/post-image.png"
published: true
---
```

### Adding a New Video

1. Edit `src/data/videos.ts`
2. Add your video object:
```typescript
{
  title: 'Video Title',
  platform: 'YouTube',
  url: 'https://youtube.com/watch?v=...',
  publishedAt: '2024-01-01',
  tags: ['Tutorial', 'Sui'],
  description: 'Video description',
  duration: '10:30'
}
```

## 🎨 Customization

### Colors and Theme

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'hsl(221.2 83.2% 53.3%)',
        foreground: 'hsl(210 40% 98%)',
      },
      // ... other colors
    }
  }
}
```

### Content

- **Personal Info**: Update `src/data/socials.ts` and `src/app/layout.tsx`
- **Skills**: Modify `src/data/skills.ts`
- **Timeline**: Edit `src/data/timeline.ts`
- **Projects**: Update `src/data/projects.ts`

## 📊 SEO & Performance

- **SEO**: Configured with next-seo for meta tags
- **Sitemap**: Auto-generated with next-sitemap
- **OG Images**: Dynamic generation with @vercel/og
- **Performance**: Optimized with Next.js Image component
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

The app is configured with `output: 'standalone'` for easy deployment to any Node.js hosting platform.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: hello@blockchainbard.dev
- **Twitter**: [@blockchainbard](https://x.com/blockchainbard)
- **GitHub**: [blockchainbard](https://github.com/blockchainbard)

---

Built with ❤️ by [A. J. George](https://blockchainbard.dev) using Next.js and Sui energy ⚡️