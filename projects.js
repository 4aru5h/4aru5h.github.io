/*
 * The project list for 4aru5h.github.io.
 *
 * Cards render in the order listed here.
 *
 *   slug  Repo name / folder on GitHub Pages. The card links to /<slug>/
 *   name  Title shown on the card
 *   blurb One or two short sentences
 *   tags  A few short lowercase words (optional)
 *   icon  bolt | people | spark | cube | wave | grid   (see ICONS in app.js)
 *   tone  tomato | blue | green | sun                  (card accent colour)
 *   url   Optional. Full URL, only if the project lives somewhere other than /<slug>/
 */
window.PROJECTS = [
  {
    slug: "bolt-lang",
    name: "bolt-lang",
    blurb:
      "A toy programming language written from scratch in TypeScript, featuring an in-browser playground backed by Monaco Editor.",
    tags: ["language", "playground", "typescript"],
    icon: "bolt",
    tone: "tomato",
    url: "https://boltlang.vercel.app"
  },
  {
    slug: "infinite-car-driving",
    name: "infinite-car-driving",
    blurb:
      "A 3D endless highway driving simulation written in pure C++ using native Win32 API and OpenGL with real-time software audio wave synthesis.",
    tags: ["c++", "opengl", "win32", "simulation"],
    icon: "cube",
    tone: "sun",
    url: "https://github.com/4aru5h/infinite-car-driving"
  },
  {
    slug: "Cybersecurity-Automation-And-Intelligent-Threat-Detection",
    name: "Cybersecurity Capstone",
    blurb:
      "Unified SOC automation and intelligent threat detection suite: TCP scanner, VirusTotal enrichment, dual-model ML detection, and STRIDE API.",
    tags: ["security", "ml", "python", "devsecops"],
    icon: "grid",
    tone: "tomato",
    url: "https://github.com/4aru5h/Cybersecurity-Automation-And-Intelligent-Threat-Detection"
  },
  {
    slug: "4aru5h-portfolio-cms",
    name: "4aru5h.in Portfolio & CMS",
    blurb:
      "Personal portfolio platform with an integrated content management system admin dashboard, session auth, and interactive CTF terminal.",
    tags: ["full-stack", "react", "node", "postgres"],
    icon: "spark",
    tone: "green",
    url: "https://4aru5h.in"
  },
  {
    slug: "social-conclave-design-prototype",
    name: "Social Conclave",
    blurb:
      "A homepage design prototype created for the Social Conclave conference at MPSTME, NMIMS.",
    tags: ["design concept", "html", "css"],
    icon: "people",
    tone: "blue"
  }
];
