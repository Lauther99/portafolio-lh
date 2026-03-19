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
  video: string;
  year: string;
  stats: { value: string; label: string }[];
  features: { title: string; description: string }[];
};

export const proyectos: Proyecto[] = [
  {
    slug: "mia-measurement-intelligence-agent",
    category: "AI System",
    titleLine1: "MIA",
    titleLine2: "Agent",
    nombre: "MIA Agent",
    descripcion:
      "Asistente inteligente basado en LLM diseñado para interactuar con sistemas industriales de medición. Permite consultar datos técnicos, ejecutar herramientas especializadas y analizar información del sistema MMS utilizando lenguaje natural.",
    tags: ["nextjs", "python", "openai", "groq", "azure"],
    demo: "https://mia-mms.vercel.app/",
    source: "",
    imagen: "/media/img/mia_img.webp",
    video: "/media/vid/mia.webm",
    year: "2025",
    stats: [
      { value: "95%", label: "Reducción de alucinaciones" },
      { value: "10+", label: "Tools especializadas" },
    ],
    features: [
      {
        title: "Arquitectura de agentes",
        description:
          "Sistema construido con prompt chaining, planificación de tareas y subagentes para resolver consultas complejas.",
      },
      {
        title: "Integración con sistemas industriales",
        description:
          "Herramientas personalizadas para consultas técnicas, cálculo de incertidumbre y gestión de activos.",
      },
    ],
  },

  {
    slug: "dec-asistencias-app",
    category: "Web Application",
    titleLine1: "Donde el Che",
    titleLine2: "Asistencias",
    nombre: "Donde el Che - Asistencias",
    descripcion:
      "Aplicación web para registrar y gestionar asistencias de trabajadores de un restaurante. Permite registrar entradas, visualizar historial y administrar colaboradores desde un panel simple.",
    tags: ["react", "javascript", "netlify", "googleapi"],
    demo: "",
    source: "https://github.com/Lauther99/asistencia-elche",
    imagen: "/media/img/asistencias_img.webp",
    video: "/media/vid/asistencias.webm",
    year: "2025",
    stats: [
      { value: "8", label: "Colaboradores activos" },
      { value: "1", label: "Panel administrativo" },
    ],
    features: [
      {
        title: "Registro digital",
        description:
          "Sistema sencillo para registrar asistencia de trabajadores desde una interfaz web.",
      },
      {
        title: "Panel de administración",
        description:
          "Permite visualizar y gestionar registros de asistencia de los colaboradores.",
      },
    ],
  },

  {
    slug: "autoshop-autoboutique-web",
    category: "E-Commerce Website",
    titleLine1: "AutoShop",
    titleLine2: "AutoBoutique",
    nombre: "AutoShop Web",
    descripcion:
      "Landing page moderna para mostrar productos de autopartes. Incluye catálogo, buscador optimizado con índices de base de datos, carrito de compras y sistema de favoritos.",
    tags: ["nextjs", "react", "tailwind", "supabase", "vercel"],
    demo: "https://autoshop-autobotique.vercel.app/",
    source: "https://github.com/Lauther99/autoshop-autobotique",
    imagen: "/media/img/autoshop_img.webp",
    video: "/media/vid/autoshop.webm",
    year: "2026",
    stats: [
      { value: "100%", label: "Diseño responsive" },
      { value: "2", label: "Modos de tema (claro/oscuro)" },
    ],
    features: [
      {
        title: "Catálogo de productos",
        description:
          "Listado dinámico de autopartes con buscador optimizado usando índices de base de datos.",
      },
      {
        title: "Carrito y favoritos",
        description:
          "Permite guardar productos y preparar pedidos para contacto directo con el negocio.",
      },
    ],
  },

  {
    slug: "troyani-web",
    category: "Website",
    titleLine1: "Troyani",
    titleLine2: "Web",
    nombre: "Troyani Web",
    descripcion:
      "Sitio web corporativo diseñado para transmitir la experiencia visual de los productos industriales. Implementa storytelling basado en scroll con animaciones y efectos interactivos.",
    tags: ["nextjs", "react", "tailwind", "vercel"],
    demo: "https://troyani-web.vercel.app/",
    source: "https://github.com/Lauther99/troyani-web",
    imagen: "/media/img/troyani_img.webp",
    video: "/media/vid/troyani.webm",
    year: "2026",
    stats: [
      { value: "1", label: "Experiencia Scroll Storytelling" },
      { value: "100%", label: "Diseño responsive" },
    ],
    features: [
      {
        title: "Scroll storytelling",
        description:
          "Animaciones y transiciones visuales que presentan los productos a medida que el usuario navega.",
      },
      {
        title: "Experiencia visual",
        description:
          "Diseño enfocado en transmitir la escala y calidad de los tanques industriales.",
      },
    ],
  },

  {
    slug: "enzo-llm-agent",
    category: "AI Assistant",
    titleLine1: "Agente LLM",
    titleLine2: "Enzo",
    nombre: "Enzo - Agente LLM",
    descripcion:
      "Agente inteligente diseñado para automatizar tareas diarias como programar correos, registrar contactos y agendar reuniones mediante integración con APIs externas.",
    tags: ["python", "openai", "firebase", "googleapi", "whatsapp"],
    demo: "",
    source: "https://github.com/Lauther99/enzo_agent",
    imagen: "/media/img/enzo_img.webp",
    video: "/media/vid/enzo.webm",
    year: "2025",
    stats: [
      { value: "95%", label: "Precisión en respuestas" },
      { value: "5+", label: "Integraciones API" },
    ],
    features: [
      {
        title: "Automatización de tareas",
        description:
          "Permite ejecutar acciones como enviar correos, crear eventos y registrar información automáticamente.",
      },
      {
        title: "Integración con APIs",
        description:
          "Conexión con servicios externos como Google APIs y WhatsApp para ampliar las capacidades del agente.",
      },
    ],
  },

];

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}
