"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, ExternalLink, AlertCircle, Info, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Custom components for MDX content
export const MDXComponents = {
  // Headings with better styling
  h1: ({ children, ...props }: any) => (
    <h1 
      className="text-4xl font-bold tracking-tight text-foreground mb-6 mt-8 first:mt-0" 
      {...props}
    >
      {children}
    </h1>
  ),
  
  h2: ({ children, ...props }: any) => (
    <h2 
      className="text-3xl font-semibold tracking-tight text-foreground mb-4 mt-8 first:mt-0 border-b border-border pb-2" 
      {...props}
    >
      {children}
    </h2>
  ),
  
  h3: ({ children, ...props }: any) => (
    <h3 
      className="text-2xl font-semibold tracking-tight text-foreground mb-3 mt-6 first:mt-0" 
      {...props}
    >
      {children}
    </h3>
  ),
  
  h4: ({ children, ...props }: any) => (
    <h4 
      className="text-xl font-semibold tracking-tight text-foreground mb-2 mt-4 first:mt-0" 
      {...props}
    >
      {children}
    </h4>
  ),

  // Paragraphs with better spacing
  p: ({ children, ...props }: any) => (
    <p 
      className="text-base text-foreground mb-4 leading-relaxed" 
      {...props}
    >
      {children}
    </p>
  ),

  // Lists with better styling
  ul: ({ children, ...props }: any) => (
    <ul 
      className="list-disc list-inside space-y-2 mb-4 text-foreground" 
      {...props}
    >
      {children}
    </ul>
  ),
  
  ol: ({ children, ...props }: any) => (
    <ol 
      className="list-decimal list-inside space-y-2 mb-4 text-foreground" 
      {...props}
    >
      {children}
    </ol>
  ),
  
  li: ({ children, ...props }: any) => (
    <li 
      className="text-foreground leading-relaxed" 
      {...props}
    >
      {children}
    </li>
  ),

  // Links with better styling
  a: ({ children, href, ...props }: any) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline underline-offset-4 hover:underline-offset-2 transition-all duration-200 inline-flex items-center gap-1"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
      {href?.startsWith('http') && (
        <ExternalLink className="h-3 w-3" />
      )}
    </a>
  ),

  // Code blocks with copy functionality
  pre: ({ children, ...props }: any) => {
    const [copied, setCopied] = useState(false)
    const codeString = children?.props?.children || ''

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(codeString)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy code:', err)
      }
    }

    return (
      <div className="relative group">
        <pre 
          className="bg-muted border rounded-lg p-4 overflow-x-auto text-sm font-mono text-foreground mb-4"
          {...props}
        >
          {children}
        </pre>
        <Button
          size="sm"
          variant="ghost"
          onClick={handleCopy}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8 p-0"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    )
  },

  // Inline code
  code: ({ children, ...props }: any) => (
    <code 
      className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono" 
      {...props}
    >
      {children}
    </code>
  ),

  // Blockquotes with better styling
  blockquote: ({ children, ...props }: any) => (
    <blockquote 
      className="border-l-4 border-primary/20 pl-4 py-2 my-4 italic text-muted-foreground bg-muted/50 rounded-r-lg" 
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Tables with better styling
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto my-6">
      <table 
        className="w-full border-collapse border border-border rounded-lg" 
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  
  th: ({ children, ...props }: any) => (
    <th 
      className="border border-border px-4 py-2 text-left font-semibold text-foreground bg-muted" 
      {...props}
    >
      {children}
    </th>
  ),
  
  td: ({ children, ...props }: any) => (
    <td 
      className="border border-border px-4 py-2 text-foreground" 
      {...props}
    >
      {children}
    </td>
  ),

  // Horizontal rule
  hr: ({ ...props }: any) => (
    <hr 
      className="my-8 border-border" 
      {...props}
    />
  ),

  // Custom callout components
  Callout: ({ type = "info", children, ...props }: any) => {
    const calloutConfig = {
      info: {
        icon: Info,
        className: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100",
        iconColor: "text-blue-600 dark:text-blue-400"
      },
      warning: {
        icon: AlertCircle,
        className: "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100",
        iconColor: "text-yellow-600 dark:text-yellow-400"
      },
      tip: {
        icon: Lightbulb,
        className: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100",
        iconColor: "text-green-600 dark:text-green-400"
      }
    }

    const config = calloutConfig[type as keyof typeof calloutConfig] || calloutConfig.info
    const Icon = config.icon

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "rounded-lg border p-4 my-6 flex items-start gap-3",
          config.className
        )}
        {...props}
      >
        <Icon className={cn("h-5 w-5 mt-0.5 flex-shrink-0", config.iconColor)} />
        <div className="text-sm leading-relaxed">
          {children}
        </div>
      </motion.div>
    )
  },

  // Badge component for tags
  Badge: ({ children, variant = "secondary", ...props }: any) => (
    <Badge 
      variant={variant} 
      className="text-xs font-medium"
      {...props}
    >
      {children}
    </Badge>
  ),

  // Image with better styling
  img: ({ src, alt, ...props }: any) => (
    <img
      src={src}
      alt={alt}
      className="rounded-lg border border-border shadow-sm my-6 max-w-full h-auto"
      {...props}
    />
  ),

  // Strong text
  strong: ({ children, ...props }: any) => (
    <strong 
      className="font-semibold text-foreground" 
      {...props}
    >
      {children}
    </strong>
  ),

  // Emphasis text
  em: ({ children, ...props }: any) => (
    <em 
      className="italic text-foreground" 
      {...props}
    >
      {children}
    </em>
  ),
}
