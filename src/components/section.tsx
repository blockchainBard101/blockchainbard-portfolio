import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  variant?: "default" | "muted" | "accent";
}

export function Section({ 
  children, 
  className, 
  id, 
  title,
  eyebrow,
  description,
  variant = "default" 
}: SectionProps) {
  const variants = {
    default: "py-16 sm:py-20 lg:py-28",
    muted: "py-16 sm:py-20 lg:py-28 bg-muted/50",
    accent: "py-16 sm:py-20 lg:py-28 bg-primary/5",
  };

  return (
    <section id={id} className={cn(variants[variant], className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || eyebrow || description) && (
          <div className="text-center mb-12 sm:mb-16">
            {eyebrow && (
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wide">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

export function Container({ children, className, size = "lg" }: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl", 
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
}