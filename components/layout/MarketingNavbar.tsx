"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { marketingNavLinks } from "@/lib/constants/nav-links";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function MarketingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showCtaBar, setShowCtaBar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setShowCtaBar(window.scrollY > 620);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur transition-[background-color,border-color,box-shadow,padding] duration-300",
          scrolled
            ? "border-[#EDE7D8]/[.09] bg-[#0A100E]/95 shadow-lg shadow-black/30"
            : "border-[#EDE7D8]/[.07] bg-[#0A100E]/90"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1180px] items-center justify-between px-4 transition-[padding] duration-300 sm:px-6 lg:px-8",
            scrolled ? "py-3" : "py-[18px]"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-[26px] w-[26px] flex-none rotate-45 items-center justify-center border-[1.5px] border-[#CBA55C] sm:h-[30px] sm:w-[30px]">
              <div className="h-2.5 w-2.5 -rotate-45 bg-[#CBA55C]/50 sm:h-3 sm:w-3" />
            </div>
            <div>
              <div className="text-[15px] font-extrabold tracking-[0.01em] text-[#EDE7D8] sm:text-[17px]">
                The Digital Riwaq
              </div>
              <div className="text-[9px] tracking-[0.18em] text-[#9FAAA3] uppercase sm:text-[10px]">
                Recitation Academy
              </div>
            </div>
          </Link>
          <div className="hidden items-center gap-7 text-[14.5px] font-medium text-[#B9C2BB] md:flex">
            {marketingNavLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[#B9C2BB] hover:text-[#EDE7D8]">
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3.5 md:flex">
            <Link href="/auth/sign-in" className="cursor-pointer text-[14.5px] font-medium text-[#B9C2BB] hover:text-[#EDE7D8]">
              Sign in
            </Link>
            <Button size="sm" className="h-10 rounded-[11px]">
              Start learning free
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMenuOpen(true)}
            className="-mr-2 flex h-11 w-11 flex-none items-center justify-center rounded-lg text-[#EDE7D8] focus-visible:outline-2 focus-visible:outline-gold md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[100] md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            "absolute inset-y-0 right-0 flex h-full w-[84%] max-w-[360px] flex-col border-l border-[#EDE7D8]/[.08] bg-[#0A100E] px-6 py-5 shadow-2xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-[26px] w-[26px] rotate-45 items-center justify-center border-[1.5px] border-[#CBA55C]">
                <div className="h-2.5 w-2.5 -rotate-45 bg-[#CBA55C]/50" />
              </div>
              <div className="text-[15px] font-extrabold text-[#EDE7D8]">The Digital Riwaq</div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 flex-none items-center justify-center rounded-lg text-[#B9C2BB] hover:text-[#EDE7D8] focus-visible:outline-2 focus-visible:outline-gold"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-1">
            {marketingNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3.5 text-[15.5px] font-medium text-[#B9C2BB] hover:bg-white/[.04] hover:text-[#EDE7D8]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-[#EDE7D8]/[.08] pt-5">
            <Link
              href="/auth/sign-in"
              onClick={() => setMenuOpen(false)}
              className="py-2 text-center text-[14.5px] font-medium text-[#B9C2BB] hover:text-[#EDE7D8]"
            >
              Sign in
            </Link>
            <Button size="md" className="w-full rounded-[11px]" onClick={() => setMenuOpen(false)}>
              Start learning free
            </Button>
          </div>
        </div>
      </div>

      {showCtaBar && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#CBA55C]/30 bg-[#0A100E]/92 backdrop-blur">
          <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-2.5 px-4 py-3 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-2.5 lg:px-8">
            <div className="text-center text-[13px] text-[#9FAAA3] sm:text-left sm:text-[13.5px]">
              The flagship course is free, start to finish —{" "}
              <span className="font-bold text-[#EDE7D8]">Perfect Your Fatiha in 30 Days</span>
            </div>
            <Button size="sm" className="h-10 w-full flex-none rounded-[10px] text-[13.5px] sm:w-auto">
              Start learning free
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
