export type Proyecto = {
  slug: string;
  category: string;
  titleLine1: string;
  titleLine2: string;
  nombre: string; // titleLine1 + titleLine2 para mostrar en listado
  descripcion: string;
  tags: string[]; // IDs de lib/stack.ts
  demo: string;
  source: string;
  imagen: string;
  year: string;
  stats: { value: string; label: string }[];
  features: { title: string; description: string }[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "nexus-shop",
    category: "E-Commerce Platform",
    titleLine1: "Nexus",
    titleLine2: "Shop.",
    nombre: "Nexus Shop",
    descripcion:
      "A high-performance full-stack e-commerce solution featuring real-time inventory management and a seamless user experience. Built to handle thousands of concurrent users with sub-100ms response times.",
    tags: ["react", "nodejs", "mongodb"],
    demo: "#",
    source: "#",
    imagen: "/proyectos/nexus-shop.png",
    year: "2024",
    stats: [
      { value: "99%", label: "Uptime" },
      { value: "80ms", label: "Avg. Response" },
    ],
    features: [
      { title: "Real-time Inventory", description: "Live stock updates powered by WebSockets." },
      { title: "Smart Search", description: "Fuzzy search with filters and instant results." },
    ],
  },
  {
    slug: "flow-finance",
    category: "Mobile Application",
    titleLine1: "Flow",
    titleLine2: "Finance.",
    nombre: "Flow Finance",
    descripcion:
      "A secure mobile banking application with automated budgeting and expenditure forecasting using machine learning. Helps users understand their spending patterns and plan ahead with confidence.",
    tags: ["flutter", "firebase", "cloudfunctions"],
    demo: "#",
    source: "#",
    imagen: "/proyectos/flow-finance.png",
    year: "2024",
    stats: [
      { value: "98%", label: "User Satisfaction" },
      { value: "10ms", label: "Query Latency" },
    ],
    features: [
      { title: "Real-time Sync", description: "Supabase real-time database powering live updates." },
      { title: "Smart Analytics", description: "Interactive charts for comprehensive progress tracking." },
    ],
  },
  {
    slug: "genie-ai",
    category: "SaaS Platform",
    titleLine1: "Genie",
    titleLine2: "AI.",
    nombre: "GenieAI",
    descripcion:
      "An advanced SaaS platform for automated content creation utilizing large language models. Generates SEO-optimized, high-converting copy at scale — reducing content creation time by over 70%.",
    tags: ["nextjs", "openai", "tailwind"],
    demo: "#",
    source: "#",
    imagen: "/proyectos/genie-ai.png",
    year: "2023",
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "10k+", label: "Texts Generated" },
    ],
    features: [
      { title: "AI Prompting", description: "Custom prompt templates for every content type." },
      { title: "SEO Scoring", description: "Built-in readability and keyword density analysis." },
    ],
  },
  {
    slug: "genie-ai3",
    category: "SaaS Platform",
    titleLine1: "Genie",
    titleLine2: "AI.",
    nombre: "GenieAI",
    descripcion:
      "An advanced SaaS platform for automated content creation utilizing large language models. Generates SEO-optimized, high-converting copy at scale — reducing content creation time by over 70%.",
    tags: ["nextjs", "openai", "tailwind"],
    demo: "#",
    source: "#",
    imagen: "/proyectos/genie-ai.png",
    year: "2023",
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "10k+", label: "Texts Generated" },
    ],
    features: [
      { title: "AI Prompting", description: "Custom prompt templates for every content type." },
      { title: "SEO Scoring", description: "Built-in readability and keyword density analysis." },
    ],
  },
  {
    slug: "genie-ai2",
    category: "SaaS Platform",
    titleLine1: "Genie",
    titleLine2: "AI.",
    nombre: "GenieAI",
    descripcion:
      "An advanced SaaS platform for automated content creation utilizing large language models. Generates SEO-optimized, high-converting copy at scale — reducing content creation time by over 70%.",
    tags: ["nextjs", "openai", "tailwind"],
    demo: "#",
    source: "#",
    imagen: "/proyectos/genie-ai.png",
    year: "2023",
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "10k+", label: "Texts Generated" },
    ],
    features: [
      { title: "AI Prompting", description: "Custom prompt templates for every content type." },
      { title: "SEO Scoring", description: "Built-in readability and keyword density analysis." },
    ],
  },
  {
    slug: "genie-ai1",
    category: "SaaS Platform",
    titleLine1: "Genie",
    titleLine2: "AI.",
    nombre: "GenieAI",
    descripcion:
      "An advanced SaaS platform for automated content creation utilizing large language models. Generates SEO-optimized, high-converting copy at scale — reducing content creation time by over 70%.",
    tags: ["nextjs", "openai", "tailwind"],
    demo: "#",
    source: "#",
    imagen: "/proyectos/genie-ai.png",
    year: "2023",
    stats: [
      { value: "70%", label: "Time Saved" },
      { value: "10k+", label: "Texts Generated" },
    ],
    features: [
      { title: "AI Prompting", description: "Custom prompt templates for every content type." },
      { title: "SEO Scoring", description: "Built-in readability and keyword density analysis." },
    ],
  },
];

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
