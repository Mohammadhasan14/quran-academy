"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Waveform } from "@/components/ui/Waveform";

const COPY = {
  "7": "Ḥā: friction from the middle of the throat — warmth without any scrape. This is the letter in \"ar-Raḥmān\".",
  h: "Hā: pure breath from the deepest throat, no friction at all. Most English \"h\" sounds live here.",
} as const;

export function Hero() {
  const [heard, setHeard] = useState<"7" | "h" | null>(null);

  return (
    <div className="mx-auto flex max-w-[1180px] items-center gap-16 px-8 pt-[84px] pb-[72px] max-lg:flex-col">
      <div className="min-w-0 flex-[1.15]">
        <div className="mb-5 inline-flex items-center gap-2 text-xs tracking-[0.16em] text-gold uppercase">
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          A school, not an app — enrollment open
        </div>
        <h1 className="m-0 text-[52px] leading-[1.12] font-extrabold tracking-[-0.01em] text-balance max-sm:text-4xl">
          Learn the art of Quran recitation from a master Qari.
        </h1>
        <p className="mt-5 max-w-[540px] text-[19px] leading-[1.55] text-[#9FAAA3]">
          Structured courses, live classes, and your teacher&apos;s ear on every submission — with an AI coach
          for the thousand repetitions in between. Tajweed, voice, Maqamat, and the path to ijazah.
        </p>
        <div className="mt-8 flex gap-3.5">
          <Button size="lg">Start learning free</Button>
          <Button size="lg" variant="outline">
            See the method ↓
          </Button>
        </div>
        <div className="mt-6 text-[13.5px] text-[#9FAAA3]">
          No account needed to begin — the lessons below are open.{" "}
          <span className="text-gold">Listening is free forever.</span>
        </div>
      </div>

      <div className="min-w-0 flex-[0.85]">
        <div className="rounded-[18px] border border-gold/[.22] bg-[#131D19] px-[30px] py-7">
          <div className="mb-1.5 text-[11px] tracking-[0.16em] text-gold uppercase">
            Your first lesson · 20 seconds
          </div>
          <div className="mb-1 text-[21px] font-bold">Can you hear the difference?</div>
          <div className="mb-[22px] text-sm leading-[1.5] text-[#9FAAA3]">
            Two letters English merges into one &quot;h&quot;. A reciter never does.
          </div>
          <div className="flex gap-3.5">
            <button
              onClick={() => setHeard("7")}
              className="flex-1 cursor-pointer rounded-2xl border px-0 pt-[18px] pb-3.5 text-center hover:border-gold/60"
              style={{
                borderColor: heard === "7" ? "rgba(203,165,92,.6)" : "rgba(237,231,216,.12)",
                background: heard === "7" ? "rgba(203,165,92,.08)" : "transparent",
              }}
            >
              <div className="font-arabic-ui text-[40px] leading-none text-[#EDE7D8]">ح</div>
              <div className="mt-2 text-xs text-[#9FAAA3]">Ḥā — from the throat</div>
              <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-teal">▶ listen</div>
            </button>
            <button
              onClick={() => setHeard("h")}
              className="flex-1 cursor-pointer rounded-2xl border px-0 pt-[18px] pb-3.5 text-center hover:border-gold/60"
              style={{
                borderColor: heard === "h" ? "rgba(203,165,92,.6)" : "rgba(237,231,216,.12)",
                background: heard === "h" ? "rgba(203,165,92,.08)" : "transparent",
              }}
            >
              <div className="font-arabic-ui text-[40px] leading-none text-[#EDE7D8]">ه</div>
              <div className="mt-2 text-xs text-[#9FAAA3]">Hā — a soft breath</div>
              <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-teal">▶ listen</div>
            </button>
          </div>
          <Waveform className="my-[18px] h-[26px]" playing={heard !== null} />
          <div className="min-h-[38px] text-[13px] leading-[1.5] text-[#9FAAA3]">
            {heard ? COPY[heard] : "Tap a letter to hear it. Lesson 2 of Foundations trains your ear to separate them for good."}
          </div>
        </div>
      </div>
    </div>
  );
}
