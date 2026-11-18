import { DEFAULT_AUTHOR } from "../data/config.js";

/**
 * Aspect Ratio & Platform Dimensions Configurations
 */
export const FORMATS = {
  post: {
    id: "post",
    label: "IG Post",
    aspectRatioLabel: "4:5",
    sublabel: "Portrait Post",
    width: 1080,
    height: 1350,
    maxContentWidth: 840,
    headerTop: 68,
    contHeaderTop: 98,
    footerBottom: 110,
    singleBottomReserve: 210,
    multiSlideBottomReserve: 145,
    lastSlideBottomReserve: 245,
    fileSuffix: "-post",
  },
  story: {
    id: "story",
    label: "IG Story",
    aspectRatioLabel: "9:16",
    sublabel: "Vertical Fullscreen",
    width: 1080,
    height: 1920,
    maxContentWidth: 840,
    // Clearance buffers for Instagram Stories overlay chrome:
    // Top safe area: clears profile badge, handle, story progress timer bars
    headerTop: 155,
    contHeaderTop: 175,
    // Bottom safe area: clears reply input and heart/share icons
    footerBottom: 210,
    singleBottomReserve: 310,
    multiSlideBottomReserve: 250,
    lastSlideBottomReserve: 350,
    fileSuffix: "-story",
  },
};

// Legacy exports for backwards compatibility
export const CARD_WIDTH = FORMATS.post.width;
export const CARD_HEIGHT = FORMATS.post.height;

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
    isDark: false,
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
    isDark: true,
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

// Helper to wrap long lines
function wrapText(ctx, text, maxWidth, fontStr) {
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
}

/**
 * Determine proportional typography scale based on overall poem length
 */
function getTypographyConfig(totalLines) {
  if (totalLines <= 14) {
    return {
      fontSize: 42,
      lineHeight: 64,
      stanzaGap: 48,
      titleFont: "600 60px 'Cormorant Garamond', Georgia, serif",
      titleLineHeight: 72,
      introFont: "italic 32px 'Cormorant Garamond', Georgia, serif",
      introLineHeight: 46,
    };
  } else if (totalLines <= 30) {
    return {
      fontSize: 38,
      lineHeight: 58,
      stanzaGap: 44,
      titleFont: "600 56px 'Cormorant Garamond', Georgia, serif",
      titleLineHeight: 68,
      introFont: "italic 30px 'Cormorant Garamond', Georgia, serif",
      introLineHeight: 44,
    };
  } else {
    return {
      fontSize: 35,
      lineHeight: 54,
      stanzaGap: 40,
      titleFont: "600 52px 'Cormorant Garamond', Georgia, serif",
      titleLineHeight: 64,
      introFont: "italic 28px 'Cormorant Garamond', Georgia, serif",
      introLineHeight: 40,
    };
  }
}

/**
 * Shared scratch canvas context for measuring layout dimensions
 */
let sharedScratchCtx = null;
function getScratchCtx() {
  if (!sharedScratchCtx && typeof document !== "undefined") {
    const canvas = document.createElement("canvas");
    canvas.width = 10;
    canvas.height = 10;
    sharedScratchCtx = canvas.getContext("2d");
  }
  return sharedScratchCtx;
}

/**
 * Calculates height of a group of wrapped stanzas including inter-stanza gaps
 */
function calculateStanzasHeight(stanzaGroup, lineHeight, stanzaGap) {
  if (!stanzaGroup || stanzaGroup.length === 0) return 0;
  const linesCount = stanzaGroup.reduce((sum, s) => sum + s.lines.length, 0);
  const gapsCount = Math.max(0, stanzaGroup.length - 1);
  return linesCount * lineHeight + gapsCount * stanzaGap;
}

/**
 * Smart Multi-Slide Pagination Engine:
 * - Supports both 4:5 (Post) and 9:16 (Story) aspect ratios
 * - Preserves stanzas intact without splitting across slides
 * - Keeps generous Instagram Story clearance buffers
 */
