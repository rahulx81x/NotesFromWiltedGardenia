import { DEFAULT_AUTHOR } from "../data/config";

/**
 * Exports a poem excerpt as an aesthetically pleasing 1080x1350 portrait card
 * using the HTML5 Canvas 2D API. No external dependencies required.
 */
export async function exportPoemImage(poem) {
  if (!poem) return;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = 1080;
  const height = 1350;
  canvas.width = width;
  canvas.height = height;

  // 1. Background Parchment Fill
  ctx.fillStyle = "#f8f5ee";
  ctx.fillRect(0, 0, width, height);

  // Subtle paper texture gradient
  const grad = ctx.createRadialGradient(
    width / 2,
    height * 0.3,
    50,
    width / 2,
    height / 2,
    width * 0.8
  );
  grad.addColorStop(0, "rgba(255, 255, 255, 0.45)");
  grad.addColorStop(1, "rgba(235, 227, 212, 0.6)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // 2. Double Ornamental Border
  ctx.strokeStyle = "#ded6c5";
  ctx.lineWidth = 2;
  ctx.strokeRect(48, 48, width - 96, height - 96);

  ctx.strokeStyle = "#8f6543";
  ctx.lineWidth = 1;
  ctx.strokeRect(58, 58, width - 116, height - 116);

  // Corner Accents
  const drawCorner = (x, y) => {
    ctx.fillStyle = "#8f6543";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  };
  drawCorner(58, 58);
  drawCorner(width - 58, 58);
  drawCorner(58, height - 58);
  drawCorner(width - 58, height - 58);

  // 3. Header Emblem & Publication Details
  ctx.textAlign = "center";
  ctx.fillStyle = "#8f6543";
  ctx.font = "italic 26px 'Cormorant Garamond', Georgia, serif";
  ctx.fillText("Notes from a Wilted Gardenia", width / 2, 140);

  ctx.fillStyle = "#8e8375";
  ctx.font = "16px sans-serif";
  const dateStr = poem.publish_date ? `· ${poem.publish_date} ·` : "· Digital Leaf ·";
  ctx.fillText(dateStr.toUpperCase(), width / 2, 180);

  // Divider Line
  ctx.strokeStyle = "#d6cbba";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 120, 210);
  ctx.lineTo(width / 2 + 120, 210);
  ctx.stroke();

  // 4. Poem Title
  ctx.fillStyle = "#231f1d";
  ctx.font = "600 52px 'Cormorant Garamond', Georgia, serif";
  
  // Wrap title if needed
  const title = poem.name || "Untitled Note";
  const maxTextWidth = width - 240;
  
  const wrapText = (text, maxWidth) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const testLine = currentLine + " " + word;
      if (ctx.measureText(testLine).width < maxWidth) {
        currentLine = testLine;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  const titleLines = wrapText(title, maxTextWidth);
  let curY = 310;
  titleLines.forEach((line) => {
    ctx.fillText(line, width / 2, curY);
    curY += 64;
  });

  // 5. Short Excerpt (First stanza or first ~6 lines)
  const rawContents = poem.contents || "";
  const stanzas = rawContents.split(/\n\s*\n/);
  const firstStanzaLines = (stanzas[0] || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(0, 6);

  curY += 40;
  ctx.font = "italic 32px 'Cormorant Garamond', Georgia, serif";
  ctx.fillStyle = "#4a433d";

  firstStanzaLines.forEach((line) => {
    ctx.fillText(line, width / 2, curY);
    curY += 52;
  });

  // If there are more stanzas, add a gentle ellipsis
  if (stanzas.length > 1 || rawContents.split("\n").length > 6) {
    curY += 10;
    ctx.fillStyle = "#b4aa9d";
    ctx.fillText("…", width / 2, curY);
    curY += 40;
  } else {
    curY += 30;
  }

  // 6. Poet Attribution Signature
  ctx.fillStyle = "#8f6543";
  ctx.font = "italic 28px 'Cormorant Garamond', Georgia, serif";
  const authorName = poem.author || DEFAULT_AUTHOR;
  ctx.fillText(`— ${authorName}`, width / 2, curY + 20);

  // 7. Footer Seal & Philosophy
  ctx.textAlign = "center";
  ctx.fillStyle = "#a89d8f";
  ctx.font = "18px sans-serif";
  ctx.fillText("the silence of things left unsaid", width / 2, height - 120);

  ctx.strokeStyle = "#ded6c5";
  ctx.beginPath();
  ctx.moveTo(width / 2 - 60, height - 148);
  ctx.lineTo(width / 2 + 60, height - 148);
  ctx.stroke();

  // Convert canvas to downloadable PNG
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
