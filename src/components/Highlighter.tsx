import { useEffect } from "react";

const highlightWords = [
  'Maud', 'Resume', 'Forkzilla', 'Zero Stars Club',
  'fun', 'logic', 'creative', 'code',
  'maudlin', 'oxalis', 'm-ox', 'api',
  'experiment', 'styling', 'ideas',
  'delivery', 'yes', 'deranged', 'skunk',
  'silly', 'skills'
];

const regex = new RegExp(`\\b(${highlightWords.join('|')})\\b`, 'gi');

function wrapMatchesInDOM(root: HTMLElement) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode as Text);
  }

  for (const node of textNodes) {
    const parent = node.parentElement;
    if (!parent || parent.closest('.no-highlight')) continue;

    const text = node.nodeValue;
    if (!text || !regex.test(text)) continue;

    const fragment = document.createDocumentFragment();
    const parts = text.split(regex);

    for (const part of parts) {
      const match = highlightWords.find(w => w.toLowerCase() === part.toLowerCase());
      if (match) {
        const span = document.createElement('span');
        span.className = 'maudlin oxalis';
        span.textContent = part;
        fragment.appendChild(span);
      } else {
        fragment.appendChild(document.createTextNode(part));
      }
    }

    parent.replaceChild(fragment, node);
  }
}

export default function Highlighter() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      wrapMatchesInDOM(document.body);
    }, 50); // at my wits end here

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
