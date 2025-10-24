import { Metadata } from "next"
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react"

import { Section, Container } from "@/components/section"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { socials } from "@/data/socials"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with A. J. George (BlockchainBard) for collaborations, opportunities, or just to say hello.",
}

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-6">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm always interested in new opportunities and collaborations. Whether you need 
                help with Sui smart contract development, building dev tools, or creating 
                educational content, I'm here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">hello@blockchainbard.dev</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Nigeria (Remote)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>What I Can Help With</CardTitle>
                <CardDescription>
                  Areas where I can add value to your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Sui smart contract development and auditing</li>
                  <li>• Building developer tools and SDKs</li>
                  <li>• Backend system architecture and development</li>
                  <li>• AI/ML integration and development</li>
                  <li>• Technical writing and documentation</li>
                  <li>• Educational content creation</li>
                  <li>• Open source project contributions</li>
                  <li>• Mentoring and technical consulting</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>
                  Follow my work and stay updated
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {socials.map((social) => (
                    <Button 
                      key={social.name} 
                      asChild 
                      variant="outline" 
                      className="justify-start"
                    >
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {social.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
