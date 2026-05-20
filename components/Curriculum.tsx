"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const steps = [
  {
    label: "Início",
    title: "Aulas Introdutórias",
    items: [
      "C.S Lewis — Aprendizado em Tempos de Guerra",
      "Diálogos de Platão — Mênon",
      "Diálogos de Platão — Apologia",
      "Euclides — Elementos, Livro 1",
    ],
    note: "Ponto de partida para qualquer nível de formação",
  },
  {
    label: "Lógica I",
    title: "Os 5 Predicáveis — Porfírio, Isagoge",
    items: [
      "Isagoge — Gênero",
      "Isagoge — Espécie",
      "Isagoge — Diferença",
      "Isagoge — Propriedade e Acidente",
      "Isagoge — Revisão",
    ],
    note: null,
  },
  {
    label: "Lógica II",
    title: "Categorias — Aristóteles",
    items: [
      "Categorias 1–2",
      "Categorias 3–4",
      "Categorias 5, parte 1",
      "Categorias 5, parte 2",
      "Categorias 6",
      "Categorias 7",
      "Categorias 8–9",
      "Categorias 10",
      "Categorias 11–13",
      "Categorias 14–15",
    ],
    note: null,
  },
  {
    label: "Lógica III",
    title: "Da Interpretação — Aristóteles",
    items: [
      "De Interpretatione 1–3",
      "De Interpretatione 4 e 5",
      "De Interpretatione 6",
      "De Interpretatione 7, parte 1",
      "De Interpretatione 7, parte 2",
    ],
    note: null,
  },
  {
    label: "Lógica IV",
    title: "Primeiros Analíticos — Aristóteles",
    items: [
      "Livro I, cap. 1",
      "Livro I, cap. 2–3",
      "Livro I, cap. 4",
      "Livro I, cap. 5",
      "Livro I, cap. 6",
      "Livro I, cap. 7",
      "Livro II, cap. 21",
      "Livro II, cap. 22",
      "Livro II, cap. 23–24",
      "Livro II, cap. 25–26",
      "Livro II, cap. 27",
    ],
    note: null,
  },
  {
    label: "Lógica V",
    title: "Analíticos Posteriores — Aristóteles",
    items: [
      "Livro I, cap. 1",
      "Livro I, cap. 2",
      "Livro I, cap. 3",
      "Livro I, cap. 4",
      "Livro I, cap. 5",
      "Livro I, cap. 6–7",
      "Livro I, cap. 8–9",
      "Livro I, cap. 10–11",
      "Livro I, cap. 12",
      "Livro I, cap. 13–14",
      "Livro II, cap. 1–2",
      "Livro II, cap. 3–4",
      "Livro II, cap. 8",
      "Livro II, cap. 9–10",
      "Livro II, cap. 19",
    ],
    note: null,
  },
  {
    label: "Dialética",
    title: "Tópicos — Aristóteles",
    items: [
      "Tópicos, Livros 1–3",
    ],
    note: null,
  },
  {
    label: "Conclusão",
    title: "Comentários — Santo Tomás de Aquino",
    items: [
      "Comentários aos Analíticos Posteriores — Proêmio",
    ],
    note: "Encerramento do Ano 1 — domínio completo da lógica clássica",
  },
];