export function buildSlidePlan(poem, formatKey = "post", ctx = null) {
  const activeCtx = ctx || getScratchCtx();
  const format = FORMATS[formatKey] || FORMATS.post;

  if (!activeCtx || !poem) {
    return {
      format,
      slideCount: 1,
      isMultiSlide: false,
      slides: [],
      typo: getTypographyConfig(10),
      titleLines: [],
      introLines: [],
    };
  }

  const rawContents = (poem.contents || "").trim();
  const rawStanzas = rawContents
    .split(/\n\s*\n/)
    .map((s) => s.split("\n").map((l) => l.trim()).filter(Boolean))
    .filter((s) => s.length > 0);

  const totalRawLines = rawStanzas.reduce((sum, s) => sum + s.length, 0);
  const typo = getTypographyConfig(totalRawLines);
  const bodyFont = `italic ${typo.fontSize}px 'Cormorant Garamond', Georgia, serif`;

  // Measure title & intro
  const titleLines = wrapText(activeCtx, poem.name || "Untitled Note", format.maxContentWidth, typo.titleFont);
  const titleHeight = titleLines.length * typo.titleLineHeight;

  const introLines = poem.intro
    ? wrapText(activeCtx, `“${poem.intro}”`, format.maxContentWidth - 60, typo.introFont)
    : [];
  const introHeight = introLines.length > 0 ? introLines.length * typo.introLineHeight + 20 : 0;

  // Slide 1 body starting Y position
  const slide1BodyStartY = format.headerTop + 164 + titleHeight + introHeight + 20;

  // Continuation slides body starting Y position
  const contBodyStartY = format.contHeaderTop + 68;

  // Bottom boundary capacities:
  const singleSlideCapacity = Math.max(100, (format.height - format.singleBottomReserve) - slide1BodyStartY);
  const slide1MultiCapacity = Math.max(100, (format.height - format.multiSlideBottomReserve) - slide1BodyStartY);
  const middleSlideCapacity = Math.max(100, (format.height - format.multiSlideBottomReserve) - contBodyStartY);
  const lastSlideCapacity = Math.max(100, (format.height - format.lastSlideBottomReserve) - contBodyStartY);

  // Wrap each stanza into lines
  const wrappedStanzas = rawStanzas.map((stanza) => {
    const lines = stanza.flatMap((line) => wrapText(activeCtx, line, format.maxContentWidth, bodyFont));
    const height = lines.length * typo.lineHeight;
    return { lines, height };
  });

  const totalAllStanzasHeight = calculateStanzasHeight(wrappedStanzas, typo.lineHeight, typo.stanzaGap);

  // 1. Single card check
  if (totalAllStanzasHeight <= singleSlideCapacity) {
    return {
      format,
      slideCount: 1,
      isMultiSlide: false,
      typo,
      titleLines,
      introLines,
      slides: [
        {
          slideNumber: 1,
          totalSlides: 1,
          isFirst: true,
          isLast: true,
          isCover: false,
          stanzas: wrappedStanzas,
          bodyStartY: slide1BodyStartY,
          availableHeight: singleSlideCapacity,
          stanzasHeight: totalAllStanzasHeight,
        },
      ],
    };
  }

  // 2. Multi-slide pagination with Cover Slide
  const coverSlide = {
    slideNumber: 1,
    isFirst: true,
    isLast: false,
    isCover: true,
    stanzas: [],
    bodyStartY: 0,
    availableHeight: 0,
    stanzasHeight: 0,
  };

  const contentSlides = [];
  let remainingStanzas = [...wrappedStanzas];

  while (remainingStanzas.length > 0) {
    const candidateRemainingHeight = calculateStanzasHeight(remainingStanzas, typo.lineHeight, typo.stanzaGap);
    if (candidateRemainingHeight <= lastSlideCapacity) {
      // All remaining stanzas fit onto this final content slide
      contentSlides.push({
        isFirst: false,
        isLast: true,
        isCover: false,
        stanzas: [...remainingStanzas],
        bodyStartY: contBodyStartY,
        availableHeight: lastSlideCapacity,
        stanzasHeight: candidateRemainingHeight,
      });
      remainingStanzas = [];
    } else {
      // Middle slide: pack as many full stanzas as fit
      const slideStanzas = [];
      let curHeight = 0;
      while (remainingStanzas.length > 0) {
        const nextStanza = remainingStanzas[0];
        const addedHeight = slideStanzas.length === 0 ? nextStanza.height : typo.stanzaGap + nextStanza.height;
        if (curHeight + addedHeight <= middleSlideCapacity) {
          slideStanzas.push(remainingStanzas.shift());
          curHeight += addedHeight;
        } else {
          if (slideStanzas.length === 0) {
            const maxLines = Math.max(1, Math.floor(middleSlideCapacity / typo.lineHeight));
            const firstPart = nextStanza.lines.slice(0, maxLines);
            const rest = nextStanza.lines.slice(maxLines);
            slideStanzas.push({ lines: firstPart, height: firstPart.length * typo.lineHeight });
            curHeight = firstPart.length * typo.lineHeight;
            if (rest.length > 0) {
              remainingStanzas[0] = { lines: rest, height: rest.length * typo.lineHeight };
            } else {
              remainingStanzas.shift();
            }
          }
          break;
        }
      }

      contentSlides.push({
        isFirst: false,
        isLast: false,
        isCover: false,
        stanzas: slideStanzas,
        bodyStartY: contBodyStartY,
        availableHeight: middleSlideCapacity,
        stanzasHeight: curHeight,
      });
    }
  }

  if (contentSlides.length > 0) {
    contentSlides[contentSlides.length - 1].isLast = true;
  }

  const allSlides = [coverSlide, ...contentSlides];
  const totalSlides = allSlides.length;
  allSlides.forEach((s, idx) => {
    s.slideNumber = idx + 1;
    s.totalSlides = totalSlides;
  });

  return {
    format,
    slideCount: totalSlides,
    isMultiSlide: true,
    typo,
    titleLines,
    introLines,
    slides: allSlides,
  };
}

