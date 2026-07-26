import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MVV } from "./constants";

export function QuemSomosMVV() {
  return (
    <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {MVV.map(({ label, title, text }) => (
        <Card
          key={label}
          className="gap-0 rounded-2xl border-britago-primary-dark/40 bg-britago-primary p-6 transition-all duration-300 hover:border-britago-secondary/40"
        >
          <Badge
            variant="outline"
            className="mb-3 w-fit rounded border-white/40 bg-white/10 px-2 py-0.5 font-roboto text-xs font-medium tracking-widest text-white uppercase"
          >
            {label}
          </Badge>
          <h3 className="mb-2 font-impact text-xl text-white">{title}</h3>
          <p className="font-roboto text-sm leading-relaxed font-light text-white/70">{text}</p>
        </Card>
      ))}
    </div>
  );
}
