import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "destructive" | "outline"
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Tag({ 
  children, 
  variant = "secondary", 
  className,
  size = "md"
}: TagProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-0.5",
    lg: "text-base px-3 py-1"
  }

  return (
    <Badge 
      variant={variant} 
      className={cn(sizeClasses[size], className)}
    >
      {children}
    </Badge>
  )
}
