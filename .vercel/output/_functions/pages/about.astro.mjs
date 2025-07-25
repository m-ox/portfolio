import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CabBFIVY.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Card } from '../chunks/Card_BS98bkvT.mjs';
import { $ as $$Tag } from '../chunks/Tag_CQwxKsjn.mjs';
import { $ as $$Layout } from '../chunks/Layout_9Bz_5mLh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-container"> ${renderComponent($$result2, "Card", $$Card, { "title": "About Me" }, { "default": ($$result3) => renderTemplate` <div class="about-flex"> <img src="/maud.jpg" alt="Photo of Me" style="width: 12rem; height: 12rem; border-radius: 50%; object-fit: cover;"> <div style="text-align: left; display: grid; gap: 1.5rem;"> <div><strong>Name:</strong> Marlena "Maud" Nordby</div> <div><strong>Location:</strong> Montana, USA</div> <div><strong>Experience:</strong> 3+ years professionally, full-stack</div> <div><strong>Favorite Stack:</strong> React, TypeScript, PostgreSQL (PERN-adjacent)</div> <div><strong>Recent Focus:</strong> Privacy-conscious healthcare, FHIR standards, PHI compliance</div> <div><strong>Values:</strong> Clear UX, smooth state management, async collaboration, work-hard-play-hard</div> <div><strong>Looking for:</strong> Remote software roles, mission-driven teams</div> <div><strong>Fun fact:</strong> I paint surreal scenes, hike mountain trails, and occasionally commit culinary crimes</div> </div> </div> ` })} <div class="about-container"> ${renderComponent($$result2, "Card", $$Card, { "title": "Summary" }, { "default": ($$result3) => renderTemplate` <p class="about-summary">
I’m a <span class="hl-1">full-stack software engineer</span> who thrives on turning real-world problems into <span class="hl-2">user-centered, performant systems</span>. I’ve contributed to projects ranging from <span class="hl-3">Java and Node backends</span> to <span class="hl-4">TypeScript frontends built with React and Electron</span>. Much of my recent work has focused on building intuitive healthcare tools in <span class="hl-1">FHIR-compliant environments</span>, where I value <span class="hl-2">clean interfaces</span> and <span class="hl-3">ethical responsibility</span>. I move easily between feature development, refactoring, and internal documentation, and I gravitate toward <span class="hl-4">mission-driven teams</span> that prioritize clarity and autonomy.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "title": "Badge Board" }, { "default": ($$result3) => renderTemplate` <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;"> ${[
    "HTML",
    "CSS",
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Java",
    "Groovy",
    "Electron",
    "FHIR",
    "Docker",
    "Next.js",
    "Astro",
    "Spring Boot",
    "MongoDB",
    "Azure",
    "EmailJS",
    "Svelte",
    "Vite",
    "Bun",
    "SCSS",
    "MaterialUI",
    "TailwindCSS",
    "RESTful APIs",
    "Agile",
    "Git",
    "CI/CD",
    "Testing",
    "508 Compliance",
    "Jest",
    "Vitest"
  ].map((type) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "type": type })}`)} </div> ` })} </div> </section> ` })}`;
}, "/home/maud/Projects/portfolio/src/pages/about.astro", void 0);

const $$file = "/home/maud/Projects/portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
