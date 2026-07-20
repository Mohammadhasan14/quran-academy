import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-[14px] border border-dashed border-gold/30 bg-[repeating-linear-gradient(-45deg,#0D1512_0_10px,#101815_10px_20px)] p-4 text-center font-mono text-[11px] leading-relaxed text-text-muted",
        className,
      )}
    >
      {label}
    </div>
  );
}