function RoadmapItem({ step, index, total }: { step: typeof steps[0]; index: number; total: number }) {
  const isLast = index === total - 1;
  const isFirst = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 28 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
      style={{ display: "flex", gap: "28px", alignItems: "flex-start", position: "relative" }}
    >
      {/* Node + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "40px" }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0,
          background: isFirst || isLast
            ? "linear-gradient(135deg, #c8a96e, #b8904a)"
            : "radial-gradient(circle, #1E2424 60%, #141A14 100%)",
          border: isFirst || isLast ? "none" : "1.5px solid rgba(200,169,110,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1, position: "relative",
          boxShadow: isFirst || isLast ? "0 0 20px rgba(200,169,110,0.25)" : "none",
        }}>
          {isFirst || isLast ? (
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="#0D0F10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c8a96e", opacity: 0.6 }} />
          )}
        </div>
        {!isLast && (
          <div style={{ width: "1px", flexGrow: 1, minHeight: "48px", background: "linear-gradient(to bottom, rgba(200,169,110,0.2), rgba(200,169,110,0.05))", marginTop: "4px" }} />
        )}
      </div>

      {/* Card */}
      <div style={{ flex: 1, paddingBottom: isLast ? "0" : "40px" }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", opacity: 0.7, display: "block", marginBottom: "8px" }}>
          {step.label}
        </span>
        <div style={{
          padding: "24px 28px",
          borderRadius: "16px",
          background: isFirst || isLast
            ? "radial-gradient(100% 100% at 50% 0px, #1E2424 0%, #0D0F10 100%)"
            : "#111113",
          border: isFirst || isLast
            ? "1px solid rgba(200,169,110,0.12)"
            : "1px solid rgba(244,245,246,0.06)",
        }}>
          <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "16px", color: "#F4F5F6", margin: "0 0 14px", lineHeight: "130%" }}>
            {step.title}
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
            {step.items.map((item, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "#c8a96e", fontSize: "7px", marginTop: "5px", flexShrink: 0, opacity: 0.5 }}>✦</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "160%", color: "#8A9AA4" }}>{item}</span>
              </li>
            ))}
          </ul>
          {step.note && (
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "12px", color: "#c8a96e", opacity: 0.6, margin: "14px 0 0", fontStyle: "italic" }}>
              {step.note}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [maxY, setMaxY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    const update = () => {
      if (!leftRef.current || !rightRef.current) return;
      const diff = rightRef.current.offsetHeight - leftRef.current.offsetHeight;
      setMaxY(Math.max(0, diff));
    };
    update();
    const ro = new ResizeObserver(update);
    if (leftRef.current) ro.observe(leftRef.current);
    if (rightRef.current) ro.observe(rightRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [0, isDesktop ? maxY : 0]);

  return (
    <section ref={sectionRef} id="curriculo" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", padding: "120px 0", borderTop: "1px solid rgba(244,245,246,0.06)" }}>
      <div className="curriculum-inner" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", width: "1140px", alignItems: "start" }}>

        {/* Left — desce junto com o scroll da seção */}
        <motion.div ref={leftRef} style={{ y: leftY }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c8a96e", display: "block", marginBottom: "20px" }}>
            O Currículo — Ano 1
          </span>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "34px", lineHeight: "116%", letterSpacing: "-0.025em", color: "#F4F5F6", margin: "0 0 20px" }}>
            Da partida à lógica aristotélica completa.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "170%", color: "#8A9AA4", margin: "0 0 24px" }}>
            O primeiro ano constrói a estrutura fundamental do pensamento filosófico. Você começa com textos de introdução e termina com domínio da lógica clássica — a ferramenta de todo filósofo.
          </p>
          <div style={{ padding: "16px 20px", borderRadius: "12px", background: "rgba(200,169,110,0.05)", border: "1px solid rgba(200,169,110,0.10)" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "13px", lineHeight: "160%", color: "#8A9AA4", margin: 0 }}>
              O currículo completo dos 4 anos está disponível após o ingresso. O Ano 1 já é suficiente para transformar sua forma de pensar.
            </p>
          </div>
        </motion.div>

        {/* Right — roadmap */}
        <div ref={rightRef} style={{ display: "flex", flexDirection: "column" }}>
          {steps.map((step, i) => (
            <RoadmapItem key={i} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1199px) { .curriculum-inner { width: 100% !important; padding: 0 32px !important; gap: 48px !important; } }
        @media (max-width: 768px) { .curriculum-inner { grid-template-columns: 1fr !important; padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}
