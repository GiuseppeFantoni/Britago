import Image from "next/image";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { IconBadge } from "@/components/ui/IconBadge";
import { HIGHLIGHTS, MVV } from "./constants";

export function QuemSomosSection() {
  return (
    <section
      id="quem-somos"
      className="overflow-hidden bg-britago-light py-16 lg:py-20"
      aria-labelledby="quem-somos-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll
          duration={0.7}
          y={24}
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/assets/history.jpeg"
                alt="Pedreira Britago — história e operação"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -right-6 -bottom-6 hidden rounded-2xl bg-britago-primary p-5 shadow-xl sm:block">
              <p className="font-impact text-4xl leading-none text-white">27</p>
              <p className="mt-1 font-roboto text-xs tracking-widest text-white/70 uppercase">
                anos de
                <br />
                mercado
              </p>
            </div>

            <div
              className="absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-xl bg-britago-secondary/20"
              aria-hidden
            />
          </div>

          {/* Text side */}
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
              Ao longo de mais de duas décadas, consolidamos uma operação moderna e
              profissionalizada — do processo de extração ao produto final — com gestão transparente
              e compromisso genuíno com cada cliente. Somos referência no estado, reconhecidos pela
              qualidade dos produtos e eficiência no atendimento.
            </p>

            <div className="space-y-4">
              {HIGHLIGHTS.map(({ icon, label, desc }) => (
                <div
                  key={label}
                  className="group flex items-start gap-4 rounded-xl border border-britago-gray-light bg-white p-4 transition-all duration-300 hover:border-britago-primary/30 hover:shadow-md"
                >
                  <IconBadge icon={icon} groupHover />
                  <div>
                    <p className="mb-0.5 font-roboto text-sm font-medium text-britago-dark">
                      {label}
                    </p>
                    <p className="font-roboto text-sm font-light text-britago-gray">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* MVV row */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {MVV.map(({ label, title, text }) => (
            <div
              key={label}
              className="rounded-2xl border border-britago-primary-dark/40 bg-britago-primary p-6 transition-all duration-300 hover:border-britago-secondary/40"
            >
              <span className="mb-3 inline-block rounded border border-white/40 bg-white/10 px-2 py-0.5 font-roboto text-xs font-medium tracking-widest text-white uppercase">
                {label}
              </span>
              <h3 className="mb-2 font-impact text-xl text-white">{title}</h3>
              <p className="font-roboto text-sm leading-relaxed font-light text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
