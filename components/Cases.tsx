"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Nunca imaginei que filosofia pudesse ser assim. Não um professor falando, mas todos nós pensando juntos. O método socrático muda tudo.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rafael Mendonça",
    role: "Engenheiro, São Paulo",
  },
  {
    text: "Entrei sem saber nada de filosofia formal. Saí do primeiro módulo com uma clareza de pensamento que não tinha em anos de leitura solitária.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Mariana Costa",
    role: "Advogada, Belo Horizonte",
  },
  {
    text: "A comunidade é o que mais me surpreendeu. Pessoas sérias, comprometidas, que levam o texto a sério. Não encontro isso em nenhum outro lugar.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Lucas Ferreira",
    role: "Médico, Curitiba",
  },
  {
    text: "Ler Aristóteles com guia e discussão é completamente diferente de ler sozinho. O Lyceum me deu ferramentas para pensar que levarei para sempre.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Ana Paula Rocha",
    role: "Professora, Porto Alegre",
  },
  {
    text: "O processo seletivo me assustou no início. Mas é exatamente isso que garante o nível da turma. Vale cada etapa.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Tiago Alves",
    role: "Empreendedor, Rio de Janeiro",
  },
  {
    text: "Finalmente encontrei um ambiente intelectual à altura do que eu procurava. Santo Tomás de Aquino ganhou vida para mim aqui.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Beatriz Lima",
    role: "Jornalista, Brasília",
  },
  {
    text: "Cada encontro semanal é um exercício real de raciocínio. Não há como ser passivo. E isso é exatamente o que eu precisava.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Pedro Carvalho",
    role: "Arquiteto, Recife",
  },
  {
    text: "Minha fé ficou mais sólida e meu pensamento mais claro. O Lyceum une o rigor intelectual com a tradição que eu amo.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Fernanda Souza",
    role: "Pesquisadora, Fortaleza",
  },
  {
    text: "Aprendi mais nos primeiros três meses do Lyceum do que em dois anos de podcasts e livros de divulgação filosófica.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    name: "Gustavo Nunes",
    role: "Analista, Florianópolis",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn({ items, duration = 15 }: { items: typeof testimonials; duration?: number }) {
  return (
    <div style={{ overflow: "hidden", flex: "1 1 0", minWidth: 0 }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ display: "flex", flexDirection: "column", gap: "20px", paddingBottom: "20px" }}
      >
        {[0, 1].map((_, idx) => (
          <React.Fragment key={idx}>
            {items.map((t, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 28px",
                  borderRadius: "20px",
                  background: "radial-gradient(100% 100% at 50% 0px, #1E2424 0%, #0D0F10 100%)",
                  border: "1px solid rgba(244,245,246,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "170%", color: "#8A9AA4", margin: 0 }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: "1px solid rgba(244,245,246,0.07)", paddingTop: "16px" }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    width={36}
                    height={36}
                    style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
                  />
                  <div>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "13px", color: "#F4F5F6", margin: "0 0 2px", lineHeight: "1.3" }}>{t.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", color: "#8A9AA4", margin: 0, opacity: 0.8 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default function Cases() {
  return (
    <section
      id="depoimentos"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", maxWidth: "540px", textAlign: "center", marginBottom: "64px", padding: "0 24px" }}
      >
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "200px", border: "1px solid rgba(200,169,110,0.2)", background: "rgba(200,169,110,0.05)" }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c8a96e" }}>Alumni</span>
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "165%", color: "#8A9AA4", margin: 0 }}>
          Relatos de alunos sobre sua experiência na formação filosófica do Lyceum.
        </p>
      </motion.div>

      {/* Columns */}
      <div
        className="testimonials-cols"
        style={{
          display: "flex",
          gap: "20px",
          width: "1140px",
          maxHeight: "680px",
          overflow: "hidden",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      >
        <TestimonialsColumn items={firstColumn} duration={18} />
        <div className="col-hide-md" style={{ flex: "1 1 0", minWidth: 0 }}>
          <TestimonialsColumn items={secondColumn} duration={22} />
        </div>
        <div className="col-hide-lg" style={{ flex: "1 1 0", minWidth: 0 }}>
          <TestimonialsColumn items={thirdColumn} duration={20} />
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .testimonials-cols { width: 100% !important; padding: 0 32px !important; } }
        @media (max-width: 768px) { .col-hide-md { display: none !important; } .col-hide-lg { display: none !important; } .testimonials-cols { padding: 0 24px !important; } }
        @media (min-width: 769px) and (max-width: 1023px) { .col-hide-lg { display: none !important; } }
      `}</style>
    </section>
  );
}
