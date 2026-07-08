import React, { useEffect, useRef } from 'react';

const TEXT = 'BroadSolutionTech';
const DOT_COLOR = '#A9B6EE';

// Lightweight canvas particle field: idles as a rotating dot-sphere,
// morphs into the brand wordmark on hover (auto-cycles on touch devices).
export default function ParticleMorphSection() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext('2d');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noHover = window.matchMedia('(hover: none)').matches;
    const MAX_POINTS = noHover || (navigator.hardwareConcurrency || 8) <= 4 ? 1400 : 2400;
    const TILT = 0.35;
    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);

    let W = 0;
    let H = 0;
    let lastW = 0;
    let lastH = 0;
    let particles = [];
    let spherePts = [];
    let textPts = [];
    let mode = 'sphere';
    let rotY = 0;
    let raf = 0;
    let running = false;
    let last = 0;
    let lastToggle = 0;
    let cancelled = false;
    const mouse = { x: -9999, y: -9999 };

    function buildTextPoints() {
      const off = document.createElement('canvas');
      off.width = W;
      off.height = H;
      const octx = off.getContext('2d', { willReadFrequently: true });
      let fs = Math.min(H * 0.5, 180);
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      const setFont = (s) => { octx.font = `700 ${s}px "Inter Tight", sans-serif`; };
      setFont(fs);
      const maxW = W * 0.92;
      const tw = octx.measureText(TEXT).width;
      if (tw > maxW) {
        fs *= maxW / tw;
        setFont(fs);
      }
      octx.fillStyle = '#fff';
      octx.fillText(TEXT, W / 2, H / 2);
      const data = octx.getImageData(0, 0, W, H).data;
      const step = Math.max(2, Math.round(fs / 30));
      const pts = [];
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          if (data[(y * W + x) * 4 + 3] > 128) pts.push([x, y]);
        }
      }
      for (let i = pts.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        const t = pts[i];
        pts[i] = pts[j];
        pts[j] = t;
      }
      textPts = pts.length > MAX_POINTS ? pts.slice(0, MAX_POINTS) : pts;
    }

    function buildSphere(count) {
      spherePts = new Array(count);
      for (let i = 0; i < count; i++) {
        const y = Math.random() * 2 - 1;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = Math.random() * Math.PI * 2;
        spherePts[i] = { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
      }
    }

    function drawStatic() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = DOT_COLOR;
      for (let i = 0; i < textPts.length; i++) {
        ctx.fillRect(textPts[i][0], textPts[i][1], 2, 2);
      }
    }

    function rebuild() {
      W = section.clientWidth;
      H = section.clientHeight;
      if (!W || !H) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildTextPoints();
      buildSphere(textPts.length);
      const count = textPts.length;
      particles = new Array(count);
      for (let i = 0; i < count; i++) {
        particles[i] = {
          x: Math.random() * W,
          y: Math.random() * H,
          ph: Math.random() * Math.PI * 2,
          ph2: Math.random() * Math.PI * 2,
        };
      }
      lastW = W;
      lastH = H;
      if (reduced) drawStatic();
    }

    function frame(now) {
      raf = requestAnimationFrame(frame);
      const dt = Math.min(48, now - last || 16.7);
      last = now;
      const k = 1 - Math.pow(0.915, dt / 16.7);
      rotY += dt * 0.00038;
      if (noHover && now - lastToggle > 3800) {
        mode = mode === 'sphere' ? 'text' : 'sphere';
        lastToggle = now;
      }

      const cx = W / 2;
      const cy = H / 2;
      const R = Math.min(W, H) * 0.34;
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const isText = mode === 'text';
      const chase = k * 1.4;

      ctx.clearRect(0, 0, W, H);
      const n = particles.length;
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        let tx;
        let ty;
        if (isText) {
          const t = textPts[i];
          tx = t[0] + Math.sin(now * 0.0012 + p.ph) * 1.5;
          ty = t[1] + Math.cos(now * 0.001 + p.ph2) * 1.5;
        } else {
          const s = spherePts[i];
          const x1 = s.x * cosY + s.z * sinY;
          const z1 = s.z * cosY - s.x * sinY;
          const y2 = s.y * cosT - z1 * sinT;
          const z2 = s.y * sinT + z1 * cosT;
          const sc = 1 / (1 + z2 * 0.32);
          tx = cx + x1 * R * sc;
          ty = cy + y2 * R * sc;
        }
        p.x += (tx - p.x) * chase;
        p.y += (ty - p.y) * chase;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 4900 && d2 > 1) {
          const d = Math.sqrt(d2);
          const f = (1 - d / 70) * 30 * k;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
      }

      ctx.fillStyle = DOT_COLOR;
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        ctx.fillRect(p.x, p.y, 2, 2);
      }
    }

    function start() {
      if (running || reduced) return;
      running = true;
      last = performance.now();
      lastToggle = last;
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    rebuild();

    // Resample once the brand font is ready so glyph shapes are accurate.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) rebuild();
      });
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { rootMargin: '100px' }
    );
    io.observe(section);

    const ro = new ResizeObserver(() => {
      const wi = section.clientWidth;
      const hi = section.clientHeight;
      // Ignore small height jitter (mobile URL bar) to avoid pointless rebuilds.
      if (wi === lastW && Math.abs(hi - lastH) < 120) return;
      rebuild();
    });
    ro.observe(section);

    const onEnter = () => { if (!noHover) mode = 'text'; };
    const onLeave = () => {
      if (!noHover) mode = 'sphere';
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onDown = () => {
      if (noHover) {
        mode = mode === 'sphere' ? 'text' : 'sphere';
        lastToggle = performance.now();
      }
    };
    canvas.addEventListener('pointerenter', onEnter);
    canvas.addEventListener('pointerleave', onLeave);
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onDown);

    return () => {
      cancelled = true;
      stop();
      io.disconnect();
      ro.disconnect();
      canvas.removeEventListener('pointerenter', onEnter);
      canvas.removeEventListener('pointerleave', onLeave);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerdown', onDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0B0B0F] h-[55vh] min-h-[420px] max-h-[640px] overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: 'pan-y' }}
      />
      <div className="absolute bottom-6 left-0 right-0 hidden md:flex justify-center pointer-events-none">
        <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/25">
          Hover to reveal
        </span>
      </div>
    </section>
  );
}
