import { useEffect, useRef } from "react";

/**
 * Ambient floating Gardenia Petals
 * Delicate, elongated porcelain-ivory petals with subtle tea-wilted margins.
 * Features realistic botanical silhouettes, subtle translucent midribs,
 * and gentle fluttering 3D aerodynamics.
 */
export default function FloatingPetals({ enabled = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Poetic, sparse drift: 5-7 petals max for quiet contemplation
    const petalCount = Math.min(7, Math.max(4, Math.floor(window.innerWidth / 280)));
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      const length = 30 + Math.random() * 16;
      // Slender petal aspect ratio: width is ~0.45 to 0.55 of length (not squat or round)
      const widthRatio = 0.46 + Math.random() * 0.1;
      const petalWidth = length * widthRatio;

      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length,
        width: petalWidth,
        speedX: 0.15 + Math.random() * 0.25,
        speedY: 0.28 + Math.random() * 0.32,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        // 3D flutter: tumbling around pitch and roll axes
        flipAngle: Math.random() * Math.PI * 2,
        flipSpeed: 0.01 + Math.random() * 0.012,
        rollAngle: Math.random() * Math.PI * 2,
        rollSpeed: 0.007 + Math.random() * 0.01,
        // Swaying pendulum wind effect
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.008 + Math.random() * 0.008,
        swayAmount: 0.4 + Math.random() * 0.4,
        opacity: 0.68 + Math.random() * 0.22,
        variant: i % 3, // 0: elegant outer petal, 1: curved petal, 2: slightly ruffled petal
        wiltDegree: Math.random(), // varying amount of golden tea-staining on margins
      });
    }

    const drawPetal = (p, isDark) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle + Math.sin(p.swayPhase) * 0.15);

      // Realistic 3D flutter: scale on both X and Y with perspective compression
      const flipScale = Math.cos(p.flipAngle);
      const rollSkew = Math.sin(p.rollAngle) * 0.18;
      ctx.scale(flipScale, 1);
      ctx.transform(1, 0, rollSkew, 1, 0, 0);

      const l = p.length;
      const w = p.width;

      // Soft, natural translucent shadow (gives distinct float above light parchment)
      if (isDark) {
        ctx.shadowColor = `rgba(235, 215, 185, ${p.opacity * 0.16})`;
        ctx.shadowBlur = 9;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 3;
      } else {
        ctx.shadowColor = `rgba(120, 85, 55, ${p.opacity * 0.22})`;
        ctx.shadowBlur = 9;
        ctx.shadowOffsetX = 1.5;
        ctx.shadowOffsetY = 4;
      }

      // --- PATH GENERATION: Authentic Botanical Gardenia Petal ---
      // Slender base (stem attachment), gently curving outward into an elongated,
      // softly rounded obovate petal blade with natural asymmetry
      ctx.beginPath();
      // Start at petal base (calyx connection point)
      ctx.moveTo(0, l * 0.48);

      if (p.variant === 0) {
        // Classic elegant outer petal: gracefully arched flanks with soft crest
        ctx.bezierCurveTo(-w * 0.38, l * 0.32, -w * 0.55, l * 0.04, -w * 0.52, -l * 0.2);
        ctx.bezierCurveTo(-w * 0.48, -l * 0.38, -w * 0.22, -l * 0.5, 0, -l * 0.48);
        ctx.bezierCurveTo(w * 0.24, -l * 0.5, w * 0.54, -l * 0.36, w * 0.52, -l * 0.18);
        ctx.bezierCurveTo(w * 0.5, l * 0.06, w * 0.35, l * 0.32, 0, l * 0.48);
      } else if (p.variant === 1) {
        // Curled/waving petal: asymmetric graceful curve, like catching a breeze
        ctx.bezierCurveTo(-w * 0.3, l * 0.34, -w * 0.62, l * 0.08, -w * 0.56, -l * 0.16);
        ctx.bezierCurveTo(-w * 0.5, -l * 0.35, -w * 0.15, -l * 0.52, w * 0.06, -l * 0.47);
        ctx.bezierCurveTo(w * 0.28, -l * 0.44, w * 0.46, -l * 0.3, w * 0.42, -l * 0.12);
        ctx.bezierCurveTo(w * 0.38, l * 0.08, w * 0.28, l * 0.32, 0, l * 0.48);
      } else {
        // Soft ruffled petal: subtle undulation near the apex
        ctx.bezierCurveTo(-w * 0.35, l * 0.33, -w * 0.53, l * 0.02, -w * 0.5, -l * 0.22);
        ctx.bezierCurveTo(-w * 0.46, -l * 0.42, -w * 0.18, -l * 0.47, -w * 0.04, -l * 0.45);
        ctx.bezierCurveTo(w * 0.1, -l * 0.49, w * 0.32, -l * 0.46, w * 0.48, -l * 0.25);
        ctx.bezierCurveTo(w * 0.52, -l * 0.05, w * 0.36, l * 0.32, 0, l * 0.48);
      }
      ctx.closePath();

      // --- COLOR GRADIENTS: Creamy Porcelain Ivory with Withered Tea Margins ---
      const grad = ctx.createLinearGradient(0, -l * 0.5, 0, l * 0.5);

      if (isDark) {
        // Luminous nocturnal ivory: pale translucent porcelain catching candle glow
        grad.addColorStop(0, `rgba(248, 243, 233, ${p.opacity * 0.85})`);
        grad.addColorStop(0.45, `rgba(238, 226, 206, ${p.opacity * 0.75})`);
        grad.addColorStop(0.85, `rgba(215, 195, 168, ${p.opacity * 0.62})`);
        grad.addColorStop(1, `rgba(188, 162, 132, ${p.opacity * 0.48})`);
      } else {
        // Sunlit parchment: creamy warm porcelain heart with rich tea-stained wilted margins for visibility
        const teaTint = p.wiltDegree > 0.45;
        grad.addColorStop(0, `rgba(255, 252, 245, ${p.opacity * 0.96})`);
        grad.addColorStop(0.35, `rgba(247, 239, 224, ${p.opacity * 0.9})`);
        if (teaTint) {
          grad.addColorStop(0.72, `rgba(230, 206, 172, ${p.opacity * 0.85})`);
          grad.addColorStop(1, `rgba(202, 168, 130, ${p.opacity * 0.72})`);
        } else {
          grad.addColorStop(0.75, `rgba(236, 219, 192, ${p.opacity * 0.82})`);
          grad.addColorStop(1, `rgba(210, 184, 148, ${p.opacity * 0.68})`);
        }
      }

      ctx.fillStyle = grad;
      ctx.fill();

      ctx.shadowColor = "transparent";

      // Defined yet delicate translucent boundary for crisp light-mode presence
      if (isDark) {
        ctx.strokeStyle = `rgba(245, 230, 205, ${p.opacity * 0.38})`;
        ctx.lineWidth = 0.7;
      } else {
        ctx.strokeStyle = `rgba(175, 140, 105, ${p.opacity * 0.55})`;
        ctx.lineWidth = 0.8;
      }
      ctx.stroke();

      // --- BOTANICAL VEINING: Subtle Midrib Crease & Lateral Tendrils ---
      ctx.beginPath();
      const midribTop = -l * 0.28;
      const midribCurve = (p.variant === 1 ? -w * 0.08 : w * 0.04);
      ctx.moveTo(0, l * 0.42);
      ctx.quadraticCurveTo(midribCurve, l * 0.08, 0, midribTop);

      if (isDark) {
        ctx.strokeStyle = `rgba(255, 248, 235, ${p.opacity * 0.32})`;
      } else {
        ctx.strokeStyle = `rgba(165, 130, 95, ${p.opacity * 0.45})`;
      }
      ctx.lineWidth = 0.65;
      ctx.stroke();

      // Lateral vein branches
      ctx.beginPath();
      ctx.moveTo(midribCurve * 0.5, l * 0.15);
      ctx.quadraticCurveTo(-w * 0.2, l * 0.06, -w * 0.32, l * 0.02);
      ctx.moveTo(midribCurve * 0.8, -l * 0.02);
      ctx.quadraticCurveTo(w * 0.2, -l * 0.1, w * 0.34, -l * 0.12);

      if (isDark) {
        ctx.strokeStyle = `rgba(255, 245, 230, ${p.opacity * 0.18})`;
      } else {
        ctx.strokeStyle = `rgba(165, 130, 95, ${p.opacity * 0.28})`;
      }
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      petals.forEach((p) => {
        p.swayPhase += p.swaySpeed;
        p.flipAngle += p.flipSpeed;
        p.rollAngle += p.rollSpeed;
        p.angle += p.rotSpeed;

        // Graceful fluttering path with gentle horizontal sway
        p.x += p.speedX + Math.sin(p.swayPhase) * p.swayAmount;
        p.y += p.speedY;

        // Continuous wraparound loop
        if (p.y > height + 50) {
          p.y = -40;
          p.x = Math.random() * width;
        }
        if (p.x > width + 50) {
          p.x = -40;
        } else if (p.x < -50) {
          p.x = width + 40;
        }

        drawPetal(p, isDark);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="ambient-petals-canvas"
      aria-hidden="true"
    />
  );
}
