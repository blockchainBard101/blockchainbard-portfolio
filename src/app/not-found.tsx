import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Section, Container } from "@/components/section"

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
