import { FiDownload } from "react-icons/fi";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CARDS } from "./constants";

export function LaudoSection() {
  return (
    <section
      id="laudo"
      className="relative overflow-hidden bg-britago-primary-dark py-16 lg:py-20"
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
        <RevealOnScroll>
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="mb-4">
              <SectionEyebrow centered>Documentação técnica</SectionEyebrow>
            </div>
            <h2
              id="laudo-heading"
              className="mb-4 font-impact text-white uppercase"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Laudo técnico <span className="text-britago-secondary">disponível</span>
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
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-britago-secondary/20">
                  <Icon size={22} className="text-britago-secondary" aria-hidden />
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
              className="group inline-flex items-center gap-3 rounded bg-britago-secondary px-8 py-4 font-roboto text-base font-medium text-white transition-all duration-300 hover:bg-britago-secondary-dark hover:shadow-lg hover:shadow-britago-secondary/30"
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
        </RevealOnScroll>
      </div>
    </section>
  );
}
