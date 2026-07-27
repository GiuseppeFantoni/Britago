import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const BENEFITS = [
  "Orçamento sem compromisso",
  "Laudo técnico incluso",
  "Frota própria",
  "Entrega em todo o estado de GO",
];

export function ContatoInfo() {
  return (
    <RevealOnScroll>
      <div className="mb-5">
        <SectionEyebrow>Fale conosco</SectionEyebrow>
      </div>
      <h2
        id="contato-heading"
        className="mb-6 font-impact leading-tight text-britago-primary uppercase"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
      >
        Solicite seu orçamento
      </h2>
      <p className="mb-8 max-w-md font-roboto text-base leading-relaxed font-light text-britago-gray">
        Preencha o formulário e nossa equipe comercial entrará em contato com a proposta
        personalizada para sua obra.
      </p>

      <div className="mb-10 space-y-3">
        {BENEFITS.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-britago-primary/10">
              <div className="h-2 w-2 rounded-full bg-britago-primary" aria-hidden />
            </div>
            <span className="font-roboto text-sm text-britago-gray">{item}</span>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
