import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CarreirasInfo } from "./CarreirasInfo";
import { CurriculoForm } from "./CurriculoForm";

export function EquipeSection() {
  return (
    <section
      id="equipe"
      className="bg-britago-light py-16 lg:py-20"
      aria-labelledby="equipe-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mb-5">
            <SectionEyebrow>Nosso time</SectionEyebrow>
          </div>
        </RevealOnScroll>

        <div
          id="carreiras"
          className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <RevealOnScroll>
              <h2
                id="equipe-heading"
                className="mb-6 font-impact leading-tight text-britago-primary uppercase"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Profissionais que fazem
                <br />a diferença
              </h2>

              <p className="mb-4 font-roboto text-base leading-relaxed font-light text-britago-gray">
                Nossa equipe é formada por profissionais comprometidos, que unem experiência,
                dedicação e conhecimento técnico para garantir operações seguras, eficientes e
                produtos de alta qualidade.
              </p>

              <p className="font-roboto text-base leading-relaxed font-light text-britago-gray">
                Nossos valores e o atendimento especializado — do pequeno consumidor até empresas de
                grande porte — são o nosso grande diferencial.{" "}
                <span className="font-medium text-britago-dark">
                  Quem conhece, confia e se torna parceiro.
                </span>
              </p>
            </RevealOnScroll>

            <div className="mt-12 border-t border-britago-gray-light pt-12">
              <CarreirasInfo />
            </div>
          </div>

          <CurriculoForm />
        </div>
      </div>
    </section>
  );
}
