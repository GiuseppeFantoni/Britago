import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/config/site";

const SOCIAL = [
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/britago_/" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-britago-primary">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Col 1 — Endereço + Siga-nos */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
                <FiMapPin size={13} className="text-britago-secondary" aria-hidden />
                Endereço
              </h3>
              <p className="font-roboto text-sm leading-relaxed text-white/60">
                {CONTACT.address.street}
                <br />
                {CONTACT.address.city} — {CONTACT.address.state}
                <br />
                CEP {CONTACT.address.zip}
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-impact text-xs tracking-widest text-white uppercase">
                Siga-nos
              </h3>
              <div className="flex items-center gap-2">
                {SOCIAL.map(({ icon: Icon, label, href }) => (
                  <Button
                    key={label}
                    asChild
                    variant="ghost"
                    size="icon"
                    className="rounded-lg border border-white/20 text-white/50 hover:border-white/50 hover:bg-white/10 hover:text-white"
                  >
                    <a href={href} aria-label={label}>
                      <Icon size={15} aria-hidden />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2 — Telefones */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
              <FiPhone size={13} className="text-britago-secondary" aria-hidden />
              Telefones
            </h3>
            <div className="flex flex-col gap-3">
              <div>
                <p className="mb-1 font-roboto text-xs tracking-wider text-white/40 uppercase">
                  Comercial
                </p>
                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                  {CONTACT.phones.commercial.map((phone, i) => (
                    <span key={phone.wa} className="flex items-center gap-1.5">
                      <a
                        href={`https://wa.me/${phone.wa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
                      >
                        {phone.display}
                      </a>
                      {i < CONTACT.phones.commercial.length - 1 && (
                        <span className="text-xs text-white/25">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — E-mail */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
              <FiMail size={13} className="text-britago-secondary" aria-hidden />
              E-mail
            </h3>
            <div className="flex flex-col gap-1">
              <a
                href={`mailto:${CONTACT.emails.commercial}`}
                className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {CONTACT.emails.commercial}
              </a>
              <a
                href={`mailto:${CONTACT.emails.hr}`}
                className="font-roboto text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                {CONTACT.emails.hr}
              </a>
            </div>
          </div>

          {/* Col 4 — Horários */}
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-impact text-xs tracking-widest text-white uppercase">
              <FiClock size={13} className="text-britago-secondary" aria-hidden />
              Horários
            </h3>
            <div className="flex flex-col gap-1">
              {CONTACT.hours.map(({ day, hours }) => (
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
