import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/config/site";
import { FiMapPin } from "react-icons/fi";

const MAPS_LINK = `https://maps.google.com/maps?q=Rodovia+GO-060,+Km+34.9,+Santa+B%C3%A1rbara+de+Goi%C3%A1s+-+GO,+75398-000`;

export function LocalizacaoMap() {
  return (
    <div className="relative min-h-80 overflow-hidden rounded-2xl border border-white/10 shadow-lg lg:col-span-3">
      <iframe
        src={CONTACT.mapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização Britago Mineração — Santa Bárbara de Goiás, GO"
        className="absolute inset-0 h-full w-full"
      />
      <Button
        asChild
        variant="ghost"
        className="absolute right-3 bottom-3 gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-britago-dark shadow-md hover:bg-white hover:shadow-lg"
      >
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir localização no Google Maps"
        >
          <FiMapPin size={13} className="text-britago-primary" aria-hidden />
          Abrir no Google Maps
        </a>
      </Button>
    </div>
  );
}
