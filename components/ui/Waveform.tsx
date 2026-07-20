import { cn } from "@/lib/utils";

const HEIGHTS = [35, 70, 50, 88, 60, 78, 42, 66, 35, 68];

export function Waveform({
  bars = 8,
  playing = true,
  className,
  barClassName,
}: {
  bars?: number;
  playing?: boolean;
  className?: string;
  barClassName?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-end gap-[3px]", className)}
    >
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex-1 rounded-sm bg-teal/50",
            playing && "animate-[rw-breathe_1.8s_ease-in-out_infinite]",
            barClassName,
          )}
          style={{
            height: `${HEIGHTS[i % HEIGHTS.length]}%`,
            animationDelay: `${(i % HEIGHTS.length) * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
