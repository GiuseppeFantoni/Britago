import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { QuemSomosImage } from "./QuemSomosImage";
import { QuemSomosContent } from "./QuemSomosContent";
import { QuemSomosMVV } from "./QuemSomosMVV";

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
          <QuemSomosImage />
          <QuemSomosContent />
        </RevealOnScroll>

        <QuemSomosMVV />
      </div>
    </section>
  );
}
