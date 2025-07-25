import { a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, c as createAstro, e as renderSlot } from '../chunks/astro/server_CabBFIVY.mjs';
import 'kleur/colors';
import '../chunks/about.9f997469_Dxy4gXDi.mjs';
import { s as styles, a as styles$1, b as styles$2 } from '../chunks/index.95d291e9_B3MynYfE.mjs';
import { $ as $$Layout } from '../chunks/Layout_9Bz_5mLh.mjs';
import { $ as $$Card, u as useStore } from '../chunks/Card_BS98bkvT.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useCallback, useEffect, useState } from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$IntroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="responsive-column"> ${renderComponent($$result, "Card", $$Card, { "class": "intro", "title": "Hi, I\u2019m Maud." }, { "default": ($$result2) => renderTemplate` <p>
Building tools with code, making messes with paint.<br>
Somewhere between structured logic and creative residue.<br> </p> ` })} ${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` <p class="quote">
"I am a mess, but I am a beautiful mess." –
<a href="https://www.goodreads.com/quotes/1000000-i-am-a-mess-but-i-am-a-beautiful-mess" target="_blank" rel="noopener noreferrer">Unknown</a> </p> ` })} </div>`;
}, "/home/maud/Projects/portfolio/src/components/HomeSections/IntroSection.astro", void 0);

function Toggle({
  label,
  value,
  onToggle,
  className = ""
}) {
  const handleClick = useCallback(() => {
    onToggle?.(!value);
  }, [value, onToggle]);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: handleClick,
      "aria-pressed": value,
      className: `${styles.toggle} ${value ? styles.on : styles.off} ${className}`,
      children: [
        /* @__PURE__ */ jsx("span", { className: styles.label, children: label }),
        /* @__PURE__ */ jsx("span", { className: styles.slider })
      ]
    }
  );
}

const ControlPanelCL = () => {
  const motion = useStore((s) => s.motion);
  const setMotion = useStore((s) => s.setMotion);
  const goffMode = useStore((s) => s.goffMode);
  const setGoffMode = useStore((s) => s.setGoffMode);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", goffMode);
  }, [goffMode]);
  const toggleGoff = () => {
    const newMode = goffMode === "light" ? "dark" : "light";
    setGoffMode(newMode);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$1.panel, children: [
    /* @__PURE__ */ jsx("div", { className: styles$1.control, children: /* @__PURE__ */ jsx(
      Toggle,
      {
        id: "motion-toggle",
        label: "Silly Mode (desktop only)",
        value: motion,
        onToggle: setMotion
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: styles$1.control, children: /* @__PURE__ */ jsx(
      Toggle,
      {
        id: "theme-toggle",
        label: "Spooky Mode (in progress)",
        value: goffMode === "dark",
        onToggle: toggleGoff
      }
    ) })
  ] });
};

const $$Astro = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$ControlPanel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ControlPanel;
  const { title = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ControlPanelCL", ControlPanelCL, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/ControlPanel/ControlPanelCL.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/maud/Projects/portfolio/src/components/ControlPanel/ControlPanel.astro", void 0);

