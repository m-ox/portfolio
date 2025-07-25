import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, f as renderScript, m as maybeRenderHead, e as renderSlot } from './astro/server_CabBFIVY.mjs';
import 'kleur/colors';
import { useEffect } from 'react';
import { jsx } from 'react/jsx-runtime';
import { s as styles } from './about.9f997469_Dxy4gXDi.mjs';

const highlightWords = [
  "Maud",
  "Resume",
  "Forkzilla",
  "Zero Stars Club",
  "fun",
  "logic",
  "creative",
  "code",
  "maudlin",
  "oxalis",
  "m-ox",
  "api",
  "experiment",
  "styling",
  "ideas",
  "delivery",
  "yes",
  "deranged",
  "skunk",
  "silly",
  "skills",
  "GitHub"
];
const regex = new RegExp(`\\b(${highlightWords.join("|")})\\b`, "gi");
function wrapMatchesInDOM(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }
  for (const node of textNodes) {
    const parent = node.parentElement;
    if (!parent || parent.closest(".no-highlight")) continue;
    const text = node.nodeValue;
    if (!text || !regex.test(text)) continue;
    const fragment = document.createDocumentFragment();
    const parts = text.split(regex);
    for (const part of parts) {
      const match = highlightWords.find((w) => w.toLowerCase() === part.toLowerCase());
      if (match) {
        const span = document.createElement("span");
        span.className = "maudlin oxalis";
        span.textContent = part;
        fragment.appendChild(span);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    }
    parent.replaceChild(fragment, node);
  }
}
function Highlighter() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      wrapMatchesInDOM(document.body);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);
  return null;
}

function NavCL({ currentPath }) {
  const links = [
    { path: "/", label: "Home", style: styles.home },
    { path: "/about", label: "About", style: styles.about },
    { path: "/projects", label: "Projects", style: styles.projects },
    { path: "/contact", label: "Contact", style: styles.contact }
  ];
  return /* @__PURE__ */ jsx("nav", { className: styles.navbar, children: links.map(({ path, label, style }) => {
    const normalize = (s) => s.replace(/\/+$/, "") || "/";
    const isActive = normalize(currentPath) === normalize(path);
    return /* @__PURE__ */ jsx(
      "a",
      {
        href: path,
        className: `${styles.navLink} ${style} ${isActive ? styles.active : ""}`,
        "aria-disabled": isActive,
        tabIndex: isActive ? -1 : void 0,
        children: label
      },
      path
    );
  }) });
}

const $$Astro$1 = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nav;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "NavCL", NavCL, { "currentPath": currentPath, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/Nav/NavCL.tsx", "client:component-export": "default" })}`;
}, "/home/maud/Projects/portfolio/src/components/Nav/Nav.astro", void 0);

const $$Astro = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> ${renderScript($$result, "/home/maud/Projects/portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<!-- Meta Tags --><meta name="description" content="Portfolio of m-ox"><meta charset="UTF-8"><title>m-ox | ${title}</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" href="/favicon.ico" type="image/x-icon"><!-- Open Graph --><meta property="og:title" content="m-ox | Home"><meta property="og:description" content="Portfolio of m-ox"><meta property="og:url" content="https://m-ox.github.io/portfolio/"><meta property="og:type" content="website"><meta property="og:image" content="https://m-ox.github.io/portfolio/cutiepreview.png"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="m-ox | Portfolio"><meta name="twitter:description" content="The personal portfolio of m-ox, software engineer and digital mischief-maker."><meta name="twitter:image" content="https://m-ox.github.io/portfolio/cutiepreview.png"> ${maybeRenderHead()}<body style="display: flex; flex-direction: column; min-height: 100vh; margin: 0;"> ${renderComponent($$result, "Highlighter", Highlighter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/Highlighter", "client:component-export": "default" })} ${renderComponent($$result, "ViewportWatcher", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/maud/Projects/portfolio/src/components/ViewportWatcher", "client:component-export": "default" })} ${renderComponent($$result, "Nav", $$Nav, {})} <main style="flex: 1; align-self: anchor-center;"> ${renderSlot($$result, $$slots["default"])} </main> <footer style="padding: 1rem; text-align: center; font-size: .9rem;">
Created using Astro JS with &#10084;&#65039; by <a class="maudlin oxalis" href="https://github.com/m-ox" target="_blank" rel="noopener noreferrer">m-ox</a> </footer> </body></html>`;
}, "/home/maud/Projects/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
