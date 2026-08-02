"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function WireframeGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SIZE = 280;
    const R = SIZE * 0.42;
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const STEPS = 120;
    const LAT_STEP = 20;
    const LON_STEP = 20;
    let angle = 0;
    let rafId: number;

    canvas.width = SIZE;
    canvas.height = SIZE;
    canvas.style.width = SIZE + "px";
    canvas.style.height = SIZE + "px";

    function toXYZ(lat: number, lon: number) {
      return [Math.cos(lat) * Math.sin(lon), Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
    }
    function rotY(p: number[], a: number) {
      return [p[0] * Math.cos(a) + p[2] * Math.sin(a), p[1], -p[0] * Math.sin(a) + p[2] * Math.cos(a)];
    }
    function project(p: number[]) {
      return { sx: cx + p[0] * R, sy: cy - p[1] * R, z: p[2] };
    }

    function strokeArc(pts: { sx: number; sy: number; z: number }[], fColor: string, bColor: string) {
      for (let pass = 0; pass < 2; pass++) {
        const front = pass === 1;
        let penDown = false;
        let lx = 0, ly = 0;
        ctx.beginPath();
        for (const p of pts) {
          if ((p.z >= 0) !== front) { penDown = false; continue; }
          const gap = !penDown || (p.sx - lx) ** 2 + (p.sy - ly) ** 2 > R * R * 0.72;
          gap ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
          penDown = true; lx = p.sx; ly = p.sy;
        }
        ctx.strokeStyle = front ? fColor : bColor;
        ctx.lineWidth = front ? 0.8 : 0.4;
        ctx.stroke();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      for (let lat = -90 + LAT_STEP; lat < 90; lat += LAT_STEP) {
        const pts = [];
        for (let i = 0; i <= STEPS; i++) {
          pts.push(project(rotY(toXYZ(lat * Math.PI / 180, (i / STEPS) * Math.PI * 2), angle)));
        }
        strokeArc(pts, "rgba(0,0,0,0.85)", "rgba(0,0,0,0.12)");
      }
      for (let lon = 0; lon < 360; lon += LON_STEP) {
        const pts = [];
        for (let i = 0; i <= STEPS; i++) {
          pts.push(project(rotY(toXYZ((i / STEPS) * Math.PI - Math.PI / 2, lon * Math.PI / 180), angle)));
        }
        strokeArc(pts, "rgba(0,0,0,0.85)", "rgba(0,0,0,0.12)");
      }
      ctx.restore();

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0,0,0,0.85)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      angle += 0.004;
      rafId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return <canvas ref={canvasRef} className="block" />;
}

export default function GlobalCTA() {
  return (
    <section className="py-16 md:py-24 bg-black text-white border-t border-black overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <WireframeGlobe />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
              Cross-platform
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
              Runs Everywhere.<br />Controlled by You.
            </h2>
            <p className="font-mono text-sm text-neutral-400 font-bold leading-relaxed mb-8 max-w-md">
              Windows, macOS, Linux — one native desktop client powered by Avalonia UI. No cloud lock-in, no browser overhead. Your data stays on your machine.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Windows", "macOS", "Linux"].map((os) => (
                <div key={os} className="clip-button border-2 border-white/20 px-5 py-2 font-mono font-black text-sm uppercase tracking-widest text-white hover:border-white hover:bg-white hover:text-black transition-all cursor-crosshair">
                  {os}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
