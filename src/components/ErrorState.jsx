export default function ErrorState({ message, onRetry }) {
  return (
    <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontStyle: "italic", color: "var(--ink-secondary)", marginBottom: "1rem" }}>
        {message || "The pages could not be retrieved at this hour."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            fontSize: "0.78rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--accent-gardenia)",
            borderBottom: "1px solid var(--accent-gardenia)",
            paddingBottom: "2px"
          }}
        >
          Attempt reload
        </button>
      )}
    </div>
  );
}