const $$InfoSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="responsive-column"> ${renderComponent($$result, "Card", $$Card, { "title": "Resume", "style": "height: fit-content;" }, { "default": ($$result2) => renderTemplate` <a href="https://docs.google.com/document/d/1HIBwf6mr-sEhKQi-kutVROjBaWRFJSqasI2gcFCEYWs/edit?usp=sharing">
Work history and skills
</a> ` })} ${renderComponent($$result, "Card", $$Card, { "title": "Control Panel" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ControlPanel", $$ControlPanel, {})} ` })} </div>`;
}, "/home/maud/Projects/portfolio/src/components/HomeSections/InfoSection.astro", void 0);

const awards = (data) => [
  // fork
  data.totalForks > 0 ? "🌱 Forkling: Sole monarch of clinging mediocrity." : null,
  data.totalForks > 5 ? "🌿 Forklet: A small but significant contribution to the fork ecosystem." : null,
  data.totalForks > 10 ? "🌳 Fork Forest: A thriving ecosystem of forks." : null,
  data.totalForks > 50 ? "🌲 Forkzilla: A monstrous collection of forks." : null,
  // stars
  data.totalStars === 0 ? "🌑 Zero Stars Club: Unloved. Undiscovered. Unbothered." : null,
  data.totalStars > 0 ? "⭐ Star Gazer: A beacon of hope in the vast sea of GitHub." : null,
  data.totalStars > 10 ? "🌟 Star Collector: A burgeoning connoisseur of... writing things people like." : null,
  data.totalStars > 50 ? "✨ Star Master: A master of the art of writing things people like." : null,
  data.totalStars > 100 ? "🌌 Star Lord: Terrifyingly important." : null,
  // average length
  data.averageLength < 20 ? "✂️ Conciseness Award: Less is more." : null,
  data.averageLength < 50 ? "📝 Brevity is Key: Not too long winded." : null,
  data.averageLength > 100 ? "📜 Verbosity Award: Why say little when you can say everything?" : null,
  // combo awards amde by chat gpt because it amused me
  data.totalStars === 0 && data.totalForks > 10 ? "🧪 Quantum Nuisance: Unstarred, yet cloned relentlessly. Are you a glitch in the Matrix?" : null,
  data.totalStars > 50 && data.averageLength > 100 ? "📢 Cult Leader of Commits: Loud, loved, and entirely too detailed." : null,
  data.totalForks === 0 && data.totalStars === 0 && data.averageLength < 20 ? "🚫 Invisible Developer: No forks, no stars, no fluff. You may be a bot." : null,
  data.totalForks > 50 && data.totalStars === 0 ? "🧬 Genetic Dead-End: Everyone copies you, no one likes you." : null,
  data.totalStars > 100 && data.totalForks > 100 ? "👑 GitHub Demigod: Born in a .gitignore, destined for README scripture." : null,
  data.totalStars < 5 && data.averageLength > 200 ? "🎭 Tragedian: Writing epics into the void." : null
].filter(Boolean);

const LoaderDots = () => {
  const isMobile = useStore((s) => s.isMobile);
  return /* @__PURE__ */ jsxs("div", { style: { width: isMobile ? "100%" : "25rem" }, className: "loader-dots", children: [
    /* @__PURE__ */ jsx("span", {}),
    /* @__PURE__ */ jsx("span", {}),
    /* @__PURE__ */ jsx("span", {})
  ] });
};

const GitHubStats = () => {
  const [data, setData] = useState(null);
  const [onGitHubPages, setOnGitHubPages] = useState(false);
  const [error, setError] = useState(false);
  const isMobile = useStore((s) => s.isMobile);
  useEffect(() => {
    const onGitHub = window.location.hostname.includes("github.io");
    setOnGitHubPages(onGitHub);
    if (onGitHub) {
      setError(true);
      return;
    }
    fetch("/api/github").then((res) => {
      if (!res.ok) throw new Error("Failed to fetch GitHub stats");
      return res.json();
    }).then(setData).catch(() => setError(true));
  }, []);
  if (error) return /* @__PURE__ */ jsx("div", { style: { height: isMobile ? "100%" : "40rem", width: isMobile ? "100%" : "42rem" }, children: /* @__PURE__ */ jsx(
    "img",
    {
      src: "https://ghchart.rshah.org/m-ox",
      alt: "GitHub Contribution Chart",
      style: {
        width: "100%",
        maxWidth: "100%",
        marginBottom: "1rem"
      }
    }
  ) });
  if (!data) return /* @__PURE__ */ jsx("div", { style: { height: isMobile ? "100%" : "30rem", width: isMobile ? "100%" : "25rem" }, children: /* @__PURE__ */ jsx(LoaderDots, {}) });
  return /* @__PURE__ */ jsxs("div", { style: { width: isMobile ? "100%" : "25rem" }, children: [
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Total commits:" }),
      " ",
      data.totalCommits,
      " (",
      (data.totalCommits / 365).toFixed(1),
      " per day — seek help.)"
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Most common first word:" }),
      " ",
      /* @__PURE__ */ jsx("code", { children: data.mostCommonFirstWord }),
      " (truly inspired.)"
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("strong", { children: "Average commit length:" }),
      " ",
      data.averageLength,
      " chars (probably too much.)"
    ] }),
    /* @__PURE__ */ jsx("h4", { children: "Awards:" }),
    awards(data).map((award, idx) => /* @__PURE__ */ jsx("p", { children: award }, idx)),
    /* @__PURE__ */ jsx("h4", { children: "Longest commit message:" }),
    /* @__PURE__ */ jsx("pre", { style: { whiteSpace: "pre-wrap", fontSize: "0.85rem" }, children: /* @__PURE__ */ jsxs("i", { children: [
      '"',
      data.longestMessage,
      '"'
    ] }) })
  ] });
};

