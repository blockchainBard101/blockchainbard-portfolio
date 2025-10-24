"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, ArrowRight, CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tag } from "@/components/tag"
import { Project } from "@/data/projects"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasSuiTag = project.tags.some(tag => tag.toLowerCase().includes('sui'))
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className={cn(
        "group h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary/40",
        hasSuiTag && "hover:shadow-glow-teal",
        featured && "ring-2 ring-primary/20"
      )}>
        {project.image && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground shadow-lg">
                  Featured
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        
        <CardHeader className="pb-4">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {project.summary}
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4 pb-4">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => {
              const isSui = tag.toLowerCase().includes('sui')
              return (
                <Tag 
                  key={tag} 
                  variant={isSui ? "default" : "outline"} 
                  size="sm"
                  className={cn(
                    "transition-all duration-200",
                    isSui && "bg-accent-teal/10 text-accent-teal border-accent-teal/20 hover:bg-accent-teal/20"
                  )}
                >
                  {tag}
                </Tag>
              )
            })}
            {project.tags.length > 3 && (
              <Tag variant="outline" size="sm" className="text-muted-foreground">
                +{project.tags.length - 3} more
              </Tag>
            )}
          </div>
          
          {project.highlights.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground">Key Features</h4>
              <ul className="space-y-1">
                {project.highlights.slice(0, 2).map((highlight, index) => (
                  <li key={index} className="flex items-start text-sm text-muted-foreground">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-1">
            {project.links.github && (
              <Button 
                asChild 
                variant="ghost" 
                size="sm"
                className="h-8 w-8 p-0 hover:bg-accent/50 transition-colors"
              >
                <Link 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button 
                asChild 
                variant="ghost" 
                size="sm"
                className="h-8 w-8 p-0 hover:bg-accent/50 transition-colors"
              >
                <Link 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          
          <Button 
            asChild 
            variant="outline" 
            size="sm"
            className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <Link href={`/projects/${project.slug}`} className="flex items-center">
              View Details
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}