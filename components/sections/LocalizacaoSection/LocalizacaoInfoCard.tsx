import { Card } from "@/components/ui/Card";
import { CONTACT } from "@/lib/config/site";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export function LocalizacaoInfoCard() {
  return (
    <Card className="gap-0 overflow-hidden rounded-2xl border-britago-gray bg-white py-0 shadow-sm lg:col-span-2">
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Endereço */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-britago-primary/8">
            <FiMapPin size={15} className="text-britago-primary" aria-hidden />
          </div>
          <div>
            <p className="mb-0.5 font-roboto text-sm font-semibold text-britago-dark">Endereço</p>
            <p className="font-roboto text-sm leading-relaxed text-britago-gray">
              {CONTACT.address.street}
              <br />
              {CONTACT.address.city} — {CONTACT.address.state}
              <br />
              CEP {CONTACT.address.zip}
            </p>
          </div>
        </div>

        <div className="h-px bg-britago-gray-light" />

        {/* Telefones em grid */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-britago-primary/8">
            <FiPhone size={15} className="text-britago-primary" aria-hidden />
          </div>
          <div className="flex-1">
            <p className="mb-1 font-roboto text-sm font-semibold text-britago-dark">Comercial</p>
            <div className="flex flex-col gap-0.5">
              {CONTACT.phones.commercial.map((phone) => (
                <a
                  key={phone.wa}
                  href={`https://wa.me/${phone.wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-sm text-britago-gray transition-colors duration-200 hover:text-britago-primary"
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-britago-gray-light" />

        {/* E-mail */}
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-britago-primary/8">
            <FiMail size={15} className="text-britago-primary" aria-hidden />
          </div>
          <div>
            <p className="mb-0.5 font-roboto text-sm font-semibold text-britago-dark">E-mail</p>
            <a
              href={`mailto:${CONTACT.emails.commercial}`}
              className="block font-roboto text-sm text-britago-gray transition-colors duration-200 hover:text-britago-primary"
            >
              {CONTACT.emails.commercial}
            </a>
            <a
              href="#carreiras"
              className="block font-roboto text-sm text-britago-gray transition-colors duration-200 hover:text-britago-primary"
            >
              {CONTACT.emails.hr} (currículos)
            </a>
          </div>
        </div>
      </div>

      {/* Seção de horários — bloco azul no rodapé do card */}
      <div className="bg-britago-primary px-5 py-4">
        <div className="mb-3 flex items-center gap-2">
          <FiClock size={14} className="shrink-0 text-britago-secondary" aria-hidden />
          <p className="font-roboto text-sm font-semibold tracking-wide text-white">
            Horário de atendimento
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {CONTACT.hours.map(({ day, hours }) => (
            <div
              key={day}
              className="flex items-center justify-between gap-2 rounded-lg bg-white/10 px-3 py-2 text-left sm:flex-col sm:items-center sm:justify-center sm:text-center"
            >
              <p className="font-roboto text-xs text-white/60 sm:mb-0.5">{day}</p>
              <p
                className={`shrink-0 font-roboto text-xs font-semibold ${hours === "Fechado" ? "text-red-300" : "text-white"}`}
              >
                {hours}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
