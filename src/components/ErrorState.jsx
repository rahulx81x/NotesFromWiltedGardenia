import { useState } from "react";
import GardeniaEmblem from "./GardeniaEmblem";

const SOFT_ERROR_TITLES = [
  "The ink has faded from these leaves…",
  "These pages could not be retrieved at this hour.",
  "A wind seems to have scattered these notes.",
];

export default function ErrorState({ message, onRetry }) {
  const [showDetails, setShowDetails] = useState(false);
  const [softTitle] = useState(() => {
    return SOFT_ERROR_TITLES[Math.floor(Math.random() * SOFT_ERROR_TITLES.length)];
  });

  return (
    <div className="error-state-container" style={{ padding: "3.5rem 1rem", textAlign: "center" }}>
      <GardeniaEmblem size={36} className="empty-gardenia-icon" />
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.45rem",
          fontStyle: "italic",
          color: "var(--ink-secondary)",
          margin: "1.2rem 0 0.6rem",
        }}
      >
        {softTitle}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.85rem",
          color: "var(--ink-muted)",
          maxWidth: "48ch",
          margin: "0 auto 1.5rem",
          lineHeight: 1.5,
        }}
      >
        The digital archive encountered an unexpected silence while loading. You may attempt to re-read the page or inspect technical details.
      </p>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
        {onRetry && (
          <button
            onClick={onRetry}
            style={{
              fontSize: "0.78rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--accent-gardenia)",
              borderBottom: "1px solid var(--accent-gardenia)",
              paddingBottom: "2px",
              cursor: "pointer",
            }}
          >
            Attempt reload
          </button>
        )}

        {message && (
          <button
            onClick={() => setShowDetails((prev) => !prev)}
            style={{
              fontSize: "0.74rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--ink-muted)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {showDetails ? "Hide technical details" : "View technical details"}
          </button>
        )}
      </div>

      {showDetails && message && (
        <pre
          style={{
            marginTop: "1.5rem",
            padding: "0.85rem 1.2rem",
            background: "var(--bg-card)",
            border: "1px solid var(--border-delicate)",
            borderRadius: "var(--radius-subtle)",
            fontSize: "0.78rem",
            color: "var(--ink-muted)",
            fontFamily: "var(--font-mono)",
            textAlign: "left",
            maxWidth: "600px",
            margin: "1.5rem auto 0",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {String(message)}
        </pre>
      )}
    </div>
  );
}
