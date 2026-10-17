import { DEFAULT_AUTHOR } from "../data/config";

/**
 * Aesthetic theme color definitions matching the site's design system tokens:
 * - light: Parchment Light Palette (default)
 * - dark: Candle-lit / Midnight reading theme
 */
const THEME_PALETTES = {
  light: {
    bgBase: "#f8f5ee",
    gradCenter: "rgba(255, 255, 255, 0.60)",
    gradEdge: "rgba(235, 227, 212, 0.70)",
    motifColor: "#8f6543",
    motifAlpha: 0.08,
    borderOuter: "#ded6c5",
    borderInner: "#8f6543",
    cornerDot: "#8f6543",
    headerBrand: "#8f6543",
    headerMeta: "#8e8375",
    divider: "#d6cbba",
    dividerEmblem: "#8f6543",
    title: "#231f1d",
    intro: "#7c7267",
    body: "#3e3833",
    attribution: "#8f6543",
    footerQuote: "#887d71",
    footerDivider: "#ded6c5",
  },
  dark: {
    bgBase: "#171513",
    gradCenter: "rgba(38, 33, 28, 0.85)",
    gradEdge: "rgba(18, 16, 14, 0.98)",
    motifColor: "#caa07b",
    motifAlpha: 0.10,
    borderOuter: "#342d26",
    borderInner: "#caa07b",
    cornerDot: "#caa07b",
    headerBrand: "#caa07b",
    headerMeta: "#8e8375",
    divider: "#463d33",
    dividerEmblem: "#caa07b",
    title: "#eee7dc",
    intro: "#c2b6a7",
    body: "#ded6c9",
    attribution: "#caa07b",
    footerQuote: "#8e8375",
    footerDivider: "#342d26",
  },
};

/**
 * Botanical Gardenia Motif SVG Path Vectors (Antique Copperplate Engravings)
 */
const TOP_RIGHT_MOTIF_PATHS = [
  "M490 20 C420 90 380 180 350 280 C330 350 350 430 390 500",
  "M380 180 C320 160 250 170 200 210",
  "M380 180 C440 140 490 170 510 220 C460 240 400 210 380 180 Z",
  "M386 182 Q450 190 504 218",
  "M404 184 Q420 174 440 168",
  "M426 190 Q448 180 470 176",
  "M450 198 Q470 190 490 188",
  "M350 280 C310 340 260 360 210 340 C230 290 290 270 350 280 Z",
  "M344 282 Q276 312 216 338",
  "M324 290 Q302 284 280 280",
  "M302 300 Q280 294 258 292",
  "M280 310 Q260 306 238 306",
  "M270 176 C250 130 220 110 180 100",
  "M180 100 C160 85 140 100 135 120 C130 140 150 155 170 145 C190 135 195 115 180 100 Z",
  "M180 100 C155 110 145 130 150 145",
  "M170 170 C150 120 180 80 215 70 C250 75 280 110 260 160 C235 150 195 150 170 170 Z",
  "M255 155 C300 125 350 150 355 190 C360 230 315 255 270 235 C255 200 250 170 255 155 Z",
  "M265 230 C300 270 310 320 270 340 C230 350 195 330 190 280 C215 260 240 255 265 230 Z",
  "M190 275 C145 320 95 315 80 280 C70 240 110 210 160 220 C165 240 175 260 190 275 Z",
  "M165 220 C110 205 75 160 95 125 C120 95 165 115 175 165 C165 185 160 205 165 220 Z",
  "M195 165 C235 145 275 170 270 210 C265 240 225 240 200 220 C195 195 190 175 195 165 Z",
  "M210 220 C245 235 255 270 235 300 C210 315 180 295 175 260 C185 245 198 230 210 220 Z",
  "M180 255 C150 280 115 260 120 230 C125 200 160 195 175 215 C175 230 175 245 180 255 Z",
  "M175 210 C145 190 160 150 190 145 C220 145 220 180 195 200 C185 200 180 205 175 210 Z",
  "M190 185 C215 175 240 190 235 215 C230 230 205 225 195 210 Z",
  "M210 205 C225 215 220 235 200 240 C185 240 180 225 190 210 Z",
  "M190 220 C170 225 165 205 180 195 C195 185 205 190 200 205 Z",
  "M196 198 C206 193 214 200 212 210 C208 218 198 218 196 210 C194 204 195 200 196 198 Z",
];

