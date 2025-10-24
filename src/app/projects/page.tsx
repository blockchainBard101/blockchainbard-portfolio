import { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { Section, Container } from "@/components/section"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects built on Sui and beyond. Smart contracts, dApps, dev tools, and more.",
}

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built on Sui and beyond. From smart contracts 
            to dev tools, each project represents a step forward in blockchain development.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
