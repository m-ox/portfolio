import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CabBFIVY.mjs';
import 'kleur/colors';
import { s as styles, a as styles$1 } from '../chunks/contact.163c854c_DgMOvRxp.mjs';
import { $ as $$Layout } from '../chunks/Layout_9Bz_5mLh.mjs';
import { $ as $$Card } from '../chunks/Card_BS98bkvT.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
export { renderers } from '../renderers.mjs';

const quotes = [
  // discord quotes
  "Just ditch Windows, simpler solution.",
  "I can only play my launch PS3 in the winter. It is a certifiable winter sport.",
  "I mean, I could always just host raw html, css, js but I like learning new tools.",
  "I don't like to socialize, I'm good.",
  "Yes, I have a real skunk that I use for emotional support.",
  "Topbar is always 4rem. I don't make the rules, just how it has to be.",
  "No Meeting Friday is forever implemented.",
  "Sleep on Ghost™ energy drinks to get that good GOOD rest!",
  "If you rigidly can only code in Python forever, good luck.",
  "I'm mid debugging some hell rn but if you write your conundrum I can look at it with you for fun maybe later",
  "I don't know how to use Astro.",
  "I finetuned my ChatGPT responses to just utterly argue me into the ground on everything I do in code because I hate being yassified.",
  "Why rubberduck when you can have emotional support code skunk?",
  "Hehehehehehehhehehheheh.",
  "Math.random() is actually, like, really bad at being random.",
  "Stop wasting tokens explaining and just regenerate.",
  // chat gpt quotes lol
  "I'm not fixing it, I'm simply removing its ability to fail.",
  "Docker builds character. Mostly through pain.",
  "'It works on my machine' is now a core principle.",
  "Every feature is a bug if you look hard enough.",
  "npm install depression --save-dev",
  "JUST PIVOT.",
  "Tabs versus spaces? How about: 3, 7, 11 space indentation! Now we can all be happy.",
  "Yes, it's an AI-generated bug. The future is now."
];
function RandomQuoteGen() {
  const [quote, setQuote] = useState(quotes[12]);
  const handleReroll = () => {
    const getRandom = () => quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(getRandom());
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("blockquote", { className: styles.contactQuote, children: [
      '"',
      quote,
      '"'
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleReroll,
        style: {
          background: "#68b9ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          marginTop: "0.5rem",
          float: "right"
        },
        children: "Reroll"
      }
    )
  ] });
}

const $$RandomQuote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "RandomQuoteGen", RandomQuoteGen, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/RandomQuote/RandomQuoteGen.tsx", "client:component-export": "default" })}`;
}, "/home/maud/Projects/portfolio/src/components/RandomQuote/RandomQuote.astro", void 0);

function EmailForm() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");
  const serviceId = "service_qnlw3u1";
  const templateId = "template_3afz028";
  const publicKey = "Jo1VsryFdCsHp2v2b";
  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("sending");
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(() => {
      setStatus("sent");
      form.current?.reset();
    }).catch(() => {
      setStatus("error");
    });
  };
  return /* @__PURE__ */ jsxs("form", { ref: form, onSubmit: sendEmail, className: styles$1.form, children: [
    /* @__PURE__ */ jsxs("label", { children: [
      "Name",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, className: styles$1.input })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Email",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("input", { type: "email", name: "email", required: true, className: styles$1.input })
    ] }),
    /* @__PURE__ */ jsxs("label", { children: [
      "Message",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("textarea", { name: "message", rows: 5, required: true, className: styles$1.textarea })
    ] }),
    /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "sending", className: styles$1.button, children: status === "sending" ? "Sending…" : "Send" }),
    status === "sent" && /* @__PURE__ */ jsx("p", { children: "Message sent!" }),
    status === "error" && /* @__PURE__ */ jsx("p", { children: "Failed to send. Try again." })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-container"> ${renderComponent($$result2, "Card", $$Card, { "title": "Let's Connect" }, { "default": ($$result3) => renderTemplate` <p style="text-align: center; margin: 0 auto 2rem;">
Questions, ideas, compliments, confessions?<br>
Drop me a note below.
</p> ${renderComponent($$result3, "EmailForm", EmailForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/maud/Projects/portfolio/src/components/EmailForm/EmailForm.tsx", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <h2>FAQ</h2> <div> <b>Q: Why reach out?</b><br>
A: I ship clean, reliable code and work across the stack. No babysitting required.<br><br> <b>Q: What do you offer?</b><br>
A: Real-world experience, fast ramp-up, clear comms, and stable delivery under pressure.<br><br> <b>Q: Job hunting?</b><br>
A: Yes. Remote preferred. Contract or full-time. Serious teams only.<br><br> <b>Q: Leadership?</b><br>
A: I’ve led features and mentored devs. I keep things moving.
</div> <h2>Open To</h2> <p>Remote roles, cool tech collaborations, and <i>maybe</i> a deranged pen pal.</p> <h2>Find Me Elsewhere</h2> <div class="contact-socials"> <a href="https://github.com/m-ox" class="tag">GitHub</a> <a href="https://www.linkedin.com/in/lena-nordby-47762511a/" class="tag">LinkedIn</a> </div> <h2>Discord Community</h2> <div class="contact-socials"> <a href="https://discord.gg/sMV8TJyWF5" class="tag">Join the DevCru Discord</a> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "title": "Random Skunk Wisdom" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "RandomQuote", $$RandomQuote, {})} ` })} </section> ` })}`;
}, "/home/maud/Projects/portfolio/src/pages/contact.astro", void 0);

const $$file = "/home/maud/Projects/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
