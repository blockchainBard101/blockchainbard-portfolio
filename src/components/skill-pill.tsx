"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Skill } from "@/data/skills"

interface SkillPillProps {
  skill: Skill
  className?: string
}

const levelConfig = {
  beginner: {
    color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
    glow: "hover:shadow-green-200 dark:hover:shadow-green-900/50",
    icon: "🌱"
  },
  intermediate: {
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
    glow: "hover:shadow-blue-200 dark:hover:shadow-blue-900/50",
    icon: "📈"
  },
  advanced: {
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
    glow: "hover:shadow-orange-200 dark:hover:shadow-orange-900/50",
    icon: "🚀"
  },
  expert: {
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
    glow: "hover:shadow-purple-200 dark:hover:shadow-purple-900/50",
    icon: "⭐"
  },
}

export function SkillPill({ skill, className }: SkillPillProps) {
  const config = levelConfig[skill.level]
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      viewport={{ once: true }}
      className={cn("inline-block", className)}
    >
      <Badge 
        variant="outline" 
        className={cn(
          "px-3 py-1.5 text-sm font-medium transition-all duration-200 cursor-default group relative overflow-hidden",
          config.color,
          config.glow,
          "hover:shadow-lg hover:border-current/50"
        )}
      >
        <span className="relative z-10 flex items-center space-x-1.5">
          <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
            {config.icon}
          </span>
          <span>{skill.name}</span>
        </span>
        
        {/* Subtle background animation on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </Badge>
    </motion.div>
  )
}