/**
 * Returns plans for both Post (4:5) and Story (9:16) formats for UI selector
 */
export function getPoemExportPlans(poem) {
  return {
    post: buildSlidePlan(poem, "post"),
    story: buildSlidePlan(poem, "story"),
  };
}

/**
 * Legacy single-plan getter (defaults to post format)
 */
export function getPoemExportPlan(poem, formatKey = "post") {
  const plan = buildSlidePlan(poem, formatKey);
  return {
    slideCount: plan.slideCount,
    isMultiSlide: plan.isMultiSlide,
    format: plan.format,
  };
}

/**
 * Botanical watermark renderer
 */
function drawGardeniaWatermark(ctx, palette, paths, offsetX, offsetY, scale, rotation = 0) {
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
}

/**
 * Botanical Swipe Prompt Indicator (Canvas-drawn)
 */
function drawSwipeIndicator(ctx, centerX, centerY, palette, slide) {
  ctx.save();

  // Decorative top divider line for the swipe prompt
  ctx.strokeStyle = palette.footerDivider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - 80, centerY - 46);
  ctx.lineTo(centerX + 80, centerY - 46);
  ctx.stroke();

  // Botanical diamond accent on divider
  ctx.fillStyle = palette.dividerEmblem;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 46 - 4);
  ctx.lineTo(centerX + 4, centerY - 46);
  ctx.lineTo(centerX, centerY - 46 + 4);
  ctx.lineTo(centerX - 4, centerY - 46);
  ctx.closePath();
  ctx.fill();

  // Swipe Action Graphics (Touch origin, directional arrow & chevrons)
  const iconY = centerY - 10;
  ctx.strokeStyle = palette.headerBrand;
  ctx.fillStyle = palette.headerBrand;
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Touch point (origin)
  const touchX = centerX - 36;
  ctx.beginPath();
  ctx.arc(touchX, iconY, 4, 0, Math.PI * 2);
  ctx.fill();

  // Touch ripple arc behind
  ctx.beginPath();
  ctx.arc(touchX - 4, iconY, 9, Math.PI * 0.7, Math.PI * 1.3);
  ctx.stroke();

  // Motion arrow sweeping to right
  ctx.beginPath();
  ctx.moveTo(touchX + 6, iconY);
  ctx.lineTo(centerX + 16, iconY);
  ctx.stroke();

  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(centerX + 9, iconY - 6);
  ctx.lineTo(centerX + 17, iconY);
  ctx.lineTo(centerX + 9, iconY + 6);
  ctx.stroke();

  // Dual forward chevrons »
  ctx.beginPath();
  ctx.moveTo(centerX + 26, iconY - 6);
  ctx.lineTo(centerX + 33, iconY);
  ctx.lineTo(centerX + 26, iconY + 6);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX + 37, iconY - 6);
  ctx.lineTo(centerX + 44, iconY);
  ctx.lineTo(centerX + 37, iconY + 6);
  ctx.stroke();

  // "SWIPE TO READ" Label
  ctx.textAlign = "center";
  ctx.fillStyle = palette.title;
  ctx.font = "600 15px sans-serif";
  ctx.fillText("SWIPE TO READ", centerX, centerY + 24);

  // Slide carousel indicator
  ctx.fillStyle = palette.headerMeta;
  ctx.font = "14px sans-serif";
  ctx.fillText(`·  1 / ${slide.totalSlides}  ·`, centerX, centerY + 48);

  ctx.restore();
}

