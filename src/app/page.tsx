import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Hero } from "@/components/hero"
import { Section, Container } from "@/components/section"
import { ProjectCard } from "@/components/project-card"
import { SkillsGrid } from "@/components/skills-grid"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

import { featuredProjects } from "@/data/projects"
import { latestVideos } from "@/data/videos"
import { writing } from "@/data/writing"
import { currentRoles } from "@/data/timeline"
import { NodesBackground } from "@/components/ui/nodes-background"

export default function Home() {
  const latestWriting = writing.slice(0, 3)
  const latestVideosList = latestVideos.slice(0, 3)

  return (
    <>
      <NodesBackground />
      <Hero />
      
      {/* Featured Projects */}
      <Section
        title="Featured Projects"
        description="Some of my recent work building on Sui and beyond"
        eyebrow="Portfolio"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* What I'm Doing Now */}
      <Section
        title="What I'm Doing Now"
        description="Current roles and focus areas"
        variant="muted"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              {currentRoles.map((role, index) => (
                <Card key={role.title} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {role.title}
                      </CardTitle>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Current
                      </Badge>
                    </div>
                    <CardDescription className="text-primary font-medium">
                      {role.org}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Skills Overview
              </h3>
              <SkillsGrid />
            </div>
          </div>
        </div>
      </Section>

      {/* Latest Writing */}
      <Section
        title="Latest Writing"
        description="Thoughts on Sui, DeFi, and blockchain development"
        eyebrow="Blog"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestWriting.map((post) => (
            <Card key={post.title} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.platform}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime} min read
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  <a 
                    href={post.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    {post.title}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 leading-relaxed">
                  {post.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/writing">
              View All Writing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Latest Videos */}
      <Section
        title="Latest Videos"
        description="Tutorials and deep dives on Sui development"
        eyebrow="Tutorials"
        variant="muted"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestVideosList.map((video) => (
            <Card key={video.title} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {video.platform}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {video.duration}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  <a 
                    href={video.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    {video.title}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 leading-relaxed">
                  {video.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 mt-3">
                  {video.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/videos">
              View All Videos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section
        title="Let's Work Together"
        description="Need a Sui smart contract/dev tools engineer? Let's talk."
        eyebrow="Contact"
      >
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}