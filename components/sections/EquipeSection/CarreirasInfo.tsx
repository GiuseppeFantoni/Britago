import { IconBadge } from "@/components/ui/IconBadge";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { IconType } from "react-icons";
import { FiShield, FiTrendingUp } from "react-icons/fi";
import { CURRICULO_BENEFICIOS } from "./constants";

const BENEFICIO_ICONS: Record<(typeof CURRICULO_BENEFICIOS)[number]["icon"], IconType> = {
  shield: FiShield,
  trending: FiTrendingUp,
};

export function CarreirasInfo() {
  return (
    <RevealOnScroll>
      <h3 className="mb-3 font-impact text-2xl leading-tight text-britago-primary uppercase">
        Quer fazer parte do time?
      </h3>
      <p className="mb-8 font-roboto text-base leading-relaxed font-light text-britago-gray">
        Envie seu currículo e nosso RH entra em contato quando surgir uma oportunidade compatível
        com o seu perfil.
      </p>

      <div className="mb-8 flex flex-col gap-5">
        {CURRICULO_BENEFICIOS.map(({ icon, title, description }) => (
          <div key={title} className="flex items-start gap-4">
            <IconBadge icon={BENEFICIO_ICONS[icon]} size="sm" />
            <div>
              <p className="font-roboto text-sm font-semibold text-britago-dark">{title}</p>
              <p className="mt-0.5 font-roboto text-sm text-britago-gray">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
