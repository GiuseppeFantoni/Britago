import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PRODUCTS } from "./constants";

export function ProdutosSection() {
  return (
    <section
      id="produtos"
      className="bg-britago-primary py-16 lg:py-20"
      aria-labelledby="produtos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <RevealOnScroll className="mb-10">
          <div className="mb-4">
            <SectionEyebrow>Produtos</SectionEyebrow>
          </div>
          <h2
            id="produtos-heading"
            className="font-impact leading-tight text-white uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Nossa linha completa
          </h2>
        </RevealOnScroll>

        {/* Products grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-britago-gray-light bg-white transition-all duration-300 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — Britago Mineração`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-1 font-impact text-xl tracking-wide text-britago-dark uppercase">
                  {product.name}
                </h3>
                <p className="flex-1 font-roboto text-sm leading-relaxed font-light text-britago-gray">
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
              <p className="font-roboto text-base font-bold text-britago-dark">
                Documentação técnica disponível para sua obra.
              </p>
              <p className="mt-0.5 font-roboto text-sm text-britago-gray">
                Acesse o laudo com especificações técnicas
              </p>
            </div>
            <a
              href="laudo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Baixar laudo técnico (PDF fictício)"
              className="shrink-0 rounded-xl bg-britago-primary px-7 py-3.5 font-impact text-sm tracking-widest whitespace-nowrap text-white uppercase transition-colors duration-200 hover:bg-britago-primary-dark"
            >
              Baixar Laudo Tecnico
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