/**
 * Dedicated Cover Slide Renderer for Multi-Slide Collections
 */
function renderCoverSlide(canvas, slide, plan, poem, palette) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { width, height, headerTop, footerBottom } = plan.format;

  canvas.width = width;
  canvas.height = height;

  // 1. Base parchment wash
  ctx.fillStyle = palette.bgBase;
  ctx.fillRect(0, 0, width, height);

  const grad = ctx.createRadialGradient(
    width / 2,
    height * 0.35,
    60,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.65
  );
  grad.addColorStop(0, palette.gradCenter);
  grad.addColorStop(1, palette.gradEdge);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 2. Botanical watermarks in corners
  drawGardeniaWatermark(ctx, palette, TOP_RIGHT_MOTIF_PATHS, width - 420, -10, 0.88, 0.08);
  drawGardeniaWatermark(ctx, palette, BOTTOM_LEFT_MOTIF_PATHS, -20, height - 420, 0.85, -0.1);

  // 3. Double frame & corner accents
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

  // 4. Rosette Colophon Emblem & Brand Header
  if (typeof Path2D !== "undefined") {
    ctx.save();
    ctx.translate(width / 2 - 20, headerTop);
    ctx.scale(0.40, 0.40);
    ctx.globalAlpha = palette.isDark ? 0.70 : 0.60;
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
  ctx.fillText("Notes from a Wilted Gardenia", width / 2, headerTop + 64);

  ctx.fillStyle = palette.headerMeta;
  ctx.font = "13px sans-serif";
  const dateStr = poem.publish_date ? `· ${poem.publish_date} ·` : "· Digital Leaf ·";
  ctx.fillText(dateStr.toUpperCase(), width / 2, headerTop + 96);

  // Divider Line with central botanical diamond
  ctx.strokeStyle = palette.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 100, headerTop + 118);
  ctx.lineTo(width / 2 - 14, headerTop + 118);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(width / 2 + 14, headerTop + 118);
  ctx.lineTo(width / 2 + 100, headerTop + 118);
  ctx.stroke();

  ctx.fillStyle = palette.dividerEmblem;
  ctx.beginPath();
  ctx.moveTo(width / 2, headerTop + 118 - 5);
  ctx.lineTo(width / 2 + 5, headerTop + 118);
  ctx.lineTo(width / 2, headerTop + 118 + 5);
  ctx.lineTo(width / 2 - 5, headerTop + 118);
  ctx.closePath();
  ctx.fill();

  // 5. Title, Intro & Poet Attribution Block (Vertically balanced in middle zone)
  const headerBottomY = headerTop + 145;
  const swipeSectionY = height - (footerBottom + 70);
  const availableMiddleHeight = swipeSectionY - headerBottomY;

  const coverTitleFont = "600 64px 'Cormorant Garamond', Georgia, serif";
  const coverTitleLineHeight = 76;
  const coverTitleLines = wrapText(ctx, poem.name || "Untitled Note", plan.format.maxContentWidth, coverTitleFont);
  const coverTitleHeight = coverTitleLines.length * coverTitleLineHeight;

  const coverIntroFont = "italic 32px 'Cormorant Garamond', Georgia, serif";
  const coverIntroLineHeight = 46;
  const coverIntroLines = poem.intro
    ? wrapText(ctx, `“${poem.intro}”`, plan.format.maxContentWidth - 80, coverIntroFont)
    : [];
  const coverIntroHeight = coverIntroLines.length > 0 ? coverIntroLines.length * coverIntroLineHeight : 0;

  const authorFont = "italic 28px 'Cormorant Garamond', Georgia, serif";
  const authorHeight = 40;

  const introSpacing = coverIntroLines.length > 0 ? 34 : 0;
  const authorSpacing = 36;
  const totalContentHeight = coverTitleHeight + introSpacing + coverIntroHeight + authorSpacing + authorHeight;

  let startY = headerBottomY + Math.max(30, Math.floor((availableMiddleHeight - totalContentHeight) * 0.44));

  // Render Title
  ctx.fillStyle = palette.title;
  ctx.font = coverTitleFont;
  coverTitleLines.forEach((line) => {
    ctx.fillText(line, width / 2, startY);
    startY += coverTitleLineHeight;
  });

  // Render Intro if present
  if (coverIntroLines.length > 0) {
    startY += 16;
    ctx.fillStyle = palette.dividerEmblem;
    ctx.beginPath();
    ctx.arc(width / 2, startY - 8, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = palette.intro;
    ctx.font = coverIntroFont;
    coverIntroLines.forEach((line) => {
      ctx.fillText(line, width / 2, startY + 16);
      startY += coverIntroLineHeight;
    });
    startY += 20;
  } else {
    startY += 20;
  }

  // Render Poet Attribution
  ctx.fillStyle = palette.attribution;
  ctx.font = authorFont;
  const authorName = poem.author || DEFAULT_AUTHOR;
  ctx.fillText(`— ${authorName}`, width / 2, startY);

  // 6. Swipe Prompt Section (Bottom)
  drawSwipeIndicator(ctx, width / 2, swipeSectionY, palette, slide);
}

