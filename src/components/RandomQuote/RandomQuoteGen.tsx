import { useState } from 'react';
import styles from './RandomQuote.module.scss';

const quotes = [
  "Just ditch Windows, simpler solution.",
  "I can only play my launch PS3 in the winter. It is a certifiable winter sport.",
  "I mean, I could always just host raw html, css, js but I like learning new tools.",
  "I don't like to socialize, I'm good.",
  "Yes, I have a real skunk that I use for emotional support.",
  "Topbar is always 4rem. I don't make the rules, just how it has to be.",
  "No Meeting Friday is forever implemented.",
  "Sleep on Ghost(tm) energy drinks to get that good GOOD rest!",
  "If you rigidly can only code in Python forever, good luck.",
  "I'm mid debugging some hell rn but if you write your conundrum I can look at it with you for fun maybe later",
  "I don't know how to use Astro.",
  "I finetuned my ChatGPT responses to just utterly argue me into the ground on everything I do in code because I hate being yassified.",
  "Why rubberduck when you can have emotional support code skunk?",
  "Hehehehehehehhehehheheh.",
  "Math.random() is actually, like, really bad at being random."
];

export default function RandomQuoteGen() {
  const [quote, setQuote] = useState(() => {
    const i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
  });

  const roll = () => {
    const i = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[i]);
  };

  return (
    <div>
      <blockquote className={styles.contactQuote}>"{quote}"</blockquote>
      <button
        onClick={roll}
        // style="padding: 0.75rem 1.5rem; background: #ff69b4; color: white; border: none; border-radius: 4px;"
        style={{
            background: "#68b9ff",
            color: "white",
            float: 'right',
        }}
      >
        Reroll
      </button>
    </div>
  );
}
