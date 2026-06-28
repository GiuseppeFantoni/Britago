"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CulturaSectionMobile } from "./CulturaSectionMobile";
import { CULTURA_CARDS } from "@/lib/constants";

export function CulturaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Mobile — texto sempre visível */}
      <div className="block sm:hidden">
        <CulturaSectionMobile />
      </div>

      {/* Desktop — hover reveal */}
      <div className="hidden sm:block">
        <section
          id="cultura"
          className="bg-[#0F4C9F] py-16 lg:py-20"
          aria-labelledby="cultura-heading"
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
                  Pessoas que fazem a diferença
                </span>
              </div>
              <h2
                id="cultura-heading"
                className="font-impact text-white uppercase"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Nossa cultura
              </h2>
              <p className="mt-4 max-w-xl font-roboto text-base leading-relaxed font-light text-white/70">
                Iniciativas que celebram nossos colaboradores e fortalecem nossa cultura todos os
                dias.
              </p>
            </motion.div>

            {/* Grid 4x2 — pure Tailwind hover, no per-card animation */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {CULTURA_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="group relative aspect-[4/3] cursor-default overflow-hidden rounded-2xl"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/90 via-[#0A0E1A]/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute right-0 bottom-0 left-0 p-4">
                    <h3 className="mb-1 font-impact text-lg leading-tight text-white uppercase">
                      {card.title}
                    </h3>
                    <p className="max-h-0 overflow-hidden font-roboto text-xs leading-relaxed font-light text-white/95 opacity-0 transition-opacity duration-300 group-hover:max-h-20 group-hover:opacity-100">
                      {card.desc}
                    </p>
                  </div>

                  {/* Gold accent line on hover */}
                  <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-[#C4922A] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
