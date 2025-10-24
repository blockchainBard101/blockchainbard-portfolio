import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "teal" | "purple";
}

export function GradientText({ 
  children, 
  className,
  variant = "primary" 
}: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent",
    teal: "bg-gradient-to-r from-accent-teal to-accent-teal/80 bg-clip-text text-transparent",
    purple: "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}
