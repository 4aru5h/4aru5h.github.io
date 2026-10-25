/*
 * The project list for 4aru5h.github.io.
 *
 * This is the only file you need to touch to add, remove or reorder
 * projects on the homepage. Cards render in the order listed here.
 *
 *   slug  Repo name / folder on GitHub Pages. The card links to /<slug>/
 *   name  Title shown on the card
 *   blurb One or two short sentences
 *   tags  A few short lowercase words (optional)
 *   icon  bolt | people | spark | cube | wave | grid   (see ICONS in app.js)
 *   tone  tomato | blue | green | sun                  (card accent colour)
 *   url   Optional. Full URL, only if the project lives somewhere other than /<slug>/
 *
 * Only list things that are actually deployed. Check https://4aru5h.github.io/<slug>/
 * loads before adding it here.
 */
window.PROJECTS = [
  {
    slug: "bolt-lang",
    name: "bolt-lang",
    blurb:
      "A toy programming language written from scratch, with a playground that runs right in the browser. Write a few lines, hit run, see what happens.",
    tags: ["language", "playground", "typescript"],
    icon: "bolt",
    tone: "tomato"
  },
  {
    slug: "social-conclave-design-prototype",
    name: "Social Conclave",
    blurb:
      "A homepage design concept for Social Conclave at MPSTME, NMIMS. Some of the copy is still placeholder, marked in cyan.",
    tags: ["design concept", "html", "css"],
    icon: "people",
    tone: "blue"
  }
];
