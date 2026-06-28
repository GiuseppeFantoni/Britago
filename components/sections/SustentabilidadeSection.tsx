"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiSun, FiShield, FiDroplet, FiUsers } from "react-icons/fi";

const INICIATIVAS = [
  {
    icon: FiSun,
    title: "Reflorestamento",
    desc: "Programa ativo de recuperação e plantio de espécies nativas nas áreas degradadas pela extração.",
  },
  {
    icon: FiShield,
    title: "Licenciamento e conformidade",
    desc: "Operação 100% licenciada pelos órgãos ambientais competentes, com plano de recuperação de área.",
  },
  {
    icon: FiDroplet,
    title: "Gestão hídrica",
    desc: "Reaproveitamento de água no processo produtivo e controle de efluentes conforme legislação ambiental.",
  },
  {
    icon: FiUsers,
    title: "Horta comunitária",
    desc: "Produção de alimentos frescos para colaboradores e comunidade local, fortalecendo laços e bem-estar.",
  },
];

export function SustentabilidadeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="sustentabilidade"
      className="overflow-hidden bg-[#F8F9FA] py-16 lg:py-20"
      aria-labelledby="sustentabilidade-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Topo: texto + foto lado a lado */}
          <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text side */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
                <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
                  Mineração responsável
                </span>
              </div>
              <h2
                id="sustentabilidade-heading"
                className="mb-4 font-impact leading-tight text-[#0F4C9F] uppercase"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Futuro preservado
              </h2>
              <blockquote className="mb-6 border-l-4 border-[#C4922A] pl-4">
                <p className="font-roboto text-sm leading-relaxed font-light text-[#6C6F72] italic">
                  &ldquo;Satisfazer as necessidades do presente sem comprometer a capacidade das
                  gerações futuras de satisfazer as próprias necessidades.&rdquo;
                </p>
                <cite className="mt-2 block font-roboto text-xs font-medium tracking-wide text-[#C4922A] not-italic">
                  — Relatório Brundtland
                </cite>
              </blockquote>
              <p className="font-roboto text-base leading-relaxed font-light text-[#6C6F72]">
                A Estudo Mineracao opera com consciência ambiental em cada etapa da produção. Nossas
                ações vão além do cumprimento legal — acreditamos que é possível extrair com
                responsabilidade e devolver valor ao meio ambiente e à comunidade.
              </p>
            </div>

            {/* Image side — menor, landscape */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/assets/horta.jpeg"
                  alt="Iniciativas de sustentabilidade — Estudo Mineracao"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-xl bg-[#C4922A]/15"
                aria-hidden
              />
            </div>
          </div>

          {/* Rodapé: 4 cards em faixa horizontal */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {INICIATIVAS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex flex-col gap-3 rounded-xl border border-[#DFE0E1] bg-white p-5 transition-all duration-300 hover:border-[#0F4C9F]/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F4C9F]/10 transition-colors duration-300 group-hover:bg-[#0F4C9F]">
                  <Icon
                    size={17}
                    className="text-[#0F4C9F] transition-colors duration-300 group-hover:text-white"
                    aria-hidden
                  />
                </div>
                <div>
                  <p className="mb-1 font-roboto text-sm font-semibold text-[#0A0E1A]">{title}</p>
                  <p className="font-roboto text-xs leading-relaxed font-light text-[#6C6F72]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
