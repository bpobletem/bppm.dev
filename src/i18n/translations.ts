export type Lang = 'en' | 'es';

export const translations = {
  en: {
    htmlLang: 'en',
    langToggle: { label: 'ES', href: '/es', aria: 'Ver en español' },
    nav: {
      about: 'about',
      experience: 'experience',
      skills: 'skills',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      greeting: "hello, i'm",
      name: 'barbara poblete',
      description:
        "I'm passionate about creating clean, modern interfaces that feel effortless to use. While I'm still sharpening my skills, I love designing experiences that are both beautiful and functional. Simplicity, usability, and a touch of creativity, that's what I aim for.",
      canvasHint: 'Try drawing here!',
      scroll: 'scroll down',
    },
    about: {
      title: 'about me',
      paragraphs: [
        "My journey into web development started with a passion for design. I was drawn to how things looked and felt. Then, as I explored more, I realized how powerful programming could be in bringing those designs to life. That led me to dive deeper into frontend development, and now, I'm also fascinated by data, how it moves, scales, and shapes digital experiences.",
      ],
    },
    experience: {
      title: 'experience',
      jobs: [
        {
          role: 'development engineer',
          company: 'dataxplora',
          location: 'remote',
          period: 'feb 2026 — present',
          points: [
            'Provide services as a ServiceNow developer, automating business processes and designing solutions on the platform.',
            'Translate operational needs into scalable, maintainable workflows within ServiceNow.',
          ],
        },
        {
          role: 'support engineer',
          company: 'servicerocket',
          location: 'santiago, chile',
          period: 'aug 2025 — feb 2026',
          points: [
            'Diagnosed and resolved complex backend and infrastructure issues for enterprise customers.',
            'Reproduced production environments with Docker and virtual machines to debug failures, analyzing logs and system behavior in AWS CloudWatch to find root causes.',
            'Built internal automations and scripts in Python to streamline support and operational workflows.',
          ],
        },
        {
          role: 'fullstack developer',
          company: 'dipity',
          location: 'remote, usa',
          period: 'aug 2024 — jan 2025',
          points: [
            'One of three engineers in an early-stage startup, contributing across frontend, backend, product and design.',
            'Built reusable UI components with Lit and HTMX, and developed frontend, backend features and APIs for the mobile MVP.',
            'Led the migration of the design system from Material Components to DaisyUI and wrote unit and integration tests.',
          ],
        },
      ],
    },
    skills: {
      title: 'my skills',
      tabs: { frontend: 'frontend', backend: 'backend', tools: 'tools & others' },
    },
    projects: {
      title: 'my projects',
      linkLabel: 'visit site',
      items: [
        {
          title: 'interviewlab',
          description:
            'An AI-powered mock interview platform with a conversational voice agent. It evaluates candidates with LLM-based analysis and AI speech, then generates structured feedback and analytics dashboards.',
          tech: ['next.js', 'supabase', 'elevenlabs', 'gemini', 'tailwind'],
          link: 'https://interview-lab-rho.vercel.app',
          icon: 'mic',
          image: null,
        },
        {
          title: 'docgen',
          description:
            'A backend tool built for Poblete Martínez Abogados that automates their legal workflows. It generates lawsuits and promissory notes in bulk from an Excel spreadsheet and a Word template, making the process faster and far less error-prone. Self-hosted on a personal server.',
          tech: ['flask', 'python', 'docker', 'self-hosted'],
          link: 'https://documentos.pobletemartinez.cl/',
          icon: 'file',
          image: null,
        },
        {
          title: 'macrotrack',
          description:
            'A macro and calorie tracker I built because no existing app did exactly what I needed to improve my own nutrition. Self-hosted on a personal server, deployed with Coolify and Pangolin.',
          tech: ['django', 'vue', 'postgresql', 'coolify', 'self-hosted'],
          link: 'https://macrotrack.bppm.dev/',
          icon: 'activity',
          image: null,
        },
        {
          title: 'poblete martínez',
          description:
            'The landing page for an independent law firm — a clean, fast marketing site that introduces the practice and its services. Hosted on Cloudflare.',
          tech: ['astro', 'tailwind', 'cloudflare'],
          link: 'https://pobletemartinez.cl',
          icon: 'scale',
          image: null,
        },
      ],
    },
    contact: {
      title: 'get in touch',
      text: "I'm open to freelance projects and always excited about new opportunities! Whether you need a creative touch on a project, want to chat about a potential collaboration, or just feel like saying hello, don't hesitate to reach out!",
    },
    footer: { credit: 'designed, developed & shipped by me' },
  },

  es: {
    htmlLang: 'es',
    langToggle: { label: 'EN', href: '/', aria: 'View in English' },
    nav: {
      about: 'sobre mí',
      experience: 'experiencia',
      skills: 'habilidades',
      projects: 'proyectos',
      contact: 'contacto',
    },
    hero: {
      greeting: 'hola, soy',
      name: 'barbara poblete',
      description:
        'Me apasiona crear interfaces limpias y modernas que se sientan naturales al usar. Mientras sigo perfeccionando mis habilidades, me encanta diseñar experiencias bonitas y funcionales a la vez. Simplicidad, usabilidad y un toque de creatividad: eso es lo que busco.',
      canvasHint: '¡Dibuja aquí!',
      scroll: 'desplázate',
    },
    about: {
      title: 'sobre mí',
      paragraphs: [
        'Mi camino en el desarrollo web empezó con la pasión por el diseño. Me atraía cómo se veían y se sentían las cosas. Luego, a medida que exploré más, descubrí lo poderosa que podía ser la programación para dar vida a esos diseños. Eso me llevó a profundizar en el desarrollo frontend y, ahora, también me fascinan los datos: cómo se mueven, escalan y dan forma a las experiencias digitales.',
      ],
    },
    experience: {
      title: 'experiencia',
      jobs: [
        {
          role: 'ingeniero de desarrollo',
          company: 'dataxplora',
          location: 'remoto',
          period: 'feb 2026 — presente',
          points: [
            'Presto servicios como desarrolladora de ServiceNow, automatizando procesos de negocio y diseñando soluciones sobre la plataforma.',
            'Traduzco necesidades operativas en flujos de trabajo escalables y mantenibles dentro de ServiceNow.',
          ],
        },
        {
          role: 'ingeniera de soporte',
          company: 'servicerocket',
          location: 'santiago, chile',
          period: 'ago 2025 — feb 2026',
          points: [
            'Diagnostiqué y resolví problemas complejos de backend e infraestructura para clientes empresariales.',
            'Reproduje entornos de producción con Docker y máquinas virtuales para depurar fallas, analizando logs y el comportamiento del sistema en AWS CloudWatch para encontrar la causa raíz.',
            'Desarrollé automatizaciones y scripts internos en Python para agilizar los flujos de soporte y operación.',
          ],
        },
        {
          role: 'desarrolladora fullstack',
          company: 'dipity',
          location: 'remoto, ee. uu.',
          period: 'ago 2024 — ene 2025',
          points: [
            'Una de tres ingenieras en una startup en etapa temprana, aportando en frontend, backend, producto y diseño.',
            'Construí componentes de UI reutilizables con Lit y HTMX, y desarrollé funcionalidades de frontend, backend y APIs para el MVP móvil.',
            'Lideré la migración del sistema de diseño de Material Components a DaisyUI y escribí pruebas unitarias y de integración.',
          ],
        },
      ],
    },
    skills: {
      title: 'mis habilidades',
      tabs: { frontend: 'frontend', backend: 'backend', tools: 'herramientas y otros' },
    },
    projects: {
      title: 'mis proyectos',
      linkLabel: 'visitar sitio',
      items: [
        {
          title: 'interviewlab',
          description:
            'Una plataforma de entrevistas laborales simuladas con IA y un agente de voz conversacional. Evalúa a los candidatos con análisis basado en LLM y voz por IA, y genera retroalimentación estructurada y dashboards de analítica.',
          tech: ['next.js', 'supabase', 'elevenlabs', 'gemini', 'tailwind'],
          link: 'https://interview-lab-rho.vercel.app',
          icon: 'mic',
          image: null,
        },
        {
          title: 'docgen',
          description:
            'Una herramienta de backend creada para Poblete Martínez Abogados que automatiza sus procesos legales. Genera demandas y pagarés de forma masiva a partir de una planilla Excel y una plantilla Word, haciendo el proceso más rápido y mucho menos propenso a errores. Auto-alojada en un servidor personal.',
          tech: ['flask', 'python', 'docker', 'auto-alojado'],
          link: 'https://documentos.pobletemartinez.cl/',
          icon: 'file',
          image: null,
        },
        {
          title: 'macrotrack',
          description:
            'Un tracker de macros y calorías que creé porque ninguna app existente hacía exactamente lo que necesitaba para mejorar mi alimentación. Auto-alojado en un servidor personal, desplegado con Coolify y Pangolin.',
          tech: ['django', 'vue', 'postgresql', 'coolify', 'auto-alojado'],
          link: 'https://macrotrack.bppm.dev/',
          icon: 'activity',
          image: null,
        },
        {
          title: 'poblete martínez',
          description:
            'La landing page de un estudio jurídico independiente: un sitio limpio y rápido que presenta el estudio y sus servicios. Hosteada en Cloudflare.',
          tech: ['astro', 'tailwind', 'cloudflare'],
          link: 'https://pobletemartinez.cl',
          icon: 'scale',
          image: null,
        },
      ],
    },
    contact: {
      title: 'hablemos',
      text: '¡Estoy abierta a proyectos freelance y siempre entusiasmada con nuevas oportunidades! Ya sea que necesites un toque creativo en un proyecto, quieras conversar sobre una posible colaboración o simplemente saludar, no dudes en escribirme.',
    },
    footer: { credit: 'diseñado, desarrollado y publicado por mí' },
  },
} as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
