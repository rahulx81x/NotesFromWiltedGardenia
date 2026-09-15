export default function GardeniaEmblem({ size = 42, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`gardenia-emblem ${className}`}
      aria-hidden="true"
    >
      <g className="emblem-stem">
        <path
          d="M32 6C35 18 31 30 33 42C33 51 30 58 27 62"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Wilted leaf drooping left */}
        <path
          d="M31 34C23 32 16 36 13 43C20 44 28 40 31 34Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Slender curled leaf right */}
        <path
          d="M33 26C39 23 46 25 49 31C43 34 37 32 33 26Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </g>

      <g className="emblem-petals">
        {/* Outer wilted petals */}
        <path
          d="M32 6C25 9 21 15 23 22C27 25 35 24 38 18C40 12 37 7 32 6Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
        />
        <path
          d="M38 12C44 14 49 19 47 25C42 28 36 24 34 19C34 15 36 12 38 12Z"
          fill="var(--bg-parchment)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
        />
        <path
          d="M24 13C18 16 16 23 20 29C25 30 30 25 30 20C29 15 27 13 24 13Z"
          fill="var(--bg-parchment)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
        />
        {/* Inner delicate petals */}
        <path
          d="M28 16C31 12 35 12 37 16C36 20 30 21 28 16Z"
          fill="var(--bg-hover)"
          stroke="var(--accent-amber)"
          strokeWidth="1"
        />
        <circle cx="32" cy="18" r="2.2" fill="var(--accent-gardenia)" />
        <circle cx="34" cy="16" r="1.2" fill="var(--accent-amber)" />
      </g>
    </svg>
  );
}
