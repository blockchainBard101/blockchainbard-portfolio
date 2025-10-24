"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Youtube, ExternalLink, Code, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GradientText } from "@/components/ui/gradient-text"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const metrics = [
  { label: "DevRel", value: "Sui on Campus", icon: "🏫" },
  { label: "Lead Dev", value: "Team Sushi", icon: "🍣" },
  { label: "Lead Dev", value: "Voultron Games", icon: "🎮" },
  { label: "Open Source", value: "Sui Network", icon: "⚡" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/10 dark:via-background dark:to-purple-950/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,231,212,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(0,231,212,0.12),transparent_50%)]" />
      </div>

      <div className="container relative">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mx-auto max-w-5xl"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <motion.div variants={fadeInUp} className="mb-6">
                <Badge 
                  variant="secondary" 
                  className="mb-4 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-colors"
                >
                  <Code className="mr-2 h-4 w-4" />
                  AI, Backend & Smart Contract Developer
                </Badge>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Building on{" "}
                <GradientText variant="primary" className="font-bold">
                  Sui
                </GradientText>
                .<br />
                <span className="text-muted-foreground">Shipping tools, docs, and dApps.</span>
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="mb-8 text-lg text-muted-foreground sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0"
              >
                Smart contracts, backend systems, and AI—shipped fast and clean.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="group h-12 px-8 text-base font-medium">
                  <Link href="/projects">
                    Explore Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group h-12 px-8 text-base font-medium">
                  <Link href="/videos">
                    <Youtube className="mr-2 h-4 w-4" />
                    Watch Tutorials
                  </Link>
                </Button>
              </motion.div>

              {/* Metrics chips */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-3"
              >
                {metrics.map((metric, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="px-4 py-2 text-sm font-medium hover:bg-accent/50 transition-colors group"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform">
                      {metric.icon}
                    </span>
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="ml-1 font-medium text-foreground">{metric.value}</span>
                  </Badge>
                ))}
              </motion.div>
            </div>

            {/* Right decorative content */}
            <div className="relative">
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto max-w-md lg:max-w-lg"
              >
                {/* Decorative gradient circle */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-teal/20 rounded-full blur-3xl scale-110" />
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent-teal rounded-full flex items-center justify-center">
                        <Zap className="h-8 w-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          Sui Ecosystem
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Building the future of blockchain with innovative tools and dApps
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4 text-xs text-muted-foreground">
                        <span>Move</span>
                        <span>•</span>
                        <span>DeFi</span>
                        <span>•</span>
                        <span>NFTs</span>
                        <span>•</span>
                        <span>Gaming</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent-teal/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}