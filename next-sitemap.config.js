/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://blockchainbard.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://blockchainbard.dev/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transform for different page types
    const customConfig = {
      loc: path,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0
      customConfig.changefreq = 'daily'
    }

    // Project pages get high priority
    if (path.startsWith('/projects/')) {
      customConfig.priority = 0.9
      customConfig.changefreq = 'monthly'
    }

    // Writing pages get high priority
    if (path.startsWith('/writing/')) {
      customConfig.priority = 0.8
      customConfig.changefreq = 'monthly'
    }

    return customConfig
  },
}
