import { useState } from 'react';
import styles from './RandomQuote.module.scss';

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

export default function RandomQuoteGen() {
  const [quote, setQuote] = useState<string>(quotes[12]);

  const handleReroll = () => {
    const getRandom = () => quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(getRandom());
  };

  return (
    <div>
      <blockquote className={styles.contactQuote}>"{quote}"</blockquote>
      <button
        onClick={handleReroll}
        style={{
          background: "#68b9ff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          marginTop: "0.5rem",
          float: "right",
          position: "relative",
          zIndex: 2,
        }}
      >
        Reroll
      </button>
    </div>
  );
}
