import { useEffect, useRef } from "react";

/**
 * Ambient floating Gardenia Petals
 * Sparse, solitary drift (reduced volume as requested: 5-7 petals max)
 * Each petal feels rare, slow, and contemplative.
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

    // Reduced volume: sparse, poetic drift (only 5-7 petals total)
    const petalCount = Math.min(7, Math.max(4, Math.floor(window.innerWidth / 260)));
    const petals = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize: 18 + Math.random() * 16,
        speedX: 0.12 + Math.random() * 0.28,
        speedY: 0.25 + Math.random() * 0.35, // slow, contemplative descent
        angle: Math.random() * Math.PI * 2,
        flipAngle: Math.random() * Math.PI * 2,
        flipSpeed: 0.009 + Math.random() * 0.014,
        rotSpeed: (Math.random() - 0.5) * 0.01,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.006 + Math.random() * 0.01,
        opacity: 0.68 + Math.random() * 0.2,
        toneType: Math.random() > 0.5 ? "bruised" : "aged-tea",
      });
    }

    const drawGardeniaPetal = (p, isDark) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      // 3D flip tumble
      const scaleX = Math.cos(p.flipAngle);
      const scaleY = 1 + Math.sin(p.flipAngle) * 0.25;
      ctx.scale(scaleX, scaleY);

      const r = p.baseSize;

      // Soft tactile drop shadow
      if (isDark) {
        ctx.shadowColor = `rgba(225, 185, 140, ${p.opacity * 0.35})`;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
      } else {
        ctx.shadowColor = `rgba(120, 80, 45, ${p.opacity * 0.32})`;
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 5;
      }

      // Rounded gardenia petal
      ctx.beginPath();
      ctx.moveTo(0, r * 0.88);
      ctx.bezierCurveTo(-r * 0.9, r * 0.55, -r * 1.18, -r * 0.15, -r * 0.72, -r * 0.85);
      ctx.bezierCurveTo(-r * 0.35, -r * 1.08, r * 0.35, -r * 1.08, r * 0.72, -r * 0.85);
      ctx.bezierCurveTo(r * 1.18, -r * 0.15, r * 0.9, r * 0.55, 0, r * 0.88);
      ctx.closePath();

      const grad = ctx.createRadialGradient(0, -r * 0.25, r * 0.1, 0, 0, r * 1.15);

      if (isDark) {
        grad.addColorStop(0, `rgba(248, 240, 226, ${p.opacity})`);
        grad.addColorStop(0.7, `rgba(224, 192, 155, ${p.opacity * 0.9})`);
        grad.addColorStop(1, `rgba(175, 135, 95, ${p.opacity * 0.8})`);
      } else {
        if (p.toneType === "bruised") {
          grad.addColorStop(0, `rgba(246, 230, 212, ${p.opacity})`);
          grad.addColorStop(0.65, `rgba(222, 182, 144, ${p.opacity * 0.95})`);
          grad.addColorStop(1, `rgba(165, 118, 78, ${p.opacity * 0.92})`);
        } else {
          grad.addColorStop(0, `rgba(250, 240, 225, ${p.opacity})`);
          grad.addColorStop(0.6, `rgba(230, 198, 162, ${p.opacity * 0.92})`);
          grad.addColorStop(1, `rgba(182, 136, 92, ${p.opacity * 0.88})`);
        }
      }

      ctx.fillStyle = grad;
      ctx.fill();

      ctx.shadowColor = "transparent";

      if (isDark) {
        ctx.strokeStyle = `rgba(235, 195, 155, ${p.opacity * 0.7})`;
        ctx.lineWidth = 1.0;
      } else {
        ctx.strokeStyle = `rgba(145, 95, 55, ${p.opacity * 0.75})`;
        ctx.lineWidth = 1.1;
      }
      ctx.stroke();

      // Inner curled contour
      ctx.beginPath();
      ctx.moveTo(-r * 0.4, -r * 0.7);
      ctx.quadraticCurveTo(0, -r * 0.5, r * 0.4, -r * 0.7);
      if (isDark) {
        ctx.strokeStyle = `rgba(255, 240, 220, ${p.opacity * 0.5})`;
      } else {
        ctx.strokeStyle = `rgba(135, 88, 50, ${p.opacity * 0.45})`;
      }
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      petals.forEach((p) => {
        p.swayPhase += p.swaySpeed;
        p.flipAngle += p.flipSpeed;
        p.angle += p.rotSpeed;

        p.x += p.speedX + Math.sin(p.swayPhase) * 0.45;
        p.y += p.speedY;

        if (p.y > height + 40) {
          p.y = -35;
          p.x = Math.random() * width;
        }
        if (p.x > width + 40) {
          p.x = -35;
        }

        drawGardeniaPetal(p, isDark);
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
