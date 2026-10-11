/**
 * ============================================================
 *  TODOS LOS TEXTOS DE LA WEB (español + inglés)
 * ============================================================
 *
 *  Este es el único archivo que necesitas tocar para cambiar textos.
 *
 *  Convenciones:
 *  - En los titulares, lo que va entre *asteriscos* se muestra en
 *    cursiva y en azul (la "palabra destacada").
 *  - Lo que está entre [corchetes] es un hueco pendiente de rellenar.
 *  - Si añades una clave en `es`, añádela también en `en`
 *    (TypeScript te avisará si falta alguna).
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

/** Enlaces compartidos por los dos idiomas. */
export const links = {
  email: 'lydiavilchezlopez@gmail.com', // visible en Contacto, en el menú y en el pie
  linkedin: 'https://www.linkedin.com/in/lydia-vilchez-lopez/',
  github: 'https://github.com/lydiavilchez',
  cv: '/cv.pdf', // coloca el archivo en public/cv.pdf
  nitroArticle: 'https://prowler.com/blog/your-llm-runs-in-a-nitro-enclave-who-is-checking-the-enclave',
};

const es = {
  meta: {
    title: 'Lydia Vílchez López — Ingeniera de software, cloud y seguridad',
    description:
      'Ingeniera de software con experiencia en seguridad cloud (AWS, Google Cloud, Azure y Google Workspace). Abierta a roles de software, cloud, seguridad, DevOps y producto. Santander, remoto y disponibilidad inmediata.',
    ogImageAlt: 'Lydia Vílchez López, ingeniera de software, cloud y seguridad',
    locale: 'es_ES',
  },

  nav: {
    menu: 'Menú',
    close: 'Cerrar',
    contact: 'Contacto',
    switchTo: 'Ver en inglés',
    skip: 'Saltar al contenido',
    items: [
      { id: 'sobre-mi', label: 'Sobre mí' },
      { id: 'experiencia', label: 'Experiencia' },
      { id: 'proyectos', label: 'Proyectos' },
      { id: 'recomendaciones', label: 'Recomendaciones' },
      { id: 'formacion', label: 'Formación' },
      { id: 'contacto', label: 'Contacto' },
    ],
  },

  hero: {
    location: 'Santander, España',
    status: 'Disponible ahora',
    remote: 'Abierta a remoto',
    headerMeta: 'Software · Cloud · Seguridad',
    role: 'Ingeniera de software, *cloud* y seguridad',
    openTo: 'Abierta a roles de software, cloud, seguridad, DevOps y producto.',
    ctaCv: 'Descargar CV',
    ctaContact: 'Contacto',
  },

  about: {
    kicker: 'Sobre mí',
    title: 'Comprometida, proactiva y *meticulosa*',
    paragraphs: [
      'Soy graduada en Ingeniería Informática y Administración y Dirección de Empresas, una mezcla que me ha enseñado a ver cada proyecto desde los dos lados.',
      'Lo que más disfruto es construir cosas desde cero, desde la idea inicial hasta que llegan a quien las va a usar. También me gusta mucho hablar con clientes y con la comunidad: es la mejor forma de entender qué necesitan de verdad. Aprendo rápido y me adapto con facilidad a cada equipo.',
      'Fuera del código, me apasiona la moda: su historia, las curiosidades de quienes la diseñan y todo el proceso creativo que hay detrás de un desfile.',
    ],
    facts: [
      { label: 'Base', value: 'Santander, España' },
      { label: 'Modalidad', value: 'Abierta a remoto' },
      { label: 'Disponibilidad', value: 'Inmediata' },
      { label: 'Idiomas', value: 'ES · EN · FR · IT' },
    ],
    /** Figurín (boceto de moda): solo el texto alternativo para lectores de pantalla */
    figure: {
      alt: 'Figurín a línea de Lydia: pelo largo ondulado, vestido de escote drapeado con bordado floral y las manos juntas.',
    },
  },

  experience: {
    kicker: 'Experiencia',
    company: 'Prowler',
    role: 'Cloud *Security* Engineer',
    dates: 'Sep 2025 — Sep 2026',
    context:
      'Prowler es una plataforma open source de seguridad cloud que usan directamente clientes empresariales.',
    highlights: [
      {
        title: 'Seguridad *de principio a fin*',
        text: 'Convertí requisitos de cumplimiento (CIS Benchmarks, CISA) en comprobaciones automáticas de configuración cloud e IAM para AWS, Google Cloud, Azure y Google Workspace, cubriendo todo el ciclo: diseño, código, tests y documentación.',
      },
      {
        title: 'Primera batería para *AWS Nitro Enclaves*',
        text: 'Implementé la primera batería de comprobaciones de Prowler para AWS Nitro Enclaves y escribí un artículo técnico junto a un ingeniero de AWS.',
      },
      {
        title: 'Mantenedora *del proyecto*',
        text: 'Revisaba y aprobaba contribuciones de la comunidad open source, cuidando la calidad y la coherencia del código.',
      },
      {
        title: 'Equipo *internacional*',
        text: 'Trabajé a diario en inglés, en un equipo internacional y en remoto, en contacto con clientes y con la comunidad open source.',
      },
    ],
    tags: ['AWS', 'Google Cloud', 'Azure', 'Google Workspace', 'Python', 'Open source'],
  },

  projects: {
    kicker: 'Proyectos',
    title: 'Trabajo *seleccionado*',
    labels: {
      context: 'Contexto',
      did: 'Qué hice',
      result: 'Resultado',
      readArticle: 'Leer el artículo',
    },
    items: [
      {
        title: 'Comprobaciones de seguridad para AWS Nitro Enclaves',
        year: '2026',
        tags: ['AWS', 'Nitro Enclaves', 'CSPM', 'Python'],
        context:
          'AWS Nitro Enclaves aísla cargas de computación confidencial, como las que protegen datos de IA. Prowler todavía no tenía comprobaciones para este servicio.',
        did: 'Implementé la primera batería de comprobaciones de Prowler para Nitro Enclaves y escribí el artículo técnico que la acompaña junto a un ingeniero de AWS.',
        result:
          'Prowler puede revisar por primera vez la configuración segura de Nitro Enclaves, con un artículo técnico que lo explica.',
        link: 'nitroArticle',
      },
      {
        title: 'Trabajo Fin de Grado: módulo de seguridad para Google Workspace',
        year: '2026',
        tags: ['Google Workspace', 'CIS Benchmark', 'Python', 'TFG'],
        context:
          'Mi Trabajo Fin de Grado: un módulo para auditar la seguridad de Google Workspace.',
        did: 'Lo construí desde cero como autora principal: arquitectura, autenticación con cuenta de servicio y usuario delegado, integración en CLI y API, interfaz y documentación pública.',
        result:
          'Cobertura completa del CIS Google Workspace Foundations Benchmark v1.3.0 en servicios como Gmail, Calendar, Drive, Chat o Groups, empaquetado como módulo Python independiente.',
        link: null,
      },
    ],
  },

  /**
   * Recomendaciones. Para añadir la de Toni, copia el bloque de Pedro
   * dentro de `items` y cambia los datos (en `es` y en `en`).
   * `letter`: ruta del PDF de la carta en /public (o null para no mostrar el enlace).
   */
  recommendations: {
    kicker: 'Recomendaciones',
    title: 'En *sus* palabras',
    intro: 'Lo que dicen de mi trabajo las personas con las que he trabajado.',
    linkedin: 'LinkedIn',
    letter: 'Leer la carta completa',
    items: [
      {
        name: 'Toni de la Fuente',
        role: 'Founder & CEO, Prowler',
        date: 'Octubre 2026',
        linkedin: 'https://www.linkedin.com/in/toniblyx/',
        letter: null as string | null,
        quotes: [
          'He seguido su trabajo de cerca y puedo decir que es una ingeniera de seguridad reflexiva y fiable, que convierte riesgos cloud complejos en capacidades de producto prácticas y bien probadas.',
          'Combina una gran capacidad técnica con un sólido criterio en seguridad, y se ha ganado nuestra confianza por la calidad, la amplitud y la constancia de su trabajo.',
          'Sus contribuciones públicas reflejan tanto amplitud como una implicación constante.',
          'Volvería a trabajar con ella encantado.',
        ],
      },
      {
        name: 'Pedro Miguel Díaz Peña',
        role: 'Head of Product & Engineering, Prowler',
        date: 'Septiembre 2026',
        linkedin: 'https://www.linkedin.com/in/pedro-miguel-d%C3%ADaz-pe%C3%B1a-260510171/',
        letter: null as string | null,
        quotes: [
          'Estoy absolutamente convencido de que Lydia será una pieza clave y aportará un valor inmenso a cualquier proyecto u organización.',
          'Al igual que nuestros ingenieros más experimentados, desempeñó un papel fundamental en el desarrollo del núcleo de Prowler.',
          'Demostró una capacidad asombrosa al hacerse cargo de todo el ciclo de vida de este proveedor cloud SaaS: desde la compleja fase inicial de investigación hasta su lanzamiento final con éxito.',
          'Mostró un extraordinario sentido de la responsabilidad sobre sus proyectos: un grado de autonomía y cuidado vital en una startup que avanza tan rápido.',
        ],
      },
    ],
  },

  education: {
    kicker: 'Formación',
    title: 'Formación *e idiomas*',
    degrees: [
      {
        title: 'Doble grado en Ingeniería Informática y ADE',
        place: 'Universidad de Granada, España',
        dates: '2020 — 2026',
      },
      {
        title: 'Doble grado en Ingeniería Informática y ADE',
        place: 'Università degli Studi di Salerno, Italia',
        dates: '2022 — 2023',
      },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Avanzado' },
      { name: 'Francés', level: 'Intermedio' },
      { name: 'Italiano', level: 'Intermedio' },
    ],
    techTitle: 'Tecnologías',
    tech: [
      { label: 'Cloud', items: 'AWS, Google Cloud, Azure, Google Workspace, Cloudflare, Huawei Cloud, OpenStack, StackIt' },
      { label: 'Lenguajes y backend', items: 'Python, Bash, SQL, C, C++, Java (básico) · Django, REST APIs, boto3, Azure SDK, Google APIs, pytest, Pydantic' },
      { label: 'DevOps y herramientas', items: 'Git, Docker, Terraform, Poetry, uv, pre‑commit, Bruno, Jira' },
      { label: 'Seguridad', items: 'CSPM, CIS Benchmarks, CISA, análisis de políticas IAM, auditoría de configuración cloud' },
    ],
  },

  /** Informe de seguridad "de tu visita" (antes de Contacto) */
  report: {
    kicker: 'Informe',
    title: 'Informe de seguridad de *tu visita*',
    intro: 'He pasado un escaneo de seguridad a tu visita. Este es el resultado.',
    meta: 'Escáner: lydia-check v1.0 · Objetivo: tu visita',
    columns: { check: 'Comprobación', status: 'Estado', detail: 'Detalle' },
    running: 'Comprobando…',
    checks: [
      { id: 'conexion_cifrada_https', status: 'pass', detail: 'Tu visita viaja cifrada. Empezamos bien.' },
      { id: 'visita_llega_hasta_el_final', status: 'pass', detail: 'Has llegado hasta aquí. Buena señal.' },
      { id: 'referencias_verificadas', status: 'pass', detail: 'Dos recomendaciones firmadas, un poco más arriba.' },
      { id: 'disponibilidad_inmediata', status: 'pass', detail: 'Lista para incorporarse ya, en remoto o desde Santander.' },
    ],
    contactCheck: {
      id: 'visita_ha_escrito_a_lydia',
      detail: 'Severidad: alta. Remediación:',
      action: 'Escríbeme',
      resolved: 'Hallazgo resuelto. ¡Gracias!',
    },
  },

  contact: {
    kicker: 'Contacto',
    title: '¿*Hablamos*?',
    text: 'Tengo disponibilidad inmediata y estoy abierta a trabajar en remoto. Escríbeme y te respondo pronto.',
    email: 'Escríbeme',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Descargar CV',
  },

  footer: {
    rights: 'Lydia Vílchez López',
    backToTop: 'Volver arriba',
  },
};

