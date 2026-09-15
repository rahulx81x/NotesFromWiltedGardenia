/**
 * Authentic Botanical Gardenia Watermark Background
 * Modeled after the double-whorled Gardenia jasminoides bloom:
 * - Concentric spiral corolla with rosebud-like center
 * - Overlapping undulating petals
 * - Glossy foliage leaves with prominent pinnate venation
 * Renders as subtle, antique copperplate botanical engraving watermarks.
 */
export default function GardeniaBackgroundMotif() {
  return (
    <div className="gardenia-background-motif" aria-hidden="true">
      {/* 1. Top-Right: Full Botanical Gardenia Bloom & Foliage Spray */}
      <svg
        className="motif-svg motif-top-right"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Stem & Branching */}
          <path d="M490 20 C420 90 380 180 350 280 C330 350 350 430 390 500" strokeWidth="1.6" />
          <path d="M380 180 C320 160 250 170 200 210" strokeWidth="1.4" />

          {/* Deep Evergreen Leaves with Pinnate Veins */}
          {/* Large Leaf Top Right */}
          <path d="M380 180 C440 140 490 170 510 220 C460 240 400 210 380 180 Z" />
          <path d="M386 182 Q450 190 504 218" opacity="0.7" />
          <path d="M404 184 Q420 174 440 168 M426 190 Q448 180 470 176 M450 198 Q470 190 490 188" opacity="0.45" />

          {/* Large Leaf Lower Left */}
          <path d="M350 280 C310 340 260 360 210 340 C230 290 290 270 350 280 Z" />
          <path d="M344 282 Q276 312 216 338" opacity="0.7" />
          <path d="M324 290 Q302 284 280 280 M302 300 Q280 294 258 292 M280 310 Q260 306 238 306" opacity="0.45" />

          {/* Small Bud Stem */}
          <path d="M270 176 C250 130 220 110 180 100" />
          {/* Swelling Gardenia Bud */}
          <path d="M180 100 C160 85 140 100 135 120 C130 140 150 155 170 145 C190 135 195 115 180 100 Z" />
          <path d="M180 100 C155 110 145 130 150 145" opacity="0.6" />

          {/* --- MAIN DOUBLE GARDENIA BLOOM (Centered around 200, 210) --- */}
          {/* Outermost Layer of Broad Petals */}
          <path d="M170 170 C150 120 180 80 215 70 C250 75 280 110 260 160 C235 150 195 150 170 170 Z" />
          <path d="M255 155 C300 125 350 150 355 190 C360 230 315 255 270 235 C255 200 250 170 255 155 Z" />
          <path d="M265 230 C300 270 310 320 270 340 C230 350 195 330 190 280 C215 260 240 255 265 230 Z" />
          <path d="M190 275 C145 320 95 315 80 280 C70 240 110 210 160 220 C165 240 175 260 190 275 Z" />
          <path d="M165 220 C110 205 75 160 95 125 C120 95 165 115 175 165 C165 185 160 205 165 220 Z" />

          {/* Intermediate Whorl (Curling & Cupping Petals) */}
          <path d="M195 165 C235 145 275 170 270 210 C265 240 225 240 200 220 C195 195 190 175 195 165 Z" />
          <path d="M210 220 C245 235 255 270 235 300 C210 315 180 295 175 260 C185 245 198 230 210 220 Z" />
          <path d="M180 255 C150 280 115 260 120 230 C125 200 160 195 175 215 C175 230 175 245 180 255 Z" />
          <path d="M175 210 C145 190 160 150 190 145 C220 145 220 180 195 200 C185 200 180 205 175 210 Z" />

          {/* Spiral Rosette Core (Vortex of Delicate Curled Folds) */}
          <path d="M190 185 C215 175 240 190 235 215 C230 230 205 225 195 210 Z" />
          <path d="M210 205 C225 215 220 235 200 240 C185 240 180 225 190 210 Z" />
          <path d="M190 220 C170 225 165 205 180 195 C195 185 205 190 200 205 Z" />
          <path d="M196 198 C206 193 214 200 212 210 C208 218 198 218 196 210 C194 204 195 200 196 198 Z" />
        </g>
      </svg>

      {/* 2. Top-Left: Cascading Gardenia Spray with Rosette Blossom */}
      <svg
        className="motif-svg motif-top-left"
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10 C80 60 150 100 190 170 C220 220 210 290 180 360" strokeWidth="1.5" />
          <path d="M150 100 C190 80 240 90 270 130" strokeWidth="1.3" />

          {/* Veined Leaves */}
          <path d="M190 170 C235 185 265 170 285 140 C265 200 210 210 190 170 Z" />
          <path d="M196 172 Q240 176 280 144" opacity="0.65" />
          <path d="M160 250 C125 280 85 290 50 280 C85 250 125 240 160 250 Z" />
          <path d="M154 252 Q105 270 56 278" opacity="0.65" />

          {/* Gardenia Blossom (270, 130) */}
          <path d="M245 105 C230 70 255 45 280 40 C305 45 325 70 310 105 Z" />
          <path d="M305 100 C335 80 370 100 375 130 C375 160 345 175 315 160 Z" />
          <path d="M315 155 C340 185 345 220 315 235 C285 240 260 225 255 190 Z" />
          <path d="M255 185 C220 215 185 210 175 185 C170 160 200 140 235 150 Z" />
          <path d="M235 145 C195 135 175 105 190 80 C210 60 240 75 250 110 Z" />

          {/* Inner Spiral Whorl */}
          <path d="M260 110 C290 95 320 115 315 145 C310 165 280 165 265 150 Z" />
          <path d="M275 145 C295 155 305 180 290 200 C270 210 250 195 245 170 Z" />
          <path d="M250 170 C230 185 205 170 210 150 C215 130 240 125 250 140 Z" />
          <path d="M260 128 C275 122 290 134 286 148 C280 158 268 156 265 146 Z" />
        </g>
      </svg>

      {/* 3. Bottom-Left: Subtle Gardenia Blossom with Withered Parchment Leaves */}
      <svg
        className="motif-svg motif-bottom-left"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 440 C70 380 120 320 190 300 C270 280 340 300 400 370" strokeWidth="1.5" />
          <path d="M120 320 C130 260 170 200 230 180" strokeWidth="1.3" />

          {/* Veined Leaves */}
          <path d="M190 300 C180 250 205 205 245 200 C240 240 220 280 190 300 Z" />
          <path d="M192 294 Q216 244 242 204" opacity="0.65" />
          <path d="M300 290 C345 280 385 300 410 335 C370 330 330 310 300 290 Z" />

          {/* Bloom at (230, 180) */}
          <path d="M210 150 C195 115 220 90 245 85 C270 90 290 115 275 150 Z" />
          <path d="M270 145 C300 125 335 145 340 175 C340 205 310 220 280 205 Z" />
          <path d="M280 200 C305 230 310 265 280 280 C250 285 225 270 220 235 Z" />
          <path d="M220 230 C185 260 150 255 140 230 C135 205 165 185 200 195 Z" />
          <path d="M200 190 C160 180 140 150 155 125 C175 105 205 120 215 155 Z" />

          {/* Core Whorl */}
          <path d="M225 155 C255 140 285 160 280 190 C275 210 245 210 230 195 Z" />
          <path d="M240 190 C260 200 270 225 255 245 C235 255 215 240 210 215 Z" />
          <path d="M215 215 C195 230 170 215 175 195 C180 175 205 170 215 185 Z" />
          <path d="M226 172 C240 166 254 178 250 192 C244 202 232 200 230 190 Z" />
        </g>
      </svg>

      {/* 4. Bottom-Right: Whorled Gardenia Motif */}
      <svg
        className="motif-svg motif-bottom-right"
        viewBox="0 0 460 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M450 440 C380 370 330 310 300 225 C290 155 320 85 380 20" strokeWidth="1.5" />
          <path d="M300 225 C240 235 190 190 170 140" strokeWidth="1.3" />

          {/* Leaves */}
          <path d="M320 310 C270 330 230 310 210 270 C250 270 290 290 320 310 Z" />
          <path d="M314 308 Q264 294 214 274" opacity="0.65" />
          <path d="M300 225 C320 175 360 145 400 155 C370 185 340 215 300 225 Z" />

          {/* Bloom at (170, 140) */}
          <path d="M150 110 C135 75 160 50 185 45 C210 50 230 75 215 110 Z" />
          <path d="M210 105 C240 85 275 105 280 135 C280 165 250 180 220 165 Z" />
          <path d="M220 160 C245 190 250 225 220 240 C190 245 165 230 160 195 Z" />
          <path d="M160 190 C125 220 90 215 80 190 C75 165 105 145 140 155 Z" />
          <path d="M140 150 C100 140 80 110 95 85 C115 65 145 80 155 115 Z" />

          {/* Inner Spiral */}
          <path d="M165 115 C195 100 225 120 220 150 C215 170 185 170 170 155 Z" />
          <path d="M180 150 C200 160 210 185 195 205 C175 215 155 200 150 175 Z" />
          <path d="M155 175 C135 190 110 175 115 155 C120 135 145 130 155 145 Z" />
          <path d="M168 132 C182 126 196 138 192 152 C186 162 174 160 172 150 Z" />
        </g>
      </svg>

      {/* 5. Center-Right Flank Gardenia Sprig */}
      <svg
        className="motif-svg motif-mid-right"
        viewBox="0 0 280 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M270 180 C200 160 160 130 150 70 C180 80 230 110 270 180 Z" />
          <path d="M266 178 Q200 120 154 74" opacity="0.65" />
          <path d="M250 200 C190 220 150 260 130 320 C170 290 220 260 250 200 Z" />
          <path d="M246 204 Q186 260 134 316" opacity="0.65" />

          {/* Delicate Side Bloom */}
          <path d="M150 170 C130 145 100 155 90 175 C85 195 105 215 125 210 C145 205 160 185 150 170 Z" />
          <path d="M125 170 C140 160 150 175 145 190 C140 200 125 200 120 190 Z" />
          <path d="M130 178 C136 174 142 180 140 186 C138 190 132 190 130 186 Z" />
        </g>
      </svg>
    </div>
  );
}
