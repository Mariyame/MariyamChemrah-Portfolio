import type { ComponentType, ElementType, HTMLAttributes, SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type TechBadgeProps = {
  icon: IconComponent;
  label?: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
  labelPosition?: "right" | "bottom";
  as?: ElementType;
  href?: string;
} & HTMLAttributes<HTMLElement>;

export function TechBadge({
  icon: Icon,
  label,
  className,
  iconClassName,
  labelClassName,
  labelPosition = "right",
  as: Component = "span",
  href,
  ...props
}: TechBadgeProps) {
  const showLabel = Boolean(label);
  const isBottom = labelPosition === "bottom";

  return (
    <Component
      className={cn(
        "inline-flex w-fit shrink-0 items-center justify-center size-8 p-4 border-white/10 border-r last:border-r-0",
        isBottom ? "flex-col gap-1" : "flex-row gap-2",
        className
      )}
      {...(Component === "a" && href ? { href } : {})}
      {...props}
    >
      <Icon className={cn("size-4 shrink-0", iconClassName)} />
      {showLabel ? (
        <span className={cn(isBottom ? "text-center" : "text-left", labelClassName)}>
          {label}
        </span>
      ) : null}
    </Component>
  );
}