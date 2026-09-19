import { useState } from "react";

const LOADING_PHRASES = [
  "Letting the ink settle…",
  "Pressing petals between pages…",
  "Gathering whispers from the dusk…",
  "Smoothing bruised parchment…",
  "Listening to the silence between stanzas…",
  "Unfolding leaves in the quiet…",
];

export default function LoadingState({ count = 3 }) {
  const [phrase] = useState(() => {
    return LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)];
  });

  return (
    <div className="loading-container" aria-label="Loading notes" aria-live="polite">
      <div className="loading-phrase-wrapper">
        <span className="loading-phrase">{phrase}</span>
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "1.5rem" }}>
          <div className="shimmer-line meta" />
          <div className="shimmer-line title" />
          <div className="shimmer-line text" />
          <div className="shimmer-line short" />
        </div>
      ))}
    </div>
  );
}
