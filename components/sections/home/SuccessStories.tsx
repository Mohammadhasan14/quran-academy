"use client";

import { useState } from "react";
import { SUCCESS_STORIES } from "@/lib/constants/home-data";

const WEEK1_BARS = [22, 48, 15, 52, 26, 12, 42, 18, 32, 14];
const WEEK6_BARS = [42, 72, 56, 86, 62, 48, 78, 54, 82, 60];

interface StoryState {
  ab: 0 | 1;
  on: boolean;
}

export function SuccessStories() {
  const [states, setStates] = useState<StoryState[]>(SUCCESS_STORIES.map(() => ({ ab: 0, on: false })));

  function setAb(i: number, v: 0 | 1) {
    setStates((s) => s.map((o, j) => (j === i ? { ...o, ab: v } : o)));
  }
  function togglePlay(i: number) {
    setStates((s) => s.map((o, j) => (j === i ? { ...o, on: !o.on } : o)));
  }

  return (
    <div className="border-t border-[#20241F]/[.06] bg-[#EEE7D6] text-[#20241F]">
      <div className="mx-auto max-w-[1180px] px-8 py-[76px]">
        <div className="mb-2.5 text-xs tracking-[0.16em] text-[#A8853E] uppercase">Real students, five weeks apart</div>
        <h2 className="m-0 mb-2 text-4xl font-extrabold tracking-[-0.01em]">Hear the change — don&apos;t take our word.</h2>
        <p className="mb-8 max-w-[560px] text-[16.5px] leading-[1.55] text-[#5A6159]">
          The same student, the same short passage. Tap between Week 1 and Week 6 while it plays.
        </p>
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {SUCCESS_STORIES.map((story, i) => {
            const s = states[i];
            const isW1 = s.ab === 0;
            return (
              <div key={story.name} className="rounded-2xl border border-[#20241F]/10 bg-[#FDFBF4] p-[22px]">
                <div className="mb-4 flex gap-2" role="group" aria-label="Choose which recording plays">
                  <button
                    onClick={() => setAb(i, 0)}
                    className="h-[38px] flex-1 rounded-[10px] border text-[13px] font-bold focus-visible:outline-2 focus-visible:outline-[#14655A]"
                    style={{
                      borderColor: isW1 ? "rgba(168,133,62,.6)" : "rgba(32,36,31,.15)",
                      background: isW1 ? "rgba(168,133,62,.1)" : "transparent",
                      color: isW1 ? "#8B6A1F" : "#5A6159",
                    }}
                  >
                    Week 1
                  </button>
                  <button
                    onClick={() => setAb(i, 1)}
                    className="h-[38px] flex-1 rounded-[10px] border text-[13px] font-bold focus-visible:outline-2 focus-visible:outline-[#14655A]"
                    style={{
                      borderColor: !isW1 ? "rgba(20,101,90,.5)" : "rgba(32,36,31,.15)",
                      background: !isW1 ? "rgba(20,101,90,.08)" : "transparent",
                      color: !isW1 ? "#14655A" : "#5A6159",
                    }}
                  >
                    Week 6
                  </button>
                </div>
                <div className="mb-2 flex items-center gap-3">
                  <button
                    onClick={() => togglePlay(i)}
                    aria-label="Play or pause this comparison"
                    className="flex h-[42px] w-[42px] flex-none cursor-pointer items-center justify-center rounded-full border-none bg-[#14655A] text-xs text-[#F6F1E5] focus-visible:outline-2 focus-visible:outline-[#14655A]"
                  >
                    {s.on ? "❚❚" : "▶"}
                  </button>
                  <div
                    className="flex h-[34px] flex-1 items-end gap-0.5"
                    style={{ animation: s.on ? "rw-glow 1.4s ease-in-out infinite" : "none" }}
                    aria-hidden="true"
                  >
                    {(isW1 ? WEEK1_BARS : WEEK6_BARS).map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: isW1 ? "rgba(168,133,62,.55)" : "rgba(20,101,90,.5)" }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mb-3.5 font-mono text-[10.5px] text-[#8B8778]">
                  {isW1 ? "Week 1" : "Week 6"}
                  {s.on ? " · playing" : ""} · [ placeholder audio slot — beta cohort ]
                </div>
                <div className="mb-1 text-[12.5px] text-[#8B8778]">{story.passage}</div>
                <div className="text-[15.5px] font-extrabold">{story.name}</div>
                <div className="mt-[3px] text-[13.5px] leading-[1.55] text-[#33403B]">{story.what}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
