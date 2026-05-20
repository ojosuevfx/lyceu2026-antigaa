"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="lyceum" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 0 120px", width: "100%" }}>
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-8%" }}
        style={{
          display: "flex", flexFlow: "row", justifyContent: "space-between", alignItems: "center", gap: "64px",
          width: "1140px", padding: "80px", borderRadius: "24px", position: "relative", overflow: "hidden",
          background: "var(--gradient-card)",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Glow */}
        <div aria-hidden="true" style={{ position: "absolute", top: "-200px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,169,110,0.09) 0%, transparent 70%)", filter: "blur(80px)", zIndex: 0, pointerEvents: "none" }} />

        {/* Image */}
        <motion.div
          className="about-image-col"
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ flexShrink: 0, width: "48%", aspectRatio: "4/5", borderRadius: "16px", overflow: "hidden", zIndex: 1, position: "relative" }}
        >
          <Image
            src="/aristoteles-aura.webp"
            alt="Aristóteles"
            fill
            style={{ objectFit: "cover", objectPosition: "80% 30%", transform: "scale(1.25)", transformOrigin: "80% 30%" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="about-text-col"
          initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", flexDirection: "column", gap: "28px", width: "44%", zIndex: 1 }}
        >
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)" }}>A Especialização</span>

          <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "32px", lineHeight: "118%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: 0 }}>
            Um programa de quatro anos para dominar Aristóteles,{" "}
            <span style={{ color: "var(--color-accent)" }}>com método e sem solidão.</span>
          </h3>

          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", margin: 0 }}>
            A Especialização em Aristóteles é um programa de 4 anos para quem quer estudar filosofia tradicional com a profundidade e a estrutura que ela exige — sem precisar de faculdade, sem misturar com modas acadêmicas modernas, e sem estudar sozinho. O currículo segue a ordem clássica do Thomas Aquinas College: Lógica no primeiro ano, Filosofia da Natureza e Psicologia no segundo, Ética e Política no terceiro, Metafísica no quarto.
          </p>

          <Link href="#ingresso" className="btn-cta"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "13px 28px", borderRadius: "200px", textDecoration: "none", background: "linear-gradient(90deg, #c8a96e 0%, #e2c98a 100%)", cursor: "pointer", width: "fit-content" }}
          >
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--color-text-on-accent)" }}>Me inscrever</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--color-text-on-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 1199px) { .about-card { width: 100% !important; margin: 0 32px !important; padding: 48px 40px !important; } .about-image-col { width: 42% !important; } .about-text-col { width: 50% !important; } }
        @media (max-width: 768px) { .about-card { flex-direction: column !important; margin: 0 20px !important; width: calc(100% - 40px) !important; padding: 40px 24px !important; } .about-image-col { width: 100% !important; min-height: 200px !important; } .about-text-col { width: 100% !important; } }
      `}</style>
    </section>
  );
}
