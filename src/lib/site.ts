import {
  AppWindow,
  BrainCircuit,
  CloudCog,
  PenTool,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react"

/** Company details. Shared by every page. */
export const site = {
  name: "Fendesk",
  description:
    "Fendesk designs, builds and runs web platforms, mobile apps and the cloud systems underneath them.",
  /** Shown on the site, and where enquiries are addressed. */
  email: "zaheemse@gmail.com",
}

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "What we build", href: "/#builds" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
]

export interface Service {
  id: string
  icon: LucideIcon
  name: string
  summary: string
  detail: string
  includes: string[]
}

export const services: Service[] = [
  {
    id: "product-design",
    icon: PenTool,
    name: "Product design",
    summary: "Research, flows and interfaces your users can work without a manual.",
    detail:
      "We sit with the people who will use the product, map what they do today, and turn it into clickable prototypes. You test the idea with real users before you pay to build it.",
    includes: ["User interviews", "Prototypes", "Interface design", "Design systems", "Accessibility review"],
  },
  {
    id: "web-platforms",
    icon: AppWindow,
    name: "Web platforms",
    summary: "Customer portals, internal tools and SaaS products that stay fast as they grow.",
    detail:
      "Type-safe web applications with the unglamorous parts done properly: roles and permissions, audit trails, search, billing, and pages that load quickly on an ordinary connection.",
    includes: ["SaaS products", "Customer portals", "Internal tools", "Payments and billing", "Public APIs"],
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    name: "Mobile apps",
    summary: "iOS and Android apps that keep working when the signal doesn't.",
    detail:
      "One codebase for both stores where that makes sense, native code where it doesn't. We handle offline sync, push notifications, store review and the updates after launch.",
    includes: ["iOS and Android", "Offline sync", "Push notifications", "Device integrations", "Store releases"],
  },
  {
    id: "cloud",
    icon: CloudCog,
    name: "Cloud and DevOps",
    summary: "Infrastructure written as code, released in small steps, and monitored from day one.",
    detail:
      "We set up environments you can rebuild from a repository, pipelines that release small changes safely, and alerts that reach a person before they reach your customers.",
    includes: ["Infrastructure as code", "CI/CD pipelines", "Monitoring", "Security hardening", "Cost reviews"],
  },
  {
    id: "data-ai",
    icon: BrainCircuit,
    name: "Data and AI",
    summary: "Reporting you can trust, and AI features with a clear job to do.",
    detail:
      "Clean pipelines first, models second. We build search, document processing and assistants on your own data, and measure them against real examples before anyone relies on them.",
    includes: ["Data pipelines", "Dashboards", "Search and retrieval", "Document processing", "AI assistants"],
  },
  {
    id: "modernisation",
    icon: Wrench,
    name: "Modernisation and support",
    summary: "Older systems moved forward piece by piece, without the big-bang rewrite.",
    detail:
      "We take over software someone else wrote, get it under test, and replace it in stages while your business keeps running on it. Then we stay on to maintain it.",
    includes: ["Code audits", "Staged migrations", "Performance work", "Dependency upgrades", "Ongoing support"],
  },
]

export const process = [
  {
    name: "Discover",
    body: "We talk to your team and your users, look at the systems you have, and agree what success looks like.",
    output: "A brief with scope, risks and budget",
  },
  {
    name: "Design",
    body: "We prototype the riskiest parts first, then test them with the people who will use them every day.",
    output: "A clickable prototype and a technical plan",
  },
  {
    name: "Build",
    body: "We ship in two-week cycles. You see working software at the end of each one and decide what comes next.",
    output: "A live environment, updated every cycle",
  },
  {
    name: "Run",
    body: "We launch, watch, fix and improve. When you want to take it in-house, we hand it over properly.",
    output: "Monitoring, documentation and a support plan",
  },
]

export const engagements = [
  {
    name: "Project",
    fit: "You have a defined product or problem and want it built end to end.",
    points: ["Agreed scope and milestones", "Design and engineering included", "Handover and warranty period"],
  },
  {
    name: "Product team",
    fit: "You have a roadmap and need a steady team to move it forward.",
    points: ["Dedicated designers and engineers", "Works in your tools and rituals", "Scale up or down each month"],
  },
  {
    name: "Care plan",
    fit: "You have live software that needs looking after.",
    points: ["Monitoring and incident response", "Security and dependency updates", "Hours for small improvements"],
  },
]

export const stack = [
  { area: "Frontend", tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { area: "Mobile", tools: ["React Native", "Swift", "Kotlin"] },
  { area: "Backend", tools: ["Node.js", "Python", "Go", "GraphQL"] },
  { area: "Data", tools: ["PostgreSQL", "Redis", "ClickHouse", "dbt"] },
  { area: "Cloud", tools: ["AWS", "Google Cloud", "Kubernetes", "Terraform"] },
]

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on scope, so we start with a short, fixed-price discovery. At the end you have a written plan and a budget range you can use with us or with anyone else.",
  },
  {
    q: "How soon can we see something working?",
    a: "Usually a clickable prototype during design, and working software at the end of the first two-week build cycle.",
  },
  {
    q: "Who owns the code?",
    a: "You do. The repository, the cloud accounts and the design files are set up in your name from day one.",
  },
  {
    q: "Can you work with our existing developers?",
    a: "Yes. We join your repository, follow your review process and share the backlog. We can also take on one part of a larger system.",
  },
  {
    q: "Can you take over software another company built?",
    a: "Yes. We begin with a code audit that tells you what is sound, what is risky and what it would take to support it.",
  },
  {
    q: "What happens after launch?",
    a: "You can move to a care plan, keep a product team, or take everything in-house. We write the documentation for all three.",
  },
]
