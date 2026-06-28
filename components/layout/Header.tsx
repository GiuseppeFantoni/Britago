"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sustentabilidade", href: "#sustentabilidade" },
  { label: "Nossa Cultura", href: "#cultura" },
  { label: "Equipe", href: "#equipe" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
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
                    handleNavClick(link.href);
                  }}
                  className={`group relative font-impact text-sm tracking-widest uppercase transition-colors duration-200 ${
                    scrolled
                      ? "text-[#0F4C9F] hover:text-[#C4922A]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                      scrolled ? "bg-[#C4922A]" : "bg-white"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* Mobile hamburger — only on small screens */}
            <button
              onClick={() => setDrawerOpen(true)}
              className={`rounded p-2 transition-colors lg:hidden ${
                scrolled ? "text-[#0F4C9F] hover:bg-[#0F4C9F]/10" : "text-white hover:bg-white/10"
              }`}
              aria-label="Abrir menu"
              aria-expanded={drawerOpen}
            >
              <FiMenu size={24} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — only visible on small screens */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setDrawerOpen(false)}
              aria-hidden
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-72 flex-col border-l border-[#DFE0E1] bg-white lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-[#DFE0E1] px-5 py-4">
                <span className="font-impact text-lg tracking-widest text-[#0F4C9F] uppercase">
                  Estudo <span className="text-[#C4922A]">Mineracao</span>
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="rounded p-2 text-[#6C6F72] transition-colors hover:bg-[#0F4C9F]/5 hover:text-[#0F4C9F]"
                  aria-label="Fechar menu"
                >
                  <FiX size={20} aria-hidden />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Menu mobile">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="rounded px-4 py-3 font-impact text-sm tracking-widest text-[#0F4C9F] uppercase transition-colors duration-200 hover:bg-[#0F4C9F]/5 hover:text-[#C4922A]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="border-t border-[#DFE0E1] p-5">
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contato");
                  }}
                  className="block w-full rounded-lg bg-[#0F4C9F] px-5 py-3 text-center font-impact text-sm tracking-widest text-white uppercase transition-colors duration-200 hover:bg-[#0A3575]"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
