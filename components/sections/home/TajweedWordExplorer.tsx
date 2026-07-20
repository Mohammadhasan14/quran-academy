"use client";

import { useState } from "react";
import { TAJWEED_WORDS } from "@/lib/constants/home-data";
import { cn } from "@/lib/utils";

const SPEEDS = [0.5, 0.75, 1] as const;

export function TajweedWordExplorer() {
  const [word, setWord] = useState(0);
  const [speed, setSpeed] = useState<number>(1);
  const selW = TAJWEED_WORDS[word];

  return (
    <div className="border-y border-[#EDE7D8]/[.06] bg-[#0D1512]">
      <div className="mx-auto max-w-[1180px] px-8 py-[76px]">
        <div className="mb-2.5 text-xs tracking-[0.16em] text-gold uppercase">Open classroom · Tajweed, made visible</div>
        <h2 className="m-0 mb-2 text-4xl font-extrabold tracking-[-0.01em]">One word can carry three rules.</h2>
        <p className="mb-[26px] max-w-[560px] text-[16.5px] leading-[1.55] text-[#9FAAA3]">
          Pick a word. Every rule it carries lights up with its own pattern — and a plain-English reason why.
        </p>

        <div className="mb-[26px] flex gap-2.5">
          {TAJWEED_WORDS.map((w, i) => {
            const selected = i === word;
            return (
              <button
                key={w.tr}
                onClick={() => setWord(i)}
                aria-label={`Explore the word ${w.tr}`}
                className="flex h-11 cursor-pointer items-center gap-2.5 rounded-xl border px-4.5 hover:border-gold/55 focus-visible:outline-2 focus-visible:outline-teal"
                style={{
                  borderColor: selected ? "rgba(203,165,92,.6)" : "rgba(237,231,216,.12)",
                  background: selected ? "rgba(203,165,92,.14)" : "transparent",
                }}
              >
                <span dir="rtl" className="font-arabic-ui text-[19px]" style={{ color: selected ? "#D9B96E" : "#EDE7D8" }}>
                  {w.ar}
                </span>
                <span className="text-xs text-[#9FAAA3]">{w.tr}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-stretch gap-7 max-lg:flex-col">
          <div className="flex flex-1 flex-col items-center justify-center rounded-[18px] border border-gold/[.22] bg-[#0A100E] px-[30px] py-[34px] text-center">
            <div dir="rtl" className="font-arabic-quran pb-[30px] text-6xl leading-[1.6] text-[#EDE7D8]">
              {selW.ar}
            </div>
            <div className="text-sm text-[#9FAAA3]">{selW.gloss}</div>
            <div className="mt-6 flex items-center gap-2.5">
              <button
                aria-label="Play word"
                className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none text-sm text-[#EDE7D8]"
                style={{ background: "linear-gradient(160deg,#2E8C7E,#1E6B60)" }}
              >
                ▶
              </button>
              {SPEEDS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className="h-[34px] cursor-pointer rounded-lg border px-3.5 text-[12.5px] font-bold"
                  style={{
                    borderColor: speed === s ? "rgba(203,165,92,.6)" : "rgba(237,231,216,.14)",
                    background: speed === s ? "rgba(203,165,92,.14)" : "transparent",
                    color: speed === s ? "#D9B96E" : "#9FAAA3",
                  }}
                >
                  {s}×
                </button>
              ))}
            </div>
            <div className="mt-2 text-[11.5px] text-[#9FAAA3]">pitch-preserved at every speed</div>
            <div className="mt-[22px] flex w-full gap-2.5">
              <button className="flex-1 rounded-[11px] border border-teal/35 bg-teal/[.08] py-3 text-[13px] font-bold text-teal">
                ▶ Correct
              </button>
              <button className="flex-1 rounded-[11px] border border-[#D99A3D]/35 bg-[#D99A3D]/[.07] py-3 text-[13px] font-bold text-[#D99A3D]">
                ▶ Common mistake
              </button>
            </div>
            <button className="mt-2.5 h-[46px] w-full rounded-[11px] border border-gold/40 bg-gold/10 text-[13.5px] font-bold text-gold-bright hover:bg-gold/[.16]">
              Repeat after the teacher
            </button>
          </div>

          <div className="flex flex-[1.1] flex-col gap-3">
            {selW.rules.map((r) => (
              <div
                key={r.name}
                className="flex items-start gap-4 rounded-2xl border border-[#EDE7D8]/[.09] bg-[#131D19] px-5 py-4"
              >
                <div
                  dir="rtl"
                  className="font-arabic-quran min-w-16 flex-none pb-0.5 text-center text-3xl leading-[1.7]"
                  style={{ color: r.col, borderBottom: r.bb !== "0" ? r.bb : undefined }}
                >
                  {r.frag}
                </div>
                <div>
                  <div className="text-[14.5px] font-bold" style={{ color: r.col }}>
                    {r.name}
                  </div>
                  <div className="mt-[3px] text-[13.5px] leading-[1.55] text-[#B9C2BB]">{r.txt}</div>
                </div>
              </div>
            ))}
            <div className={cn("px-1 text-xs text-[#9FAAA3]")}>
              Each rule keeps its own underline pattern everywhere in the academy — color is never the only signal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
