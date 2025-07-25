import { useEffect, useState } from "react";
import type {
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
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

// todo: redeploy away from gh-pages so I can show full github metrics without exposing my env vars lol

const GitHubStats: FC = () => {
  const [data, setData] = useState<GitHubStatsResponse | null>(null);
  const [onGitHubPages, setOnGitHubPages] = useState(false);
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onGitHub = window.location.hostname.includes("github.io");
    setOnGitHubPages(onGitHub);

    if (onGitHub) {
      setError(true);
      return;
    }

    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub stats");
        return res.json();
      })
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return (
    <div style={{ width: isMobile ? "100%" : "35rem" }}>
      <img
        src="https://ghchart.rshah.org/m-ox"
        alt="GitHub Contribution Chart"
        style={{
          width: "100%",
          maxWidth: "100%",
          marginBottom: "1rem",
        }}
      />
    </div>

  )
  if (!data) return <LoaderDots />;

  return (
    <div style={{ width: isMobile ? "100%" : "25rem" }}>
      <p>
        <strong>Total commits:</strong> {data.totalCommits} (
        {(data.totalCommits / 365).toFixed(1)} per day — seek help.)
      </p>
      <p>
        <strong>Most common first word:</strong>{" "}
        <code>{data.mostCommonFirstWord}</code> (truly inspired.)
      </p>
      <p>
        <strong>Average commit length:</strong> {data.averageLength} chars
        (probably too much.)
      </p>

      <h4>Awards:</h4>
      {awards(data).map((award, idx) => (
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
