"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiFileText, FiCheckSquare, FiBook, FiDownload } from "react-icons/fi";

const CARDS = [
  {
    icon: FiFileText,
    title: "Laudos Técnicos",
    desc: "Documentação geológica completa da jazida, com análise granulométrica, resistência e composição mineralógica.",
  },
  {
    icon: FiCheckSquare,
    title: "Garantia de Qualidade",
    desc: "Cada lote passa por análise laboratorial antes de sair. Você recebe o produto com rastreabilidade total.",
  },
  {
    icon: FiBook,
    title: "Normas ABNT",
    desc: "Todos os agregados produzidos seguem as normas ABNT NBR 7211, NBR 6118 e demais normas aplicáveis.",
  },
];

export function LaudoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="laudo"
      className="relative overflow-hidden bg-[#0A3575] py-16 lg:py-20"
      aria-labelledby="laudo-heading"
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
              <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
                Documentação técnica
              </span>
              <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
            </div>
            <h2
              id="laudo-heading"
              className="mb-4 font-impact text-white uppercase"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Laudo técnico <span className="text-[#C4922A]">disponível</span>
            </h2>
            <p className="mx-auto max-w-xl font-roboto text-base leading-relaxed font-light text-white/70">
              Disponibilizamos a documentação técnica completa da nossa jazida para que engenheiros
              e construtores possam especificar com segurança.
            </p>
          </div>

          {/* Cards */}
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {CARDS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 transition-colors duration-300 hover:bg-white/15"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C4922A]/20">
                  <Icon size={22} className="text-[#C4922A]" aria-hidden />
                </div>
                <h3 className="mb-2 font-impact text-xl text-white uppercase">{title}</h3>
                <p className="font-roboto text-sm leading-relaxed font-light text-white/60">
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#"
              aria-label="Baixar laudo técnico (PDF fictício)"
              className="group inline-flex items-center gap-3 rounded bg-[#C4922A] px-8 py-4 font-roboto text-base font-medium text-white transition-all duration-300 hover:bg-[#b07e22] hover:shadow-lg hover:shadow-[#C4922A]/30"
            >
              <FiDownload
                size={18}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden
              />
              Baixar Laudo Técnico
            </a>
            <p className="mt-3 font-roboto text-xs text-white/40">
              Arquivo PDF — Especificações técnicas completas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
