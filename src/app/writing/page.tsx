import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section, Container } from "@/components/section"

import { writing } from "@/data/writing"

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on Sui, DeFi, blockchain development, and the future of on-chain technology.",
}

export default function WritingPage() {
  const mediumPosts = writing.filter(post => post.platform === 'Medium')
  const substackPosts = writing.filter(post => post.platform === 'Substack')
  const personalPosts = writing.filter(post => post.platform === 'Personal')

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Writing
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts on Sui, DeFi, blockchain development, and the future of on-chain technology. 
            I write about what I learn and build.
          </p>
        </div>

        <div className="space-y-12">
          {/* Medium Posts */}
          {mediumPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Medium Articles
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {mediumPosts.map((post) => (
                  <Card key={post.title} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.readTime} min read
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          {post.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">
                        {post.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Substack Posts */}
          {substackPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Substack Newsletter
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {substackPosts.map((post) => (
                  <Card key={post.title} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.readTime} min read
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <a 
                          href={post.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          {post.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">
                        {post.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Personal Posts (MDX) */}
          {personalPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Personal Blog
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {personalPosts.map((post) => (
                  <Card key={post.title} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{post.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {post.readTime} min read
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <Link href={`/writing/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">
                        {post.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}
