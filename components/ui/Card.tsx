import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gold/[.22] bg-surface-2 p-6",
        className,
      )}
      {...props}
    />
  );
}
