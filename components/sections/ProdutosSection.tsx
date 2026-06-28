"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pedra Marroada",
    desc: "Também conhecida como rachão, usada em concreto ciclópico, muros de contenção e sistemas de drenagem.",
    image: "/assets/marroada.jpeg",
  },
  {
    id: 2,
    name: "Brita 0",
    desc: "Usado em usinas de asfalto, pré-moldados e concreteiras. Granulometria fina para maior compacidade.",
    image: "/assets/brita0.jpeg",
  },
  {
    id: 3,
    name: "Brita 1",
    desc: "Para construção civil, colunas, vigas e lajes. Granulometria ideal para concreto estrutural de alto desempenho.",
    image: "/assets/brita1.jpeg",
  },
  {
    id: 4,
    name: "Brita 2",
    desc: "Para grandes estruturas, fundações e obras de infraestrutura que exigem granulometria maior e alta resistência à compressão.",
    image: "/assets/brita2.jpeg",
  },
  {
    id: 5,
    name: "Brita 00",
    desc: "Usado como base asfáltica, em calçamentos, pisos externos e preenchimentos. Granulometria fina e homogênea.",
    image: "/assets/brita00.jpeg",
  },
  {
    id: 6,
    name: "BGS",
    desc: "Usado como base para calçamentos e pavimentação asfáltica, garantindo durabilidade e resistência.",
    image: "/assets/bgs.jpeg",
  },
  {
    id: 7,
    name: "Pedrisco",
    desc: "Usado em concreto, pavimentação e drenagem.",
    image: "/assets/pedrisco.jpeg",
  },
  {
    id: 8,
    name: "Areia",
    desc: "Substitui até 100% a areia comum. Pode ser lavada ou seca. Ideal para concreteiras, pré-moldados e argamassas.",
    image: "/assets/areia.jpeg",
  },
];

export function ProdutosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="produtos"
      className="bg-[#0F4C9F] py-16 lg:py-20"
      aria-labelledby="produtos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
            <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
              Produtos
            </span>
          </div>
          <h2
            id="produtos-heading"
            className="font-impact leading-tight text-white uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Nossa linha completa
          </h2>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#DFE0E1] bg-white transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — Estudo Mineracao`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 font-impact text-xl tracking-wide text-[#0A0E1A] uppercase">
                  {product.name}
                </h3>
                <p className="flex-1 font-roboto text-sm leading-relaxed font-light text-[#6C6F72]">
                  {product.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Laudo técnico CTA — banner estilo PDF */}
        <div className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm sm:flex-row">
            <div>
              <p className="font-roboto text-base font-bold text-[#0A0E1A]">
                Documentação técnica disponível para sua obra.
              </p>
              <p className="mt-0.5 font-roboto text-sm text-[#6C6F72]">
                Acesse o laudo com especificações técnicas
              </p>
            </div>
            <a
              href="laudo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar laudo técnico (PDF fictício)"
              className="shrink-0 rounded-xl bg-[#0F4C9F] px-7 py-3.5 font-impact text-sm tracking-widest whitespace-nowrap text-white uppercase transition-colors duration-200 hover:bg-[#0A3575]"
            >
              Baixar Laudo Tecnico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
