import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { CONTACT } from "@/lib/config/site";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const MAPS_LINK = `https://maps.google.com/maps?q=Rodovia+GO-060,+Km+34.9,+Santa+B%C3%A1rbara+de+Goi%C3%A1s+-+GO,+75398-000`;

export function LocalizacaoSection() {
  return (
    <section
      id="localizacao"
      className="bg-britago-primary py-14 lg:py-16"
      aria-labelledby="localizacao-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          {/* Header */}
          <div className="mb-8">
            <div className="mb-3">
              <SectionEyebrow>Onde estamos</SectionEyebrow>
            </div>
            <h2
              id="localizacao-heading"
              className="font-impact text-white uppercase"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Localização e horários
            </h2>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5">
            {/* Map embed */}
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
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir localização no Google Maps"
                className="absolute right-3 bottom-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-britago-dark shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <FiMapPin size={13} className="text-britago-primary" aria-hidden />
                Abrir no Google Maps
              </a>
            </div>

            {/* Card único unificado */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-britago-gray bg-white shadow-sm lg:col-span-2">
              <div className="flex flex-1 flex-col gap-4 p-5">
                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-britago-primary/8">
                    <FiMapPin size={15} className="text-britago-primary" aria-hidden />
                  </div>
                  <div>
                    <p className="mb-0.5 font-roboto text-sm font-semibold text-britago-dark">
                      Endereço
                    </p>
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
                    <p className="mb-1 font-roboto text-sm font-semibold text-britago-dark">
                      Comercial
                    </p>
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
                    <p className="mb-0.5 font-roboto text-sm font-semibold text-britago-dark">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${CONTACT.emails.commercial}`}
                      className="block font-roboto text-sm text-britago-gray transition-colors duration-200 hover:text-britago-primary"
                    >
                      {CONTACT.emails.commercial}
                    </a>
                    <a
                      href={`mailto:${CONTACT.emails.hr}`}
                      className="block font-roboto text-sm text-britago-gray transition-colors duration-200 hover:text-britago-primary"
                    >
                      {CONTACT.emails.hr}
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
                <div className="grid grid-cols-3 gap-2">
                  {CONTACT.hours.map(({ day, hours }) => (
                    <div key={day} className="rounded-lg bg-white/10 px-2 py-2 text-center">
                      <p className="mb-0.5 font-roboto text-xs text-white/60">{day}</p>
                      <p
                        className={`font-roboto text-xs font-semibold ${hours === "Fechado" ? "text-red-300" : "text-white"}`}
                      >
                        {hours}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
