import Link from "next/link"
import { Github, Twitter, Youtube, Mail, Linkedin, ExternalLink, BookOpen } from "lucide-react"

import { socials } from "@/data/socials"

const iconMap = {
  github: Github,
  twitter: Twitter,
  youtube: Youtube,
  mail: Mail,
  linkedin: Linkedin,
  medium: BookOpen,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">BlockchainBard</h3>
            <p className="text-sm text-muted-foreground">
              AI, Backend & Smart Contract Developer building on Sui. 
              DevRel for Sui on Campus, Lead dev at Team Sushi & Voultron Games.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/writing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Resume
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://sui.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                >
                  Sui Network
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socials.slice(0, 4).map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} A. J. George (BlockchainBard). All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js on Sui energy ⚡️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
