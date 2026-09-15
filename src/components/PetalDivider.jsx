export default function PetalDivider({ className = "" }) {
  return (
    <div className={`petal-divider ${className}`} aria-hidden="true">
      <div className="divider-line" />
      <svg
        width="34"
        height="18"
        viewBox="0 0 34 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="divider-icon"
      >
        <path
          d="M17 2C15 6 12 9 8 10C12 11 15 14 17 17C19 14 22 11 26 10C22 9 19 6 17 2Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1"
        />
        <circle cx="17" cy="10" r="1.5" fill="var(--accent-amber)" />
        <circle cx="5" cy="10" r="1" fill="var(--accent-gardenia)" opacity="0.6" />
        <circle cx="29" cy="10" r="1" fill="var(--accent-gardenia)" opacity="0.6" />
      </svg>
      <div className="divider-line" />
    </div>
  );
}
