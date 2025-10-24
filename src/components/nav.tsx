"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/writing" },
  { name: "Videos", href: "/videos" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled 
          ? "backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-sm" 
          : "backdrop-blur-sm bg-background/60 border-b border-border/20"
      )}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link 
            href="/" 
            className="mr-6 flex items-center space-x-2 group"
          >
            <span className="hidden font-bold sm:inline-block text-lg group-hover:text-primary transition-colors">
              BlockchainBard
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                  isActive
                    ? "text-foreground bg-accent/50"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link 
              href="/" 
              className="mr-6 flex items-center space-x-2 md:hidden group"
            >
              <span className="font-bold text-lg group-hover:text-primary transition-colors">
                BlockchainBard
              </span>
            </Link>
          </div>
          
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mr-2 px-2 hover:bg-accent/50 focus-visible:bg-accent/50 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] pr-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b">
                    <span className="font-bold text-lg">Menu</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="p-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex-1 px-6 py-6">
                    <nav className="flex flex-col space-y-2">
                      {navigation.map((item) => {
                        const isActive = pathname === item.href
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                              "flex items-center px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                              isActive
                                ? "text-foreground bg-accent/50"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                            {isActive && (
                              <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                            )}
                          </Link>
                        )
                      })}
                    </nav>
                    
                    <div className="mt-8 pt-6 border-t">
                      <Button asChild className="w-full" variant="outline">
                        <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                          Resume
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}