import { useEffect, useState } from "react";
import type { FC, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { awards } from "../../utils/awards";
import LoaderDots from "../LoaderDots/LoaderDots";

type GitHubStatsResponse = {
  totalCommits: number;
  mostCommonFirstWord: string;
  averageLength: number;
  longestMessage: string;
  totalRepos: number;
  totalStars: number;
  totalForks: number;
};

const GitHubStats: FC = () => {
  const [data, setData] = useState<GitHubStatsResponse | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub stats");
        return res.json();
      })
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <LoaderDots />;

  return (
    <div style={{ width: "25rem" }}>
      <img
        src="https://ghchart.rshah.org/m-ox"
        alt="GitHub Contribution Chart"
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <p><strong>Total commits:</strong> {data.totalCommits} ({(data.totalCommits / 365).toFixed(1)} per day — seek help.)</p>
      <p><strong>Most common first word:</strong> <code>{data.mostCommonFirstWord}</code> (truly inspired.)</p>
      <p><strong>Average commit length:</strong> {data.averageLength} chars (probably too much.)</p>

      <h4>Awards:</h4>
        {awards(data).map((award: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
          <p key={idx}>{award}</p>
        ))}

      <h4>Longest commit message:</h4>
      <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.85rem" }}>
        <i>"{data.longestMessage}"</i>
      </pre>
    </div>
  );
};

export default GitHubStats;