/**
 * Renders a single card slide with dimension awareness (4:5 or 9:16)
 */
function renderCardSlide(canvas, slide, plan, poem, palette) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { width, height, headerTop, contHeaderTop, footerBottom } = plan.format;

  canvas.width = width;
  canvas.height = height;

  // 1. Base parchment wash
  ctx.fillStyle = palette.bgBase;
  ctx.fillRect(0, 0, width, height);

  const grad = ctx.createRadialGradient(
    width / 2,
    height * 0.35,
    60,
    width / 2,
    height / 2,
    Math.max(width, height) * 0.65
  );
  grad.addColorStop(0, palette.gradCenter);
  grad.addColorStop(1, palette.gradEdge);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 2. Botanical watermarks in corners
  drawGardeniaWatermark(ctx, palette, TOP_RIGHT_MOTIF_PATHS, width - 420, -10, 0.88, 0.08);
  drawGardeniaWatermark(ctx, palette, BOTTOM_LEFT_MOTIF_PATHS, -20, height - 420, 0.85, -0.1);

  // 3. Double frame & corner accents
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

  // 4. Header rendering
  if (slide.isFirst) {
    // Rosette Colophon Emblem
    if (typeof Path2D !== "undefined") {
      ctx.save();
      ctx.translate(width / 2 - 20, headerTop);
      ctx.scale(0.40, 0.40);
      ctx.globalAlpha = palette.isDark ? 0.70 : 0.60;
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
    ctx.font = "italic 22px 'Cormorant Garamond', Georgia, serif";
    ctx.fillText("Notes from a Wilted Gardenia", width / 2, headerTop + 62);

    ctx.fillStyle = palette.headerMeta;
    ctx.font = "13px sans-serif";
    const dateStr = poem.publish_date ? `· ${poem.publish_date} ·` : "· Digital Leaf ·";
    ctx.fillText(dateStr.toUpperCase(), width / 2, headerTop + 92);

    // Divider Line with central botanical diamond
    ctx.strokeStyle = palette.divider;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 100, headerTop + 112);
    ctx.lineTo(width / 2 - 14, headerTop + 112);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2 + 14, headerTop + 112);
    ctx.lineTo(width / 2 + 100, headerTop + 112);
    ctx.stroke();

    ctx.fillStyle = palette.dividerEmblem;
    ctx.beginPath();
    ctx.moveTo(width / 2, headerTop + 112 - 5);
    ctx.lineTo(width / 2 + 5, headerTop + 112);
    ctx.lineTo(width / 2, headerTop + 112 + 5);
    ctx.lineTo(width / 2 - 5, headerTop + 112);
    ctx.closePath();
    ctx.fill();

    // Title
    let curTitleY = headerTop + 164;
    ctx.fillStyle = palette.title;
    ctx.font = plan.typo.titleFont;
    plan.titleLines.forEach((line) => {
      ctx.fillText(line, width / 2, curTitleY);
      curTitleY += plan.typo.titleLineHeight;
    });

    // Intro (if present)
    if (plan.introLines.length > 0) {
      curTitleY += 8;
      ctx.fillStyle = palette.intro;
      ctx.font = plan.typo.introFont;
      plan.introLines.forEach((line) => {
        ctx.fillText(line, width / 2, curTitleY);
        curTitleY += plan.typo.introLineHeight;
      });
    }
  } else {
    // Running header on continuation slides
    ctx.textAlign = "center";
    ctx.fillStyle = palette.headerBrand;
    ctx.font = "italic 22px 'Cormorant Garamond', Georgia, serif";
    const runningHeader = poem.name
      ? (poem.name.length > 40 ? poem.name.slice(0, 38) + "…" : poem.name)
      : "Notes from a Wilted Gardenia";
    ctx.fillText(runningHeader, width / 2, contHeaderTop);

    const titleWidth = Math.min(280, Math.max(110, ctx.measureText(runningHeader).width + 30));
    ctx.strokeStyle = palette.divider;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - titleWidth / 2, contHeaderTop + 18);
    ctx.lineTo(width / 2 + titleWidth / 2, contHeaderTop + 18);
    ctx.stroke();
  }

  // 5. Stanzas rendering with gentle vertical balancing
  let curY = slide.bodyStartY;
  const remainingSpace = slide.availableHeight - slide.stanzasHeight;
  if (remainingSpace > 30) {
    curY += Math.floor(remainingSpace * 0.35);
  }

  ctx.textAlign = "center";
  ctx.font = `italic ${plan.typo.fontSize}px 'Cormorant Garamond', Georgia, serif`;
  ctx.fillStyle = palette.body;

  slide.stanzas.forEach((stanza, stIdx) => {
    stanza.lines.forEach((line) => {
      ctx.fillText(line, width / 2, curY);
      curY += plan.typo.lineHeight;
    });
    if (stIdx < slide.stanzas.length - 1) {
      curY += plan.typo.stanzaGap;
    }
  });

  // 6. Footer & attribution
  if (slide.isLast) {
    // Poet Attribution
    curY += Math.max(34, plan.typo.stanzaGap);
    ctx.fillStyle = palette.attribution;
    ctx.font = `italic ${Math.max(26, plan.typo.fontSize)}px 'Cormorant Garamond', Georgia, serif`;
    const authorName = poem.author || DEFAULT_AUTHOR;
    ctx.fillText(`— ${authorName}`, width / 2, curY);

    // Footer Seal
    const footerY = slide.totalSlides > 1 ? height - (footerBottom + 28) : height - footerBottom;
    ctx.fillStyle = palette.footerQuote;
    ctx.font = "15px sans-serif";
    ctx.fillText("the silence of things left unsaid", width / 2, footerY);

    ctx.strokeStyle = palette.footerDivider;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 60, footerY - 26);
    ctx.lineTo(width / 2 + 60, footerY - 26);
    ctx.stroke();

    if (slide.totalSlides > 1) {
      // Slide indicator on final slide: · N / N ·
      ctx.fillStyle = palette.headerMeta;
      ctx.font = "14px sans-serif";
      ctx.fillText(`·  ${slide.slideNumber} / ${slide.totalSlides}  ·`, width / 2, height - (footerBottom - 25));
    }
  } else {
    // Continuation slide indicator: · k / N ·
    ctx.fillStyle = palette.headerMeta;
    ctx.font = "14px sans-serif";
    ctx.fillText(`·  ${slide.slideNumber} / ${slide.totalSlides}  ·`, width / 2, height - (footerBottom - 18));
  }
}

