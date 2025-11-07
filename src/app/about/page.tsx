import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Section, Container } from "@/components/section"
import { SkillsGrid } from "@/components/skills-grid"
import { Timeline } from "@/components/timeline"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { timeline } from "@/data/timeline"
import { socials } from "@/data/socials"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about A. J. George (BlockchainBard), a developer with expertise in smart contracts, AI, and backend systems.",
}

export default function AboutPage() {
  const workExperience = timeline.filter(event => event.type === 'work')
  const education = timeline.filter(event => event.type === 'education')
  const achievements = timeline.filter(event => event.type === 'achievement')

  return (
    <>
      {/* Hero Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Hi, I'm A. J. George
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Also known as <strong>BlockchainBard</strong> — a developer passionate about 
                building the future of technology through blockchain, AI, and backend systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                I specialize in smart contracts, backend systems, and AI development. 
                Currently serving as DevRel for Sui on Campus, helping onboard developers to blockchain technology.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="default">Blockchain Developer</Badge>
                <Badge variant="outline">DevRel</Badge>
                <Badge variant="outline">AI Engineer</Badge>
                <Badge variant="outline">Open Source</Badge>
              </div>

              <div className="flex flex-wrap gap-4">
                {socials.filter(social => ['X (Twitter)', 'GitHub', 'YouTube', 'LinkedIn', 'Medium'].includes(social.name)).map((social) => (
                  <Button asChild key={social.name} variant="outline" size="sm">
                    <Link href={social.url} target="_blank" rel="noopener noreferrer">
                      {social.name}
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                ))}
                <Button asChild variant="default" size="sm">
                  <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    Download Resume
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl">🤓</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Photo coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bio Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              My Story
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a Mechatronics Engineering graduate from FUT Minna with a passion for 
                technology and innovation. My journey began with a deep fascination for AI 
                and machine learning, which led me to explore computer vision, robotics, and 
                automation. This passion for AI/ML has been a driving force throughout my career, 
                from research projects to freelance work developing intelligent systems.
              </p>
              <p>
                My curiosity about smart contracts eventually drew me into blockchain development, 
                where I've built expertise across multiple ecosystems and protocols. As DevRel for 
                Sui on Campus, I help onboard new developers to blockchain technology through educational 
                content, workshops, and starter repositories.
              </p>
              <p>
                I believe in the power of open source and community-driven development. 
                When I'm not coding, you'll find me writing about blockchain technology, 
                creating tutorial videos, or contributing to the broader developer community.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills Section */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Skills & Expertise
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>
          <SkillsGrid />
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Timeline
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              My journey through education, work, and achievements
            </p>
          </div>
          <Timeline events={timeline} />
        </Container>
      </Section>

      {/* Current Focus */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Current Focus</CardTitle>
                <CardDescription>What I'm working on right now</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Smart contract development</li>
                  <li>• Developer tooling and SDKs</li>
                  <li>• On-chain gaming infrastructure</li>
                  <li>• Educational content creation</li>
                  <li>• Open source contributions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Values</CardTitle>
                <CardDescription>What drives my work</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Open source and transparency</li>
                  <li>• Community-driven development</li>
                  <li>• Continuous learning and growth</li>
                  <li>• Building for the long term</li>
                  <li>• Empowering other developers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interests</CardTitle>
                <CardDescription>Beyond blockchain development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• AI and machine learning</li>
                  <li>• Robotics and automation</li>
                  <li>• Game development</li>
                  <li>• Technical writing</li>
                  <li>• Mentoring and teaching</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  )
}
