"use client";

import { useRef, useState } from "react";
import { ARABIC_LETTERS } from "@/lib/constants/home-data";
import { Button } from "@/components/ui/Button";

export function AlphabetExplorer() {
  const [letter, setLetter] = useState(5);
  const gridRef = useRef<HTMLDivElement>(null);
  const selL = ARABIC_LETTERS[letter];

  function onGridKeyDown(e: React.KeyboardEvent) {
    let d = 0;
    if (e.key === "ArrowLeft") d = 1;
    else if (e.key === "ArrowRight") d = -1;
    else if (e.key === "ArrowUp") d = -7;
    else if (e.key === "ArrowDown") d = 7;
    else return;
    e.preventDefault();
    const next = (letter + d + 28) % 28;
    setLetter(next);
    const btn = gridRef.current?.querySelector<HTMLButtonElement>(`[data-i="${next}"]`);
    btn?.focus();
  }

  return (
    <div className="mx-auto max-w-[1180px] px-8 py-[76px]">
      <div className="mb-2.5 text-xs tracking-[0.16em] text-gold uppercase">Open classroom · No account needed</div>
      <h2 className="m-0 mb-2 text-4xl font-extrabold tracking-[-0.01em]">Every letter has a home in the mouth.</h2>
      <p className="mb-9 max-w-[560px] text-[16.5px] leading-[1.55] text-[#9FAAA3]">
        The 28 letters, each with its makhraj — the precise point it is born from. Tap any letter to meet it properly.
      </p>
      <div className="flex items-start gap-7 max-lg:flex-col">
        <div
          ref={gridRef}
          dir="rtl"
          role="group"
          aria-label="The 28 Arabic letters — use arrow keys to move between letters"
          className="grid flex-[1.05] grid-cols-7 gap-2 max-sm:grid-cols-4"
        >
          {ARABIC_LETTERS.map((l, i) => {
            const selected = i === letter;
            return (
              <button
                key={l.n}
                data-i={i}
                onClick={() => setLetter(i)}
                onKeyDown={onGridKeyDown}
                aria-label={`Letter ${l.n}`}
                aria-pressed={selected}
                className="flex aspect-square flex-col items-center justify-center gap-0.5 rounded-xl border p-0 hover:border-gold/55 focus-visible:outline-2 focus-visible:outline-teal"
                style={{
                  borderColor: selected ? "rgba(203,165,92,.6)" : "rgba(237,231,216,.1)",
                  background: selected ? "rgba(203,165,92,.14)" : "rgba(237,231,216,.03)",
                }}
              >
                <span
                  className="font-arabic-ui text-[26px] leading-none"
                  style={{ color: selected ? "#D9B96E" : "#EDE7D8" }}
                >
                  {l.c}
                </span>
                <span dir="ltr" className="text-[9.5px] tracking-[0.04em] text-[#9FAAA3]">
                  {l.n}
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex-1 rounded-[18px] border border-gold/[.22] bg-[#131D19] px-7 py-[26px]">
          <div className="mb-3.5 flex items-center justify-between">
            <div>
              <div className="text-2xl font-extrabold">
                {selL.n} <span className="text-sm font-normal text-[#9FAAA3]">/{selL.t}/</span>
              </div>
              <div className="mt-0.5 text-[12.5px] text-gold">{selL.g}</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-arabic-quran text-5xl leading-none text-[#EDE7D8]">{selL.c}</div>
              <button
                aria-label="Hear this letter"
                className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-[13px] text-teal"
              >
                ▶
              </button>
            </div>
          </div>
          <div className="mb-3.5 rounded-xl border border-[#EDE7D8]/[.08] bg-[repeating-linear-gradient(-45deg,#0D1512_0_10px,#101815_10px_20px)] p-4">
            <div className="mb-3 font-mono text-[10.5px] text-[#9FAAA3]">
              [ animated mouth cross-section — makhraj of {selL.n} · video/lottie drop ]
            </div>
            <div className="relative h-[26px]">
              <div className="absolute inset-x-0 top-[11px] h-0.5 rounded-sm bg-[#EDE7D8]/[.14]" />
              <div
                className="absolute top-[5px] -ml-[7px] h-3.5 w-3.5 rounded-full"
                style={{
                  left: selL.p,
                  background: "radial-gradient(circle at 40% 35%,#D9B96E,#B98F45)",
                  boxShadow: "0 0 0 4px rgba(203,165,92,.18)",
                }}
              />
            </div>
            <div className="flex justify-between text-[10px] tracking-[0.1em] text-[#9FAAA3] uppercase">
              <span>Throat</span>
              <span>Tongue</span>
              <span>Teeth</span>
              <span>Lips</span>
            </div>
          </div>
          <div className="mb-3 text-[14.5px] leading-[1.6] text-[#EDE7D8]">{selL.d}</div>
          <div className="mb-4 flex gap-2.5 rounded-[11px] border border-[#D99A3D]/25 bg-[#D99A3D]/[.08] px-3.5 py-3">
            <div className="mt-[5px] h-[7px] w-[7px] flex-none rotate-45 bg-[#D99A3D]" />
            <div className="text-[13.5px] leading-[1.55] text-[#D9B98A]">
              <strong className="text-[#D99A3D]">Watch for:</strong> {selL.m}
            </div>
          </div>
          <Button variant="ghost" className="w-full rounded-xl">
            <svg width="13" height="17" viewBox="0 0 17 22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
              <rect x="5.5" y="1.5" width="6" height="11" rx="3" />
              <path d="M2 10.5a6.5 6.5 0 0 0 13 0" />
              <line x1="8.5" y1="17" x2="8.5" y2="20.5" />
            </svg>
            Try it — repeat after the teacher
          </Button>
        </div>
      </div>
    </div>
  );
}
