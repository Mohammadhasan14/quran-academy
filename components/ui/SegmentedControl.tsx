"use client";

import { cn } from "@/lib/utils";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface SegmentedControlProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  arabic?: boolean;
  className?: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  arabic,
  className,
}: SegmentedControlProps<T>) {
  return (
    <div
      className={cn(
        "flex gap-0.5 rounded-[10px] bg-text/[.06] p-[3px]",
        className,
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "cursor-pointer rounded-lg border-none px-3.5 py-1.5 text-[13px] transition-colors",
            arabic && "font-arabic-ui",
            value === opt.value
              ? "bg-gold/[.16] text-gold-bright"
              : "bg-transparent text-text-muted",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
