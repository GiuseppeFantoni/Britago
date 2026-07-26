"use client";

import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useHeaderScroll } from "./hooks/useHeaderScroll";
import { useMobileDrawer } from "./hooks/useMobileDrawer";
import { NAV_LINKS } from "./constants";

export function Header() {
  const scrolled = useHeaderScroll();
  const { open: drawerOpen, setOpen: setDrawerOpen } = useMobileDrawer();

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
            <button
              onClick={() => setDrawerOpen(true)}
              className={`rounded p-2 transition-colors lg:hidden ${
                scrolled
                  ? "text-britago-primary hover:bg-britago-primary/10"
                  : "text-white hover:bg-white/10"
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
              className="fixed top-0 right-0 bottom-0 z-50 flex w-72 flex-col border-l border-britago-gray-light bg-white lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-britago-gray-light px-5 py-4">
                <span className="font-impact text-lg tracking-widest text-britago-primary uppercase">
                  Britago <span className="text-britago-secondary">Mineração</span>
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="rounded p-2 text-britago-gray transition-colors hover:bg-britago-primary/5 hover:text-britago-primary"
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
                    className="rounded px-4 py-3 font-impact text-sm tracking-widest text-britago-primary uppercase transition-colors duration-200 hover:bg-britago-primary/5 hover:text-britago-secondary"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Drawer CTA */}
              <div className="border-t border-britago-gray-light p-5">
                <a
                  href="#contato"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contato");
                  }}
                  className="block w-full rounded-lg bg-britago-primary px-5 py-3 text-center font-impact text-sm tracking-widest text-white uppercase transition-colors duration-200 hover:bg-britago-primary-dark"
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