/** Tipo de la estructura de textos (garantiza que el inglés tenga las mismas claves). */
export type Content = typeof es;

const en: Content = {
  meta: {
    title: 'Lydia Vílchez López — Software, cloud & security engineer',
    description:
      'Software engineer with hands-on cloud security experience (AWS, Google Cloud, Azure and Google Workspace). Open to software, cloud, security, DevOps and product roles. Santander, Spain, remote-friendly and available now.',
    ogImageAlt: 'Lydia Vílchez López, software, cloud and security engineer',
    locale: 'en_GB',
  },

  nav: {
    menu: 'Menu',
    close: 'Close',
    contact: 'Contact',
    switchTo: 'Ver en español',
    skip: 'Skip to content',
    items: [
      { id: 'sobre-mi', label: 'About' },
      { id: 'experiencia', label: 'Experience' },
      { id: 'proyectos', label: 'Projects' },
      { id: 'recomendaciones', label: 'Recommendations' },
      { id: 'formacion', label: 'Education' },
      { id: 'contacto', label: 'Contact' },
    ],
  },

  hero: {
    location: 'Santander, Spain',
    status: 'Available now',
    remote: 'Open to remote',
    headerMeta: 'Software · Cloud · Security',
    role: 'Software, *cloud* & security engineer',
    openTo: 'Open to software, cloud, security, DevOps and product roles.',
    ctaCv: 'Download CV',
    ctaContact: 'Contact',
  },

  about: {
    kicker: 'About',
    title: 'Committed, proactive and *meticulous*',
    paragraphs: [
      'I graduated in Computer Engineering and Business Administration, a mix that has taught me to see every project from both sides.',
      'What I enjoy most is building things from scratch, from the first idea until it reaches the people who will use it. I also love talking to customers and the community: it is the best way to understand what they really need. I learn fast and adapt easily to every team.',
      'Away from code, I am passionate about fashion: its history, the stories of the people who design it and the whole creative process behind a runway show.',
    ],
    facts: [
      { label: 'Based in', value: 'Santander, Spain' },
      { label: 'Work mode', value: 'Open to remote' },
      { label: 'Availability', value: 'Immediate' },
      { label: 'Languages', value: 'ES · EN · FR · IT' },
    ],
    figure: {
      alt: 'Line-drawn fashion sketch of Lydia: long wavy hair, a cowl-neck dress with floral embroidery, hands clasped.',
    },
  },

  experience: {
    kicker: 'Experience',
    company: 'Prowler',
    role: 'Cloud *Security* Engineer',
    dates: 'Sep 2025 — Sep 2026',
    context:
      'Prowler is an open-source cloud security platform used directly by enterprise customers.',
    highlights: [
      {
        title: 'Security *end to end*',
        text: 'I turned compliance requirements (CIS Benchmarks, CISA) into automated cloud configuration and IAM checks for AWS, Google Cloud, Azure and Google Workspace, across the whole cycle: design, code, tests and documentation.',
      },
      {
        title: 'First check suite for *AWS Nitro Enclaves*',
        text: "I implemented Prowler's first set of checks for AWS Nitro Enclaves and co-wrote a technical article with an AWS engineer.",
      },
      {
        title: 'Project *maintainer*',
        text: 'I reviewed and approved contributions from the open-source community, keeping the codebase consistent and high quality.',
      },
      {
        title: 'An *international* team',
        text: 'I worked every day in English in a remote, international team, in touch with customers and the open-source community.',
      },
    ],
    tags: ['AWS', 'Google Cloud', 'Azure', 'Google Workspace', 'Python', 'Open source'],
  },

  projects: {
    kicker: 'Projects',
    title: 'Selected *work*',
    labels: {
      context: 'Context',
      did: 'What I did',
      result: 'Outcome',
      readArticle: 'Read the article',
    },
    items: [
      {
        title: 'Security checks for AWS Nitro Enclaves',
        year: '2026',
        tags: ['AWS', 'Nitro Enclaves', 'CSPM', 'Python'],
        context:
          'AWS Nitro Enclaves isolates confidential computing workloads, such as those protecting AI data. Prowler had no checks for this service yet.',
        did: "I implemented Prowler's first set of checks for Nitro Enclaves and co-wrote the accompanying technical article with an AWS engineer.",
        result:
          'For the first time, Prowler can audit the secure configuration of Nitro Enclaves, with a technical article that explains it.',
        link: 'nitroArticle',
      },
      {
        title: "Bachelor's thesis: Google Workspace security module",
        year: '2026',
        tags: ['Google Workspace', 'CIS Benchmark', 'Python', 'Thesis'],
        context: "My bachelor's thesis: a module to audit Google Workspace security.",
        did: 'I built it from scratch as its primary author: architecture, service account authentication with a delegated user, CLI and API integration, UI and public documentation.',
        result:
          'Full coverage of the CIS Google Workspace Foundations Benchmark v1.3.0 across services such as Gmail, Calendar, Drive, Chat and Groups, packaged as a standalone Python module.',
        link: null,
      },
    ],
  },

  recommendations: {
    kicker: 'Recommendations',
    title: 'In *their* words',
    intro: 'What the people I have worked with say about my work.',
    linkedin: 'LinkedIn',
    letter: 'Read the full letter',
    items: [
      {
        name: 'Toni de la Fuente',
        role: 'Founder & CEO, Prowler',
        date: 'October 2026',
        linkedin: 'https://www.linkedin.com/in/toniblyx/',
        letter: null,
        quotes: [
          'I have followed her work closely and can say that she is a thoughtful and dependable security engineer who turns complex cloud risks into practical, well-tested product capabilities.',
          'She combines strong technical ability with sound security judgment and has earned our confidence through the quality, breadth, and consistency of her work.',
          "Lydia's public contribution record reflects both range and sustained ownership.",
          'I would gladly work with her again.',
        ],
      },
      {
        name: 'Pedro Miguel Díaz Peña',
        role: 'Head of Product & Engineering, Prowler',
        date: 'September 2026',
        linkedin: 'https://www.linkedin.com/in/pedro-miguel-d%C3%ADaz-pe%C3%B1a-260510171/',
        letter: null,
        quotes: [
          'I am absolutely convinced that Lydia Vilchez Lopez will be a key asset and add immense value to any project or organization.',
          "Much like our most experienced engineers, she played a fundamental role in developing Prowler's core.",
          'She demonstrated astounding capability by taking charge of the entire lifecycle of this SaaS Cloud Provider: from the complex initial research phase to its successful final release.',
          'She displayed an extraordinary sense of ownership over her projects — a degree of responsibility, autonomy, and care that is vital in a fast-paced startup.',
        ],
      },
    ],
  },

  education: {
    kicker: 'Education',
    title: 'Education *& languages*',
    degrees: [
      {
        title: 'Dual degree in Computer Engineering and Business Administration',
        place: 'University of Granada, Spain',
        dates: '2020 — 2026',
      },
      {
        title: 'Dual degree in Computer Engineering and Business Administration',
        place: 'Università degli Studi di Salerno, Italy',
        dates: '2022 — 2023',
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Advanced' },
      { name: 'French', level: 'Intermediate' },
      { name: 'Italian', level: 'Intermediate' },
    ],
    techTitle: 'Technologies',
    tech: [
      { label: 'Cloud', items: 'AWS, Google Cloud, Azure, Google Workspace, Cloudflare, Huawei Cloud, OpenStack, StackIt' },
      { label: 'Languages & backend', items: 'Python, Bash, SQL, C, C++, Java (basics) · Django, REST APIs, boto3, Azure SDK, Google APIs, pytest, Pydantic' },
      { label: 'DevOps & tools', items: 'Git, Docker, Terraform, Poetry, uv, pre‑commit, Bruno, Jira' },
      { label: 'Security', items: 'CSPM, CIS Benchmarks, CISA, IAM policy analysis, cloud configuration auditing' },
    ],
  },

  report: {
    kicker: 'Report',
    title: 'Security report for *your visit*',
    intro: 'I ran a security scan on your visit. Here are the results.',
    meta: 'Scanner: lydia-check v1.0 · Target: your visit',
    columns: { check: 'Check', status: 'Status', detail: 'Detail' },
    running: 'Checking…',
    checks: [
      { id: 'connection_encrypted_https', status: 'pass', detail: 'Your visit travels encrypted. Off to a good start.' },
      { id: 'visitor_reached_the_end', status: 'pass', detail: 'You made it all the way here. Good sign.' },
      { id: 'references_verified', status: 'pass', detail: 'Two signed recommendations, just above.' },
      { id: 'immediate_availability', status: 'pass', detail: 'Ready to start now, remotely or from Santander.' },
    ],
    contactCheck: {
      id: 'visitor_emailed_lydia',
      detail: 'Severity: high. Remediation:',
      action: 'Email me',
      resolved: 'Finding resolved. Thank you!',
    },
  },

  contact: {
    kicker: 'Contact',
    title: "Let's *talk*",
    text: "I'm available immediately and open to remote work. Drop me a line and I'll get back to you soon.",
    email: 'Email me',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Download CV',
  },

  footer: {
    rights: 'Lydia Vílchez López',
    backToTop: 'Back to top',
  },
};

export const content: Record<Lang, Content> = { es, en };

/** Ruta de inicio de cada idioma. */
export const homePath: Record<Lang, string> = { es: '/', en: '/en/' };

/**
 * Convierte "Texto con *destacado*" en HTML con <em> (cursiva azul).
 * Escapa el resto del texto para que sea seguro usarlo con set:html.
 */
export function rich(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  return escaped.replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/** Elimina los asteriscos (para textos planos como aria-label o <title>). */
export function plain(text: string): string {
  return text.replace(/\*/g, '');
}
