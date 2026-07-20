"use client";

import Link from "next/link";
import { marketingNavLinks } from "@/lib/constants/nav-links";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

export function MarketingNavbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 620);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="border-b border-[#EDE7D8]/[.07] bg-[#0A100E]/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-[30px] w-[30px] rotate-45 items-center justify-center border-[1.5px] border-[#CBA55C]">
              <div className="h-3 w-3 -rotate-45 bg-[#CBA55C]/50" />
            </div>
            <div>
              <div className="text-[17px] font-extrabold tracking-[0.01em] text-[#EDE7D8]">
                The Digital Riwaq
              </div>
              <div className="text-[10px] tracking-[0.18em] text-[#9FAAA3] uppercase">
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
          <div className="flex items-center gap-3.5">
            <Link href="/auth/sign-in" className="cursor-pointer text-[14.5px] font-medium text-[#B9C2BB] hover:text-[#EDE7D8]">
              Sign in
            </Link>
            <Button size="sm" className="h-10 rounded-[11px]">
              Start learning free
            </Button>
          </div>
        </div>
      </div>

      {sticky && (
        <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#CBA55C]/30 bg-[#0A100E]/92 backdrop-blur">
          <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-8 py-2.5">
            <div className="text-[13.5px] text-[#9FAAA3]">
              The flagship course is free, start to finish —{" "}
              <span className="font-bold text-[#EDE7D8]">Perfect Your Fatiha in 30 Days</span>
            </div>
            <Button size="sm" className="h-10 flex-none rounded-[10px] text-[13.5px]">
              Start learning free
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
