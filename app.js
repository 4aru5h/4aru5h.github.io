/* Renders the project cards from projects.js and wires up the small interactions. */
(function () {
  "use strict";

  // Static, trusted SVG markup. Project data itself is only ever inserted as text.
  var ICONS = {
    bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
    people: '<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="4"/><circle cx="16" cy="13" r="4"/><path d="M3 21c0-3 2.7-5 6-5M14 21c.4-1.7 1-2.6 2-3"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></svg>',
    cube: '<svg viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    wave: '<svg viewBox="0 0 24 24"><path d="M2 12c2.5-4 5-4 7.5 0s5 4 7.5 0 3.5-3 5-2"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
  };
  var ARROW = '<svg viewBox="0 0 24 24"><path d="M7 17 17 7M9 7h8v8"/></svg>';
  var TONES = ["tomato", "blue", "green", "sun"];

  var projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  var grid = document.getElementById("project-grid");
  var count = document.getElementById("project-count");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function hrefFor(p) {
    return p.url || "/" + encodeURIComponent(p.slug) + "/";
  }

  function labelFor(p) {
    if (!p.url) return "/" + p.slug;
    try { return new URL(p.url).host; } catch (e) { return p.url; }
  }

  projects.forEach(function (p, i) {
    var slot = el("li", "slot");
    slot.dataset.tone = TONES.indexOf(p.tone) > -1 ? p.tone : TONES[i % TONES.length];
    slot.style.setProperty("--i", i);

    var card = el("a", "card");
    card.href = hrefFor(p);

    var top = el("span", "card-top");
    var icon = el("span", "card-icon");
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = ICONS[p.icon] || ICONS.spark;
    top.append(icon, el("span", "card-path", labelFor(p)));

    var tags = el("span", "card-tags");
    (p.tags || []).forEach(function (t) { tags.append(el("span", "tag", t)); });

    var go = el("span", "card-go");
    go.setAttribute("aria-hidden", "true");
    go.append(el("span", null, "open"));
    go.insertAdjacentHTML("beforeend", ARROW);

    card.append(top, el("h3", "card-title", p.name), el("p", "card-desc", p.blurb), tags, go);
    slot.append(card);
    grid.append(slot);
  });

  if (count) count.textContent = projects.length + " live";

  // "Surprise me": pick a random card, bring it into view and focus it.
  var surprise = document.getElementById("surprise");
  var last = -1;
  if (surprise && projects.length > 1) {
    surprise.hidden = false;
    surprise.addEventListener("click", function () {
      var cards = grid.querySelectorAll(".card");
      var n;
      do { n = Math.floor(Math.random() * cards.length); } while (n === last);
      last = n;

      var card = cards[n];
      var slot = card.parentElement;
      grid.querySelectorAll(".picked").forEach(function (s) { s.classList.remove("picked"); });
      void slot.offsetWidth; // restart the animation if the same slot is picked twice
      slot.classList.add("picked");
      card.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth", block: "center" });
      card.focus({ preventScroll: true });
      setTimeout(function () { slot.classList.remove("picked"); }, 1600);
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
