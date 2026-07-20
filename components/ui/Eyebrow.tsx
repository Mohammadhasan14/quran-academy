import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mb-2.5 flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-gold uppercase",
        className,
      )}
      {...props}
    />
  );
}
