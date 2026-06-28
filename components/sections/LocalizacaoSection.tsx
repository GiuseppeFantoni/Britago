"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export function LocalizacaoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="localizacao"
      className="bg-[#0F4C9F] py-14 lg:py-16"
      aria-labelledby="localizacao-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C4922A]" aria-hidden />
              <span className="font-roboto text-sm font-medium tracking-widest text-[#C4922A] uppercase">
                Onde estamos
              </span>
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
            {/* Google Maps embed */}
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-lg lg:col-span-3">
              <iframe
                src="https://maps.google.com/maps?q=Rodovia+GO-060,+Km+34.9,+Santa+B%C3%A1rbara+de+Goi%C3%A1s+-+GO,+75398-000&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Britago Mineração — Santa Bárbara de Goiás, GO"
                className="absolute inset-0 h-full w-full"
              />
              {/* Botão "Abrir no Google Maps" — abre app nativo no celular */}
              <a
                href="https://maps.google.com/maps?q=Rodovia+GO-060,+Km+34.9,+Santa+B%C3%A1rbara+de+Goi%C3%A1s+-+GO,+75398-000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir localização no Google Maps"
                className="absolute bottom-3 right-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-[#0A0E1A] shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <FiMapPin size={13} className="text-[#0F4C9F]" aria-hidden />
                Abrir no Google Maps
              </a>
            </div>

            {/* Card único unificado */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-[#7d7e80] bg-white shadow-sm lg:col-span-2">
              {/* Seção de contato */}
              <div className="flex flex-1 flex-col gap-4 p-5">
                {/* Endereço */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F4C9F]/8">
                    <FiMapPin size={15} className="text-[#0F4C9F]" aria-hidden />
                  </div>
                  <div>
                    <p className="mb-0.5 font-roboto text-sm font-semibold text-[#0A0E1A]">
                      Endereço
                    </p>
                    <p className="font-roboto text-sm leading-relaxed text-[#6C6F72]">
                      Rodovia GO-060, Km 34,9 — Zona Rural
                      <br />
                      Santa Bárbara de Goiás — GO
                      <br />
                      CEP 75398-000
                    </p>
                  </div>
                </div>

                <div className="h-px bg-[#F0F1F2]" />

                {/* Telefones em grid */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F4C9F]/8">
                    <FiPhone size={15} className="text-[#0F4C9F]" aria-hidden />
                  </div>
                  <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-0">
                    <div>
                      <p className="mb-1 font-roboto text-sm font-semibold text-[#0A0E1A]">
                        Comercial
                      </p>
                      <div className="flex flex-col gap-0.5">
                        <a
                          href="https://wa.me/5562999583612"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-roboto text-sm text-[#6C6F72] transition-colors duration-200 hover:text-[#0F4C9F]"
                        >
                          (62) 99958-3612
                        </a>
                        <a
                          href="https://wa.me/5562996953859"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-roboto text-sm text-[#6C6F72] transition-colors duration-200 hover:text-[#0F4C9F]"
                        >
                          (62) 99695-3859
                        </a>
                        <a
                          href="https://wa.me/5562999900876"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-roboto text-sm text-[#6C6F72] transition-colors duration-200 hover:text-[#0F4C9F]"
                        >
                          (62) 99990-0876
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 font-roboto text-sm font-semibold text-[#0A0E1A]">
                        Administrativo
                      </p>
                      <a
                        href="https://wa.me/5562996792640"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-roboto text-sm text-[#6C6F72] transition-colors duration-200 hover:text-[#0F4C9F]"
                      >
                        (62) 99679-2640
                      </a>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[#F0F1F2]" />

                {/* E-mail */}
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F4C9F]/8">
                    <FiMail size={15} className="text-[#0F4C9F]" aria-hidden />
                  </div>
                  <div>
                    <p className="mb-0.5 font-roboto text-sm font-semibold text-[#0A0E1A]">
                      E-mail
                    </p>
                    <a
                      href="mailto:comercial@britago.com.br"
                      className="block font-roboto text-sm text-[#6C6F72] transition-colors duration-200 hover:text-[#0F4C9F]"
                    >
                      comercial@britago.com.br
                    </a>
                    <a
                      href="mailto:rh@britago.com.br"
                      className="block font-roboto text-sm text-[#6C6F72] transition-colors duration-200 hover:text-[#0F4C9F]"
                    >
                      rh@britago.com.br
                    </a>
                  </div>
                </div>
              </div>

              {/* Seção de horários — bloco azul no rodapé do card */}
              <div className="bg-[#0F4C9F] px-5 py-4">
                <div className="mb-3 flex items-center gap-2">
                  <FiClock size={14} className="shrink-0 text-[#C4922A]" aria-hidden />
                  <p className="font-roboto text-sm font-semibold tracking-wide text-white">
                    Horário de atendimento
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { day: "Seg – Qui", hours: "07h–17h30" },
                    { day: "Sexta", hours: "07h–16h30" },
                    { day: "Sáb – Dom", hours: "Fechado" },
                  ].map(({ day, hours }) => (
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
        </motion.div>
      </div>
    </section>
  );
}
