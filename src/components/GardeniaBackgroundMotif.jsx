/**
 * Rich Botanical Gardenia Motif Watermark Background
 * Increased volume of background motifs across corners and flanks
 * Higher visibility while preserving comfortable text contrast.
 */
export default function GardeniaBackgroundMotif() {
  return (
    <div className="gardenia-background-motif" aria-hidden="true">
      {/* 1. Top-Right: Sprawling Botanical Blossom & Stem */}
      <svg
        className="motif-svg motif-top-right"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M480 20C420 80 380 160 360 250C345 320 370 390 410 460" />
          <path d="M360 250C310 230 250 240 210 280" />
          <path d="M380 160C320 130 260 140 220 180" />

          {/* Upper Gardenia Blossom */}
          <path d="M220 180C205 150 170 140 140 155C110 170 100 205 120 235C140 265 180 260 210 240" />
          <path d="M140 155C125 130 85 130 65 155C45 180 55 220 80 240" />
          <path d="M100 205C70 215 50 250 65 280C80 310 120 310 145 285" />
          <path d="M120 235C110 265 125 305 155 315C185 325 215 295 210 260" />
          {/* Swirl center */}
          <path d="M165 195C155 185 140 190 140 205C140 220 160 225 170 215C180 205 175 190 160 190" />
          <circle cx="155" cy="205" r="3.5" fill="currentColor" />

          {/* Leaves */}
          <path d="M380 160C430 140 470 170 480 210C440 220 390 190 380 160Z" />
          <path d="M360 250C330 300 290 320 250 310C270 270 320 250 360 250Z" />
          <path d="M210 280C170 320 180 370 220 390C230 350 230 300 210 280Z" />
          
          <path d="M410 320C430 300 455 305 465 325C460 345 435 350 415 340" />
        </g>
      </svg>

      {/* 2. Top-Left: Cascading Gardenia Twig & Curled Petal */}
      <svg
        className="motif-svg motif-top-left"
        viewBox="0 0 420 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10C80 50 140 90 180 160C210 210 200 280 170 350" />
          <path d="M140 90C180 70 230 80 260 120" />
          
          {/* Gardenia Bloom */}
          <path d="M260 120C290 100 320 120 325 150C330 180 300 210 270 205C240 200 230 160 260 120Z" />
          <path d="M280 140C300 135 310 150 305 165C300 180 285 180 275 170" />
          <circle cx="285" cy="155" r="2.5" fill="currentColor" />

          {/* Leaves */}
          <path d="M180 160C220 175 250 160 270 130C250 190 200 200 180 160Z" />
          <path d="M150 240C120 270 80 280 50 270C80 240 120 230 150 240Z" />
        </g>
      </svg>

      {/* 3. Bottom-Left: Quiet Sprig & Bloom Motif */}
      <svg
        className="motif-svg motif-bottom-left"
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 420C70 360 120 310 190 290C270 270 330 290 390 350" />
          <path d="M120 310C130 250 170 195 230 175" />
          
          {/* Wilted bloom */}
          <path d="M230 175C220 145 190 135 160 150C130 165 125 200 145 225C165 250 200 245 225 225" />
          <path d="M160 150C145 125 110 130 95 155C80 180 90 210 115 225" />
          <circle cx="170" cy="185" r="3" fill="currentColor" />

          {/* Curled leaf */}
          <path d="M190 290C180 240 205 200 245 195C240 235 220 275 190 290Z" />
        </g>
      </svg>

      {/* 4. Bottom-Right: Curled Gardenia Blossom & Autumn Leaves */}
      <svg
        className="motif-svg motif-bottom-right"
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M440 430C370 370 320 310 300 230C290 160 320 90 380 30" />
          <path d="M300 230C240 240 190 200 170 150" />

          {/* Lower Gardenia Blossom */}
          <path d="M170 150C145 130 120 150 115 180C110 210 135 235 165 230C195 225 200 190 170 150Z" />
          <path d="M150 170C135 170 130 185 140 195C150 205 165 195 160 180" />
          <circle cx="145" cy="185" r="2.5" fill="currentColor" />

          {/* Leaves */}
          <path d="M320 310C270 330 230 310 210 270C250 270 290 290 320 310Z" />
          <path d="M300 230C320 180 360 150 400 160C370 190 340 220 300 230Z" />
        </g>
      </svg>

      {/* 5. Center-Right Flank Petal Spray */}
      <svg
        className="motif-svg motif-mid-right"
        viewBox="0 0 260 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M240 170C180 150 150 120 140 70C170 80 210 110 240 170Z" />
          <path d="M230 190C170 210 130 240 120 290C160 270 200 240 230 190Z" />
          {/* Small bloom silhouette */}
          <path d="M140 170C120 150 90 160 85 180C80 200 100 215 120 210C140 205 150 185 140 170Z" />
          <circle cx="115" cy="185" r="2" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}
