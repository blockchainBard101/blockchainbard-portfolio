import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "@/components/tag"
import { Section, Container } from "@/components/section"

import { projects } from "@/data/projects"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.tags.some(tag => project.tags.includes(tag)))
    .slice(0, 3)

  return (
    <>
      <Section>
        <Container>
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                  {project.featured && (
                    <Badge variant="outline">Featured</Badge>
                  )}
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                  {project.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Tag key={tag} variant="outline">
                      {tag}
                    </Tag>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.links.github && (
                    <Button asChild>
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button asChild variant="outline">
                      <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.links.demo.includes('marketplace.visualstudio.com') ? 'View Extension' : 
                         project.links.demo.includes('youtube.com') || project.links.demo.includes('youtu.be') ? 'Watch Video' : 
                         'View Project'}
                      </Link>
                    </Button>
                  )}
                  {project.links.docs && (
                    <Button asChild variant="outline">
                      <Link href={project.links.docs} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Documentation
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {project.image && (
                <div className="mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              )}

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                    About This Project
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.highlights.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                      Key Highlights
                    </h2>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 text-primary font-bold">•</span>
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                    Tech Stack
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Tag key={tech} variant="secondary">
                        {tech}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground">Status</h4>
                    <p className="text-sm text-muted-foreground capitalize">{project.status}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Started</h4>
                    <p className="text-sm text-muted-foreground">
                      {new Date(project.startDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  {project.endDate && (
                    <div>
                      <h4 className="font-medium text-foreground">Completed</h4>
                      <p className="text-sm text-muted-foreground">
                        {new Date(project.endDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {relatedProjects.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Related Projects</CardTitle>
                    <CardDescription>
                      Other projects you might be interested in
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {relatedProjects.map((relatedProject) => (
                      <Link
                        key={relatedProject.slug}
                        href={`/projects/${relatedProject.slug}`}
                        className="block p-3 rounded-lg border hover:bg-muted transition-colors"
                      >
                        <h4 className="font-medium text-foreground mb-1">
                          {relatedProject.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProject.summary}
                        </p>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
