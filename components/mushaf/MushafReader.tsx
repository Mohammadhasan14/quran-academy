"use client";

import { useState } from "react";
import { AL_FATIHA } from "@/lib/constants/mushaf-data";
import { PlayButton } from "@/components/ui/PlayButton";
import { Waveform } from "@/components/ui/Waveform";

type Mode = "reading" | "practice";

export function MushafReader() {
  const [tajweed, setTajweed] = useState(true);
  const [mode, setMode] = useState<Mode>("practice");
  const [word, setWord] = useState<string | null>(null);
  const [playing, setPlaying] = useState(true);

  const isPractice = mode === "practice";

  return (
    <div dir="rtl" className="relative mx-auto flex min-h-[calc(100vh-76px)] w-full max-w-2xl flex-col bg-surface font-arabic-ui text-text md:min-h-screen">
      <div className="flex flex-none items-center justify-between px-5 pt-5 pb-2.5">
        <div className="flex items-center gap-2.5">
          <button
            aria-label="بحث"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-text/[.14] text-text-muted"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <circle cx="6.5" cy="6.5" r="4.5" />
              <line x1="10" y1="10" x2="13.5" y2="13.5" />
            </svg>
          </button>
          <button
            aria-label="الإشارات المرجعية"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] border border-text/[.14] text-text-muted"
          >
            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" stroke="currentColor" strokeWidth={1.4}>
              <path d="M1.5 1.5 h10 v12 l-5 -3.5 l-5 3.5 z" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <div className="font-arabic-ui text-[19px] leading-tight text-gold">سُورَةُ الفَاتِحَة</div>
          <div className="mt-0.5 text-[12.5px] text-text-muted">الجزء ١ · صفحة ١</div>
        </div>
        <button
          onClick={() => setTajweed((t) => !t)}
          className="h-[34px] cursor-pointer rounded-[10px] border px-3.5 text-[13.5px]"
          style={{
            borderColor: tajweed ? "var(--color-gold)" : "color-mix(in srgb, var(--color-text) 14%, transparent)",
            background: tajweed ? "color-mix(in srgb, var(--color-gold) 14%, transparent)" : "transparent",
            color: tajweed ? "var(--color-gold-bright)" : "var(--color-text-muted)",
            opacity: tajweed ? 1 : 0.9,
          }}
        >
          تجويد
        </button>
      </div>

      <div className="flex flex-none items-center gap-2.5 px-6">
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/35" />
        <div className="h-[7px] w-[7px] rotate-45 bg-gold/60" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/35" />
      </div>

      <div className="rw-canvas flex-1 overflow-y-auto px-7 pt-6 pb-4 text-center">
        <div className="font-arabic-quran text-[29px] leading-[2.15] text-balance text-text">
          {AL_FATIHA.map((ayah) => (
            <span key={ayah.number}>
              {ayah.words.map((w, i) => (
                <span key={i}>
                  <span
                    onClick={() => setWord(w.text)}
                    className="cursor-pointer rounded-md px-0.5 hover:bg-gold/10"
                    style={
                      tajweed && w.tag
                        ? {
                            color: w.tag === "madd" ? "var(--color-tajweed-madd)" : "var(--color-tajweed-lazim)",
                            borderBottom:
                              w.tag === "madd"
                                ? "2px solid color-mix(in srgb, var(--color-tajweed-madd) 55%, transparent)"
                                : "3px double color-mix(in srgb, var(--color-tajweed-lazim) 65%, transparent)",
                          }
                        : undefined
                    }
                  >
                    {w.text}
                  </span>{" "}
                </span>
              ))}
              <span className="mx-2 inline-flex h-[30px] w-[30px] rotate-45 items-center justify-center rounded-full border-[1.2px] border-gold/55 align-middle text-sm text-gold">
                <span className="-rotate-45">{ayah.number}</span>
              </span>
            </span>
          ))}
        </div>
        {tajweed && (
          <div dir="ltr" className="mt-4.5 flex justify-center gap-3.5 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-0 w-4 border-b-2" style={{ borderColor: "var(--color-tajweed-madd)" }} />
              مدّ (حركتان)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-0 w-4 border-b-[3px] border-double" style={{ borderColor: "var(--color-tajweed-lazim)" }} />
              مدّ لازم (٦ حركات)
            </span>
          </div>
        )}
      </div>

      <div className="flex-none border-t border-text/[.08] bg-surface-2 px-4 pt-2.5 pb-2">
        <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-0.5 rounded-[10px] bg-text/[.06] p-[3px]">
            <button
              onClick={() => setMode("reading")}
              className="cursor-pointer rounded-lg border-none px-3.5 py-1.5 text-[13px]"
              style={{
                background: !isPractice ? "var(--color-teal-deep)" : "transparent",
                color: !isPractice ? "var(--color-surface)" : "var(--color-text-muted)",
              }}
            >
              قراءة
            </button>
            <button
              onClick={() => setMode("practice")}
              className="cursor-pointer rounded-lg border-none px-3.5 py-1.5 text-[13px]"
              style={{
                background: isPractice ? "var(--color-teal-deep)" : "transparent",
                color: isPractice ? "var(--color-surface)" : "var(--color-text-muted)",
              }}
            >
              تدريب
            </button>
          </div>
          <div className="text-[13px] text-text-muted">
            القارئ: <span className="text-gold">الحصري</span> · <span dir="ltr">0.75×</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PlayButton playing={playing} onClick={() => setPlaying((p) => !p)} size={44} label="تشغيل أو إيقاف" />
          <div className="flex-1">
            <div className="relative flex h-[26px] items-center">
              <div className="absolute inset-x-0 h-[3px] rounded-sm bg-text/[.12]" />
              <div className="absolute right-0 h-[3px] w-[38%] rounded-sm bg-gradient-to-l from-teal to-teal-deep" />
              <div className="absolute right-[38%] h-[13px] w-[13px] -mr-1.5 rounded-full bg-text shadow-[0_0_0_3px_rgba(82,179,164,.3)]" />
            </div>
            <div className="flex justify-between text-[11px] text-text-muted">
              <span dir="ltr">0:31</span>
              <span>الآية ٣ من ٧</span>
              <span dir="ltr">1:22</span>
            </div>
          </div>
          {isPractice && (
            <button
              aria-label="سجّل تلاوتك"
              className="flex h-[52px] w-[52px] flex-none animate-[rw-pulse_3.2s_ease-in-out_infinite] items-center justify-center rounded-full border-[1.5px] border-gold/70 cursor-pointer"
              style={{ background: "radial-gradient(circle at 50% 38%,#D9B96E,#B98F45)" }}
            >
              <svg width="17" height="22" viewBox="0 0 17 22" fill="none" stroke="var(--color-surface)" strokeWidth={1.8} strokeLinecap="round">
                <rect x="5.5" y="1.5" width="6" height="11" rx="3" />
                <path d="M2 10.5a6.5 6.5 0 0 0 13 0" />
                <line x1="8.5" y1="17" x2="8.5" y2="20.5" />
              </svg>
            </button>
          )}
        </div>

        {isPractice && (
          <div className="mt-2.5 flex justify-center gap-2">
            <span className="rounded-full border border-text/[.14] px-2.5 py-1 text-xs text-text-muted">تكرار أ–ب</span>
            <span className="rounded-full border border-text/[.14] px-2.5 py-1 text-xs text-text-muted">ردّد خلف القارئ</span>
            <span className="rounded-full border border-teal/40 px-2.5 py-1 text-xs text-teal">متابعة ذكية · لطيفة</span>
          </div>
        )}
      </div>

      {word && (
        <>
          <div onClick={() => setWord(null)} className="absolute inset-0 z-10 bg-black/55 backdrop-blur-[2px]" />
          <div className="absolute inset-x-0 bottom-0 z-20 rounded-t-[22px] border-t border-gold/30 bg-surface-3 px-5.5 pt-3.5 pb-7 shadow-[0_-12px_40px_rgba(0,0,0,.5)]">
            <div className="mx-auto mb-4 h-1 w-[38px] rounded-sm bg-text/20" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-arabic-quran text-4xl leading-snug text-text">{word}</div>
                <div className="mt-3.5 text-[12.5px] text-text-muted">صوت الكلمة المفردة · الحصري</div>
              </div>
              <button
                aria-label="تشغيل هذه الكلمة"
                className="flex h-14 w-14 flex-none items-center justify-center rounded-full border-none text-base text-text"
                style={{ background: "linear-gradient(160deg,#2E8C7E,#1E6B60)" }}
              >
                ▶
              </button>
            </div>
            <Waveform bars={10} className="my-4.5 h-[30px]" />
            <div className="grid grid-cols-2 gap-2.5">
              <button className="h-[46px] rounded-xl border border-gold/40 bg-gold/10 text-sm font-bold text-gold-bright">
                ردّد خلف القارئ
              </button>
              <button className="h-[46px] rounded-xl border border-text/[.14] bg-transparent text-sm text-text">
                كرّر هذه الكلمة
              </button>
              <button className="h-[46px] rounded-xl border border-text/[.14] bg-transparent text-sm text-text">
                أضِف إلى التمارين
              </button>
              <button className="h-[46px] rounded-xl border border-text/[.14] bg-transparent text-sm text-text">
                إشارة مرجعية
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
