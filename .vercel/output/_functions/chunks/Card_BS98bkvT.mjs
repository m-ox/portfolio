import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, e as renderSlot } from './astro/server_CabBFIVY.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { s as styles } from './index.d3159c3a_DO91aMdh.mjs';
import { create } from 'zustand';

const useStore = create((set) => ({
  isMobile: false,
  setIsMobile: (val) => set({ isMobile: val }),
  goffMode: "light",
  setGoffMode: (val) => set({ goffMode: val }),
  motion: true,
  setMotion: (val) => set({ motion: val })
}));

function CardCL({ children, className = "", style = {}, title }) {
  const motionEnabled = useStore((s) => s.motion);
  const isMobile = useStore((s) => s.isMobile);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);
  if (!isMounted) return null;
  const safeStyle = typeof style === "object" && style !== null ? style : {};
  const resolvedStyle = {
    ...!isMobile && {
      position: "relative",
      zIndex: -1
    },
    ...safeStyle
  };
  if (isMobile || !motionEnabled) {
    return /* @__PURE__ */ jsxs("div", { className: `${styles.card} ${className}`, style: resolvedStyle, children: [
      title && /* @__PURE__ */ jsx("h2", { children: title }),
      children
    ] });
  }
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: `${styles.card} ${className}`,
      style: {
        x,
        y,
        rotateX,
        rotateY,
        willChange: "transform",
        ...resolvedStyle
      },
      drag: true,
      dragElastic: 0,
      dragTransition: { power: 0.05, timeConstant: 50 },
      whileTap: { scale: 1.02, rotate: Math.random() * 6 - 3 },
      children: [
        title && /* @__PURE__ */ jsx("h2", { children: title.split(/(Maud)/i).map(
          (part, idx) => /Maud/i.test(part) ? /* @__PURE__ */ jsx("span", { className: "maudlin oxalis", children: part }, idx) : /* @__PURE__ */ jsx("span", { children: part }, idx)
        ) }),
        children
      ]
    }
  );
}

const $$Astro = createAstro("https://mango-pond-0f0428710.1.azurestaticapps.net/");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title = "", noPadding = false, class: className = "", style = "" } = Astro2.props;
  const paddingClass = noPadding ? "no-padding" : "";
  const classes = ["card", paddingClass, className].filter(Boolean).join(" ");
  return renderTemplate`${renderComponent($$result, "CardCL", CardCL, { "client:load": true, "title": title, "className": classes, "style": style, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/Card/CardCL.tsx", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/maud/Projects/portfolio/src/components/Card/Card.astro", void 0);

export { $$Card as $, useStore as u };
