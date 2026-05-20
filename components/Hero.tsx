"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// ─── Coloque aqui os caminhos das imagens quando tiver ───────────────────────
const HERO_IMAGES: string[] = [
  // "/hero/imagem-1.jpg",
  // "/hero/imagem-2.jpg",
  // "/hero/imagem-3.jpg",
];
// ────────────────────────────────────────────────────────────────────────────

const INTERVAL = 5000;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [current, setCurrent] = useState(0);
  const hasImages = HERO_IMAGES.length > 0;

  useEffect(() => {
    if (!hasImages || HERO_IMAGES.length < 2) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [hasImages]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid var(--color-border-subtle)",
        paddingTop: "0",
      }}
    >
      {/* ── Background ── */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 0, y }}>
        {/* Imagem de fundo — Aristóteles */}
        <Image
          src="/aristoteles-img.webp"
          alt=""
          fill
          priority
          className="aristoteles-bg"
          style={{ objectFit: "cover", objectPosition: "35% 5%", opacity: 0.6, transform: "scale(1.4)", transformOrigin: "35% 5%" }}
        />
        {/* Overlay escuro para manter legibilidade do texto */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(12,10,6,0.85) 0%, rgba(12,10,6,0.6) 50%, rgba(13,15,16,0.75) 100%)" }} />
        {hasImages && (
          <>
            <AnimatePresence initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                style={{ position: "absolute", inset: 0 }}
              >
                <Image
                  src={HERO_IMAGES[current]}
                  alt=""
                  fill
                  priority
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </motion.div>
            </AnimatePresence>
            <div style={{ position: "absolute", inset: 0, background: "rgba(9,9,11,0.65)" }} />
          </>
        )}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(200,169,110,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "260px", background: "linear-gradient(to bottom, transparent, #09090B)", pointerEvents: "none" }} />
      </motion.div>

      {/* Slideshow dots */}
      {hasImages && HERO_IMAGES.length > 1 && (
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 3, pointerEvents: "none" }}>
          {HERO_IMAGES.map((_, i) => (
            <div key={i} style={{
              width: i === current ? "20px" : "6px", height: "6px",
              borderRadius: "200px",
              background: i === current ? "var(--color-accent)" : "rgba(200,169,110,0.3)",
              transition: "width 400ms ease, background 400ms ease",
            }} />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <motion.div
        className="hero-inner"
        style={{
          position: "relative", zIndex: 2,
          width: "1140px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "32px",
          padding: "80px 0 120px",
          opacity,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "200px", border: "1px solid rgba(200,169,110,0.25)", background: "rgba(200,169,110,0.06)" }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0, display: "block" }}
          />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "var(--color-accent)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Turma Fundadora · Abertura 2026
          </span>
        </motion.div>

        {/* H1 */}
        <h1 className="hero-h1" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, lineHeight: "106%", letterSpacing: "-0.035em", fontSize: "80px", margin: 0 }}>
          {[
            { text: "Quatro anos para dominar", gold: false },
            { text: "a filosofia tradicional,", gold: false },
            { text: "pela porta certa.", gold: true },
          ].map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ color: line.gold ? "var(--color-accent)" : "var(--color-text-primary)", display: "block" }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        {/* Lead */}
        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "17px", lineHeight: "170%", color: "var(--color-text-muted)", maxWidth: "560px", margin: 0 }}
        >
          A Especialização em Aristóteles importa para o Brasil o currículo do Thomas Aquinas College — Lógica, Filosofia da Natureza, Ética, Política e Metafísica — com aulas semanais conduzidas por Lucca de Tomás. Sem misturas modernas. Sem solidão. Com método.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cta-row"
          style={{ display: "flex", gap: "12px", alignItems: "center" }}
        >
          <Link
            href="#ingresso"
            className="btn-cta"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              padding: "14px 32px", borderRadius: "200px",
              background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)",
              textDecoration: "none",
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "var(--color-text-on-accent)" }}>
              Me inscrever
            </span>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--color-text-on-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="#lyceum"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "14px 28px", borderRadius: "200px",
              border: "1px solid var(--color-border-medium)",
              textDecoration: "none", transition: "border-color 180ms ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(244,245,246,0.28)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-medium)")}
          >
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", color: "var(--color-text-primary)" }}>
              Conhecer o programa
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-inner { padding-left: 48px !important; padding-right: 48px !important; }
        @media (max-width: 1199px) { .hero-inner { width: 100% !important; } }
        @media (max-width: 1100px) { .hero-h1 { font-size: 62px !important; } }
        @media (max-width: 768px) {
          .hero-h1 { font-size: 40px !important; letter-spacing: -0.02em !important; }
          .hero-lead { font-size: 15px !important; }
          .hero-cta-row { flex-direction: column !important; width: 100% !important; }
          .hero-cta-row a { width: 100% !important; justify-content: center !important; }
          .hero-inner { padding: 60px 24px 100px !important; }
          .aristoteles-bg { object-position: 45% 28% !important; transform: scale(1.15) !important; transform-origin: 45% 28% !important; filter: blur(2px) !important; }
        }
      `}</style>
    </section>
  );
}
