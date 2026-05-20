"use client";

import { motion } from "framer-motion";

function IconBook() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="rgba(200,169,110,0.07)" />
      <path d="M17 15h11a3 3 0 013 3v14a3 3 0 01-3 3H17V15z" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M17 15v20M21 21h8M21 26h6" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconLive() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="rgba(200,169,110,0.07)" />
      <rect x="13" y="17" width="22" height="14" rx="2" stroke="#c8a96e" strokeWidth="1.5" />
      <path d="M20 24l5 3-5 3v-6z" fill="#c8a96e" opacity="0.7" />
      <path d="M17 35l3-4M31 35l-3-4" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="rgba(200,169,110,0.07)" />
      <rect x="14" y="16" width="20" height="14" rx="3" stroke="#c8a96e" strokeWidth="1.5" />
      <circle cx="20" cy="23" r="1.5" fill="#c8a96e" opacity="0.7" />
      <circle cx="28" cy="23" r="1.5" fill="#c8a96e" opacity="0.7" />
      <path d="M20 33v-3M28 33v-3M24 33v-3" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 16v-2M28 16v-2" stroke="#c8a96e" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

const pillars = [
  { Icon: IconBook, num: "01", title: "Currículo do TAC", description: "Quatro anos organizados na sequência clássica do Thomas Aquinas College: Lógica, Filosofia da Natureza, Ética e Metafísica. Cada obra prepara o terreno para a próxima. Nada é aleatório." },
  { Icon: IconLive, num: "02", title: "Aulas semanais ao vivo", description: "Uma aula por semana, conduzida por Lucca de Tomás. Você assiste ao vivo ou pela gravação, no seu ritmo. Todo o acervo fica disponível para sempre." },
  { Icon: IconAI, num: "03", title: "Tutor Aquino 24h", description: "Entre uma aula e outra, o Tutor Aquino — assistente de IA treinado nos comentários de Santo Tomás — está disponível para tirar suas dúvidas a qualquer hora do dia." },
];

export default function Solutions() {
  return (
    <section id="solucoes" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "64px", width: "100%", padding: "120px 0" }}>

      {/* Heading */}
      <motion.div
        className="solutions-heading"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-10%" }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", maxWidth: "640px", textAlign: "center" }}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e" }}>Metodologia</span>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "40px", lineHeight: "114%", letterSpacing: "-0.025em", margin: 0 }}>
          <span style={{ color: "#F4F5F6" }}>Três pilares de uma formação </span>
          <span style={{ color: "#c8a96e" }}>filosófica séria.</span>
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
          A filosofia se aprende com método, na ordem certa, e sem solidão. A Especialização estrutura esses três elementos.
        </p>
      </motion.div>

      {/* 3-column grid */}
      <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", width: "1140px" }}>
        {pillars.map(({ Icon, num, title, description }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-5%" }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            style={{
              display: "flex", flexDirection: "column", gap: "28px", padding: "48px 40px", borderRadius: "20px",
              border: "1px solid rgba(244,245,246,0.07)",
              background: "radial-gradient(100% 100% at 50% 0px, #1E2424 0%, #0D0F10 100%)",
              position: "relative", overflow: "hidden", cursor: "default",
            }}
          >
            {/* Hover glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 0%, rgba(200,169,110,0.06) 0%, transparent 60%)", pointerEvents: "none" }}
            />
            <span style={{ position: "absolute", top: "24px", right: "28px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "48px", color: "rgba(200,169,110,0.05)", lineHeight: "1" }}>{num}</span>
            <Icon />
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "22px", lineHeight: "125%", letterSpacing: "-0.015em", color: "#F4F5F6", margin: 0 }}>{title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1199px) { .solutions-heading { padding: 0 32px !important; } .solutions-grid { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) { .solutions-heading { padding: 0 24px !important; } .solutions-grid { grid-template-columns: 1fr !important; padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}
