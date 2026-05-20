"use client";

import { motion } from "framer-motion";

const principles = [
  "A filosofia não se aprende por exposição passiva, mas pela prática ativa do argumento",
  "A sequência curricular é tão decisiva quanto o conteúdo — a ordem importa",
  "O pensamento filosófico se forma na discussão, não no consumo solitário de ideias",
  "O texto original é insubstituível; nenhum resumo ou paráfrase transmite o rigor do argumento",
  "A leitura filosófica séria exige guia; a compreensão profunda exige interlocução",
  "A formação intelectual é um percurso de anos — não de semanas ou módulos isolados",
];

export default function PainPoints() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}>
      <div className="pain-content" style={{ display: "grid", gridTemplateColumns: "420px 1fr", alignItems: "start", width: "1140px", gap: "100px" }}>

        {/* Left — sticky */}
        <div className="pain-left" style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", display: "block", marginBottom: "20px" }}>
              Fundamentos
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "34px", lineHeight: "116%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: "0 0 20px" }}>
              Os princípios que orientam uma{" "}
              <span style={{ color: "var(--color-accent)" }}>formação filosófica sólida.</span>
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", margin: 0 }}>
              A tradição filosófica ocidental desenvolveu, ao longo de séculos, uma pedagogia própria. O Lyceum é construído sobre esses princípios.
            </p>
          </div>

          {/* Quote */}
          <div style={{ position: "relative", padding: "24px 28px", borderRadius: "16px", background: "rgba(200,169,110,0.03)", border: "1px solid rgba(200,169,110,0.08)" }}>
            <div style={{ position: "absolute", top: "24px", left: "-1px", width: "3px", height: "calc(100% - 48px)", background: "linear-gradient(to bottom, #c8a96e, rgba(200,169,110,0.2))", borderRadius: "0 2px 2px 0" }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", margin: "0 0 12px", fontStyle: "italic" }}>
              "A educação não é o preenchimento de um balde, mas o acender de uma chama."
            </p>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "var(--color-accent)", letterSpacing: "0.04em" }}>
              William Butler Yeats
            </span>
          </div>
        </div>

        {/* Right — principles */}
        <div className="pain-grid" style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {principles.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "20px",
                padding: "24px 0",
                borderBottom: i < principles.length - 1 ? "1px solid rgba(244,245,246,0.06)" : "none",
              }}
            >
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
                fontSize: "11px", color: "rgba(200,169,110,0.4)",
                letterSpacing: "0.08em", flexShrink: 0, paddingTop: "4px", minWidth: "24px",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "165%", color: "var(--color-text-muted)", margin: 0 }}>
                {text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1199px) { .pain-content { width: 100% !important; padding: 0 32px !important; gap: 56px !important; grid-template-columns: 340px 1fr !important; } }
        @media (max-width: 768px) { .pain-content { grid-template-columns: 1fr !important; padding: 0 24px !important; } .pain-left { position: static !important; } }
      `}</style>
    </section>
  );
}
