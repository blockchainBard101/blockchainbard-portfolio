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
    primary: "bg-gradient-to-r from-blue-600 via-primary to-blue-700 dark:from-primary dark:via-primary dark:to-primary/80 bg-clip-text text-transparent dark:text-transparent",
    teal: "bg-gradient-to-r from-teal-600 via-accent-teal to-teal-700 dark:from-accent-teal dark:to-accent-teal/80 bg-clip-text text-transparent dark:text-transparent",
    purple: "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 bg-clip-text text-transparent dark:text-transparent",
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}
