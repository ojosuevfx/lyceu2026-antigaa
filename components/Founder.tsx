"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section
      id="fundador"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle gold glow top */}
      <div aria-hidden="true" style={{ position: "absolute", top: "-120px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(200,169,110,0.10) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div className="founder-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", width: "1140px", alignItems: "center", position: "relative", zIndex: 1 }}>

        {/* Photo */}
        <motion.div
          className="founder-photo"
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ position: "relative" }}
        >
          {/* Frame */}
          <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "4/5", position: "relative", boxShadow: "0 32px 80px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08)" }}>
            <Image
              src="/lucca.webp"
              alt="Lucca de Tomás, fundador do Lyceum"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
            {/* Bottom fade */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "160px", background: "linear-gradient(to top, rgba(255,255,255,0.5), transparent)" }} />
          </div>

          {/* Floating name badge */}
          <div style={{
            position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)",
            background: "rgba(13,15,16,0.85)", backdropFilter: "blur(16px)",
            borderRadius: "200px", padding: "10px 24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(200,169,110,0.2)",
            display: "flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap",
          }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8a96e", flexShrink: 0 }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "13px", color: "#F4F5F6" }}>Lucca de Tomás</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", color: "#8A9AA4" }}>Fundador</span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          className="founder-text"
          initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", flexDirection: "column", gap: "28px" }}
        >
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "16px" }}>
              Quem será seu mentor
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "34px", lineHeight: "116%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: 0 }}>
              Você não vai estudar sozinho, mas com alguém que já{" "}
              <span style={{ color: "#c8a96e" }}>percorreu esse caminho.</span>
            </h2>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
            Lucca de Tomás estudou por dois anos e meio no{" "}
            <strong style={{ color: "#F4F5F6", fontWeight: 600 }}>Thomas Aquinas College (EUA)</strong>{" "}
            — a faculdade católica de great books mais conceituada do mundo. De volta ao Brasil, fundou o Lyceum, programa de estudos socráticos online que hoje conta com mais de 300 alunos ativos.
          </p>

          {/* Quote */}
          <div style={{
            padding: "24px 28px",
            borderRadius: "16px",
            background: "rgba(200,169,110,0.04)",
            border: "1px solid rgba(200,169,110,0.12)",
            borderLeft: "3px solid rgba(200,169,110,0.6)",
          }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: "0 0 10px", fontStyle: "italic" }}>
              "O currículo é o do Thomas Aquinas College. O professor é ex-aluno do TAC. A tradição chega ao Brasil pela porta certa."
            </p>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#c8a96e", letterSpacing: "0.04em", textTransform: "uppercase" }}>
              Lucca de Tomás
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .founder-inner { width: 100% !important; padding: 0 32px !important; gap: 56px !important; } }
        @media (max-width: 768px) { .founder-inner { grid-template-columns: 1fr !important; padding: 0 24px !important; } .founder-photo { width: 100% !important; max-width: 400px !important; margin: 0 auto !important; } }
      `}</style>
    </section>
  );
}
