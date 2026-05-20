"use client";

import { motion } from "framer-motion";

const items = [
  {
    n: "01",
    title: "Aulas semanais ao vivo",
    desc: "Conduzidas por Lucca de Tomás, com 90 minutos de duração. Você assiste ao vivo ou depois pela gravação.",
  },
  {
    n: "02",
    title: "Gravações vitalícias",
    desc: "Todo o conteúdo gravado fica disponível para sempre na plataforma. Sem prazo de validade.",
  },
  {
    n: "03",
    title: "Tira-dúvidas mensal com Lucca",
    desc: "Uma vez por mês, encontro exclusivo ao vivo para aprofundar o que foi estudado.",
  },
  {
    n: "04",
    title: "Tutor Aquino 24h",
    desc: "Assistente de IA treinado nos comentários de Santo Tomás às obras de Aristóteles. Disponível a qualquer hora para tirar suas dúvidas entre as aulas.",
  },
  {
    n: "05",
    title: "Comunidade fechada",
    desc: "Um ambiente de pessoas comprometidas com o mesmo percurso intelectual, para além das aulas.",
  },
];

export default function HowItWorks() {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}
    >
      <div className="how-inner" style={{ width: "1140px" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-8%" }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px", gap: "48px" }}
          className="how-heading-row"
        >
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-accent)", display: "block", marginBottom: "16px" }}>
              O Programa
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em", color: "var(--color-text-primary)", margin: 0, maxWidth: "420px" }}>
              Como a Especialização funciona na prática.
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "var(--color-text-muted)", maxWidth: "380px", margin: 0, flexShrink: 0 }} className="how-subtext">
            Cada elemento existe para garantir que o estudo aconteça com rigor e continuidade — ao seu ritmo.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(244,245,246,0.06)", marginBottom: "0" }} />

        {/* Items list */}
        <div>
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-5%" }}
              className="how-item"
              style={{
                display: "grid", gridTemplateColumns: "56px 1fr 2fr",
                alignItems: "center", gap: "40px",
                padding: "32px 0",
                borderBottom: "1px solid rgba(244,245,246,0.06)",
              }}
            >
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "0.1em", color: "rgba(200,169,110,0.4)" }}>
                {item.n}
              </span>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "17px", color: "var(--color-text-primary)", margin: 0, lineHeight: "130%" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "165%", color: "var(--color-text-muted)", margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .how-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) {
          .how-heading-row { flex-direction: column !important; align-items: flex-start !important; }
          .how-subtext { max-width: 100% !important; }
          .how-item { grid-template-columns: 40px 1fr !important; gap: 16px !important; }
          .how-item p { grid-column: 2 !important; }
        }
      `}</style>
    </section>
  );
}
