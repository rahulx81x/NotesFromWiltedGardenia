import { DEFAULT_AUTHOR } from "../data/config";

/**
 * Exports a poem in its entirety as an aesthetically pleasing portrait card
 * using the HTML5 Canvas 2D API. Dynamically scales and sizes the canvas
 * so all stanzas are preserved and elegantly typeset.
 */
export async function exportPoemImage(poem) {
  if (!poem) return false;

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
  ctx.fillStyle = "#f8f5ee";
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
  grad.addColorStop(0, "rgba(255, 255, 255, 0.55)");
  grad.addColorStop(1, "rgba(235, 227, 212, 0.65)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 4. Double Botanical Border & Corner Accents
  ctx.strokeStyle = "#ded6c5";
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  ctx.strokeStyle = "#8f6543";
  ctx.lineWidth = 1;
  ctx.strokeRect(58, 58, width - 116, height - 116);

  const drawCornerDot = (x, y) => {
    ctx.fillStyle = "#8f6543";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  };
  drawCornerDot(58, 58);
  drawCornerDot(width - 58, 58);
  drawCornerDot(58, height - 58);
  drawCornerDot(width - 58, height - 58);

  // 5. Header Emblem & Publication Details
  ctx.textAlign = "center";
  ctx.fillStyle = "#8f6543";
  ctx.font = "italic 24px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText("Notes from a Wilted Gardenia", width / 2, 130);

  ctx.fillStyle = "#8e8375";
  ctx.font = "14px sans-serif";
  const dateStr = poem.publish_date ? `· ${poem.publish_date} ·` : "· Digital Leaf ·";
  ctx.fillText(dateStr.toUpperCase(), width / 2, 165);

  // Divider Line
  ctx.strokeStyle = "#d6cbba";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 100, 190);
  ctx.lineTo(width / 2 + 100, 190);
  ctx.stroke();

  // 6. Draw Poem Title
  let curY = 250;
  ctx.fillStyle = "#231f1d";
  ctx.font = titleFont;
  titleLines.forEach((line) => {
    ctx.fillText(line, width / 2, curY);
    curY += 56;
  });

  // 7. Draw Intro Excerpt (if present)
  if (introLines.length > 0) {
    curY += 8;
    ctx.fillStyle = "#7c7267";
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
  ctx.fillStyle = "#3e3833";

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
  ctx.fillStyle = "#8f6543";
  ctx.font = "italic 26px 'Cormorant Garamond', Georgia, serif";
  const authorName = poem.author || DEFAULT_AUTHOR;
  ctx.fillText(`— ${authorName}`, width / 2, curY);

  // 10. Footer Seal & Brand Philosophy
  ctx.textAlign = "center";
  ctx.fillStyle = "#a89d8f";
  ctx.font = "16px sans-serif";
  ctx.fillText("the silence of things left unsaid", width / 2, height - 110);

  ctx.strokeStyle = "#ded6c5";
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
      link.download = `wilted-gardenia-${safeTitle}.png`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      resolve(true);
    }, "image/png");
  });
}
