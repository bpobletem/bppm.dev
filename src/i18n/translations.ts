export type Lang = 'en' | 'es';

export const translations = {
  en: {
    htmlLang: 'en',
    langToggle: { label: 'ES', href: '/es', aria: 'Ver en español' },
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Bárbara Poblete',
      role: 'Full-stack Developer',
      description:
        "I build web products end-to-end: from backend APIs and databases to interfaces. You can check out some of my projects below :)",
      canvasHint: 'Try drawing here!',
      scroll: 'Scroll down',
    },
    about: {
      title: 'About Me',
      paragraphs: [
        "My journey into web development started with a passion for design. I was drawn to how things looked and felt. Then, as I explored more, I realized how powerful programming could be in bringing those designs to life. That led me to dive deeper into frontend development, and now, I'm also fascinated by data, how it moves, scales, and shapes digital experiences.",
      ],
    },
    skills: {
      title: 'My Skills',
      tabs: { frontend: 'Frontend', backend: 'Backend', tools: 'Tools & Others' },
      frontend: ['HTML & CSS', 'JavaScript', 'Vue', 'TypeScript', 'Tailwind', 'Astro'],
      backend: ['Node.js', 'Python', 'SQL', 'PL/SQL'],
      tools: ['Git & GitHub', 'UI/UX Design', 'Figma', 'AWS', 'ServiceNow', 'Docker'],
    },
    projects: {
      title: 'My Projects',
      linkLabel: 'Visit Site',
      items: [
        {
          title: 'Poblete Martínez',
          description:
            'The landing page for an independent law firm — a clean, fast marketing site that introduces the practice and its services.',
          highlights: [
            'Bilingual site (English / Spanish)',
            'Optimized for fast loads and good Lighthouse scores',
          ],
          tech: ['Astro', 'Tailwind', 'Cloudflare'],
          link: 'https://pobletemartinez.cl',
          icon: 'scale',
          image: '/projects/pobletemartinez.png',
          badge: null,
        },
        {
          title: 'DocGen',
          description:
            'A backend tool built for Poblete Martínez Abogados that automates their legal paperwork. It takes an Excel spreadsheet and a Word template and generates hundreds of lawsuits or promissory notes in one click, cutting a manual, error-prone process down to seconds.',
          highlights: [
            'Bulk-generates Word documents from an Excel dataset and a template',
            'Handles two document types with different placeholder sets',
            'Self-hosted with Docker for the law firm\'s internal use',
          ],
          tech: ['Flask', 'Python', 'Docker', 'Self-hosted'],
          link: null,
          icon: 'file',
          image: '/projects/docgen.png',
          badge: { icon: 'lock', label: 'Private project' },
        },
        {
          title: 'MichiMatch',
          description:
            'A pet adoption platform connecting rescued animals with families in Chile. People can publish an animal for adoption, browse listings by species and region, and manage adoption applications end-to-end.',
          highlights: [
            'Publication moderation flow with admin review',
            'JWT auth with role-based access (user / admin / superadmin)',
            'Filterable adoption listings by species, region and status',
          ],
          tech: ['Django', 'Vue', 'PostgreSQL', 'Docker', 'Self-hosted'],
          link: 'https://michimatch.bppm.dev/',
          icon: 'paw',
          image: '/projects/michimatch.png',
          badge: null,
        },
        {
          title: 'MacroTrack',
          description:
            "A macro and calorie tracker I designed and built for myself because no existing app tracked nutrition exactly the way I wanted. It's become my daily driver: I log every meal in it.",
          highlights: [
            'Food database seeded with ~660 Chilean foods (BDNAC dataset)',
            'Calorie calculator (Harris-Benedict) tied directly to daily goals',
            'Weight and body-fat tracking with progress charts',
          ],
          tech: ['Django', 'Vue', 'PostgreSQL', 'Coolify', 'Self-hosted'],
          link: 'https://macrotrack.bppm.dev/',
          icon: 'activity',
          image: '/projects/macrotrack.png',
          badge: null,
        },
        {
          title: 'Servimec',
          description:
            'A product catalog site for a Chilean supplier of articulated-crane equipment (alzahombre baskets, SCANRECO remote controls and accessories). Currently in progress: the site, structure and design are live, waiting on the client to provide the final product photos and specs.',
          highlights: [
            'Astro-based static catalog with category and product pages',
            'Click-to-quote flow via WhatsApp',
            'Self-hosted with Docker behind Cloudflare',
          ],
          tech: ['Astro', 'Docker', 'Self-hosted'],
          link: 'https://servimec.bppm.dev/',
          icon: 'truck',
          image: '/projects/servimec.png',
          badge: { icon: 'construction', label: 'In progress' },
        },
        {
          title: 'InterviewLab',
          description:
            'An AI-powered mock interview platform with a conversational voice agent. Candidates practice interviews out loud, and the app evaluates their answers with an LLM and generates structured feedback and analytics dashboards.',
          highlights: [
            'Real-time voice conversation with an AI interviewer',
            'LLM-based scoring and structured feedback per answer',
            'Analytics dashboard to track progress across sessions',
          ],
          tech: ['Next.js', 'Supabase', 'ElevenLabs', 'Gemini', 'Tailwind'],
          link: 'https://interview-lab-rho.vercel.app',
          icon: 'mic',
          image: '/projects/interviewlab.png',
          badge: { icon: 'info', label: 'Backend paused (Supabase, inactivity)' },
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      text: "I'm open to freelance projects and always excited about new opportunities! Whether you need a creative touch on a project, want to chat about a potential collaboration, or just feel like saying hello, don't hesitate to reach out!",
    },
    footer: { credit: 'Designed, developed & shipped by me' },
  },

  es: {
    htmlLang: 'es',
    langToggle: { label: 'EN', href: '/', aria: 'View in English' },
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Bárbara Poblete',
      role: 'Desarrolladora Full-stack',
      description:
        'Construyo productos web de punta a punta: desde APIs y bases de datos hasta interfaces. Más abajo puedes ver algunos de mis proyectos :)',
      canvasHint: '¡Dibuja aquí!',
      scroll: 'Desplázate',
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Mi camino en el desarrollo web empezó con la pasión por el diseño. Me atraía cómo se veían y se sentían las cosas. Luego, a medida que exploré más, descubrí lo poderosa que podía ser la programación para dar vida a esos diseños. Eso me llevó a profundizar en el desarrollo frontend y, ahora, también me fascinan los datos: cómo se mueven, escalan y dan forma a las experiencias digitales.',
      ],
    },
    skills: {
      title: 'Mis habilidades',
      tabs: { frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas y otros' },
      frontend: ['HTML y CSS', 'JavaScript', 'Vue', 'TypeScript', 'Tailwind', 'Astro'],
      backend: ['Node.js', 'Python', 'SQL', 'PL/SQL'],
      tools: ['Git y GitHub', 'Diseño UI/UX', 'Figma', 'AWS', 'ServiceNow', 'Docker'],
    },
    projects: {
      title: 'Mis proyectos',
      linkLabel: 'Visitar sitio',
      items: [
        {
          title: 'Poblete Martínez',
          description:
            'La landing page de un estudio jurídico independiente: un sitio limpio y rápido que presenta el estudio y sus servicios.',
          highlights: [
            'Sitio bilingüe (español / inglés)',
            'Optimizado para carga rápida y buen puntaje en Lighthouse',
          ],
          tech: ['Astro', 'Tailwind', 'Cloudflare'],
          link: 'https://pobletemartinez.cl',
          icon: 'scale',
          image: '/projects/pobletemartinez.png',
          badge: null,
        },
        {
          title: 'DocGen',
          description:
            'Una herramienta de backend creada para Poblete Martínez Abogados que automatiza su papeleo legal. A partir de una planilla Excel y una plantilla Word, genera cientos de demandas o pagarés con un clic, reduciendo a segundos un proceso manual y propenso a errores.',
          highlights: [
            'Genera documentos Word en masa a partir de un Excel y una plantilla',
            'Soporta dos tipos de documento con distintos placeholders',
            'Auto-alojada con Docker para uso interno del estudio jurídico',
          ],
          tech: ['Flask', 'Python', 'Docker', 'Auto-alojado'],
          link: null,
          icon: 'file',
          image: '/projects/docgen.png',
          badge: { icon: 'lock', label: 'Proyecto privado' },
        },
        {
          title: 'MichiMatch',
          description:
            'Una plataforma de adopción de mascotas que conecta animales rescatados con familias en Chile. Las personas pueden publicar un animal en adopción, filtrar publicaciones por especie y región, y gestionar las postulaciones de adopción de principio a fin.',
          highlights: [
            'Flujo de moderación de publicaciones con revisión de administrador',
            'Autenticación JWT con roles (usuario / admin / superadmin)',
            'Publicaciones filtrables por especie, región y estado',
          ],
          tech: ['Django', 'Vue', 'PostgreSQL', 'Docker', 'Auto-alojado'],
          link: 'https://michimatch.bppm.dev/',
          icon: 'paw',
          image: '/projects/michimatch.png',
          badge: null,
        },
        {
          title: 'MacroTrack',
          description:
            'Un tracker de macros y calorías que diseñé y construí para mí misma, porque ninguna app existente registraba la nutrición exactamente como yo necesitaba. Hoy es mi app de uso diario: registro cada comida ahí.',
          highlights: [
            'Base de datos de alimentos con ~660 productos chilenos (dataset BDNAC)',
            'Calculadora de calorías (Harris-Benedict) conectada directo a las metas diarias',
            'Registro de peso y % de grasa con gráficos de evolución',
          ],
          tech: ['Django', 'Vue', 'PostgreSQL', 'Coolify', 'Auto-alojado'],
          link: 'https://macrotrack.bppm.dev/',
          icon: 'activity',
          image: '/projects/macrotrack.png',
          badge: null,
        },
        {
          title: 'Servimec',
          description:
            'Un sitio de catálogo de productos para un proveedor chileno de equipamiento para grúas articuladas (canastillos alzahombre, controles remotos SCANRECO y accesorios). Está en construcción: el sitio, la estructura y el diseño ya están en línea, a la espera de que el cliente entregue las fotos y fichas técnicas finales de los productos.',
          highlights: [
            'Catálogo estático con Astro, con páginas de categoría y producto',
            'Flujo de cotización directo por WhatsApp',
            'Auto-alojado con Docker detrás de Cloudflare',
          ],
          tech: ['Astro', 'Docker', 'Auto-alojado'],
          link: 'https://servimec.bppm.dev/',
          icon: 'truck',
          image: '/projects/servimec.png',
          badge: { icon: 'construction', label: 'En construcción' },
        },
        {
          title: 'InterviewLab',
          description:
            'Una plataforma de entrevistas laborales simuladas con un agente de voz conversacional impulsado por IA. Los candidatos practican en voz alta y la app evalúa sus respuestas con un LLM, generando retroalimentación estructurada y dashboards de analítica.',
          highlights: [
            'Conversación de voz en tiempo real con un entrevistador de IA',
            'Puntuación y feedback estructurado por respuesta usando un LLM',
            'Dashboard de analítica para seguir el progreso entre sesiones',
          ],
          tech: ['Next.js', 'Supabase', 'ElevenLabs', 'Gemini', 'Tailwind'],
          link: 'https://interview-lab-rho.vercel.app',
          icon: 'mic',
          image: '/projects/interviewlab.png',
          badge: { icon: 'info', label: 'Backend en pausa (Supabase, por inactividad)' },
        },
      ],
    },
    contact: {
      title: 'Hablemos',
      text: '¡Estoy abierta a proyectos freelance y siempre entusiasmada con nuevas oportunidades! Ya sea que necesites un toque creativo en un proyecto, quieras conversar sobre una posible colaboración o simplemente saludar, no dudes en escribirme.',
    },
    footer: { credit: 'Diseñado, desarrollado y publicado por mí' },
  },
} as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
