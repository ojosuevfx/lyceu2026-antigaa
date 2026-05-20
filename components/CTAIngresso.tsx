"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScfOcyhvfsrSi8M4vTCVpflPRTGN23KXM8At98YoyRJlGoY4w/viewform";

export default function CTAIngresso() {
  return (
    <section
      id="ingresso"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "140px 0",
        borderTop: "1px solid rgba(244,245,246,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glows */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(200,169,110,0.08) 0%, transparent 70%)" }} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)" }} />

      <div className="cta-inner" style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "40px", maxWidth: "680px", textAlign: "center" }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "200px", border: "1px solid rgba(200,169,110,0.25)", background: "rgba(200,169,110,0.06)" }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#c8a96e", flexShrink: 0, display: "block" }}
          />
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#c8a96e", letterSpacing: "0.07em", textTransform: "uppercase" }}>
            Inscrições
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="cta-h2"
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 800,
            fontSize: "52px",
            lineHeight: "108%",
            letterSpacing: "-0.03em",
            color: "#F4F5F6",
            margin: 0,
          }}
        >
          Garanta sua vaga na{" "}
          <span style={{ color: "#c8a96e" }}>Turma Fundadora.</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "170%",
            color: "#8A9AA4",
            margin: 0,
            maxWidth: "560px",
          }}
        >
          A Especialização em Aristóteles abre uma vez por ano. As inscrições da Turma Fundadora estão abertas — preencha o formulário e entraremos em contato em até 24 horas.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-10%" }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}
        >
          <Link
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "18px 44px",
              borderRadius: "200px",
              background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)",
              textDecoration: "none",
            }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "17px", color: "#0D0F10" }}>
              Me inscrever
            </span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D0F10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Note */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {["Turma Fundadora", "Início em agosto de 2026", "Vagas limitadas"].map((item, i, arr) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", color: "rgba(244,245,246,0.35)", letterSpacing: "0.02em" }}>
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(200,169,110,0.3)", flexShrink: 0, display: "block" }} />
                )}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 1199px) { .cta-inner { padding: 0 32px !important; } }
        @media (max-width: 768px) { .cta-h2 { font-size: 36px !important; } .cta-inner { padding: 0 24px !important; } }
        @media (max-width: 480px) { .cta-h2 { font-size: 30px !important; } }
      `}</style>
    </section>
  );
}
