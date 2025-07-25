import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CabBFIVY.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { type } = Astro2.props;
  const tagColors = {
    JavaScript: "#fff8b3",
    TypeScript: "#c5dfff",
    React: "#d0f4ff",
    PostgreSQL: "#c3d4f3",
    Groovy: "#cceeff",
    Java: "#f6c8b8",
    Electron: "#d3f0f5",
    FHIR: "#ffd6d6",
    CI: "#b2f2e6"
  };
  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 60%, 85%)`;
  }
  const bgColor = tagColors[type] || stringToColor(type);
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`
    display: inline-block;
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 9999px;
    color: #333;
    background-color: ${bgColor};
    white-space: nowrap;
  `, "style")}> ${type} </span>`;
}, "/home/maud/Projects/portfolio/src/components/Tag.astro", void 0);

export { $$Tag as $ };
