import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/Sheet";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { NAV_LINKS } from "./constants";

interface HeaderMobileDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavClick: (href: string) => void;
}

export function HeaderMobileDrawer({ open, onOpenChange, onNavClick }: HeaderMobileDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-4/5 max-w-67.5 gap-0 border-l-britago-gray-light bg-white p-0 lg:hidden"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-britago-gray-light px-5 py-4">
          <SheetTitle asChild>
            <span className="flex items-center">
              <Image
                src="/assets/logo.png"
                alt="Britago"
                width={140}
                height={48}
                className="h-8 w-auto object-contain"
              />
            </span>
          </SheetTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="rounded text-britago-gray hover:bg-britago-primary/5 hover:text-britago-primary"
            aria-label="Fechar menu"
          >
            <FiX size={20} aria-hidden />
          </Button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Menu mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(link.href);
              }}
              className="rounded px-4 py-3 font-impact text-sm tracking-widest text-britago-primary uppercase transition-colors duration-200 hover:bg-britago-primary/5 hover:text-britago-secondary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="border-t border-britago-gray-light p-5">
          <Button asChild className="w-full justify-center rounded-lg px-5 py-3">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("#contato");
              }}
            >
              Solicitar Orçamento
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
