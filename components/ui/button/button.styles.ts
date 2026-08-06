import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-linear-135 from-primary to-accent text-foreground hover:from-accent hover:to-primary",

        secondary:
          "inset-ring inset-ring-accent/30  text-foreground hover:inset-ring-accent/50 gap-2 transition-all duration-300  hover:shadow-[0_0_8px_#ec4899]",

      },
      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-6",

        lg: "h-10 px-8",

        full: "h-10 px-4 w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);