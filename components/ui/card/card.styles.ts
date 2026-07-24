import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-3xl transition-all duration-300",
  {
    variants: {
        variant: {
            default:
                "bg-surface border border-border",

            glass:
                "backdrop-blur-xl bg-white/5 border border-white/10",

            elevated:
                "bg-surface border border-border shadow-2xl",

            transparent:
                "bg-transparent"
        }
    },
    defaultVariants:{
        variant:"default"
    }
}
);