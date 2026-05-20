"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Preciso ter estudado filosofia antes?", a: "Não. O programa começa pela Lógica, do zero. Não há pré-requisito de leitura ou formação prévia." },
  { q: "Como funcionam as aulas?", a: "São semanais, ao vivo, com 90 minutos de duração. Você assiste ao vivo ou depois pela gravação — todo o conteúdo fica disponível para sempre na plataforma." },
  { q: "Qual a diferença entre a Especialização e o Lyceum?", a: "O Lyceum é turma fechada com discussão socrática semanal em pequeno grupo. A Especialização é o mesmo currículo, sem discussão socrática, com mais flexibilidade e ao seu próprio ritmo." },
  { q: "E se eu não conseguir acompanhar?", a: "Acesso vitalício à gravação. Você volta quando quiser, sem prazo de validade. E tem o Tutor Aquino disponível 24h para tirar dúvidas entre as aulas." },
  { q: "Quanto tempo por semana eu preciso?", a: "Entre 4 e 6 horas: 1h30 de aula mais 2 a 4 horas de leitura individual." },
  { q: "Vou precisar comprar livros?", a: "Sim. As edições recomendadas são indicadas aula a aula. O investimento médio é de R$ 50 a R$ 100 por trimestre." },
  { q: "Tem garantia?", a: "Sim. 7 dias incondicional após o início das aulas. Se não for para você, devolução integral." },
  { q: "O programa é presencial?", a: "Não. É 100% online." },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-5%" }}
      style={{ borderBottom: "1px solid rgba(244,245,246,0.07)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "24px 0",
          background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "24px",
        }}
      >
        <span style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600,
          fontSize: "17px", lineHeight: "140%",
          color: open ? "#F4F5F6" : "#8A9AA4",
          transition: "color 200ms ease",
        }}>
          {q}
        </span>

        <div style={{
          flexShrink: 0, width: "26px", height: "26px", borderRadius: "50%",
          background: open ? "rgba(200,169,110,0.1)" : "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 250ms ease",
        }}>
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 300ms ease" }}
            aria-hidden="true"
          >
            <path d="M6 1v10M1 6h10" stroke={open ? "#c8a96e" : "#8A9AA4"} strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 400,
              fontSize: "15px", lineHeight: "175%", color: "#8A9AA4",
              margin: "0 0 24px", maxWidth: "640px",
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0" }}
    >
      {/* Heading — centered */}
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-8%" }}
        style={{ textAlign: "center", marginBottom: "64px", maxWidth: "560px", padding: "0 24px" }}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px",
          letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e",
          display: "block", marginBottom: "16px",
        }}>
          FAQ
        </span>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800,
          fontSize: "36px", lineHeight: "116%", letterSpacing: "-0.025em",
          color: "#F4F5F6", margin: "0 0 16px",
        }}>
          Ainda tem dúvidas?{" "}
          <span style={{ color: "#c8a96e" }}>Respondemos aqui.</span>
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif", fontWeight: 400,
          fontSize: "15px", lineHeight: "165%", color: "#8A9AA4", margin: 0,
        }}>
          Se sua dúvida não estiver respondida aqui, entre em contato antes de submeter sua candidatura.
        </p>
      </motion.div>

      {/* Accordion */}
      <div className="faq-list" style={{ width: "680px" }}>
        {faqs.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) { .faq-list { width: 100% !important; padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}
