import { FiMail } from "react-icons/fi";
import { FaHardHat } from "react-icons/fa";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IconBadge } from "@/components/ui/IconBadge";
import { CONTACT } from "@/lib/config/site";

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

          <h2
            id="equipe-heading"
            className="mb-6 font-impact leading-tight text-britago-primary uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Profissionais que fazem
            <br />a diferença
          </h2>

          <p className="mb-4 font-roboto text-base leading-relaxed font-light text-britago-gray">
            Nossa equipe é composta por geólogos, geofísicos e engenheiros com larga experiência e
            histórico de atualização permanente. Controle rigoroso de qualidade e relacionamento
            comercial ético e duradouro.
          </p>

          <p className="mb-10 font-roboto text-base leading-relaxed font-light text-britago-gray">
            Nossos valores e o atendimento especializado — do pequeno consumidor até empresas de
            grande porte — são o nosso grande diferencial.{" "}
            <span className="font-medium text-britago-dark">
              Quem conhece, confia e se torna parceiro.
            </span>
          </p>

          {/* Career banner */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-britago-gray-light bg-white px-6 py-5 shadow-sm sm:flex-row">
            <div className="flex items-start gap-4">
              <IconBadge icon={FaHardHat} size="lg" />
              <div>
                <p className="font-roboto text-base font-bold text-britago-dark">
                  Quer fazer parte do time?
                </p>
                <p className="mt-0.5 font-roboto text-sm text-britago-gray">
                  Mande seu currículo — analisamos perfis de todas as áreas.
                </p>
              </div>
            </div>
            <a
              href={`mailto:${CONTACT.emails.hr}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-britago-primary px-7 py-3.5 font-impact text-sm tracking-widest whitespace-nowrap text-white uppercase transition-colors duration-200 hover:bg-britago-primary-dark"
            >
              <FiMail size={15} aria-hidden />
              Enviar Curriculo
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
