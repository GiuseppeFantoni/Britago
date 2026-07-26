"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // TODO: enviar erro para serviço de monitoramento (ex: Sentry)
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-britago-dark px-4">
      <div className="text-center">
        <p className="mb-4 font-impact text-sm tracking-widest text-britago-secondary uppercase">
          Algo deu errado
        </p>
        <h2
          className="mb-6 font-impact leading-none text-white uppercase"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
        >
          Erro inesperado
        </h2>
        <p className="mx-auto mb-10 max-w-md font-roboto text-base leading-relaxed font-light text-white/60">
          Ocorreu um erro ao carregar esta página. Tente novamente.
        </p>
        <Button onClick={reset} className="gap-2 px-8 py-4">
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}
