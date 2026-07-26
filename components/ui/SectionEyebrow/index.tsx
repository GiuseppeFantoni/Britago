import type { SectionEyebrowProps } from "./types";

export function SectionEyebrow({ children, centered = false }: SectionEyebrowProps) {
  return (
    <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
      <span className="h-px w-8 bg-britago-secondary" aria-hidden />
      <span className="font-roboto text-sm font-medium tracking-widest text-britago-secondary uppercase">
        {children}
      </span>
      {centered && <span className="h-px w-8 bg-britago-secondary" aria-hidden />}
    </div>
  );
}
