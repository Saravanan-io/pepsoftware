import { ProjectItem } from "@/types";

export const PORTFOLIO_DATA: ProjectItem[] = [
  {
    id: "hospital-management-system",
    slug: "hospital-management-system",
    title: "Hospital Management System",
    category: "Websites",
    client: "CarePulse Health Network",
    year: "2024",
    summary:
      "A comprehensive, HIPAA-compliant patient management and doctor scheduling portal designed for seamless clinical workflow.",
    challenge:
      "Healthcare practitioners were overwhelmed by fragmented systems, slow patient record retrieval, and complicated appointment booking flows that resulted in long wait times.",
    solution:
      "We engineered a modern, ultra-clean web platform with real-time patient queue telemetries, electronic health records (EHR) sync, and automated doctor calendar scheduling.",
    results: [
      { metric: "65%", label: "Faster Patient Check-in" },
      { metric: "99.98%", label: "System Uptime" },
      { metric: "42k+", label: "Monthly Active Consultations" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Socket.io"],
    image: "/images/portfolio/hospital-management.webp",
    featured: true,
  },
  {
    id: "fashion-brand-app",
    slug: "fashion-brand-app",
    title: "Fashion Brand E-Commerce App",
    category: "Mobile Apps",
    client: "Moda Luxe Atelier",
    year: "2024",
    summary:
      "A luxury e-commerce mobile application featuring real-time lookbook exploration, AI size recommendations, and instant checkout.",
    challenge:
      "The client struggled with low mobile conversion rates and high return percentages due to ambiguous sizing and a clunky multi-step checkout.",
    solution:
      "Designed an editorial-style iOS and Android app with fluid 60fps micro-animations, Apple Pay 1-tap checkout, and interactive virtual try-on previews.",
    results: [
      { metric: "+180%", label: "Mobile Conversion Increase" },
      { metric: "38%", label: "Reduction in Size Returns" },
      { metric: "4.9/5", label: "App Store User Rating" },
    ],
    technologies: ["React Native", "Expo", "Framer Motion", "Stripe API", "GraphQL"],
    image: "/images/portfolio/fashion-brand-app.webp",
    featured: true,
  },
  {
    id: "property-listing-platform",
    slug: "property-listing-platform",
    title: "Property Listing & Virtual Tour",
    category: "Websites",
    client: "Aura Estates Global",
    year: "2024",
    summary:
      "High-end residential real estate portal featuring interactive neighborhood mapping, instant mortgage calculators, and 3D architectural walk-throughs.",
    challenge:
      "Prospective international buyers needed immersive remote viewing tools without lagging interfaces or cumbersome file downloads.",
    solution:
      "Constructed a high-speed Jamstack web platform with WebGL 3D property tours, dynamic filters, and real-time agent WhatsApp chat hooks.",
    results: [
      { metric: "3.2x", label: "Higher Lead Engagement" },
      { metric: "<0.8s", label: "Average Page Load Time" },
      { metric: "$12M+", label: "Quarterly Inquiries Driven" },
    ],
    technologies: ["Next.js 14", "Three.js", "Tailwind CSS", "Mapbox GL", "Sanity CMS"],
    image: "/images/portfolio/property-listing.webp",
    featured: true,
  },
  {
    id: "fintech-capital-dashboard",
    slug: "fintech-capital-dashboard",
    title: "OmniCapital FinTech Dashboard",
    category: "UI/UX",
    client: "OmniCapital Markets",
    year: "2024",
    summary:
      "High-density institutional trading and portfolio intelligence interface built with dark/light ergonomics and instant data streaming.",
    challenge:
      "Traders required immense data density without cognitive fatigue, alongside instant order execution feedback.",
    solution:
      "Created an Atomic Design System in Figma with custom high-contrast visual cues, zero-latency micro-charts, and modular dashboard widgets.",
    results: [
      { metric: "40%", label: "Reduced Task Execution Time" },
      { metric: "100%", label: "Trader Satisfaction Score" },
      { metric: "0ms", label: "Visual Stutter on 10k Ticks" },
    ],
    technologies: ["Figma", "Design Systems", "Tailwind CSS", "TradingView Charting"],
    image: "/images/portfolio/fintech-dashboard.webp",
    featured: false,
  },
  {
    id: "spatial-virtual-showroom",
    slug: "spatial-virtual-showroom",
    title: "Spatial AR Automotive Showroom",
    category: "AR/VR",
    client: "Velox Hypercars",
    year: "2024",
    summary:
      "Augmented reality vehicle configurator allowing customers to place photorealistic 1:1 scale vehicles in their driveway.",
    challenge:
      "Showcasing custom automotive paint finishes and interior leather trims before manufacturing.",
    solution:
      "Engineered WebAR experience requiring no app download, delivering real-time ray-traced reflections and interactive door opening states.",
    results: [
      { metric: "4.5 Min", label: "Avg Session Duration" },
      { metric: "92%", label: "Positive Sentiment Score" },
      { metric: "250k+", label: "Unique WebAR Launches" },
    ],
    technologies: ["WebXR", "Three.js", "GLTF/USDZ", "Blender", "Tailwind CSS"],
    image: "/images/portfolio/ar-showroom.webp",
    featured: false,
  },
  {
    id: "zenith-iot-smart-living",
    slug: "zenith-iot-smart-living",
    title: "Zenith IoT Smart Living System",
    category: "Mobile Apps",
    client: "Zenith Automations",
    year: "2023",
    summary:
      "Smart home control mobile application synchronizing ambient lighting, HVAC, and biometric door security in sub-50ms latency.",
    challenge:
      "Users struggled with lag between app toggles and physical hardware response, as well as disconnected schedules.",
    solution:
      "Built a tactile, responsive Flutter interface with offline Bluetooth fallback and reactive state synchronisation.",
    results: [
      { metric: "<50ms", label: "Hardware Response Time" },
      { metric: "98.5%", label: "Crash-free User Rate" },
      { metric: "50k+", label: "Connected Smart Devices" },
    ],
    technologies: ["Flutter", "Dart", "MQTT", "WebSockets", "Figma"],
    image: "/images/portfolio/zenith-iot.webp",
    featured: false,
  },
];
