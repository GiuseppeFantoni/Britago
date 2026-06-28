import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

const SOCIAL = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/britago_/" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0F4C9F]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Col 1 — Endereço + Siga-nos */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
                <FiMapPin size={13} className="text-[#C4922A]" aria-hidden />
                Endereço
              </h3>
              <p className="font-roboto text-sm leading-relaxed text-white/60">
                Rodovia GO-060, Km 34,9 — Zona Rural
                <br />
                Santa Bárbara de Goiás — GO
                <br />
                CEP 75398-000
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-impact text-xs tracking-widest text-white uppercase">
                Siga-nos
              </h3>
              <div className="flex items-center gap-2">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white/50 transition-all duration-200 hover:border-white/50 hover:bg-white/10 hover:text-white"
                  >
                    <Icon size={15} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2 — Telefones */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
              <FiPhone size={13} className="text-[#C4922A]" aria-hidden />
              Telefones
            </h3>
            <div className="flex flex-col gap-3">
              <div>
                <p className="mb-1 font-roboto text-xs tracking-wider text-white/40 uppercase">
                  Comercial
                </p>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  <a
                    href="https://wa.me/5562999583612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    (62) 99958-3612
                  </a>
                  <span className="text-xs text-white/25">/</span>
                  <a
                    href="https://wa.me/5562996953859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    (62) 99695-3859
                  </a>
                  <span className="text-xs text-white/25">/</span>
                  <a
                    href="https://wa.me/5562999900876"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    (62) 99990-0876
                  </a>
                </div>
              </div>
              <div>
                <p className="mb-1 font-roboto text-xs tracking-wider text-white/40 uppercase">
                  Administrativo
                </p>
                <a
                  href="https://wa.me/5562996792640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
                >
                  (62) 99679-2640
                </a>
              </div>
            </div>
          </div>

          {/* Col 3 — E-mail */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
              <FiMail size={13} className="text-[#C4922A]" aria-hidden />
              E-mail
            </h3>
            <div className="flex flex-col gap-1">
              <a
                href="mailto:comercial@britago.com.br"
                className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                comercial@britago.com.br
              </a>
              <a
                href="mailto:rh@britago.com.br"
                className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                rh@britago.com.br
              </a>
            </div>
          </div>

          {/* Col 4 — Horários */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
              <FiClock size={13} className="text-[#C4922A]" aria-hidden />
              Horários
            </h3>
            <div className="flex flex-col gap-1">
              {[
                { day: "Segunda – Quinta", hours: "7h às 17h30" },
                { day: "Sexta-feira", hours: "7h às 16h30" },
                { day: "Sábado – Domingo", hours: "Fechado" },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center gap-2">
                  <span className="w-20 shrink-0 font-roboto text-xs text-white/40">{day}</span>
                  <span className="text-xs text-white/25">·</span>
                  <span
                    className={`font-roboto text-xs font-medium ${hours === "Fechado" ? "text-red-300/80" : "text-white/60"}`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <p className="text-center font-roboto text-xs text-white/30">
            © {new Date().getFullYear()} Britago. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