const BOTTOM_LEFT_MOTIF_PATHS = [
  "M10 440 C70 380 120 320 190 300 C270 280 340 300 400 370",
  "M120 320 C130 260 170 200 230 180",
  "M190 300 C180 250 205 205 245 200 C240 240 220 280 190 300 Z",
  "M192 294 Q216 244 242 204",
  "M300 290 C345 280 385 300 410 335 C370 330 330 310 300 290 Z",
  "M210 150 C195 115 220 90 245 85 C270 90 290 115 275 150 Z",
  "M270 145 C300 125 335 145 340 175 C340 205 310 220 280 205 Z",
  "M280 200 C305 230 310 265 280 280 C250 285 225 270 220 235 Z",
  "M220 230 C185 260 150 255 140 230 C135 205 165 185 200 195 Z",
  "M200 190 C160 180 140 150 155 125 C175 105 205 120 215 155 Z",
  "M225 155 C255 140 285 160 280 190 C275 210 245 210 230 195 Z",
  "M240 190 C260 200 270 225 255 245 C235 255 215 240 210 215 Z",
  "M215 215 C195 230 170 215 175 195 C180 175 205 170 215 185 Z",
  "M226 172 C240 166 254 178 250 192 C244 202 232 200 230 190 Z",
];

const GARDENIA_EMBLEM_PATHS = [
  "M62 30 C74 14 90 6 98 12 C100 26 90 44 74 42 Z",
  "M66 28 Q82 18 94 14",
  "M38 68 C22 84 8 92 2 84 C-1 70 14 54 30 58 Z",
  "M34 65 Q18 76 5 82",
  "M36 34 C20 24 10 10 20 4 C32 6 42 20 38 34 Z",
  "M34 36 C28 20 38 8 50 6 C62 8 72 20 66 36 C60 32 42 32 34 36 Z",
  "M64 34 C78 24 92 32 94 44 C96 58 82 66 68 60 C62 50 62 40 64 34 Z",
  "M66 58 C78 70 82 86 68 92 C56 96 44 90 42 74 C50 68 58 66 66 58 Z",
  "M42 72 C28 88 12 86 8 74 C4 62 18 52 34 56 C36 62 38 68 42 72 Z",
  "M34 54 C16 50 4 36 12 24 C20 14 34 20 38 36 C34 42 32 48 34 54 Z",
  "M48 32 C62 26 76 34 74 48 C72 58 58 58 50 52 C48 42 46 34 48 32 Z",
  "M54 52 C66 56 70 68 64 78 C56 84 46 78 44 66 C46 60 50 54 54 52 Z",
  "M44 64 C34 72 22 66 24 56 C26 46 38 44 42 50 C42 56 42 60 44 64 Z",
  "M40 48 C30 42 36 28 46 26 C56 26 56 38 48 44 C44 44 42 46 40 48 Z",
  "M46 40 C54 36 62 40 60 48 C58 54 50 52 46 48 Z",
  "M52 46 C58 50 56 58 48 60 C44 60 42 54 46 48 Z",
  "M44 52 C38 54 36 46 42 42 C46 38 50 40 48 46 Z",
  "M48 44 C52 42 55 44 54 48 C52 51 48 51 47 48 C45 46 46 45 48 44 Z",
];

/**
 * Exports a poem in its entirety as an aesthetically pleasing portrait card
 * using the HTML5 Canvas 2D API. Dynamically scales and sizes the canvas
 * so all stanzas are preserved and elegantly typeset.
 *
 * Theme-aware: adapts colors to light (parchment) or dark (candle-lit) mode.
 */
