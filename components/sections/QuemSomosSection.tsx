"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiTruck, FiCheckCircle } from "react-icons/fi";

const HIGHLIGHTS = [
  {
    icon: FiAward,
    label: "Fundada em 1999",
    desc: "Mais de 27 anos construindo confiança no mercado.",
  },
  {
    icon: FiCheckCircle,
    label: "Laboratório próprio",
    desc: "Controle de qualidade rigoroso em cada lote produzido.",
  },
  {
    icon: FiTruck,
    label: "Frota especializada",
    desc: "Frota com duas carretas, dois bitrucks e dois trucks para entregas ágeis e seguras em todo o estado.",
  },
];

export function QuemSomosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="quem-somos"
      className="overflow-hidden bg-[#F8F9FA] py-16 lg:py-20"
      aria-labelledby="quem-somos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main grid — one fade for the whole block */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/history.jpeg"
                alt="Pedreira Britago — história e operação"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -right-6 -bottom-6 hidden rounded-2xl bg-[#0F4C9F] p-5 shadow-xl sm:block">
              <p className="font-impact text-4xl leading-none text-white">27</p>
              <p className="mt-1 font-roboto text-xs tracking-widest text-white/70 uppercase">
                anos de
                <br />
                mercado
              </p>
            </div>

            <div
              className="absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-xl bg-[#C4922A]/20"
              aria-hidden
            />
          </div>

          {/* Text side */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
              <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
                Nossa história
              </span>{" "}
            </div>

            <h2
              id="quem-somos-heading"
              className="mb-6 font-impact leading-tight text-[#0F4C9F] uppercase"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Uma empresa construída
              <br />
              sobre bases sólidas
            </h2>

            <p className="mb-4 font-roboto text-base leading-relaxed font-light text-[#6C6F72]">
              Fundada em Goiás com um propósito claro: oferecer ao mercado uma brita de qualidade
              superior, extraída com responsabilidade e entregue com pontualidade.
            </p>
            <p className="mb-8 font-roboto text-base leading-relaxed font-light text-[#6C6F72]">
              Ao longo de mais de duas décadas, consolidamos uma operação moderna e
              profissionalizada — do processo de extração ao produto final — com gestão transparente
              e compromisso genuíno com cada cliente. Somos referência no estado, reconhecidos pela
              qualidade dos produtos e eficiência no atendimento.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4 rounded-xl border border-[#DFE0E1] bg-white p-4 transition-all duration-300 hover:border-[#0F4C9F]/30 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F4C9F]/10 transition-colors duration-300 group-hover:bg-[#0F4C9F]">
                    <Icon
                      size={18}
                      className="text-[#0F4C9F] transition-colors duration-300 group-hover:text-white"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <p className="mb-0.5 font-roboto text-sm font-medium text-[#0A0E1A]">{label}</p>
                    <p className="font-roboto text-sm font-light text-[#6C6F72]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* VMV row */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              label: "Missão",
              title: "Qualidade que constrói",
              text: "Fornecer agregados de alta qualidade que sustentam a construção e o desenvolvimento, com segurança, eficiência e compromisso.",
            },
            {
              label: "Visão",
              title: "Referência regional",
              text: "Ser a pedreira de referência em Goiás, com laudo técnico completo disponível e certificação geológica da nossa jazida.",
            },
            {
              label: "Valores",
              title: "Nossa essência",
              text: "Segurança em primeiro lugar · Integridade nas relações · Eficiência operacional · Compromisso com o cliente · Sustentabilidade ambiental",
            },
          ].map(({ label, title, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#0A3575]/40 bg-[#0F4C9F] p-6 transition-all duration-300 hover:border-[#C4922A]/40"
            >
              <span className="mb-3 inline-block rounded border border-white/40 bg-white/10 px-2 py-0.5 font-roboto text-xs font-medium tracking-widest text-white uppercase">
                {label}
              </span>
              <h3 className="mb-2 font-impact text-xl text-white">{title}</h3>
              <p className="font-roboto text-sm leading-relaxed font-light text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
