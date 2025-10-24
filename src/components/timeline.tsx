"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Tag } from "@/components/tag"
import { TimelineEvent } from "@/data/timeline"

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={`${event.yearOrDate}-${event.title}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex items-start md:items-center"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full bg-primary md:left-1/2">
              {event.current && (
                <div className="absolute inset-0 rounded-full bg-primary animate-ping" />
              )}
            </div>
            
            {/* Content */}
            <div className={`ml-8 w-full md:ml-0 md:w-1/2 ${
              index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
            }`}>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    {event.yearOrDate}
                  </span>
                  {event.current && (
                    <Badge variant="default" className="text-xs">
                      Current
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {event.title}
                </h3>
                
                <p className="text-sm font-medium text-primary mb-2">
                  {event.org}
                </p>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((tag) => (
                    <Tag key={tag} variant="outline" size="sm">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
