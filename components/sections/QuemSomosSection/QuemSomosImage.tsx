import Image from "next/image";

export function QuemSomosImage() {
  return (
    <div className="relative">
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src="/assets/history.webp"
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
  );
}
