"use client";

import { cn } from "@/lib/utils";

export function PlayButton({
  playing,
  onClick,
  size = 48,
  label = "Play or pause",
  className,
}: {
  playing?: boolean;
  onClick?: () => void;
  size?: number;
  label?: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{ width: size, height: size }}
      className={cn(
        "flex flex-none cursor-pointer items-center justify-center rounded-full border border-gold/45 bg-gold/[.12] text-sm text-gold focus-visible:outline-2 focus-visible:outline-teal",
        className,
      )}
    >
      {playing ? "❚❚" : "▶"}
    </button>
  );
}
