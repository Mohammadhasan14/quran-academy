"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { appNavItems } from "@/lib/constants/nav-links";
import { AppNavIcon } from "@/components/ui/AppNavIcon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-surface text-text">
      <nav className="sticky top-0 hidden h-screen w-[220px] flex-none flex-col gap-1 border-r border-text/[.08] bg-surface-2 px-4 py-8 md:flex">
        <div className="mb-8 flex items-center justify-between px-2">
          <Link href="/" className="text-[15px] font-extrabold">
            The Digital Riwaq
          </Link>
          <ThemeToggle />
        </div>
        {appNavItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[14.5px] transition-colors",
                active ? "bg-gold/[.12] text-gold-bright" : "text-text-muted hover:text-text",
              )}
            >
              <AppNavIcon icon={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-1 flex-col pb-[76px] md:pb-0">
        {children}
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-text/[.08] bg-surface px-2 py-2.5 pb-[env(safe-area-inset-bottom)] md:hidden">
        {appNavItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-12 flex-col items-center gap-[3px] text-[11.5px]",
                active ? "text-gold" : "text-text-muted",
              )}
            >
              <AppNavIcon icon={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
