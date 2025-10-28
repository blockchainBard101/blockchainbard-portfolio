import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Play } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/section"

import { videos } from "@/data/videos"

export const metadata: Metadata = {
  title: "Videos",
  description: "Tutorials and deep dives on Sui development, smart contracts, and blockchain technology.",
}

export default function VideosPage() {
  const tutorialVideos = videos.filter(video => video.tags.includes('Tutorial'))
  const advancedVideos = videos.filter(video => video.tags.includes('Advanced'))
  const otherVideos = videos.filter(video => 
    !video.tags.includes('Tutorial') && !video.tags.includes('Advanced')
  )

  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Videos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutorials and deep dives on Sui development, smart contracts, and blockchain technology. 
            Learn by watching and building along.
          </p>
        </div>

        <div className="space-y-12">
          {/* Tutorial Videos */}
          {tutorialVideos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Tutorials
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {tutorialVideos.map((video) => (
                  <Card key={video.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                    {video.thumbnail && (
                      <div className="relative w-full h-48 bg-muted">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{video.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {video.duration}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          {video.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">
                        {video.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild size="sm" className="w-full">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Play className="mr-2 h-3 w-3" />
                          Watch Now
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
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

          {/* Advanced Videos */}
          {advancedVideos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Advanced Topics
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {advancedVideos.map((video) => (
                  <Card key={video.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                    {video.thumbnail && (
                      <div className="relative w-full h-48 bg-muted">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{video.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {video.duration}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          {video.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">
                        {video.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild size="sm" className="w-full">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Play className="mr-2 h-3 w-3" />
                          Watch Now
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
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

          {/* Other Videos */}
          {otherVideos.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Other Videos
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherVideos.map((video) => (
                  <Card key={video.title} className="group hover:shadow-lg transition-shadow overflow-hidden">
                    {video.thumbnail && (
                      <div className="relative w-full h-48 bg-muted">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{video.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {video.duration}
                        </span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          {video.title}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-3">
                        {video.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {video.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild size="sm" className="w-full">
                        <a 
                          href={video.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Play className="mr-2 h-3 w-3" />
                          Watch Now
                        </a>
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
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
