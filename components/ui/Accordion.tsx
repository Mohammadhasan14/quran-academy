"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  q: string;
  a: string;
}

export function Accordion({
  items,
  className,
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number>(-1);

  return (
    <div className={cn("flex max-w-[820px] flex-col gap-2.5", className)}>
      {items.map((item, i) => (
        <div
          key={item.q}
          className="overflow-hidden rounded-2xl border border-[#20241f]/10 bg-[#FDFBF4]"
        >
          <button
            onClick={() => setOpen((cur) => (cur === i ? -1 : i))}
            className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-5 py-4 text-left"
          >
            <span className="text-[15.5px] font-bold text-[#20241f]">{item.q}</span>
            <span className="flex-none text-base text-[#A8853E]">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="max-w-[700px] px-5 pb-[18px] text-[14.5px] leading-[1.65] text-[#33403B]">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
