import { Button } from "@/components/ui/Button";
import { FiCheckCircle } from "react-icons/fi";

interface ContatoFormSuccessProps {
  onReset: () => void;
}

export function ContatoFormSuccess({ onReset }: ContatoFormSuccessProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-britago-primary/10">
        <FiCheckCircle size={32} className="text-britago-primary" aria-hidden />
      </div>
      <h3 className="font-impact text-2xl text-britago-dark uppercase">Mensagem enviada!</h3>
      <p className="max-w-xs font-roboto text-sm leading-relaxed font-light text-britago-gray">
        Recebemos seu pedido. Nossa equipe entrará em contato em breve.
      </p>
      <Button variant="outline" onClick={onReset} className="mt-2 px-6 py-2.5 text-sm font-medium">
        Enviar outra mensagem
      </Button>
    </div>
  );
}
