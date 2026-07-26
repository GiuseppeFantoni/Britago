"use client";

import { useHeaderScroll } from "./hooks/useHeaderScroll";
import { useMobileDrawer } from "./hooks/useMobileDrawer";
import { HeaderDesktopNav } from "./HeaderDesktopNav";
import { HeaderMobileDrawer } from "./HeaderMobileDrawer";

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
      <HeaderDesktopNav
        scrolled={scrolled}
        drawerOpen={drawerOpen}
        onMenuClick={() => setDrawerOpen(true)}
        onNavClick={handleNavClick}
      />
      <HeaderMobileDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onNavClick={handleNavClick}
      />
    </>
  );
}
