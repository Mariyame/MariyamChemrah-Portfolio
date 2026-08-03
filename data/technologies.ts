import type { ComponentType, SVGProps } from "react";
import {
  LaravelIcon,
  JSIcon,
  TSIcon,
  NextjsIcon,
  SymfonyIcon,
  ReactIcon,
  PhpIcon,
  GitIcon,
  TailwindIcon,
  DockerIcon,
} from "@/components/icons";

export type Technology = {
  id: string;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  category: string;
  color: string;
};

export const technologies: Technology[] = [
  {
    id: "laravel",
    name: "Laravel",
    icon: LaravelIcon,
    category: "backend",
    color: "#FF2D20",
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: JSIcon,
    category: "frontend",
    color: "#F7DF1E",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: TSIcon,
    category: "frontend",
    color: "#3178c6",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: NextjsIcon,
    category: "frontend",
    color: "#FFFFFF",
  },
  {
    id: "symfony",
    name: "Symfony",
    icon: SymfonyIcon,
    category: "backend",
    color: "#FFFFFF",
  },
  {
    id: "react",
    name: "React",
    icon: ReactIcon,
    category: "frontend",
    color: "#61DAFB",
  },
  {
    id: "php",
    name: "PHP",
    icon: PhpIcon,
    category: "backend",
    color: "#8993BE",
  },
  {
    id: "git",
    name: "Git",
    icon: GitIcon,
    category: "tools",
    color: "#EE513B",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: TailwindIcon,
    category: "frontend",
    color: "#38bdf8",
  },
  {
    id: "docker",
    name: "Docker",
    icon: DockerIcon,
    category: "tools",
    color: "#2396ED",
  },
];

export const heroTechStack: Technology[] = [
  "php",
  "laravel",
  "ts",
  "nextjs",
  "symfony",
  "react",
  "git",
  "tailwind",
  "javascript",
  "docker",
].flatMap((id) => {
  const technology = technologies.find((item) => item.id === id);

  return technology ? [technology] : [];
});

export const floatTechStack: Technology[] = [
  "php",
  "laravel",
  "ts",
  "nextjs",
  "symfony",
  "react",
  "git",
  "tailwind",
  "javascript",
].flatMap((id) => {
  const technology = technologies.find((item) => item.id === id);

  return technology ? [technology] : [];
});