"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";

export function EquipeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipe" className="bg-[#F8F9FA] py-16 lg:py-20" aria-labelledby="equipe-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
            <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
              Nosso time
            </span>
          </div>

          <h2
            id="equipe-heading"
            className="mb-6 font-impact leading-tight text-[#0F4C9F] uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Profissionais que fazem
            <br />a diferença
          </h2>

          <p className="mb-4 font-roboto text-base leading-relaxed font-light text-[#6C6F72]">
            Nossa equipe é composta por geólogos, geofísicos e engenheiros com larga experiência e
            histórico de atualização permanente. Controle rigoroso de qualidade e relacionamento
            comercial ético e duradouro.
          </p>

          <p className="mb-10 font-roboto text-base leading-relaxed font-light text-[#6C6F72]">
            Nossos valores e o atendimento especializado — do pequeno consumidor até empresas de
            grande porte — são o nosso grande diferencial.{" "}
            <span className="font-medium text-[#0A0E1A]">
              Quem conhece, confia e se torna parceiro.
            </span>
          </p>

          {/* Career banner — mesmo estilo do laudo */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#DFE0E1] bg-white px-6 py-5 shadow-sm sm:flex-row">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F4C9F]/10">
                <FaHardHat size={18} className="text-[#0F4C9F]" aria-hidden />
              </div>
              <div>
                <p className="font-roboto text-base font-bold text-[#0A0E1A]">
                  Quer fazer parte do time?
                </p>
                <p className="mt-0.5 font-roboto text-sm text-[#6C6F72]">
                  Mande seu currículo — analisamos perfis de todas as áreas.
                </p>
              </div>
            </div>
            <a
              href="mailto:rh@britago.com.br"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0F4C9F] px-7 py-3.5 font-impact text-sm tracking-widest whitespace-nowrap text-white uppercase transition-colors duration-200 hover:bg-[#0A3575]"
            >
              <FiMail size={15} aria-hidden />
              Enviar Curriculo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
