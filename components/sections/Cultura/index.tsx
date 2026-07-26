import { CulturaSection as CulturaSectionDesktop } from "./CulturaSection";
import { CulturaSectionMobile } from "./CulturaSectionMobile";

export function CulturaSection() {
  return (
    <>
      {/* Mobile — texto sempre visível */}
      <div className="block sm:hidden">
        <CulturaSectionMobile />
      </div>

      {/* Desktop — hover reveal */}
      <div className="hidden sm:block">
        <CulturaSectionDesktop />
      </div>
    </>
  );
}
