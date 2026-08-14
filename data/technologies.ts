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
  PythonIcon,
  MongoDBIcon,
  RedisIcon,
  PHPUnitIcon,
  HTMLIcon,
  SQLIcon,
  WordPressIcon,
  MySQLIcon,
  CodeQLIcon,
  LinuxIcon
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
    category: "others",
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
    category: "others",
    color: "#2396ED",
  },
  {
    id: "python",
    name: "Python",
    icon: PythonIcon,
    category: "backend",
    color: "#1565A7",
    // #F9C600
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: MongoDBIcon,
    category: "others",
    color: "#13aa52",
  },
  {
    id: "redis",
    name: "Redis",
    icon: RedisIcon,
    category: "others",
    color: "#C6302B",
  },
  {
    id: "phpunit",
    name: "PHPUnit",
    icon: PHPUnitIcon,
    category: "others",
    color: "#838fff",
  },
  {
    id: "html",
    name: "HTML",
    icon: HTMLIcon,
    category: "frontend",
    color: "#E44D26",
  },
  {
    id: "sql",
    name: "SQL",
    icon: SQLIcon,
    category: "others",
    color: "#E44D26",
  },
  {
    id: "wordpress",
    name: "Wordpress",
    icon: WordPressIcon,
    category: "others",
    color: "#21759B",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: MySQLIcon,
    category: "others",
    color: "#5d87a1",
  },
  {
    id: "codeql",
    name: "CodeQL",
    icon: CodeQLIcon,
    category: "others",
    color: "#2088ff",
  },
  {
    id: "linux",
    name: "Linux",
    icon: LinuxIcon,
    category: "others",
    color: "#E68C3F",
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
  // "javascript",
].flatMap((id) => {
  const technology = technologies.find((item) => item.id === id);

  return technology ? [technology] : [];
});