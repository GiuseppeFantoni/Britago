import { ContatoInfo } from "./ContatoInfo";
import { ContatoForm } from "./ContatoForm";

export function ContatoSection() {
  return (
    <section
      id="contato"
      className="bg-britago-light py-16 lg:py-20"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <ContatoInfo />
          <ContatoForm />
        </div>
      </div>
    </section>
  );
}
