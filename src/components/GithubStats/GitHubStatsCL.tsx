import { useEffect, useState } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const isMobile = useStore((s) => s.isMobile);
  const [state, setState] = useState<{
    data: GitHubStatsResponse | null;
    error: boolean;
  }>({ data: null, error: false });

  useEffect(() => {
    if (window.location.hostname.includes("github.io")) {
      setState({ data: null, error: true });
      return;
    }

    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((json) => {
        const valid =
          typeof json.totalCommits === "number" &&
          typeof json.averageLength === "number" &&
          typeof json.totalRepos === "number";
        setState({ data: valid ? json : null, error: !valid });
      })
      .catch(() => setState({ data: null, error: true }));
  }, []);

  const baseStyle = {
    width: isMobile ? "100%" : "25rem",
    height: isMobile ? "100%" : state.error ? "40rem" : "30rem",
    position: "relative" as const,
  };

  return (
    <div style={{ position: "relative" }}>
      <AnimatePresence mode="wait">
        {!state.data && !state.error && (
          <motion.div
            key="loader"
            style={baseStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <LoaderDots />
          </motion.div>
        )}

        {state.error && (
          <motion.div
            key="error"
            style={{ ...baseStyle, width: isMobile ? "100%" : "42rem" }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://ghchart.rshah.org/m-ox"
              alt="GitHub Contribution Chart"
              loading="lazy"
              style={{ width: "100%", maxWidth: "100%", marginBottom: "1rem" }}
            />
          </motion.div>
        )}

        {state.data && (
          <motion.div
            key="data"
            style={baseStyle}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <p>
              <strong>Total commits:</strong> {state.data.totalCommits} (
              {isFinite(state.data.totalCommits)
                ? (state.data.totalCommits / 365).toFixed(1)
                : "?"}{" "}
              per day — seek help.)
            </p>
            <p>
              <strong>Most common first word:</strong>{" "}
              <code>{state.data.mostCommonFirstWord}</code> (truly inspired.)
            </p>
            <p>
              <strong>Average commit length:</strong>{" "}
              {isFinite(state.data.averageLength)
                ? `${state.data.averageLength.toFixed(1)} chars`
                : "?"}{" "}
              (probably too much.)
            </p>

            <h4>Awards:</h4>
            {awards(state.data).map((award, idx) => (
              <p key={idx}>{award}</p>
            ))}

            <h4>Longest commit message:</h4>
            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontSize: "0.85rem",
                height: "6rem",
                overflow: "auto",
              }}
            >
              <i>"{state.data.longestMessage}"</i>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GitHubStats;
