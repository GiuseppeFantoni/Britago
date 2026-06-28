import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden"
      aria-label="Apresentação"
    >
      {/* Background image — local asset */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero.png"
          alt="Planta de mineração — Estudo Mineracao"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        {/* Bottom gradient so title reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content — centered, anchored to bottom */}
      <div className="mb-7 flex w-full flex-col items-center px-4 text-center lg:mb-6">
        {/* Title */}
        <h1
          className="animate-fade-in-up mb-8 font-impact leading-none uppercase"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 6rem)",
            letterSpacing: "0.04em",
            animationDelay: "0.1s",
            animationFillMode: "both",
          }}
        >
          <span className="text-white">A </span>
          <span className="text-gold-shimmer">Melhor Brita</span>
          <span className="text-white"> da Região</span>
        </h1>
      </div>
    </section>
  );
}
