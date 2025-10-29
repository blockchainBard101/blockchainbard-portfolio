"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Github,
  Youtube,
  ExternalLink,
  Code,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GradientText } from "@/components/ui/gradient-text";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const metrics = [
  { label: "DevRel", value: "Sui on Campus", icon: "🏫" },
  { label: "Lead Dev", value: "Team Sushi", icon: "🍣" },
  { label: "Lead Dev", value: "Voultron Games", icon: "🎮" },
  { label: "Open Source", value: "Sui Network", icon: "⚡" },
];

export function Hero() {
  const { resolvedTheme } = useTheme();
  
  // Use resolvedTheme which is safe for SSR, default to 'dark' if undefined
  const textColor = (resolvedTheme ?? 'dark') === 'dark' ? '#ffffff' : '#000000';
  const borderColor = (resolvedTheme ?? 'dark') === 'dark' ? '#ffffff' : '#000000';
  
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 [&_button]:dark:text-accent-teal [&_button_span]:dark:text-accent-teal [&_a]:dark:text-accent-teal">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:hidden" />
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
                <span className="text-muted-foreground">
                  Shipping tools, docs, and dApps.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mb-8 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0"
                style={{ 
                  color: textColor
                }}
              >
                Smart contracts, backend systems, and AI—shipped fast and clean.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
              >
                {/* Primary */}
                <Button
                  asChild
                  size="lg"
                  className="group h-12 px-8 text-base font-medium"
                  style={{ color: textColor }}
                >
                  <Link href="/projects" style={{ color: textColor }}>
                    Explore Projects
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: textColor }} />
                  </Link>
                </Button>

                {/* Outline — match light mode border + text in dark */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group h-12 px-8 text-base font-medium"
                  style={{ borderColor: borderColor, color: textColor }}
                >
                  <a href="https://www.youtube.com/@blockchainbard_ai" target="_blank" rel="noopener noreferrer" style={{ color: textColor }}>
                    <Youtube className="mr-2 h-4 w-4" style={{ color: textColor }} />
                    Watch Tutorials
                  </a>
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
                    className="px-4 py-2 text-sm font-medium transition-colors group
                 border-zinc-200 dark:border-white"
                    style={{ borderColor: borderColor }}
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform" style={{ color: textColor }}>
                      {metric.icon}
                    </span>

                    <span style={{ color: textColor }}>
                      {metric.label}
                    </span>
                    <span className="ml-1 font-medium" style={{ color: textColor }}>
                      {metric.value}
                    </span>
                  </Badge>
                ))}
              </motion.div>
            </div>

            {/* Profile Picture */}
            <div className="relative">
              <motion.div
                variants={fadeInUp}
                className="relative mx-auto max-w-md lg:max-w-lg"
              >
                {/* Profile picture with decorative elements */}
                <div className="relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-teal/20 rounded-full blur-3xl scale-110" />

                  {/* Profile image container */}
                  <div className="relative bg-gradient-to-br from-primary/10 to-accent-teal/10 rounded-2xl p-8 border border-border/50 dark:border-white backdrop-blur-sm" style={{ borderColor: borderColor }}>
                    <div className="text-center space-y-6">
                      {/* Profile Picture */}
                      <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-teal rounded-full p-1">
                          <div className="w-full h-full rounded-full overflow-hidden bg-background">
                            <Image
                              src="/images/profile-picture.jpg"
                              alt="A. J. George (BlockchainBard)"
                              width={160}
                              height={160}
                              className="w-full h-full object-cover"
                              priority
                            />
                          </div>
                        </div>
                        {/* Status indicator */}
                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-2 border-background rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        </div>
                      </div>

                      {/* Name and title */}
                      <div className="space-y-2">
                        <h3 
                          className="text-xl font-bold text-foreground dark:text-white"
                          style={{ color: textColor }}
                        >
                          A. J. George
                        </h3>
                        <p 
                          className="text-sm text-muted-foreground dark:text-white font-medium"
                          style={{ color: textColor }}
                        >
                          BlockchainBard
                        </p>
                        <p 
                          className="text-xs text-foreground dark:text-white"
                          style={{ color: textColor }}
                        >
                          Building on Sui • DevRel • Lead Developer
                        </p>
                      </div>

                      {/* Tech stack indicators */}
                      <div 
                        className="flex justify-center space-x-3 text-xs text-muted-foreground dark:text-white"
                        style={{ color: textColor }}
                      >
                        <span 
                          className="px-2 py-1 bg-primary/10 text-foreground dark:text-white rounded-full"
                          style={{ color: textColor }}
                        >
                          Move
                        </span>
                        <span 
                          className="px-2 py-1 bg-accent-teal/10 text-foreground dark:text-white rounded-full"
                          style={{ color: textColor }}
                        >
                          DeFi
                        </span>
                        <span 
                          className="px-2 py-1 bg-primary/10 text-foreground dark:text-white rounded-full"
                          style={{ color: textColor }}
                        >
                          AI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-accent-teal/20 rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
