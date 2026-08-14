

export interface Project {
  id: number;
  title: string;
  category: "Professional" | "Personal";
  type: string;
  image: string;
  liveUrl: string | null;
  githubUrl: string | null;
  description: string;
  technologies: string[];
}
export const projects = [

  {
    id: 1,
    title: "My Wall Marketplace",
    category: "Professional",
    type: "Marketplace",
    image: "/images/mywall.png",
    liveUrl: null,
    githubUrl: null,
    description:
      "A marketplace platform developed with Laravel, including backend architecture and business functionality.",
    technologies: [
      "PayPal",
      "Laravel",
      "MySQL",
      "JavaScript",
    ],
  },

  {
    id: 2,
    title: "Tasca Art",
    category: "Personal",
    type: "Marketplace",
    image: "/images/tascaart.png",
    liveUrl: null,
    githubUrl: null,
    description:
      "An online marketplace concept focused on Berber rugs and traditional handmade products.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Symfony",
    ],
  },

  {
    id: 3,
    title: "TaskJoy",
    category: "Personal",
    type: "Task Management",
    image: "/images/taskjoy.png",
    liveUrl: null,
    githubUrl: null,
    description:
      "A full-stack task management SaaS built with Next.js, TypeScript and Symfony, featuring authentication, project management, task workflows and a REST API.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Symfony",
    ],
  },

  {
    id: 4,
    title: "Eagle Speak",
    category: "Personal",
    type: "AI / EdTech",
    image: "/images/projects/ai-language-learning.webp",
    liveUrl: null,
    githubUrl: null,
    description:
      "An LLM-powered platform designed to help language learners practice and improve their language skills.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "LLMs",
      "AI APIs",
    ],
  },

  {
  id: 5,
  title: "Victory Wellness Centre",
  category: "Professional",
  type: "Business Website",
  image: "/images/projects/victory-wellness-centre.webp",
  liveUrl: null,
  githubUrl: null,
  description:
    "A responsive business website developed for Victory Wellness Centre, focused on presenting wellness services through a clean, accessible, and user-friendly digital experience.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "WordPress",
  ],
}
// {
    // id: 1,
//     title: "SaaS Website Builder",
//     category: "Professional",
//     type: "SaaS Platform",
//     image: "/images/projects/saas-website-builder.webp",
//     link: null,
//     description:
//       "A SaaS platform for creating and managing websites for automotive businesses.",
//     technologies: [
//       "PHP",
//       "Laravel",
//       "JavaScript",
//       "WordPress",
//       "REST APIs",
//       "Webhooks",
//       "Google Cloud",
//     ],
//   },

//   {
//     id: 2,
//     title: "Google Analytics Automation",
//     category: "Professional",
//     type: "Analytics Platform",
//     image: "/images/projects/google-analytics.webp",
//     link: null,
//     description:
//       "Automated Google Analytics reporting and data collection integrated into a Laravel-based platform.",
//     technologies: [
//       "PHP",
//       "Laravel",
//       "Google Analytics 4",
//       "Google APIs",
//       "REST APIs",
//     ],
//   },
//   {
//     id: 4,
//     title: "WordPress Plugins & Integrations",
//     category: "Professional",
//     type: "WordPress",
//     image: "/images/projects/wordpress-integrations.webp",
//     link: null,
//     description:
//       "Custom WordPress plugins and integrations developed for automotive websites and digital platforms.",
//     technologies: [
//       "PHP",
//       "WordPress",
//       "JavaScript",
//       "REST APIs",
//       "Webhooks",
//     ],
//   },
//   {
//     id: 3,
//     title: "Automotive Management Dashboards",
//     category: "Professional",
//     type: "Web Application",
//     image: "/images/projects/automotive-dashboard.webp",
//     link: null,
//     description:
//       "Management dashboards providing automotive businesses with tools for monitoring and managing their digital activity.",
//     technologies: [
//       "PHP",
//       "Laravel",
//       "JavaScript",
//       "REST APIs",
//       "Google Cloud",
//     ],
//   },
];