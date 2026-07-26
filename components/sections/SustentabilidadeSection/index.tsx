import { IconBadge } from "@/components/ui/IconBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import Image from "next/image";
import { INICIATIVAS } from "./constants";

export function SustentabilidadeSection() {
  return (
    <section
      id="sustentabilidade"
      className="overflow-hidden bg-britago-light py-16 lg:py-20"
      aria-labelledby="sustentabilidade-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Topo: texto + foto lado a lado */}
          <div className="mb-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Text side */}
            <div>
              <div className="mb-5">
                <SectionEyebrow>Mineração responsável</SectionEyebrow>
              </div>
              <h2
                id="sustentabilidade-heading"
                className="mb-4 font-impact leading-tight text-britago-primary uppercase"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Futuro preservado
              </h2>
              <blockquote className="mb-6 border-l-4 border-britago-secondary pl-4">
                <p className="font-roboto text-sm leading-relaxed font-light text-britago-gray italic">
                  &ldquo;Satisfazer as necessidades do presente sem comprometer a capacidade das
                  gerações futuras de satisfazer as próprias necessidades.&rdquo;
                </p>
                <cite className="mt-2 block font-roboto text-xs font-medium tracking-wide text-britago-secondary not-italic">
                  — Relatório Brundtland
                </cite>
              </blockquote>
              <p className="font-roboto text-base leading-relaxed font-light text-britago-gray">
                A Britago opera com consciência ambiental em cada etapa da produção. Nossas ações
                vão além do cumprimento legal — acreditamos que é possível extrair com
                responsabilidade e devolver valor ao meio ambiente e à comunidade.
              </p>
            </div>

            {/* Image side — menor, landscape */}
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/assets/horta.webp"
                  alt="Iniciativas de sustentabilidade — Britago Mineração"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-xl bg-britago-secondary/15"
                aria-hidden
              />
            </div>
          </div>

          {/* Rodapé: cards em faixa horizontal */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {INICIATIVAS.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group flex flex-col gap-3 rounded-xl border border-britago-gray-light bg-white p-5 transition-all duration-300 hover:border-success/30 hover:shadow-md"
              >
                <IconBadge icon={icon} variant="success" size="sm" groupHover />
                <div>
                  <p className="mb-1 font-roboto text-sm font-semibold text-britago-dark">
                    {title}
                  </p>
                  <p className="font-roboto text-xs leading-relaxed font-light text-britago-gray">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
