export default function LoadingState({ count = 3 }) {
  return (
    <div className="loading-container" aria-label="Loading notes">
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
