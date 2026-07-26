"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CULTURA_CARDS } from "./constants";

export function CulturaSectionMobile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="cultura"
      className="bg-britago-primary py-12"
      aria-labelledby="cultura-heading-mobile"
    >
      <div className="px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="mb-3">
            <SectionEyebrow>Pessoas que fazem a diferença</SectionEyebrow>
          </div>
          <h2
            id="cultura-heading-mobile"
            className="font-impact text-white uppercase"
            style={{ fontSize: "clamp(1.8rem, 8vw, 2.5rem)" }}
          >
            Nossa cultura
          </h2>
          <p className="mt-3 font-roboto text-sm leading-relaxed font-light text-white/70">
            Iniciativas que celebram nossos colaboradores e fortalecem nossa cultura todos os dias.
          </p>
        </motion.div>

        {/* Grid 2 colunas — texto sempre visível */}
        <div className="grid grid-cols-2 gap-3">
          {CULTURA_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              className="overflow-hidden rounded-xl bg-britago-primary-dark"
            >
              {/* Imagem */}
              <div className="relative aspect-4/3 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-britago-primary-dark/60 to-transparent" />
              </div>

              {/* Texto sempre visível */}
              <div className="px-3 py-2.5">
                <h3 className="mb-1 font-impact text-sm leading-tight text-white uppercase">
                  {card.title}
                </h3>
                <p className="font-roboto text-xs leading-relaxed font-light text-white/65">
                  {card.desc}
                </p>
              </div>

              {/* Linha dourada fixa */}
              <div className="h-0.5 bg-britago-secondary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
