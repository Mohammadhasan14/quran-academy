import { cn } from "@/lib/utils";

export function GirihDivider({ className, id }: { className?: string; id?: string }) {
  return (
    <div
      id={id}
      className={cn(
        "mx-auto flex max-w-[1180px] items-center gap-3 px-8",
        className,
      )}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/30" />
      <div className="h-2 w-2 rotate-45 border border-gold/60" />
      <div className="h-2 w-2 rotate-45 bg-gold/50" />
      <div className="h-2 w-2 rotate-45 border border-gold/60" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/30" />
    </div>
  );
}
