// All site copy lives here. Experience and project bullets are verbatim from the resume.

export const profile = {
  name: "Carson Christensen",
  title: "Software Engineer",
  tagline:
    "Backend-focused engineer at Pacific Life, building services, data layers, and AI-backed systems.",
  email: "carsonjc04@gmail.com",
  resumeHref: "/resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/carsonjc04" },
    { label: "LinkedIn", href: "https://linkedin.com/in/carsonchristensen" },
  ],
};

export const about = [
  "I'm a backend-focused software engineer at Pacific Life, where I build Java and Spring Boot services on a microservice architecture. I'm at my best working on both the design and the engineering of a product, and I care about writing code that's clean, readable, and built to scale.",
  "I've also gone deep on the insurance domain itself. Learning the products down to the nitty-gritty has made me a stronger developer: I understand why a rule exists before I write the code for it, and my eye for detail catches problems before they reach production.",
  "I was recently named the AI Champion for Pacific Life's Workforce Benefits Division (WBD), recognizing my work on our AI workflows, including ORCA, our division's RAG chatbot, and the MCP servers I'm implementing now. On the side I'm building PA Sim, an AI clinical training platform with a realtime voice patient simulator.",
  "Outside of work, you'll find me on the soccer field, out hiking and camping, playing video games, or on the slopes. I've recently gotten into snowboarding.",
];

export type Experience = {
  role: string;
  org: string;
  location?: string;
  dates: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    org: "Pacific Life Insurance",
    location: "Newport, CA",
    dates: "Aug 2025 — Present",
    bullets: [
      "Led backend development in Java/Spring Boot for a multi-product Underwriter Policy Creation tool to expand quoting capabilities and extend policyholder acquisition to new demographics.",
      "Restored enterprise workflows and cut customer data misalignment by 18% by resolving production issues via OpenSearch log analysis and MySQL migrations.",
      "Shipped quote renewals for employer-supported insurance plans on a microservice architecture, using REST APIs and an OpenL rules engine.",
      "Automated enterprise repository migration by building a merge-triggered Azure pipeline that mirrors GitLab commits into Azure DevOps with full history and documentation, keeping both codebases aligned as the first phase of migrating third-party-hosted repositories onto company-owned infrastructure.",
      "Designed a suite of AI agents in a shared repository to support division-wide reuse and collaborative development, with projected savings of 300 hours.",
    ],
    tech: ["Java", "Spring Boot", "REST APIs", "OpenL", "MySQL", "OpenSearch", "Azure DevOps", "GitLab"],
  },
  {
    role: "ORCA — Enterprise Knowledge Retrieval Platform",
    org: "Pacific Life",
    dates: "May 2025 — Present",
    bullets: [
      "Designed and deployed a division-wide Python-based RAG chatbot that replaced fragmented internal documentation lookup, improving retrieval speed and answer consistency for 400+ users across 200+ daily queries.",
      "Built a serverless RAG backend using AWS Lambda, Bedrock, and Redis caching, achieving sub-500ms answer retrieval with session-aware conversation handling and automated document ingestion.",
      "Replaced keyword-based search with OpenSearch vector similarity search and custom chunking strategies, improving answer relevance by 40%.",
    ],
    tech: ["Python", "AWS Lambda", "Bedrock", "Redis", "OpenSearch"],
  },
  {
    role: "Undergraduate AI/ML Researcher",
    org: "California State University, Fullerton — Computer Science Dept",
    location: "Fullerton, CA",
    dates: "Aug 2025 — Dec 2025",
    bullets: [
      "Built a Python/PyTorch preprocessing pipeline processing 3,000+ images for a computer vision nutrition analysis system, validating uploaded meal images, normalizing resolutions, and converting inputs into standardized tensors for model training and inference.",
      "Containerized the application with Docker and deployed it on AWS EC2 behind an ALB, with GitHub Actions CI/CD handling builds and releases.",
      "Configured S3 for image and artifact storage, RDS for the database, and CloudWatch for monitoring, supporting 10+ contributors.",
    ],
    tech: ["Python", "PyTorch", "Docker", "AWS EC2", "ALB", "S3", "RDS", "CloudWatch", "GitHub Actions"],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  bullets: string[];
  tech: string[];
  // Leave undefined to hide the link. Fill in when a public repo / live site exists.
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "PA Sim",
    subtitle: "AI Clinical Training Platform",
    bullets: [
      "Built the backend for an AI clinical training platform supporting 300+ encounter runs, with a Node.js/TypeScript and PostgreSQL data layer modeling clinical encounters, case content, and user submissions powering the review dashboard.",
      "Developed a realtime WebRTC voice patient simulator utilizing OpenAI realtime API with server-minted ephemeral tokens for secure connections, supporting 50+ concurrent users.",
      "Created safety guardrails for API billing through a three-layer server-side session enforcement that tracks the countdown, maintains a tool execution leash, and keeps a session ledger for tracing usage.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "WebRTC", "OpenAI Realtime API"],
    github: undefined,
    live: undefined,
  },
  {
    name: "ORCA",
    subtitle: "Enterprise Knowledge Retrieval Platform",
    bullets: [
      "Built a serverless RAG backend using AWS Lambda, Bedrock, and Redis caching, achieving sub-500ms answer retrieval with session-aware conversation handling and automated document ingestion.",
    ],
    tech: ["Python", "AWS Lambda", "Bedrock", "Redis", "OpenSearch"],
    // Internal Pacific Life tool — no public repo or live site.
  },
  {
    name: "CSUF Research Pipeline",
    subtitle: "Computer Vision Nutrition Analysis",
    bullets: [
      "Built a Python/PyTorch preprocessing pipeline processing 3,000+ images for a computer vision nutrition analysis system, validating uploaded meal images, normalizing resolutions, and converting inputs into standardized tensors for model training and inference.",
    ],
    tech: ["Python", "PyTorch", "Docker", "AWS EC2", "S3", "RDS"],
    github: undefined,
    live: undefined,
  },
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;
