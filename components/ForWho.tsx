"use client";

import { motion } from "framer-motion";

const isFor = [
  { text: "Você é católico e quer entender sua fé com profundidade filosófica" },
  { text: "Você ama leitura e quer ir além do que os algoritmos recomendam" },
  { text: "Está cansado de opiniões sem fundamento e quer aprender a argumentar" },
  { text: "Nunca estudou filosofia formalmente e quer começar do jeito certo" },
  { text: "Já tem contato com filosofia e quer estrutura e interlocutores à altura" },
  { text: "Busca uma comunidade séria para discutir ideias de verdade" },
];

const isNotFor = [
  { text: "Você busca certificado ou diploma" },
  { text: "Quer conteúdo fácil e resumos prontos" },
  { text: "Não está disposto a ler os textos originais" },
  { text: "Não pode comparecer aos encontros semanais" },
];

export default function ForWho() {
  return (
    <section style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "0 0 120px" }}>
      <div className="forwho-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", width: "1140px" }}>

        {/* Is FOR */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          viewport={{ once: true }}
          style={{
            display: "flex", flexDirection: "column", gap: "0",
            borderRadius: "24px", overflow: "hidden",
            background: "radial-gradient(100% 100% at 50% 0px, #1a2214 0%, #0D0F10 100%)",
            border: "1px solid rgba(200,169,110,0.1)",
            position: "relative",
          }}
        >
          {/* Top accent bar */}
          <div style={{ height: "3px", background: "linear-gradient(90deg, #c8a96e 0%, rgba(200,169,110,0.2) 100%)" }} />

          <div style={{ padding: "44px 44px 36px", display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(200,169,110,0.1)", border: "1px solid rgba(200,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="#c8a96e" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e" }}>Para quem é</span>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "26px", lineHeight: "120%", letterSpacing: "-0.02em", color: "#F4F5F6", margin: 0 }}>
                O Lyceum foi feito para você, se...
              </h3>
            </div>

            {/* Items */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "2px", listStyle: "none", padding: 0, margin: 0 }}>
              {isFor.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "14px 0", borderBottom: i < isFor.length - 1 ? "1px solid rgba(200,169,110,0.06)" : "none" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "1px" }} aria-hidden="true">
                    <circle cx="10" cy="10" r="9" fill="rgba(200,169,110,0.08)" stroke="rgba(200,169,110,0.25)" strokeWidth="1" />
                    <path d="M6.5 10l2.5 2.5 4.5-5" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "155%", color: "#C4D0D6" }}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Is NOT FOR */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          viewport={{ once: true }}
          style={{
            display: "flex", flexDirection: "column", gap: "0",
            borderRadius: "24px", overflow: "hidden",
            background: "#0F1012",
            border: "1px solid rgba(244,245,246,0.06)",
            position: "relative",
          }}
        >
          {/* Top accent bar */}
          <div style={{ height: "3px", background: "linear-gradient(90deg, rgba(138,154,164,0.3) 0%, transparent 100%)" }} />

          <div style={{ padding: "44px 44px 36px", display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(138,154,164,0.06)", border: "1px solid rgba(138,154,164,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6 14L14 6M14 14L6 6" stroke="rgba(138,154,164,0.6)" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4A5A64" }}>Para quem não é</span>
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "26px", lineHeight: "120%", letterSpacing: "-0.02em", color: "#4A5A64", margin: 0 }}>
                Pode não ser para você, se...
              </h3>
            </div>

            {/* Items */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "2px", listStyle: "none", padding: 0, margin: 0 }}>
              {isNotFor.map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px", padding: "14px 0", borderBottom: i < isNotFor.length - 1 ? "1px solid rgba(244,245,246,0.04)" : "none" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: "1px" }} aria-hidden="true">
                    <circle cx="10" cy="10" r="9" stroke="rgba(138,154,164,0.15)" strokeWidth="1" />
                    <path d="M7 13l6-6M13 13L7 7" stroke="rgba(138,154,164,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "155%", color: "#3A4A54" }}>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Disclaimer */}
            <div style={{ marginTop: "auto", paddingTop: "28px", borderTop: "1px solid rgba(244,245,246,0.05)" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "160%", color: "#3A4A54", margin: 0 }}>
                Somos uma escola de exigência intelectual. Nosso processo seletivo existe para garantir que cada aluno contribua com o ambiente de aprendizado.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 1199px) { .forwho-inner { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) { .forwho-inner { grid-template-columns: 1fr !important; padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}