const $$GitHubStats = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "GitHubStatsCL", GitHubStats, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/GithubStats/GitHubStatsCL.tsx", "client:component-export": "default" })}`;
}, "/home/maud/Projects/portfolio/src/components/GithubStats/GitHubStats.astro", void 0);

const $$GitHubSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": "Public GitHub Stats" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHubStats", $$GitHubStats, {})} ` })}`;
}, "/home/maud/Projects/portfolio/src/components/HomeSections/GitHubSection.astro", void 0);

const $$PortfolioBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section style="padding: 0 2rem;" class="portfolio-banner"> ${renderComponent($$result, "Card", $$Card, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate` <p>
This portfolio is a work in progress, showcasing my projects and skills.<br>
Check out the
<a style="color: rgb(109, 35, 134);" href="https://github.com/m-ox/portfolio">source code on GitHub</a>.
</p> ` })} </section>`;
}, "/home/maud/Projects/portfolio/src/components/HomeSections/PortfolioBanner.astro", void 0);

function ThrowyCL({ item, alt = "", className = "", style = {} }) {
  const motionEnabled = useStore((s) => s.motion);
  const isMobile = useStore((s) => s.isMobile);
  const [isMounted, setIsMounted] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;
  const src = `/throwers/${item}.png`;
  const resolvedStyle = {
    width: style.width ?? (isMobile ? "50%" : "15rem"),
    ...style
  };
  const combinedClassName = [
    styles$2.throwy,
    className,
    !isMobile ? item : `mobile ${item}`
  ].filter(Boolean).join(" ");
  if (isMobile || !motionEnabled) {
    return /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        className: combinedClassName,
        style: resolvedStyle,
        draggable: false
      }
    );
  }
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      style: {
        x,
        y,
        rotateX,
        rotateY,
        willChange: "transform",
        width: "fit-content",
        height: "fit-content",
        position: "absolute"
      },
      drag: true,
      dragElastic: 5,
      dragTransition: {
        power: 0.1,
        timeConstant: 50,
        bounceStiffness: 10
      },
      whileTap: { scale: 1.02, rotate: Math.random() * 6 - 3 },
      children: /* @__PURE__ */ jsx(
        "img",
        {
          src,
          alt,
          className: combinedClassName,
          style: resolvedStyle,
          draggable: false
        }
      )
    }
  );
}

function ThrowersCL() {
  const isMobile = useStore((s) => s.isMobile);
  if (isMobile) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ThrowyCL, { item: "plant" }),
    /* @__PURE__ */ jsx(ThrowyCL, { item: "toy" }),
    /* @__PURE__ */ jsx(ThrowyCL, { item: "glasses" }),
    /* @__PURE__ */ jsx(ThrowyCL, { item: "marble" })
  ] });
}

const $$Throwers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ThrowersCL", ThrowersCL, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/Throwers/ThrowersCL.tsx", "client:component-export": "default" })}`;
}, "/home/maud/Projects/portfolio/src/components/Throwers/Throwers.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="position: relative; z-index: 0"> <section class="section-container"> ${renderComponent($$result2, "IntroSection", $$IntroSection, {})} ${renderComponent($$result2, "InfoSection", $$InfoSection, {})} ${renderComponent($$result2, "GitHubSection", $$GitHubSection, {})} </section> ${renderComponent($$result2, "PortfolioBanner", $$PortfolioBanner, {})} </div> ${renderComponent($$result2, "Throwers", $$Throwers, {})} ` })}`;
}, "/home/maud/Projects/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/maud/Projects/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
