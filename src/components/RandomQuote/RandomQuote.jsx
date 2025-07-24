import { useState } from 'react';
import styles from './RandomQuote.module.scss';

const quotes = [
  "Just ditch Windows, simpler solution.",
  "I can only play my launch PS3 in the winter. It is a certifiable winter sport.",
  "I mean, I could always just host raw html, css, js but I like learning new tools.",
  "Idk, there's not a lot of wiggle room for mid level. Attending virtual job fairs and networking is I guess the way to go, but realistically if I don't feel good about things by October I'm probably gonna go become an airport cop or something lmao",
  "Just ditch Windows, simpler solution.",
  "They always told us \"just walk into a business and shake someone\'s hand and ask if they're hiring",
  "I don't like to socialize, I'm good.",
  "Yes, I have a real skunk that I use for emotional support.",
  "Topbar is always 4rem. I don't make the rules, just how it has to be.",
  "I am one bad event away from living my best cowboy life, forever.",
  "No Meeting Friday is forever implemented.",
  "Sleeping on Ghost(tm) energy drinks to get that good GOOD rest!",
  "If you rigidly can only code in Python forever, good luck.",
  "\"This is new to me, how ugly.\"\
  *learns it anyway*\
  \"Wow, this other new thing is ugly, the thing before was nice.\"\
  *repeat*",
  "I'm mid debugging some hell rn but if you write your conundrum I can look at it with you for fun maybe later",
  "I don't know how to use Astro.",
  "I finetuned my ChatGPT responses to just utterly argue me into the ground on everything I do in code because I hate being yassified.",
  "Why rubberduck when you can have emotional support code skunk?",
  "Hehehehehehehhehehheheh.",
  "Math.random() is actually, like, really bad at being random."
];

export default function RQ() {
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
