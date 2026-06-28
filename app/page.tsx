import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

import { HeroSection } from "@/components/sections/HeroSection";
import { QuemSomosSection } from "@/components/sections/QuemSomosSection";
import { ProdutosSection } from "@/components/sections/ProdutosSection";
import { SustentabilidadeSection } from "@/components/sections/SustentabilidadeSection";
import { CulturaSection } from "@/components/sections/CulturaSection";
import { EquipeSection } from "@/components/sections/EquipeSection";
import { LocalizacaoSection } from "@/components/sections/LocalizacaoSection";
import { ContatoSection } from "@/components/sections/ContatoSection";

export const metadata: Metadata = createMetadata({
  title: "Britago",
  description:
    "Britago — fornecedora de agregados britados em Goiás. Brita, pó de brita, areia e muito mais. Laboratório próprio, frota especializada e 27 anos de mercado.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuemSomosSection />
        <ProdutosSection />
        <SustentabilidadeSection />
        <CulturaSection />
        <EquipeSection />
        <LocalizacaoSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
