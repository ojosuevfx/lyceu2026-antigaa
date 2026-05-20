"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Currículo", href: "#curriculo" },
  { label: "Mentor", href: "#fundador" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Fecha com Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Botão sanduíche fixo ── */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        style={{
          position: "fixed",
          top: "20px",
          right: "24px",
          zIndex: 200,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 250ms ease",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.div
              key="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/nova-logo.webp"
                alt="Lyceum"
                width={140}
                height={140}
                style={{ objectFit: "contain", height: "140px", width: "140px", display: "block" }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* ── Overlay full-screen ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 150,
              background: "rgba(9,9,11,0.96)",
              backdropFilter: "blur(32px) saturate(140%)",
              WebkitBackdropFilter: "blur(32px) saturate(140%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0 10vw",
            }}
            onClick={(e) => { if (e.target === e.currentTarget) setMenuOpen(false); }}
          >
            {/* Glow decorativo */}
            <div aria-hidden="true" style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

            {/* Links */}
            <nav>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "16px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(36px, 6vw, 64px)",
                        lineHeight: "1.1",
                        color: "var(--color-text-p45)",
                        textDecoration: "none",
                        padding: "8px 0",
                        transition: "color 180ms ease",
                        letterSpacing: "-0.02em",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--color-text-p45)"; }}
                    >
                      <span style={{ fontSize: "12px", fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--color-accent)", opacity: 0.6, letterSpacing: "0.1em", minWidth: "24px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.05 + navLinks.length * 0.07 + 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ width: "60px", height: "1px", background: "rgba(200,169,110,0.25)" }} />
              <Link
                href="#ingresso"
                onClick={() => setMenuOpen(false)}
                className="btn-cta"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 32px",
                  borderRadius: "200px",
                  background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px", color: "var(--color-text-on-accent)" }}>
                  Candidatar-se
                </span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--color-text-on-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
