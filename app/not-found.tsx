import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-britago-dark px-4">
      <div className="text-center">
        <p className="mb-4 font-impact text-sm tracking-widest text-britago-secondary uppercase">
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
        <Button asChild className="gap-2 px-8 py-4">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </main>
  );
}
