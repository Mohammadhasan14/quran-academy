"use client";

import { useState } from "react";
import { DIAGNOSES } from "@/lib/constants/home-data";

const MARKERS = [
  { left: "14%", label: "Flag at 0:12", glyph: "!" },
  { left: "48%", label: "Flag at 0:41", glyph: "!" },
  { left: "79%", label: "Flag at 1:07", glyph: "?" },
];

const BARS = [30, 55, 70, 45, 80, 60, 35, 72, 50, 66, 40, 75, 58, 32, 62, 48];

export function AICoachingDemo() {
  const [diag, setDiag] = useState(0);
  const selD = DIAGNOSES[diag];

  return (
    <div className="border-t border-[#20241F]/[.06] bg-[#EEE7D6] text-[#20241F]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-3.5 gap-y-2">
          <h2 className="m-0 text-[28px] font-extrabold tracking-[-0.01em] sm:text-4xl">An honest coach between lessons.</h2>
          <span className="rounded-full border border-[#D99A3D]/40 bg-[#D99A3D]/[.18] px-2.5 py-1 text-[11px] font-bold tracking-[0.12em] text-[#8B6A1F] uppercase">
            Staged sample
          </span>
        </div>
        <p className="mb-8 max-w-[640px] text-[15px] leading-[1.55] text-[#5A6159] sm:text-[16.5px]">
          After each practice, the AI marks what it heard — in amber, never red, always with its confidence stated.
          It never judges beauty; that belongs to your teacher. Tap a marker.
        </p>

        <div
          className="rounded-[18px] border border-[#A8853E]/25 bg-[#FDFBF4] px-5 py-5 sm:px-[30px] sm:py-[26px]"
          style={{ boxShadow: "0 2px 12px rgba(32,36,31,.06)" }}
        >
          <div className="mb-3 text-[13px] text-[#5A6159]">
            Your recitation · Al-Fatiha · 1:22 <span className="text-[#8B8778]">· analyzed on-device</span>
          </div>
          <div className="relative mb-1.5 h-16">
            <div className="absolute inset-0 flex items-center gap-0.5" aria-hidden="true">
              {BARS.map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#14655A]/40" style={{ height: `${h}%` }} />
              ))}
            </div>
            {MARKERS.map((m, i) => (
              <button
                key={i}
                onClick={() => setDiag(i)}
                aria-label={m.label}
                className="absolute -top-2 flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border-2 text-[11px] font-extrabold text-[#6B5426]"
                style={{
                  left: m.left,
                  borderColor: diag === i ? "#D99A3D" : "rgba(217,154,61,.55)",
                  background: diag === i ? "#EBC079" : "rgba(235,192,121,.55)",
                }}
              >
                {m.glyph}
              </button>
            ))}
          </div>
          <div className="mb-5 flex justify-between text-[11px] text-[#8B8778]">
            <span>0:00</span>
            <span>0:41</span>
            <span>1:22</span>
          </div>

          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="flex-[1.2]">
              <div
                className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold"
                style={{ background: selD.chipBg, borderColor: selD.chipBd, color: selD.chipC }}
              >
                {selD.band}
              </div>
              <div className="mb-1.5 text-[19px] font-bold">
                {selD.title} <span dir="rtl" className="font-arabic-quran text-2xl text-[#14655A]">{selD.ar}</span>
              </div>
              <div className="mb-2 text-[14.5px] leading-[1.6] text-[#33403B]">
                <strong className="text-[#20241F]">What happened:</strong> {selD.what}
              </div>
              <div className="text-[14.5px] leading-[1.6] text-[#33403B]">
                <strong className="text-[#20241F]">Why it matters:</strong> {selD.why}
              </div>
            </div>
            <div className="flex flex-[0.8] flex-col gap-2.5">
              <button className="h-[46px] rounded-xl border border-[#14655A]/35 bg-[#14655A]/[.07] text-[13.5px] font-bold text-[#14655A]">
                ▶ Hear the model recitation
              </button>
              <button className="h-[46px] rounded-xl border border-[#A8853E]/40 bg-[#A8853E]/[.08] text-[13.5px] font-bold text-[#8B6A1F]">
                + Add drill to tomorrow&apos;s plan
              </button>
              <div className="px-1 text-xs leading-[1.5] text-[#8B8778]">
                &quot;Unclear&quot; spots are exactly what your teacher settles in a Talaqqi review — the AI knows
                what it cannot hear.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