/**
 * Exports a poem as Instagram-friendly portrait cards
 * (single slide → one PNG, multiple slides → one ZIP containing every PNG):
 * Options:
 * - format: "post" (4:5, 1080x1350) or "story" (9:16, 1080x1920)
 * - theme: "light" or "dark" (defaults to active theme)
 */
export async function exportPoemImage(poem, options = {}) {
  if (!poem) return false;

  // Await web fonts readiness
  if (typeof document !== "undefined" && document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch {
      // Continue if font readiness check fails
    }
  }

  // Format selection ("post" | "story")
  const formatKey = typeof options === "string" && (options === "post" || options === "story")
    ? options
    : options?.format || "post";

  // Determine active theme
  const explicitTheme = options?.theme || (typeof options === "string" && options !== "post" && options !== "story" ? options : null);
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

  // Calculate slide layout plan for selected format
  const plan = buildSlidePlan(poem, formatKey);
  if (!plan.slides || plan.slides.length === 0) return false;

  const safeTitle = (poem.name || "poem")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const themeSuffix = isDark ? "-dark" : "";
  const formatSuffix = plan.format.fileSuffix;

  // 1. Single-slide poem: download directly as PNG
  if (plan.slideCount === 1) {
    const canvas = document.createElement("canvas");
    renderCardSlide(canvas, plan.slides[0], plan, poem, palette);

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        triggerFileDownload(blob, `wilted-gardenia-${safeTitle}${themeSuffix}${formatSuffix}.png`);
        resolve(true);
      }, "image/png");
    });
  }

  // 2. Multi-slide long-form poem: render every slide and download all as one ZIP
  const files = [];
  for (let i = 0; i < plan.slides.length; i++) {
    const slide = plan.slides[i];
    const canvas = document.createElement("canvas");
    if (slide.isCover) {
      renderCoverSlide(canvas, slide, plan, poem, palette);
    } else {
      renderCardSlide(canvas, slide, plan, poem, palette);
    }

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (blob) {
      const slideIndexStr = String(i + 1).padStart(2, "0");
      files.push({
        name: `wilted-gardenia-${safeTitle}${themeSuffix}${formatSuffix}-${slideIndexStr}.png`,
        blob,
      });
    }
  }

  if (files.length === 0) return false;

  const zipBlob = await createZipBlob(files);
  triggerFileDownload(zipBlob, `wilted-gardenia-${safeTitle}${themeSuffix}${formatSuffix}.zip`);

  return true;
}

