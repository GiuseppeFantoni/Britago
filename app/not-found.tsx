import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0E1A] px-4">
      <div className="text-center">
        <p className="mb-4 font-impact text-sm tracking-widest text-[#C4922A] uppercase">
          Erro 404
        </p>
        <h1
          className="mb-6 font-impact leading-none text-white uppercase"
          style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
        >
          Página não encontrada
        </h1>
        <p className="mx-auto mb-10 max-w-md font-roboto text-base leading-relaxed font-light text-white/60">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0F4C9F] px-8 py-4 font-impact text-sm tracking-widest text-white uppercase transition-colors duration-200 hover:bg-[#0A3575]"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
