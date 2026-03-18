export type TechCategory =
  | "language"
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "cloud"
  | "tool";

export type Tech = {
  id: string;
  name: string;
  color: string;   // hex — usado como accent de texto y borde
  bg: string;      // hex con opacidad baja — fondo del pill
  category: TechCategory;
};

export const stack: Tech[] = [
  // Lenguajes
  { id: "python",     name: "Python",       color: "#FFD43B", bg: "#FFD43B18", category: "language" },
  { id: "javascript", name: "JavaScript",   color: "#F7DF1E", bg: "#F7DF1E18", category: "language" },
  { id: "typescript", name: "TypeScript",   color: "#3B82F6", bg: "#3B82F618", category: "language" },

  // Frontend
  { id: "react",      name: "React",        color: "#61DAFB", bg: "#61DAFB18", category: "frontend" },
  { id: "nextjs",     name: "Next.js",      color: "#E2E8F0", bg: "#E2E8F010", category: "frontend" },
  { id: "tailwind",   name: "Tailwind",     color: "#06B6D4", bg: "#06B6D418", category: "frontend" },
  { id: "html",       name: "HTML",         color: "#E34F26", bg: "#E34F2618", category: "frontend" },
  { id: "css",        name: "CSS",          color: "#1572B6", bg: "#1572B618", category: "frontend" },

  // Backend
  { id: "nodejs",     name: "Node.js",      color: "#68A063", bg: "#68A06318", category: "backend" },
  { id: "express",    name: "Express",      color: "#A0AEC0", bg: "#A0AEC018", category: "backend" },
  { id: "fastapi",    name: "FastAPI",      color: "#009688", bg: "#00968818", category: "backend" },

  // Bases de Datos
  { id: "mysql",      name: "MySQL",        color: "#4479A1", bg: "#4479A118", category: "database" },
  { id: "sqlserver",  name: "SQL Server",   color: "#CC2927", bg: "#CC292718", category: "database" },
  { id: "mongodb",    name: "MongoDB",      color: "#47A248", bg: "#47A24818", category: "database" },
  { id: "firebase",   name: "Firebase",     color: "#FFCA28", bg: "#FFCA2818", category: "database" },
  { id: "supabase",   name: "Supabase",     color: "#3ECF8E", bg: "#3ECF8E18", category: "database" },

  // AI & APIs
  { id: "openai",     name: "OpenAI",       color: "#A3E635", bg: "#A3E63518", category: "ai" },
  { id: "groq",       name: "Groq",         color: "#F97316", bg: "#F9731618", category: "ai" },
  { id: "huggingface",name: "HuggingFace",  color: "#FFD21E", bg: "#FFD21E18", category: "ai" },
  { id: "whatsapp",   name: "WhatsApp API", color: "#25D366", bg: "#25D36618", category: "ai" },
  { id: "googleapi",  name: "Google APIs",  color: "#4285F4", bg: "#4285F418", category: "ai" },

  // Cloud
  { id: "vercel",     name: "Vercel",       color: "#E2E8F0", bg: "#E2E8F010", category: "cloud" },
  { id: "netlify",    name: "Netlify",      color: "#00C7B7", bg: "#00C7B718", category: "cloud" },
  { id: "azure",      name: "Azure",        color: "#0078D4", bg: "#0078D418", category: "cloud" },

  // Herramientas
  { id: "git",        name: "Git",          color: "#F05032", bg: "#F0503218", category: "tool" },
  { id: "gradio",     name: "Gradio",       color: "#FF7C00", bg: "#FF7C0018", category: "tool" },

  // Extras usados en proyectos
  { id: "flutter",        name: "Flutter",         color: "#54C5F8", bg: "#54C5F818", category: "frontend" },
  { id: "cloudfunctions", name: "Cloud Functions", color: "#4285F4", bg: "#4285F418", category: "cloud" },
];

/** Devuelve la tech por id, o undefined si no existe */
export function getTech(id: string): Tech | undefined {
  return stack.find((t) => t.id === id);
}

/** Agrupa el stack por categoría */
export function getStackByCategory(): Record<TechCategory, Tech[]> {
  return stack.reduce(
    (acc, tech) => {
      acc[tech.category].push(tech);
      return acc;
    },
    {
      language: [],
      frontend: [],
      backend: [],
      database: [],
      ai: [],
      cloud: [],
      tool: [],
    } as Record<TechCategory, Tech[]>
  );
}
