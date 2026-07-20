"use client";

import { useEffect, useRef, useState } from "react";
import { VERSE_TEACHING, VERSE_WORDS } from "@/lib/constants/home-data";

export function VerseDemonstration() {
  const [playing, setPlaying] = useState(false);
  const [activeWord, setActiveWord] = useState(-1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function toggle() {
    if (playing) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setPlaying(false);
      setActiveWord(-1);
      return;
    }
    setPlaying(true);
    setActiveWord(0);
    intervalRef.current = setInterval(() => {
      setActiveWord((w) => (w + 1) % 4);
    }, 1400);
  }

  return (
    <div className="mx-auto max-w-[1180px] px-8 py-[76px]">
      <div className="mb-2.5 text-xs tracking-[0.16em] text-gold uppercase">The method, on one verse</div>
      <h2 className="m-0 mb-2 text-4xl font-extrabold tracking-[-0.01em]">Watch a verse being taught.</h2>
      <p className="mb-8 max-w-[560px] text-[16.5px] leading-[1.55] text-[#9FAAA3]">
        Surah Al-Ikhlas, first ayah. Press play: each word lights with the audio, and the teaching appears at the
        exact moment it applies.
      </p>
      <div className="rounded-[20px] border border-gold/[.22] bg-[#0D1512] px-10 pt-10 pb-[30px]">
        <div dir="rtl" className="font-arabic-quran text-center text-[46px] leading-[1.9] text-[#EDE7D8]">
          {VERSE_WORDS.map((w, i) => (
            <span
              key={i}
              className="rounded-[10px] px-2 py-0.5"
              style={{
                background: activeWord === i ? "rgba(203,165,92,.16)" : "transparent",
                color: activeWord === i ? "#D9B96E" : "#EDE7D8",
              }}
            >
              {w}{" "}
            </span>
          ))}
          <span className="mx-2.5 inline-flex h-[34px] w-[34px] rotate-45 items-center justify-center rounded-full border-[1.2px] border-gold/55 align-middle text-[15px] text-gold">
            <span className="-rotate-45">١</span>
          </span>
        </div>
        <div className="mt-[26px] flex items-center gap-4.5">
          <button
            onClick={toggle}
            aria-label="Play or pause the verse demonstration"
            className="flex h-[52px] w-[52px] flex-none cursor-pointer items-center justify-center rounded-full border border-gold/45 bg-gold/[.12] text-[15px] text-gold focus-visible:outline-2 focus-visible:outline-teal"
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <div className="flex min-h-[52px] flex-1 items-center">
            <div className="text-[15.5px] leading-[1.6] text-balance text-[#EDE7D8]">
              {activeWord >= 0
                ? VERSE_TEACHING[activeWord]
                : "Press play — each word lights in time with the recitation, and the teaching note changes with it."}
            </div>
          </div>
        </div>
        <div className="mt-5 flex gap-3 rounded-xl border border-teal/20 bg-teal/[.06] px-4.5 py-3.5">
          <div className="mt-1.5 h-[7px] w-[7px] flex-none rotate-45 bg-teal" />
          <div className="text-[13.5px] leading-[1.55] text-[#9FCCC2]">
            <strong className="text-teal">Talaqqi:</strong> in this academy you never study alone — listen, imitate,
            be corrected by your teacher, repeat. Every tool here is built on that rhythm.
          </div>
        </div>
      </div>
    </div>
  );
}
