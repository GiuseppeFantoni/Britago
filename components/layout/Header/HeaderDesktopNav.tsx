import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "./constants";

interface HeaderDesktopNavProps {
  scrolled: boolean;
  drawerOpen: boolean;
  onMenuClick: () => void;
  onNavClick: (href: string) => void;
}

export function HeaderDesktopNav({
  scrolled,
  drawerOpen,
  onMenuClick,
  onNavClick,
}: HeaderDesktopNavProps) {
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md shadow-black/8" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center"
            aria-label="Britago — Início"
          >
            <Image
              src="/assets/logo.png"
              alt="Britago"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(link.href);
                }}
                className={`group relative font-impact text-sm tracking-widest uppercase transition-colors duration-200 ${
                  scrolled
                    ? "text-britago-primary hover:text-britago-secondary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-britago-secondary" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Mobile hamburger — only on small screens */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className={`rounded lg:hidden ${
              scrolled
                ? "text-britago-primary hover:bg-britago-primary/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Abrir menu"
            aria-expanded={drawerOpen}
          >
            <FiMenu size={24} aria-hidden />
          </Button>
        </div>
      </div>
    </header>
  );
}
