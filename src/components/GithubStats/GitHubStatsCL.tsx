import { useEffect, useState } from "react";
import type { FC } from "react";
import { awards } from "../../utils/awards";
import LoaderDots from "../LoaderDots/LoaderDots";
import { useStore } from "../../store/store";

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

    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch GitHub stats");
        return res.json();
      })
      .then((json) => {
        if (
          typeof json.totalCommits === "number" &&
          typeof json.averageLength === "number" &&
          typeof json.totalRepos === "number"
        ) {
          setData(json);
        } else {
          console.warn("Invalid GitHub stats shape:", json);
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  // just in case we are on static production
  if (error) {
    return (
      <div style={{ height: isMobile ? "100%" : "40rem", width: isMobile ? "100%" : "42rem" }}>
        <img
          src="https://ghchart.rshah.org/m-ox"
          alt="GitHub Contribution Chart"
          loading="lazy"
          style={{ width: "100%", maxWidth: "100%", marginBottom: "1rem" }}
        />
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ height: isMobile ? "100%" : "30rem", width: isMobile ? "100%" : "25rem" }}>
        <LoaderDots />
      </div>
    );
  }

  return (
    <div style={{ width: isMobile ? "100%" : "25rem" }}>
      <p>
        <strong>Total commits:</strong> {data.totalCommits} (
        {isFinite(data.totalCommits) ? (data.totalCommits / 365).toFixed(1) : "?"} per day — seek help.)
      </p>
      <p>
        <strong>Most common first word:</strong>{" "}
        <code>{data.mostCommonFirstWord}</code> (truly inspired.)
      </p>
      <p>
        <strong>Average commit length:</strong>{" "}
        {isFinite(data.averageLength) ? `${data.averageLength.toFixed(1)} chars` : "?"} (probably too much.)
      </p>

      <h4>Awards:</h4>
      {awards(data).map((award, idx) => (
        <p key={idx}>{award}</p>
      ))}

      <h4>Longest commit message:</h4>
      <pre style={{ whiteSpace: "pre-wrap", fontSize: "0.85rem", height: "6rem", overflow: "auto" }}>
        <i>"{data.longestMessage}"</i>
      </pre>
    </div>
  );
};

export default GitHubStats;
