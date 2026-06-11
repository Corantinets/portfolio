"use client";

import { useEffect, useRef } from "react";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
const norm = (v: number, lo: number, hi: number) => clamp((v - lo) / (hi - lo));
const ease = (t: number) => t * t * t * (t * (6 * t - 15) + 10);

// progress 0 = haut (coucher, sombre) → progress 1 = bas (lever, orange chaud)
const PHASES = [
  { top: [47, 34, 29],  bot: [61, 26, 16]  },
  { top: [100, 40, 20], bot: [140, 55, 25] },
  { top: [169, 74, 32], bot: [201, 94, 45] },
  { top: [201, 94, 45], bot: [230, 138, 87]},
  { top: [180, 95, 45], bot: [200, 118, 58]},
];

function getColors(p: number) {
  const n = PHASES.length - 1;
  const s = p * n;
  const i = Math.min(Math.floor(s), n - 1);
  const t = ease(s - i);
  const a = PHASES[i], b = PHASES[i + 1];
  return {
    rt: Math.round(lerp(a.top[0], b.top[0], t)),
    gt: Math.round(lerp(a.top[1], b.top[1], t)),
    bt: Math.round(lerp(a.top[2], b.top[2], t)),
    rb: Math.round(lerp(a.bot[0], b.bot[0], t)),
    gb: Math.round(lerp(a.bot[1], b.bot[1], t)),
    bb: Math.round(lerp(a.bot[2], b.bot[2], t)),
  };
}

interface Ember { x: number; y: number; vx: number; vy: number; size: number; life: number; }

const makeEmbers = (n: number): Ember[] =>
  Array.from({ length: n }, () => ({
    x: Math.random() * 100,
    y: 60 + Math.random() * 40,
    vx: (Math.random() - 0.5) * 0.012,
    vy: -(Math.random() * 0.025 + 0.008),
    size: Math.random() * 3 + 1.5,
    life: Math.random(),
  }));

export default function SunsetScrollEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let progress = 0;
    let rafId = 0;
    const embers = makeEmbers(50);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxH = document.documentElement.scrollHeight - window.innerHeight;
        progress = maxH > 0 ? clamp(window.scrollY / maxH) : 0;
        ticking = false;
      });
    };

    const draw = () => {
      const p = progress;
      const W = canvas.width;
      const H = canvas.height;
      const c = getColors(p);

      ctx.clearRect(0, 0, W, H);

      // ── Fond dégradé vertical ──────────────────────────────────────────────
      const bgOpacity = 0.08 + ease(p) * 0.52;
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, `rgba(${c.rt},${c.gt},${c.bt},${bgOpacity})`);
      grad.addColorStop(1, `rgba(${c.rb},${c.gb},${c.bb},${bgOpacity})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // ── Vignette sombre en haut ────────────────────────────────────────────
      const vigOp = ease(norm(p, 0, 0.4)) * 0.28;
      if (vigOp > 0.01) {
        const vGrad = ctx.createLinearGradient(0, 0, 0, H * 0.45);
        vGrad.addColorStop(0, `rgba(${c.rt},${c.gt},${c.bt},${vigOp * 0.55})`);
        vGrad.addColorStop(1, `rgba(${c.rt},${c.gt},${c.bt},0)`);
        ctx.fillStyle = vGrad;
        ctx.fillRect(0, 0, W, H * 0.45);
      }

      // ── Disque solaire (bas droite) ────────────────────────────────────────
      const sunOp = ease(norm(p, 0.3, 0.65)) * (0.5 + p * 0.35);
      if (sunOp > 0.01) {
        const sunR = (420 + p * 220) / 2;
        const sunX = W * 0.72;
        const sunY = H - (40 + p * 60) - sunR * 0.3;
        const sunBlur = 55 + (1 - p) * 40;

        // Simuler le blur via plusieurs cercles concentriques dégradés
        const steps = 8;
        for (let s = steps; s >= 0; s--) {
          const ratio = s / steps;
          const r = sunR * (1 + (1 - ratio) * (sunBlur / sunR));
          const alpha = sunOp * ratio * 0.25;
          const sg = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, r);
          if (s === steps) {
            sg.addColorStop(0, `rgba(255,235,180,${sunOp * 0.9})`);
            sg.addColorStop(0.2, `rgba(${c.rb+30},${Math.max(0,c.gb+10)},${c.bb},${sunOp * 0.55})`);
          } else {
            sg.addColorStop(0, `rgba(${c.rb},${c.gb},${c.bb},${alpha})`);
          }
          sg.addColorStop(1, `rgba(${c.rb},${c.gb},${c.bb},0)`);
          ctx.beginPath();
          ctx.arc(sunX, sunY, r, 0, Math.PI * 2);
          ctx.fillStyle = sg;
          ctx.fill();
        }
      }

      // ── Lueur horizon bas ──────────────────────────────────────────────────
      const glowOp = ease(norm(p, 0.1, 0.5));
      if (glowOp > 0.01) {
        const glowH = 100 + p * 160;
        const hGrad = ctx.createLinearGradient(0, H - glowH, 0, H);
        hGrad.addColorStop(0, `rgba(${c.rb},${c.gb},${c.bb},0)`);
        hGrad.addColorStop(0.5, `rgba(${c.rt},${c.gt},${c.bt},${0.18 * glowOp})`);
        hGrad.addColorStop(1, `rgba(${c.rb},${c.gb},${c.bb},${0.45 * glowOp})`);
        ctx.fillStyle = hGrad;
        ctx.fillRect(0, H - glowH, W, glowH);
      }

      // ── Embers ─────────────────────────────────────────────────────────────
      // Apparaissent à 20%, restent jusqu'à 100%, plus intenses en bas
      const emberAlpha = ease(norm(p, 0.18, 0.32)) * (0.4 + p * 0.6);
      if (emberAlpha > 0.01) {
        const brightness = Math.round(215 + p * 40);
        const bG = Math.round(brightness * 0.72);
        const bB = Math.round(brightness * 0.28);

        embers.forEach((e) => {
          e.x += e.vx; e.y += e.vy; e.life += 0.004;
          if (e.life > 1) { e.life = 0; e.x = Math.random() * 100; e.y = 75 + Math.random() * 25; }
          if (e.y < -5)   { e.y = 102; e.x = Math.random() * 100; }

          const fade = Math.sin(e.life * Math.PI);
          const a = fade * emberAlpha * 0.9;
          if (a < 0.01) return;

          const px = (e.x / 100) * W;
          const py = (e.y / 100) * H;
          const r  = e.size * 4;
          const eg = ctx.createRadialGradient(px, py, 0, px, py, r);
          eg.addColorStop(0, `rgba(${brightness},${bG},${bB},${a})`);
          eg.addColorStop(1, `rgba(${brightness},${bG},${bB},0)`);
          ctx.beginPath();
          ctx.arc(px, py, r, 0, Math.PI * 2);
          ctx.fillStyle = eg;
          ctx.fill();
        });
      }

      rafId = requestAnimationFrame(draw);
    };

    rafId = requestAnimationFrame(draw);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}