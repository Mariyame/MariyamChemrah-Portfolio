import { cn } from "@/lib/utils";
import { TechBadge } from "../TechBadge";
import type { Technology } from "@/data/technologies";


type TechStackProps = {
  technologies: Technology[];
  variant?: "default" | "floating" | "accordion";
  className?: string;
  badgeClassName?: string;
  showLabels?: boolean;
  labelPosition?: "bottom" | "right";
};

const floatingPositions: Record<string, string> = {
  php: "top-10 left-10 sm:left-16 -translate-x-1/2",
  laravel: "top-6 right-18",
  ts: "top-15 sm:top-35 right-0 -translate-x-1/2",
  nextjs: "right-0 top-1/2 -translate-y-1/2",
  symfony: "bottom-12 right-0 sm:right-10",
  react: "top-25 sm:top-45 left-5 -translate-x-1/2",
  git: "bottom-6 left-10",
  tailwind: "left-0 top-45 sm:top-2/3",
  // javascript: "top-6 left-10 -translate-x-1/2",
  docker: "top-6 left-10 -translate-x-1/2",
};

function getIconClassName(technology: Technology) {
  switch (technology.id) {
    case "php":
      return "bg-[#8993BE] size-[1.5rem] w-10 h-5 rounded-[50%/50%]";
    case "javascript":
      return "bg-[#F7DF1E] size-[1.5rem] md:size-[2rem]";
    case "ts":
      return "bg-[#3178c6] text-white size-[1.5rem] md:size-[2rem]";
    case "nextjs":
    case "symfony":
      return "text-white size-[1.5rem] md:size-[2rem]";
    case "react":
      return "text-[#00D8FF] size-[1.5rem] md:size-[2rem]";
    case "git":
      return "text-[#EE513B] size-[1.5rem] md:size-[2rem]";
    case "tailwind":
      return "text-[#38bdf8] size-[1.5rem] md:size-[2rem]";
    case "laravel":
        return "text-[#FF2D20] size-[1.5rem] md:size-[2rem]";
    case "docker":
        return "text-[#2396ED] size-[1.5rem] md:size-[2rem]";
    default:
      return "text-[#FFFFFF] size-[1.5rem] md:size-[2rem]";
  }
}

export default function TechStack({
  technologies,
  variant = "default",
  className,
  badgeClassName = "backdrop-blur-xs bg-white/5 border border-white/10 p-5 md:p-6 rounded-xl",
  showLabels = false,
  labelPosition = "bottom"
}: TechStackProps) {
  if (variant === "floating") {
    return (
      <div className={cn("absolute inset-0 z-20 animate-spin-slow *:animate-float", className)}>
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <div
              key={technology.id}
              className={cn("absolute", floatingPositions[technology.id])}
            >
              <TechBadge
                icon={Icon}
                iconClassName={getIconClassName(technology)}
                className={cn(badgeClassName, "transition-transform duration-300 hover:scale-110")}
                labelPosition={labelPosition}
              />
            </div>
          );
        })}
      </div>
    );
  }else if(variant === "accordion") {
      return (
          <div className={cn("flex flex-col sm:flex-row gap-1 justify-start sm:justify-center py-4 sm:py-6", className)}>
            {technologies.map((technology) => {

              const Icon = technology.icon;

              return (
                <TechBadge
                  key={technology.id}
                  icon={Icon}
                  label={showLabels ? technology.name : undefined}
                  iconClassName={getIconClassName(technology)}
                  className="w-auto bg-surface border border-border py-6 sm:py-10 text-start justify-start rounded-sm  sm:rounded-xl"
                  labelClassName="text-sm text-white/70"
                  labelPosition={ labelPosition }
                />
                
              );
            })}
          </div>
          
          );
  }

  return (
    <div className={cn("flex gap-4 justify-around", className)}>
      {technologies.map((technology) => {

        const Icon = technology.icon;

        return (
          <TechBadge
            key={technology.id}
            icon={Icon}
            label={showLabels ? technology.name : undefined}
            iconClassName={getIconClassName(technology)}
            className="w-auto"
            labelClassName="text-sm text-white/70"
            labelPosition={ labelPosition }
          />
          
        );
      })}
    </div>
    
    );
}