import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { IconBadge } from "@/components/ui/IconBadge";
import { Card } from "@/components/ui/Card";
import { HIGHLIGHTS } from "./constants";

export function QuemSomosContent() {
  return (
    <div>
      <div className="mb-5">
        <SectionEyebrow>Nossa história</SectionEyebrow>
      </div>

      <h2
        id="quem-somos-heading"
        className="mb-6 font-impact leading-tight text-britago-primary uppercase"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        Uma empresa construída
        <br />
        sobre bases sólidas
      </h2>

      <p className="mb-4 font-roboto text-base leading-relaxed font-light text-britago-gray">
        Fundada em Goiás com um propósito claro: oferecer ao mercado uma brita de qualidade
        superior, extraída com responsabilidade e entregue com pontualidade.
      </p>
      <p className="mb-8 font-roboto text-base leading-relaxed font-light text-britago-gray">
        Ao longo de mais de duas décadas, consolidamos uma operação moderna e profissionalizada — do
        processo de extração ao produto final — com gestão transparente e compromisso genuíno com
        cada cliente. Somos referência no estado, reconhecidos pela qualidade dos produtos e
        eficiência no atendimento.
      </p>

      <div className="space-y-4">
        {HIGHLIGHTS.map(({ icon, label, desc }) => (
          <Card
            key={label}
            className="group flex-row items-start gap-4 rounded-xl border-britago-gray-light bg-white p-4 transition-all duration-300 hover:border-britago-primary/30 hover:shadow-md"
          >
            <IconBadge icon={icon} groupHover />
            <div>
              <p className="mb-0.5 font-roboto text-sm font-medium text-britago-dark">{label}</p>
              <p className="font-roboto text-sm font-light text-britago-gray">{desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