export async function exportPoemImage(poem, options = {}) {
  if (!poem) return false;

  // Await fonts readiness if supported to prevent system-font fallback
  if (typeof document !== "undefined" && document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue if font readiness check fails
    }
  }

  // Determine active theme (defaults to document data-theme or localStorage)
  const explicitTheme = typeof options === "string" ? options : options?.theme;
  let activeTheme = explicitTheme;
  if (!activeTheme || (activeTheme !== "light" && activeTheme !== "dark")) {
    if (typeof document !== "undefined") {
      activeTheme =
        document.documentElement.getAttribute("data-theme") ||
        localStorage.getItem("wilted_gardenia_theme") ||
        "light";
    } else {
      activeTheme = "light";
    }
  }

  const isDark = activeTheme === "dark";
  const palette = isDark ? THEME_PALETTES.dark : THEME_PALETTES.light;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return false;

  const width = 1080;
  const maxContentWidth = width - 260;

  // 1. Parse all stanzas from poem contents
  const rawContents = (poem.contents || "").trim();
  const stanzas = rawContents
    .split(/\n\s*\n/)
    .map((s) => s.split("\n").map((l) => l.trim()).filter(Boolean))
    .filter((s) => s.length > 0);

  const totalLines = stanzas.reduce((sum, st) => sum + st.length, 0);

  // 2. Determine harmonious font and spacing parameters based on poem length
  let poemFontSize = 28;
  let poemLineHeight = 44;
  let stanzaGap = 32;

  if (totalLines <= 12) {
    poemFontSize = 31;
    poemLineHeight = 49;
    stanzaGap = 38;
  } else if (totalLines <= 22) {
    poemFontSize = 27;
    poemLineHeight = 43;
    stanzaGap = 30;
  } else if (totalLines <= 36) {
    poemFontSize = 24;
    poemLineHeight = 38;
    stanzaGap = 24;
  } else if (totalLines <= 55) {
    poemFontSize = 21;
    poemLineHeight = 33;
    stanzaGap = 20;
  } else {
    poemFontSize = 19;
    poemLineHeight = 30;
    stanzaGap = 18;
  }

  // Helper to wrap long lines
  const wrapText = (text, maxWidth, fontStr) => {
    if (!text) return [];
    ctx.font = fontStr;
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0] || "";

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine + " " + word;
      if (ctx.measureText(testLine).width <= maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  // Pre-measure title lines
  const titleFont = "600 48px 'Cormorant Garamond', Georgia, serif";
  const titleLines = wrapText(poem.name || "Untitled Note", maxContentWidth, titleFont);
  const titleHeight = titleLines.length * 58;

  // Pre-measure intro if available
  const introFont = "italic 24px 'Cormorant Garamond', Georgia, serif";
  const introLines = poem.intro ? wrapText(`“${poem.intro}”`, maxContentWidth - 80, introFont) : [];
  const introHeight = introLines.length > 0 ? introLines.length * 36 + 25 : 0;

  // Measure all stanzas with line wrapping
  const bodyFont = `italic ${poemFontSize}px 'Cormorant Garamond', Georgia, serif`;
  const wrappedStanzas = stanzas.map((st) =>
    st.flatMap((line) => wrapText(line, maxContentWidth, bodyFont))
  );

  const totalWrappedLines = wrappedStanzas.reduce((sum, st) => sum + st.length, 0);
  const stanzasTotalHeight =
    totalWrappedLines * poemLineHeight + Math.max(0, wrappedStanzas.length - 1) * stanzaGap;

  // Fixed vertical sections
  const headerHeight = 220; // Emblem, publication date, divider
  const attributionHeight = 70;
  const footerSealHeight = 170;
  const extraPadding = 120;

  const totalNeededHeight =
    headerHeight + titleHeight + introHeight + stanzasTotalHeight + attributionHeight + footerSealHeight + extraPadding;

  // Set final adaptive canvas dimensions (minimum 1350 for social card proportion)
  const height = Math.max(1350, Math.round(totalNeededHeight));
  canvas.width = width;
  canvas.height = height;

  // 3. Render Background Parchment
  ctx.fillStyle = palette.bgBase;
  ctx.fillRect(0, 0, width, height);

  // Soft radiant paper wash
  const grad = ctx.createRadialGradient(
    width / 2,
    height * 0.35,
    60,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.75
  );
  grad.addColorStop(0, palette.gradCenter);
  grad.addColorStop(1, palette.gradEdge);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 3b. Subtle Antique Gardenia Botanical Watermarks (quiet background motifs)
  const drawGardeniaWatermark = (paths, offsetX, offsetY, scale, rotation = 0) => {
    if (typeof Path2D === "undefined") return;
    ctx.save();
    ctx.translate(offsetX, offsetY);
    if (rotation !== 0) ctx.rotate(rotation);
    ctx.scale(scale, scale);
    ctx.globalAlpha = palette.motifAlpha;
    ctx.strokeStyle = palette.motifColor;
    ctx.lineWidth = 1.3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    for (let i = 0; i < paths.length; i++) {
      ctx.stroke(new Path2D(paths[i]));
    }
    ctx.restore();
  };

  // Top-Right: Full Botanical Gardenia Bloom & Foliage Spray Watermark
  drawGardeniaWatermark(TOP_RIGHT_MOTIF_PATHS, width - 420, -10, 0.88, 0.08);

  // Bottom-Left: Subtle Gardenia Blossom with Withered Leaves Watermark
  drawGardeniaWatermark(BOTTOM_LEFT_MOTIF_PATHS, -20, height - 420, 0.85, -0.1);

  // 4. Double Botanical Border & Corner Accents
  ctx.strokeStyle = palette.borderOuter;
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  ctx.strokeStyle = palette.borderInner;
  ctx.lineWidth = 1;
  ctx.strokeRect(58, 58, width - 116, height - 116);

  const drawCornerDot = (x, y) => {
    ctx.fillStyle = palette.cornerDot;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  };
  drawCornerDot(58, 58);
  drawCornerDot(width - 58, 58);
  drawCornerDot(58, height - 58);
  drawCornerDot(width - 58, height - 58);

  // 5. Header Emblem & Publication Details
  // Authentic Gardenia Rosette Colophon Emblem
  if (typeof Path2D !== "undefined") {
    ctx.save();
    ctx.translate(width / 2 - 20, 72);
    ctx.scale(0.40, 0.40);
    ctx.globalAlpha = isDark ? 0.70 : 0.60;
    ctx.strokeStyle = palette.headerBrand;
    ctx.lineWidth = 1.3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (let i = 0; i < GARDENIA_EMBLEM_PATHS.length; i++) {
      ctx.stroke(new Path2D(GARDENIA_EMBLEM_PATHS[i]));
    }
    ctx.restore();
  }

  ctx.textAlign = "center";
  ctx.fillStyle = palette.headerBrand;
  ctx.font = "italic 24px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText("Notes from a Wilted Gardenia", width / 2, 134);

  ctx.fillStyle = palette.headerMeta;
  ctx.font = "14px sans-serif";
  const dateStr = poem.publish_date ? `· ${poem.publish_date} ·` : "· Digital Leaf ·";
  ctx.fillText(dateStr.toUpperCase(), width / 2, 168);

  // Divider Line with central botanical petal diamond
  ctx.strokeStyle = palette.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 110, 190);
  ctx.lineTo(width / 2 - 14, 190);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width / 2 + 14, 190);
  ctx.lineTo(width / 2 + 110, 190);
  ctx.stroke();

  // Central botanical diamond accent
  ctx.fillStyle = palette.dividerEmblem;
  ctx.beginPath();
  ctx.moveTo(width / 2, 190 - 5);
  ctx.lineTo(width / 2 + 5, 190);
  ctx.lineTo(width / 2, 190 + 5);
  ctx.lineTo(width / 2 - 5, 190);
  ctx.closePath();
  ctx.fill();

  // 6. Draw Poem Title
  let curY = 250;
  ctx.fillStyle = palette.title;
  ctx.font = titleFont;
  titleLines.forEach((line) => {
    ctx.fillText(line, width / 2, curY);
    curY += 56;
  });

  // 7. Draw Intro Excerpt (if present)
  if (introLines.length > 0) {
    curY += 8;
    ctx.fillStyle = palette.intro;
    ctx.font = introFont;
    introLines.forEach((line) => {
      ctx.fillText(line, width / 2, curY);
      curY += 34;
    });
    curY += 16;
  } else {
    curY += 24;
  }

  // Calculate available space to vertically balance stanzas if short
  const remainingSpace = height - footerSealHeight - attributionHeight - curY - stanzasTotalHeight;
  if (remainingSpace > 40) {
    curY += Math.floor(remainingSpace * 0.35);
  }

  // 8. Draw ALL Stanzas
  ctx.font = bodyFont;
  ctx.fillStyle = palette.body;

  wrappedStanzas.forEach((stanzaLines, stIdx) => {
    stanzaLines.forEach((line) => {
      ctx.fillText(line, width / 2, curY);
      curY += poemLineHeight;
    });

    // Space between stanzas
    if (stIdx < wrappedStanzas.length - 1) {
      curY += stanzaGap;
    }
  });

  // 9. Poet Attribution Signature
  curY += 38;
  ctx.fillStyle = palette.attribution;
  ctx.font = "italic 26px 'Cormorant Garamond', Georgia, serif";
  const authorName = poem.author || DEFAULT_AUTHOR;
  ctx.fillText(`— ${authorName}`, width / 2, curY);

  // 10. Footer Seal & Brand Philosophy
  ctx.textAlign = "center";
  ctx.fillStyle = palette.footerQuote;
  ctx.font = "16px sans-serif";
  ctx.fillText("the silence of things left unsaid", width / 2, height - 110);

  ctx.strokeStyle = palette.footerDivider;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 60, height - 138);
  ctx.lineTo(width / 2 + 60, height - 138);
  ctx.stroke();

  // Export blob and trigger download
  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        resolve(false);
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const safeTitle = (poem.name || "poem")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      const themeSuffix = isDark ? "-dark" : "";
      link.download = `wilted-gardenia-${safeTitle}${themeSuffix}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      resolve(true);
    }, "image/png");
  });
}
