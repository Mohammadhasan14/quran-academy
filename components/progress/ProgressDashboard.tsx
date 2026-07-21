"use client";

import { useState } from "react";
import {
  LETTERS_CH,
  LETTERS_MASTERY,
  LETTERS_NM,
  LETTER_TIPS,
  PRACTICE_HEATMAP,
  RULE_FAMILIES,
  letterColor,
  ruleColor,
} from "@/lib/constants/progress-data";

export function ProgressDashboard() {
  const [tile, setTile] = useState(20);

  const tileMsg =
    LETTER_TIPS[tile] ??
    `${LETTERS_NM[tile]} — ${LETTERS_MASTERY[tile]}% settled. ${
      LETTERS_MASTERY[tile] >= 80
        ? "Confirmed across recent sessions; it holds under speed."
        : "Improving with each session — it appears in your drills when it wavers."
    }`;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 text-text md:px-10 md:py-10">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="mb-1 text-[11px] tracking-[0.14em] text-gold uppercase">Progress</div>
          <div className="text-[23px] font-extrabold">Your recitation is strengthening, Amina.</div>
        </div>
        <div className="flex gap-4.5 text-[13px] text-text-muted">
          <span><strong className="text-teal-hover">Today:</strong> 12 min planned</span>
          <span><strong className="text-gold-bright">Attention:</strong> qāf depth, madd in v.3</span>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-5 lg:flex-row">
        <div className="min-w-0 flex-[1.25] rounded-2xl border border-text/[.08] bg-surface-2 p-5.5">
          <div className="mb-3.5 flex flex-wrap items-baseline justify-between gap-2">
            <div className="text-[14.5px] font-extrabold">Letter mastery — all 28</div>
            <div className="text-[11px] text-text-muted">amber = forming · green = settled</div>
          </div>
          <div dir="rtl" className="grid grid-cols-4 gap-1.5 sm:grid-cols-7">
            {LETTERS_CH.map((ch, i) => {
              const v = LETTERS_MASTERY[i];
              const k = letterColor(v);
              const selected = i === tile;
              return (
                <button
                  key={i}
                  onClick={() => setTile(i)}
                  aria-label={`${LETTERS_NM[i]}, ${v} percent settled`}
                  className="flex aspect-square flex-col items-center justify-center gap-px rounded-[10px] border p-0 hover:border-gold/60 focus-visible:outline-2 focus-visible:outline-teal"
                  style={{ background: selected ? "rgba(203,165,92,.16)" : k.bg, borderColor: selected ? "rgba(203,165,92,.7)" : k.bd }}
                >
                  <span className="font-arabic-ui text-xl leading-none" style={{ color: k.c }}>{ch}</span>
                  <span dir="ltr" className="text-[8.5px]" style={{ color: k.pc }}>{v}%</span>
                </button>
              );
            })}
          </div>
          <div aria-live="polite" className="mt-3 min-h-[34px] text-[13px] leading-[1.5] text-[#B9C2BB]">{tileMsg}</div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          <div className="rounded-2xl border border-text/[.08] bg-surface-2 p-5.5">
            <div className="mb-3 text-[14.5px] font-extrabold">Rule families</div>
            <div className="flex flex-col gap-2.5">
              {RULE_FAMILIES.map((r) => {
                const col = ruleColor(r.v);
                return (
                  <div key={r.name} className="flex items-center gap-3">
                    <div className="w-[110px] flex-none text-[12.5px] text-[#B9C2BB]">{r.name}</div>
                    <div className="relative h-2 flex-1 rounded-sm bg-text/[.08]">
                      <div className="absolute inset-y-0 left-0 rounded-sm" style={{ width: `${r.v}%`, background: col }} />
                    </div>
                    <div className="w-[34px] flex-none text-right text-[11px]" style={{ color: col }}>{r.v}%</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4.5 rounded-2xl border border-text/[.08] bg-surface-2 p-5.5 xl:flex-row">
            <svg width="264" height="153" viewBox="-52 0 294 170" className="h-auto w-full max-w-[264px] xl:w-[264px] xl:flex-none" role="img" aria-label="Skill radar: makharij 78, rules 64, fluency 55, breath 48, maqamat 20, memorization 60 percent">
              <g stroke="rgba(237,231,216,.1)" fill="none">
                <polygon points="95,15 160,52 160,118 95,155 30,118 30,52" />
                <polygon points="95,45 134,67 134,103 95,125 56,103 56,67" />
                <polygon points="95,75 108,82 108,88 95,95 82,88 82,82" />
              </g>
              <polygon points="95,30 143,60 128,105 87,138 45,105 52,63" fill="rgba(82,179,164,.18)" stroke="#52B3A4" strokeWidth={2} />
              <g fill="#9FAAA3" fontSize="9.5" fontFamily="Alegreya Sans">
                <text x="95" y="10" textAnchor="middle">Makharij</text>
                <text x="166" y="50">Rules</text>
                <text x="166" y="124">Fluency</text>
                <text x="95" y="167" textAnchor="middle">Breath · Voice</text>
                <text x="24" y="124" textAnchor="end">Maqamat</text>
                <text x="24" y="50" textAnchor="end">Memorization</text>
              </g>
            </svg>
            <div className="min-w-0 flex-1 break-words text-[12.5px] leading-[1.7] text-text-muted">
              Strongest: <span className="text-teal-hover">makharij</span>.<br />
              Growing: rules, memorization.<br />
              Awaiting you: <span className="text-gold-bright">maqamat</span> — opens at Stage 3.
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-5 lg:flex-row">
        <div className="flex-1 rounded-2xl border border-text/[.08] bg-surface-2 p-5.5">
          <div className="mb-3 text-[14.5px] font-extrabold">Practice — last 12 weeks</div>
          <div className="flex gap-[3px]">
            {PRACTICE_HEATMAP.map((week, wi) => (
              <div key={wi} className="flex flex-1 flex-col gap-[3px]">
                {week.map((c, di) => (
                  <div key={di} className="aspect-square rounded-[3px]" style={{ background: c }} />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[10.5px] text-[#5F6B64]">
            <span>April</span><span>May</span><span>June</span><span>July</span>
          </div>
        </div>

        <div className="flex-[1.4] rounded-2xl border border-text/[.08] bg-surface-2 p-5.5">
          <div className="mb-2.5 flex flex-wrap items-baseline gap-x-4 gap-y-1.5">
            <div className="text-[14.5px] font-extrabold">Trends</div>
            <div className="flex flex-wrap gap-x-3.5 gap-y-1 text-[11px]">
              <span className="text-teal">— accuracy</span>
              <span className="text-gold-bright">— fluency rate</span>
              <span style={{ color: "#9D8CE0" }}>— phrase length</span>
              <span style={{ color: "#5C9BD6" }}>— pitch stability</span>
            </div>
          </div>
          <svg viewBox="0 0 520 130" width="100%" role="img" aria-label="Six-week trend lines, all rising gently">
            <g stroke="rgba(237,231,216,.07)">
              <line x1="0" y1="32" x2="520" y2="32" /><line x1="0" y1="65" x2="520" y2="65" /><line x1="0" y1="98" x2="520" y2="98" />
            </g>
            <path d="M10,86 C90,80 150,70 240,58 S420,34 510,26" fill="none" stroke="#52B3A4" strokeWidth={2.5} strokeLinecap="round" />
            <path d="M10,102 C100,98 180,88 270,78 S430,60 510,52" fill="none" stroke="#D9B96E" strokeWidth={2} strokeLinecap="round" />
            <path d="M10,110 C110,108 200,100 300,94 S440,80 510,74" fill="none" stroke="#9D8CE0" strokeWidth={1.8} strokeLinecap="round" opacity={0.8} />
            <path d="M10,116 C120,114 220,110 320,104 S450,96 510,92" fill="none" stroke="#5C9BD6" strokeWidth={1.8} strokeLinecap="round" opacity={0.8} />
            <g fill="#5F6B64" fontSize="9" fontFamily="Alegreya Sans"><text x="10" y="127">Week 1</text><text x="480" y="127">Week 6</text></g>
          </svg>
        </div>
      </div>

      <div className="rounded-2xl border border-gold/20 bg-surface-2 p-5.5">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <div className="text-[14.5px] font-extrabold">Your journey — the road of the reciters</div>
          <div className="text-[11.5px] text-text-muted">stations are milestones, confirmed by your teacher&apos;s ear</div>
        </div>
        <svg viewBox="0 0 1140 150" width="100%" role="img" aria-label="Caravan route from Madinah, current position past Cairo, toward Damascus, Baghdad and the ijazah">
          <path d="M40,110 C180,60 300,120 430,85 S680,40 810,75 S1020,110 1100,55" fill="none" stroke="rgba(203,165,92,.45)" strokeWidth={1.5} strokeDasharray="1 7" strokeLinecap="round" />
          <rect x="34" y="104" width="12" height="12" transform="rotate(45 40 110)" fill="#CBA55C" />
          <text x="40" y="140" textAnchor="middle" fill="#B9C2BB" fontSize="11" fontFamily="Alegreya Sans" fontWeight="700">Madinah</text>
          <text x="40" y="94" textAnchor="middle" fill="#5F6B64" fontSize="9.5" fontFamily="Alegreya Sans">Foundations · done</text>

          <rect x="254" y="82" width="12" height="12" transform="rotate(45 260 88)" fill="#CBA55C" />
          <text x="260" y="118" textAnchor="middle" fill="#B9C2BB" fontSize="11" fontFamily="Alegreya Sans" fontWeight="700">Makkah</text>
          <text x="260" y="72" textAnchor="middle" fill="#5F6B64" fontSize="9.5" fontFamily="Alegreya Sans">Fatiha mastered</text>

          <rect x="424" y="79" width="12" height="12" transform="rotate(45 430 85)" fill="none" stroke="#D9B96E" strokeWidth={2} />
          <circle cx="430" cy="85" r="16" fill="none" stroke="rgba(217,185,110,.35)" strokeWidth={1.5}>
            <animate attributeName="r" values="12;19;12" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="430" y="120" textAnchor="middle" fill="#D9B96E" fontSize="11.5" fontFamily="Alegreya Sans" fontWeight="800">Cairo — you are here</text>
          <text x="430" y="69" textAnchor="middle" fill="#9FAAA3" fontSize="9.5" fontFamily="Alegreya Sans">The nasal family · in study</text>

          <rect x="644" y="46" width="12" height="12" transform="rotate(45 650 52)" fill="none" stroke="rgba(237,231,216,.25)" strokeWidth={1.5} />
          <text x="650" y="84" textAnchor="middle" fill="#5F6B64" fontSize="11" fontFamily="Alegreya Sans">Damascus</text>
          <text x="650" y="36" textAnchor="middle" fill="#5F6B64" fontSize="9.5" fontFamily="Alegreya Sans">The Voice</text>

          <rect x="804" y="69" width="12" height="12" transform="rotate(45 810 75)" fill="none" stroke="rgba(237,231,216,.25)" strokeWidth={1.5} />
          <text x="810" y="107" textAnchor="middle" fill="#5F6B64" fontSize="11" fontFamily="Alegreya Sans">Baghdad</text>
          <text x="810" y="59" textAnchor="middle" fill="#5F6B64" fontSize="9.5" fontFamily="Alegreya Sans">Maqamat</text>

          <rect x="1094" y="49" width="12" height="12" transform="rotate(45 1100 55)" fill="none" stroke="rgba(203,165,92,.6)" strokeWidth={2} />
          <text x="1100" y="87" textAnchor="middle" fill="#CBA55C" fontSize="11" fontFamily="Alegreya Sans" fontWeight="700">Ijazah</text>
          <text x="1100" y="39" textAnchor="middle" fill="#5F6B64" fontSize="9.5" fontFamily="Alegreya Sans">the chain continues</text>
        </svg>
      </div>
    </div>
  );
}
