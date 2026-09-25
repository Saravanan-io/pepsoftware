import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    badge: "User Centered",
    iconName: "Layout",
    shortDescription:
      "Pep Softwares specializes in user-centered UI/UX designs that enhance the user experience. Our design process prioritizes understanding your target audience, resulting in visually appealing and intuitive interfaces optimized for performance.",
    fullDescription:
      "We build intuitive digital products that users love. By bridging empathetic user research with pixel-perfect visual design systems, our UI/UX team crafts memorable journeys that elevate brands and drastically lower friction across web and mobile touchpoints.",
    features: [
      "User Research & Journey Mapping",
      "Wireframing & Interactive Prototyping",
      "Atomic Design Systems & Component Libraries",
      "Usability Testing & Conversion Rate Optimization",
      "Micro-interactions & Motion UX Design",
      "Accessibility (WCAG 2.1 AA) Compliance",
    ],
    deliverables: [
      "Figma Design Systems & Style Guides",
      "Clickable High-Fidelity Prototypes",
      "User Persona & Empathy Maps",
      "Production-ready Asset Handoffs",
    ],
    timeline: [
      {
        step: "01",
        title: "Empathize & Discover",
        description: "Stakeholder interviews, user behavior analytics, competitor teardowns, and user pain point identification.",
      },
      {
        step: "02",
        title: "Define & Architecture",
        description: "Information architecture, sitemaps, user flow diagrams, and core wireframe blueprints.",
      },
      {
        step: "03",
        title: "Interactive Prototyping",
        description: "High-fidelity UI mockups, typographic hierarchy, responsive layouts, and interactive click-throughs in Figma.",
      },
      {
        step: "04",
        title: "Usability Testing & Polish",
        description: "Rigorous user testing sessions, feedback integration, micro-animations, and developer-ready design tokens.",
      },
    ],
  },
  {
    id: "website-design-development",
    slug: "website-design-development",
    title: "Website Design & Development",
    badge: "High Performance",
    iconName: "Code2",
    shortDescription:
      "Enhance your online presence with Pep Softwares. We offer stunning website design and development services that set you apart from the competition and leave a lasting impression.",
    fullDescription:
      "We architect high-performance, responsive websites that combine aesthetic brilliance with cutting-edge engineering. Leveraging Next.js, React, modern CSS, and headless architectures, we deliver lightning-fast loading speeds, bulletproof SEO, and fluid scroll interactions.",
    features: [
      "Custom Next.js & React Web Application Development",
      "Ultra-Fast Jamstack & Headless CMS Integration",
      "Fluid Scroll & 3D Interactive Web Experiences",
      "Responsive Cross-Browser & Mobile First Execution",
      "Technical SEO & Core Web Vitals Optimization",
      "Continuous CI/CD Deployment with Vercel & AWS",
    ],
    deliverables: [
      "Fully Responsive Web Architecture",
      "Clean, Documented TypeScript Codebase",
      "Automated Lighthouse Performance > 95",
      "Admin CMS Dashboard Integration",
    ],
    timeline: [
      {
        step: "01",
        title: "Technical Discovery",
        description: "Tech stack selection, architecture design, API contract mapping, and database schema planning.",
      },
      {
        step: "02",
        title: "Front-End Engineering",
        description: "Crafting reusable components, responsive layouts, state management, and fluid motion systems.",
      },
      {
        step: "03",
        title: "CMS & API Integration",
        description: "Wiring backend endpoints, authentication, content pipelines, and third-party integrations.",
      },
      {
        step: "04",
        title: "Performance & Deployment",
        description: "Core Web Vitals auditing, load testing, security review, and zero-downtime production deployment.",
      },
    ],
  },
  {
    id: "mobile-app-design-development",
    slug: "mobile-app-design-development",
    title: "Mobile App Development",
    badge: "iOS & Android",
    iconName: "Smartphone",
    shortDescription:
      "Achieve your app's full potential with our comprehensive design and development services. We specialize in seamless integration, robust device management, and ensuring a superior user experience.",
    fullDescription:
      "From native Swift & Kotlin power to high-velocity React Native and Flutter cross-platform solutions, we engineer mobile applications that feel effortless, responsive, and tactile. We handle everything from conception to Google Play and Apple App Store compliance.",
    features: [
      "Cross-Platform React Native & Flutter Engineering",
      "Native iOS (Swift) & Android (Kotlin) Optimization",
      "Offline-First Data Sync & Local Storage",
      "Push Notifications & Deep Linking Pipelines",
      "Biometric Security & Encrypted Credential Vaults",
      "App Store & Google Play Store Submission Management",
    ],
    deliverables: [
      "Production-ready iOS and Android Binaries",
      "Backend REST / GraphQL API Services",
      "App Store Optimization (ASO) Package",
      "Real-time Analytics & Crashlytics Monitoring",
    ],
    timeline: [
      {
        step: "01",
        title: "App Scope & Architecture",
        description: "Feature matrix formulation, SDK evaluation, and native module requirements mapping.",
      },
      {
        step: "02",
        title: "Mobile UI & Prototype",
        description: "Native platform ergonomics, gesture controls, dark mode support, and interactive click models.",
      },
      {
        step: "03",
        title: "Agile Development Sprints",
        description: "Bi-weekly testflight/internal builds, device fragmentation testing, and battery efficiency optimization.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        description: "App store review guidance, launch day telemetries, and post-launch stability monitoring.",
      },
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    title: "Graphic Design & AR/VR",
    badge: "Creative & Spatial",
    iconName: "Palette",
    shortDescription:
      "Enhance your brand with captivating visuals and stunning designs that leave a lasting impact. Our professional graphic design services bring your ideas to life, engaging your audience with eye-catching graphics and immersive realities.",
    fullDescription:
      "In a crowded digital ecosystem, visual distinction is your greatest competitive moat. We forge iconic brand identities, bespoke marketing collateral, 3D motion assets, and boundary-pushing Augmented & Virtual Reality spatial experiences.",
    features: [
      "Brand Identity & Visual Guidelines",
      "3D Modeling, Motion Graphics & WebGL Assets",
      "Augmented Reality (AR) Filters & WebAR Experiences",
      "Marketing Collateral & High-Conversion Ad Creatives",
      "Packaging Design & Vector Illustration Systems",
      "Interactive 3D Product Viewers & Configurator",
    ],
    deliverables: [
      "Comprehensive Brand Styleguide PDF & Assets",
      "3D Asset Packages (GLTF / GLB / USDZ)",
      "High-Resolution Print & Digital Vector Files",
      "Social Media & Campaign Creative Kits",
    ],
    timeline: [
      {
        step: "01",
        title: "Creative Moodboarding",
        description: "Visual benchmarking, color psychology, typography pairing, and spatial concept explorations.",
      },
      {
        step: "02",
        title: "Concept Iteration",
        description: "Drafting varied creative directions, 3D clay renders, and AR interaction mockups.",
      },
      {
        step: "03",
        title: "Asset Refinement",
        description: "Fine-tuning shaders, vector geometry, lighting setups, and typography systems.",
      },
      {
        step: "04",
        title: "Format Optimization",
        description: "Packaging assets for web performance, multi-resolution print, and AR real-time rendering engines.",
      },
    ],
  },
];
