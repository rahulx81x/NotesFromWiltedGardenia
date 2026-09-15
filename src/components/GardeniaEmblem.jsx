/**
 * Authentic Gardenia Jasminoides Botanical Emblem
 * Modeled after the lush, double-whorled creamy gardenia flower:
 * - Spiral rosette core with rose-like central folds
 * - Concentric layered porcelain-ivory petals
 * - Glossy deep foliage leaves framing the blossom
 */
export default function GardeniaEmblem({ size = 42, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`gardenia-emblem ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="emblemCoreShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="var(--accent-amber)" stop-opacity="0.35" />
          <stop offset="100%" stop-color="var(--accent-tint)" stop-opacity="0.1" />
        </radialGradient>
      </defs>

      {/* 1. Deep Glossy Evergreen Framing Leaves */}
      <g className="emblem-foliage">
        {/* Top-Right Leaf with midrib */}
        <path
          d="M62 30 C74 14 90 6 98 12 C100 26 90 44 74 42 Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M66 28 Q82 18 94 14"
          stroke="var(--accent-gardenia)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Bottom-Left Leaf with midrib */}
        <path
          d="M38 68 C22 84 8 92 2 84 C-1 70 14 54 30 58 Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
        <path
          d="M34 65 Q18 76 5 82"
          stroke="var(--accent-gardenia)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* Top-Left Leaf Tip */}
        <path
          d="M36 34 C20 24 10 10 20 4 C32 6 42 20 38 34 Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </g>

      {/* 2. Gardenia Blossom (Double Corolla Whorls) */}
      <g className="emblem-blossom">
        {/* Layer 1: Outermost Broad Velvety Petals */}
        {/* Top Crest Petal */}
        <path
          d="M34 36 C28 20 38 8 50 6 C62 8 72 20 66 36 C60 32 42 32 34 36 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
        />
        {/* Top-Right Flank Petal */}
        <path
          d="M64 34 C78 24 92 32 94 44 C96 58 82 66 68 60 C62 50 62 40 64 34 Z"
          fill="var(--bg-parchment)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
        />
        {/* Bottom-Right Petal */}
        <path
          d="M66 58 C78 70 82 86 68 92 C56 96 44 90 42 74 C50 68 58 66 66 58 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
        />
        {/* Bottom-Left Rounded Petal */}
        <path
          d="M42 72 C28 88 12 86 8 74 C4 62 18 52 34 56 C36 62 38 68 42 72 Z"
          fill="var(--bg-parchment)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
        />
        {/* Left Flank Broad Petal */}
        <path
          d="M34 54 C16 50 4 36 12 24 C20 14 34 20 38 36 C34 42 32 48 34 54 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.3"
        />

        {/* Layer 2: Intermediate Curled Petals (Cupping Formation) */}
        {/* Mid Upper-Right */}
        <path
          d="M48 32 C62 26 76 34 74 48 C72 58 58 58 50 52 C48 42 46 34 48 32 Z"
          fill="var(--bg-parchment)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
        />
        {/* Mid Lower-Right */}
        <path
          d="M54 52 C66 56 70 68 64 78 C56 84 46 78 44 66 C46 60 50 54 54 52 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
        />
        {/* Mid Lower-Left */}
        <path
          d="M44 64 C34 72 22 66 24 56 C26 46 38 44 42 50 C42 56 42 60 44 64 Z"
          fill="var(--bg-parchment)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
        />
        {/* Mid Upper-Left */}
        <path
          d="M40 48 C30 42 36 28 46 26 C56 26 56 38 48 44 C44 44 42 46 40 48 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1.2"
        />

        {/* Layer 3: Rosette Core (Spiral Center Swirl) */}
        {/* Rosette Shadow Base */}
        <circle cx="50" cy="50" r="14" fill="url(#emblemCoreShadow)" />

        {/* Inner Petal Fold Upper */}
        <path
          d="M46 40 C54 36 62 40 60 48 C58 54 50 52 46 48 Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-amber)"
          strokeWidth="1.1"
        />
        {/* Inner Petal Fold Right */}
        <path
          d="M52 46 C58 50 56 58 48 60 C44 60 42 54 46 48 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-amber)"
          strokeWidth="1.1"
        />
        {/* Inner Petal Fold Left */}
        <path
          d="M44 52 C38 54 36 46 42 42 C46 38 50 40 48 46 Z"
          fill="var(--accent-tint)"
          stroke="var(--accent-amber)"
          strokeWidth="1.1"
        />

        {/* Centered Vortex Spiral Swirl */}
        <path
          d="M48 44 C52 42 55 44 54 48 C52 51 48 51 47 48 C45 46 46 45 48 44 Z"
          fill="var(--bg-card)"
          stroke="var(--accent-gardenia)"
          strokeWidth="1"
        />
        <path
          d="M49 46 C51 45 52 47 51 49 C50 50 49 50 48 49 Z"
          fill="var(--accent-amber)"
        />
      </g>
    </svg>
  );
}