// ---------------------------------------------------------------------------
// Minimal dependency-free ZIP writer ("store" method, no compression).
// PNGs are already compressed, so storing them as-is is fine and keeps this fast.
// ---------------------------------------------------------------------------
const CRC32_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = CRC32_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

/**
 * Builds a ZIP archive Blob from [{ name, blob }]
 */
async function createZipBlob(files) {
  const encoder = new TextEncoder();
  const now = new Date();
  const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
  const dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();

  const localParts = [];
  const centralParts = [];
  let offset = 0;
  let centralSize = 0;

  for (const file of files) {
    const nameBytes = encoder.encode(file.name);
    const data = new Uint8Array(await file.blob.arrayBuffer());
    const crc = crc32(data);

    // Local file header
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(6, 0x0800, true); // UTF-8 filenames
    local.setUint16(8, 0, true); // store
    local.setUint16(10, dosTime, true);
    local.setUint16(12, dosDate, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, data.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, nameBytes.length, true);
    local.setUint16(28, 0, true);
    localParts.push(new Uint8Array(local.buffer), nameBytes, data);

    // Central directory header
    const central = new DataView(new ArrayBuffer(46));
    central.setUint32(0, 0x02014b50, true);
    central.setUint16(4, 20, true);
    central.setUint16(6, 20, true);
    central.setUint16(8, 0x0800, true);
    central.setUint16(10, 0, true);
    central.setUint16(12, dosTime, true);
    central.setUint16(14, dosDate, true);
    central.setUint32(16, crc, true);
    central.setUint32(20, data.length, true);
    central.setUint32(24, data.length, true);
    central.setUint16(28, nameBytes.length, true);
    central.setUint16(30, 0, true);
    central.setUint16(32, 0, true);
    central.setUint16(34, 0, true);
    central.setUint16(36, 0, true);
    central.setUint32(38, 0, true);
    central.setUint32(42, offset, true);
    centralParts.push(new Uint8Array(central.buffer), nameBytes);

    centralSize += 46 + nameBytes.length;
    offset += 30 + nameBytes.length + data.length;
  }

  // End of central directory record
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(4, 0, true);
  end.setUint16(6, 0, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, centralSize, true);
  end.setUint32(16, offset, true);
  end.setUint16(20, 0, true);

  return new Blob([...localParts, ...centralParts, new Uint8Array(end.buffer)], {
    type: "application/zip",
  });
}

/**
 * Triggers a native file download from a Blob
 */
function triggerFileDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}


