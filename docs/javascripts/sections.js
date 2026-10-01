// Collapsible sections. Click a heading to show or hide its content.
// Every h2 is collapsible. An h3 is collapsible only if you tag it.
// Heading classes (set with {.class} after the heading text):
//   .collapsed    h2 or h3: start collapsed (an h3 with it is collapsible)
//   .collapsible  h3: collapsible, starts expanded
//   .side-rule    h3: vertical line down the side of that subsection
//                 (every h2 section gets one from extra.css)
// Classes combine, for example: ### Title {.side-rule .collapsed}
(function () {
  // Move the siblings after a heading, up to the next heading in `stopAt`,
  // into a new wrapper placed right after the heading
  function wrapContent(heading, className, stopAt) {
    const body = document.createElement("div");
    body.className = className;
    let node = heading.nextElementSibling;
    while (node && !stopAt.includes(node.tagName)) {
      const next = node.nextElementSibling;
      body.appendChild(node);
      node = next;
    }
    heading.after(body);
    return body;
  }

  function makeToggle(heading, body) {
    heading.classList.add("section-toggle");
    if (heading.classList.contains("collapsed")) body.hidden = true;
    heading.setAttribute("aria-expanded", String(!body.hidden));
    heading.addEventListener("click", (event) => {
      if (event.target.closest("a")) return; // keep the ¶ permalink working
      body.hidden = !body.hidden;
      heading.setAttribute("aria-expanded", String(!body.hidden));
    });
  }

  function init() {
    const article = document.querySelector("article.md-typeset");
    if (!article || article.dataset.sectionsInit) return;
    article.dataset.sectionsInit = "1";

    article.querySelectorAll(":scope > h2").forEach((h2) => {
      makeToggle(h2, wrapContent(h2, "section-body", ["H2"]));
    });

    article
      .querySelectorAll("h3.side-rule, h3.collapsible, h3.collapsed")
      .forEach((h3) => {
        const body = wrapContent(h3, "subsection-body", ["H2", "H3"]);
        if (h3.classList.contains("side-rule")) {
          // Wrap heading and content so the line runs down both
          const wrap = document.createElement("div");
          wrap.className = "side-rule";
          h3.before(wrap);
          wrap.append(h3, body);
        }
        if (h3.matches(".collapsible, .collapsed")) makeToggle(h3, body);
      });

    expandForHash();
  }

  // If a link points into collapsed sections, open each of them first
  function expandForHash() {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target) return;
    let opened = false;
    const open = (body) => {
      if (!body || !body.hidden) return;
      body.hidden = false;
      body.previousElementSibling.setAttribute("aria-expanded", "true");
      opened = true;
    };
    if (target.classList.contains("section-toggle")) open(target.nextElementSibling);
    for (let el = target.parentElement; el; el = el.parentElement) {
      if (el.matches(".section-body, .subsection-body")) open(el);
    }
    if (opened) target.scrollIntoView();
  }

  window.addEventListener("hashchange", expandForHash);
  if (window.document$) {
    window.document$.subscribe(init); // instant navigation
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
