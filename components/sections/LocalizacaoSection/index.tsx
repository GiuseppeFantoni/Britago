import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { LocalizacaoMap } from "./LocalizacaoMap";
import { LocalizacaoInfoCard } from "./LocalizacaoInfoCard";

export function LocalizacaoSection() {
  return (
    <section
      id="localizacao"
      className="bg-britago-primary py-14 lg:py-16"
      aria-labelledby="localizacao-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Header */}
          <div className="mb-8">
            <div className="mb-3">
              <SectionEyebrow>Onde estamos</SectionEyebrow>
            </div>
            <h2
              id="localizacao-heading"
              className="font-impact text-white uppercase"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Localização e horários
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
            <LocalizacaoMap />
            <LocalizacaoInfoCard />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
