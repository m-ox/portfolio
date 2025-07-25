import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CabBFIVY.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$Layout } from '../chunks/Layout_9Bz_5mLh.mjs';
import { $ as $$Tag } from '../chunks/Tag_CQwxKsjn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 style="padding: 1rem 0 1.5rem 1rem;">Projects</h1> <section class="section-container"> <div class="projects-wrapper"> <div class="project-card coming-soon"> <h2>AdLib Generator</h2> <p>A web app for generating shareable adlibs using Base64 serialization and local storage. Built with Next.js, Bun, and PostgreSQL.</p> <div>${renderComponent($$result2, "Tag", $$Tag, { "type": "Next.js" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "Bun" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "PostgreSQL" })}</div> <!-- <a href="https://github.com/m-ox/adlib-app" target="_blank">View on GitHub</a> --> </div> <div class="project-card"> <h2>SvelteWeatherApp</h2> <p>App in a day build to experiment with Svelte and present to team for our weekly hosted Coffee and Code. Pulls real-time data from a weather API. Simple and minimal, built with Vite.</p> <div>${renderComponent($$result2, "Tag", $$Tag, { "type": "Svelte" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "Vite" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "API" })}</div> <a href="https://github.com/m-ox/SvelteWeatherApp" target="_blank">View on GitHub</a> </div> <div class="project-card"> <h2>athena-concept-formatter</h2> <p>Plain HTML/JS tool for converting Athena term exports into SQL insert statements for \`public.concept\`. Created for internal use at a job, but maybe it'll help down the road.</p> <div>${renderComponent($$result2, "Tag", $$Tag, { "type": "HTML" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "JavaScript" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "CSS" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "SQL" })}</div> <a href="https://github.com/m-ox/athena-concept-formatter" target="_blank">View on GitHub</a> </div> <div class="project-card"> <h2>SpringFhirIngestion</h2> <p>FHIR ingestion API built in Spring Boot. Basic endpoints for parsing and accessing fields from incoming patient JSON objects.</p> <div>${renderComponent($$result2, "Tag", $$Tag, { "type": "Java" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "Spring Boot" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "FHIR" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "API" })} </div> <a href="https://github.com/m-ox/SpringFhirIngestion" target="_blank">View on GitHub</a> </div> <div class="project-card"> <h2>saraswati-dashboard</h2> <p>Heavily customized fork of Notus React. Developed for a healthcare client. Contributed extensive work in layout and styling.</p> <div>${renderComponent($$result2, "Tag", $$Tag, { "type": "React" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "JavaScript" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "Healthcare" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "SCSS" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "MaterialUI" })} </div> <a href="https://github.com/amida-tech/saraswati-dashboard" target="_blank">View on GitHub</a> </div> <div class="project-card"> <h2>portfolio</h2> <p>My current personal site—built with Astro and custom SCSS, featuring handcrafted components and animations. In fact, you're looking at it right now if you're reading this in browser!</p> <div>${renderComponent($$result2, "Tag", $$Tag, { "type": "Astro" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "SCSS" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "TypeScript" })} ${renderComponent($$result2, "Tag", $$Tag, { "type": "Personal" })}</div> <a href="https://github.com/m-ox/portfolio" target="_blank">View on GitHub</a> </div> </div> </section> ` })}`;
}, "/home/maud/Projects/portfolio/src/pages/projects.astro", void 0);

const $$file = "/home/maud/Projects/portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
