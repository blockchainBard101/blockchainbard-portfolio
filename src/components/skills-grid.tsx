"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

import { SkillPill } from "@/components/skill-pill"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { skills, skillCategories } from "@/data/skills"
import { cn } from "@/lib/utils"

const categoryIcons = {
  "Programming Languages": "💻",
  "Backend & APIs": "⚙️",
  "Blockchain & Web3": "⛓️",
  "AI & Data Science": "🤖",
  "Databases": "🗄️",
  "Frontend": "🎨",
  "Tools & Others": "🛠️",
}

export function SkillsGrid() {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(skillCategories.slice(0, 3)) // Show first 3 categories by default
  )

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-6">
      {skillCategories.map((category, categoryIndex) => {
        const categorySkills = skills.filter(skill => skill.category === category)
        const isExpanded = expandedCategories.has(category)
        const icon = categoryIcons[category as keyof typeof categoryIcons] || "🔧"
        
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{icon}</span>
                <h3 className="text-lg font-semibold text-foreground">{category}</h3>
                <Badge variant="secondary" className="text-xs">
                  {categorySkills.length}
                </Badge>
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleCategory(category)}
                className="md:hidden h-8 w-8 p-0"
              >
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            <AnimatePresence>
              {(isExpanded || typeof window === 'undefined' || window.innerWidth >= 768) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: skillIndex * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        <SkillPill skill={skill} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}