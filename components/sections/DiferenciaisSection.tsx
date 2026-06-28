"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiZap, FiShield, FiTruck, FiClock, FiBarChart2, FiUser } from "react-icons/fi";

const DIFERENCIAIS = [
  {
    icon: FiShield,
    title: "Rochas Graníticas",
    desc: "Jazida de rocha granítica com laudo geológico completo. Alta durabilidade e resistência à compressão.",
  },
  {
    icon: FiBarChart2,
    title: "Laboratório Próprio",
    desc: "Controle de qualidade interno em cada lote. Granulometria, resistência e pureza verificadas antes da entrega.",
  },
  {
    icon: FiTruck,
    title: "Frota Própria",
    desc: "Caminhões especializados e motoristas treinados para garantir segurança e agilidade no transporte.",
  },
  {
    icon: FiClock,
    title: "Pontualidade",
    desc: "Cumprimos prazos com rigor. Seu canteiro não para por falta de material.",
  },
  {
    icon: FiZap,
    title: "Qualidade Certificada",
    desc: "Operação 100% licenciada com laudos técnicos disponíveis conforme normas ABNT.",
  },
  {
    icon: FiUser,
    title: "Atendimento Personalizado",
    desc: "Do pequeno consumidor até grandes construtoras — cada cliente tem atenção dedicada.",
  },
];

export function DiferenciaisSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="diferenciais"
      className="bg-[#0A0E1A] py-16 lg:py-20"
      aria-labelledby="diferenciais-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
            <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
              Por que nos escolher
            </span>
          </div>
          <h2
            id="diferenciais-heading"
            className="font-impact text-white uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Nossos <span className="text-[#0F4C9F]">diferenciais</span>
          </h2>
        </motion.div>

        {/* Grid — Tailwind hover only, no per-card animation */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DIFERENCIAIS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#1A2236] bg-[#1A2236]/40 p-6 transition-all duration-300 hover:border-[#0F4C9F]/40 hover:bg-[#1A2236] hover:shadow-lg hover:shadow-[#0F4C9F]/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C9F]/15 transition-colors duration-300 group-hover:bg-[#0F4C9F]">
                <Icon
                  size={22}
                  className="text-[#0F4C9F] transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                />
              </div>
              <h3 className="mb-2 font-impact text-xl tracking-wide text-white uppercase">
                {title}
              </h3>
              <p className="font-roboto text-sm leading-relaxed font-light text-[#6C6F72]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
