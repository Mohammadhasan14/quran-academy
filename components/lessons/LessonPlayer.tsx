"use client";

import { useState } from "react";
import Link from "next/link";
import { LESSON_STEPS } from "@/lib/constants/lesson-data";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const DONE = 2; // steps before this index are complete; this index is "current"

type Tab = "notes" | "ask" | "resources";

export function LessonPlayer() {
  const [view, setView] = useState(2);
  const [gateMsg, setGateMsg] = useState("");
  const [tab, setTab] = useState<Tab>("notes");
  const [ldPick, setLdPick] = useState<"A" | "B" | null>(null);
  const [pdPhase, setPdPhase] = useState<0 | 1 | 2>(0);
  const [outcome, setOutcome] = useState<"pass" | "fail">("pass");

  function goStep(i: number) {
    if (i > DONE) {
      setGateMsg(`Locked with love — finish the ${LESSON_STEPS[DONE].name.toLowerCase()} first. Each step builds the next.`);
      return;
    }
    setView(i);
    setGateMsg("");
  }

  const ldDone = ldPick === "B";
  const ldMsg =
    ldPick === "B"
      ? "Yes — B held the hum for its full two counts. A released early; most ears miss it at first. Yours didn't."
      : ldPick === "A"
        ? "Listen once more — A's hum releases early. Play them back to back and count along; then choose again."
        : "Play both, then choose. You can replay as many times as you like.";

  const pdMsg =
    pdPhase === 0
      ? "The model plays, then pauses for you — no button needed."
      : pdPhase === 1
        ? "Recording — recite when ready. Calm gold, never a red dot."
        : "Your attempt plays back. Compare, then again or continue.";

  return (
    <div className="flex min-h-screen flex-col bg-[#0A100E] text-[#EDE7D8]">
      <div className="flex items-center justify-between border-b border-[#EDE7D8]/[.08] px-6 py-3.5">
        <div className="text-[13px] text-[#9FAAA3]">
          Tajweed Foundations I <span className="text-[#5F6B64]">/</span> Module 2{" "}
          <span className="text-[#5F6B64]">/</span> <span className="font-bold text-[#EDE7D8]">Lesson 4 — The Ghunnah</span>
        </div>
        <div className="flex items-center gap-3.5">
          <div className="text-xs text-[#9FAAA3]">Step {view + 1} of 5 · ~9 min left</div>
          <Link href="/courses" className="h-[34px] rounded-[9px] border border-[#EDE7D8]/[.14] px-3.5 text-[12.5px] font-bold text-[#9FAAA3] leading-[34px]">
            Exit lesson
          </Link>
        </div>
      </div>

      <div className="flex flex-1 max-lg:flex-col">
        <div className="min-w-0 flex-1 p-6 md:p-7">
          {view === 0 && (
            <>
              <div className="relative overflow-hidden rounded-2xl border border-[#EDE7D8]/10">
                <div className="h-[430px] w-full">
                  <ImagePlaceholder label="Teacher video — Concept: the ghunnah (2:40, captioned)" />
                </div>
                <div className="absolute inset-x-0 bottom-0 px-4.5 pt-9 pb-3" style={{ background: "linear-gradient(transparent,rgba(10,16,14,.88))" }}>
                  <div className="mb-2.5 inline-block rounded-md bg-[#0A100E]/70 px-2.5 py-1 text-[13px] text-[#EDE7D8]">
                    …hold the hum for two counts — like a relaxed heartbeat.
                  </div>
                  <div className="flex items-center gap-3.5">
                    <button aria-label="Play or pause" className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold/45 bg-gold/[.14] text-xs text-gold">❚❚</button>
                    <div className="relative h-1 flex-1 rounded-sm bg-[#EDE7D8]/15">
                      <div className="absolute inset-y-0 left-0 w-[64%] rounded-sm bg-[#2E8C7E]" />
                    </div>
                    <div className="text-[11.5px] text-[#9FAAA3]">1:43 / 2:40</div>
                    <button className="h-7 rounded-md border border-[#EDE7D8]/[.14] px-2.5 text-[11.5px] font-bold text-[#9FAAA3]">1×</button>
                    <button className="h-7 rounded-md border border-teal/40 bg-teal/10 px-2.5 text-[11.5px] font-bold text-teal">CC</button>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-3 max-md:flex-col">
                <div className="flex-1 rounded-[13px] border border-[#EDE7D8]/[.08] bg-[#0D1512] p-4.5">
                  <div className="mb-2 text-[11px] tracking-[0.12em] text-gold uppercase">Key points</div>
                  <div className="text-[13.5px] leading-[1.7] text-[#B9C2BB]">
                    · Ghunnah lives in the nose — pinch it and the sound stops
                    <br />· Doubled nūn and mīm always carry it
                    <br />· Two counts, steady — not brushed past
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between rounded-[13px] border border-[#EDE7D8]/[.08] bg-[#0D1512] p-4.5">
                  <div>
                    <div className="mb-2 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">In this lesson&apos;s verses</div>
                    <div dir="rtl" className="font-arabic-quran text-center text-2xl leading-[1.9] text-[#EDE7D8]">إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ</div>
                  </div>
                  <div className="mt-2 text-[11.5px] text-[#5F6B64]">Embedded Mushaf excerpt — opens in the Studio, not a destination here</div>
                </div>
              </div>
            </>
          )}

          {view === 1 && (
            <div className="rounded-2xl border border-[#EDE7D8]/10 bg-[#0D1512] px-7.5 py-6.5">
              <div className="mb-1.5 text-[11px] tracking-[0.12em] text-gold uppercase">Interactive demo · worked example</div>
              <div className="mb-4 text-xl font-extrabold">Where the ghunnah lives</div>
              <div className="flex gap-6 max-md:flex-col">
                <div className="min-h-[230px] flex-1 rounded-xl border border-[#EDE7D8]/[.08] bg-[repeating-linear-gradient(-45deg,#0A100E_0_10px,#0e1613_10px_20px)] p-4.5">
                  <div className="mb-3.5 font-mono text-[10.5px] text-[#9FAAA3]">
                    [ animated cross-section — soft palate lowers, air routes through the nose ]
                  </div>
                  <div className="relative mt-[110px] h-[22px]">
                    <div className="absolute inset-x-0 top-[9px] h-0.5 bg-[#EDE7D8]/[.14]" />
                    <div
                      className="absolute top-[3px] -ml-[7px] h-3.5 w-3.5 rounded-full"
                      style={{ left: "22%", background: "radial-gradient(circle at 40% 35%,#D9B96E,#B98F45)", boxShadow: "0 0 0 4px rgba(203,165,92,.18)" }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] tracking-[0.1em] text-[#9FAAA3] uppercase">
                    <span>Nose</span><span>Tongue</span><span>Lips</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div dir="rtl" className="font-arabic-quran mb-1.5 text-center text-4xl text-[#EDE7D8]">
                    إِ<span className="text-[#4FB3A5] underline decoration-wavy underline-offset-4">نَّ</span>
                  </div>
                  <div className="mb-4 text-center text-xs text-[#4FB3A5]">wavy underline = ghunnah, everywhere in the academy</div>
                  <div className="text-sm leading-[1.65] text-[#B9C2BB]">
                    Drag the playhead: as the doubled nūn begins, the gold dot moves to the nose and the hum begins.
                    Two counts pass before the vowel releases.
                  </div>
                  <button className="mt-4 h-[42px] rounded-[11px] border border-teal/40 bg-teal/[.08] px-4.5 text-[13px] font-bold text-teal">
                    ▶ Play the worked example
                  </button>
                </div>
              </div>
            </div>
          )}

          {view === 2 && (
            <div className="rounded-2xl border border-[#EDE7D8]/10 bg-[#0D1512] px-7.5 py-6.5">
              <div className="mb-1.5 text-[11px] tracking-[0.12em] text-gold uppercase">Listening drill · 2 of 3</div>
              <div className="mb-1 text-xl font-extrabold">Which ghunnah is held for its full two counts?</div>
              <div className="mb-5 text-[13.5px] text-[#9FAAA3]">
                Both recite <span dir="rtl" className="font-arabic-quran text-[17px]">ثُمَّ</span> — listen for the length of the hum.
              </div>
              <div className="mb-4 flex gap-4 max-md:flex-col">
                {(["A", "B"] as const).map((c) => (
                  <div
                    key={c}
                    className="flex-1 rounded-2xl border bg-[#0A100E] px-5 py-4.5"
                    style={{ borderColor: ldPick === c ? (c === "A" ? "rgba(217,154,61,.5)" : "rgba(82,179,164,.55)") : "rgba(237,231,216,.1)" }}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-extrabold">Recording {c}</div>
                      <div className="text-[11.5px] font-bold" style={{ color: c === "A" ? "#D99A3D" : "#52B3A4" }}>
                        {ldPick ? (c === "A" ? "shortened — ~1 count" : "full two counts ✓") : ""}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button aria-label={`Play recording ${c}`} className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-teal/40 bg-teal/[.08] text-xs text-teal">▶</button>
                      <div className="flex h-[22px] flex-1 items-end gap-0.5">
                        {(c === "A" ? [22, 48, 15, 52, 26, 12, 42, 18, 32, 14] : [42, 72, 56, 86, 62, 48, 78, 54, 82, 60]).map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm bg-[#EDE7D8]/[.16]" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => setLdPick(c)}
                      className="mt-3.5 h-10 w-full rounded-[10px] border border-gold/40 bg-gold/[.07] text-[13px] font-bold text-gold-bright focus-visible:outline-2 focus-visible:outline-teal"
                    >
                      This one
                    </button>
                  </div>
                ))}
              </div>
              <div aria-live="polite" className="min-h-[44px] text-sm leading-[1.55] text-[#B9C2BB]">{ldMsg}</div>
              {ldDone && (
                <button
                  onClick={() => goStep(3)}
                  className="h-11 rounded-[11px] border-none px-5.5 text-sm font-bold text-[#0A100E]"
                  style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
                >
                  Continue → Production drill
                </button>
              )}
            </div>
          )}

          {view === 3 && (
            <div className="rounded-2xl border border-[#EDE7D8]/10 bg-[#0D1512] px-7.5 py-6.5 text-center">
              <div className="mb-1.5 text-[11px] tracking-[0.12em] text-gold uppercase">Production drill · repeat after the teacher</div>
              <div dir="rtl" className="font-arabic-quran pb-2 text-[52px] leading-[1.7] text-[#EDE7D8]">إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ</div>
              <div className="my-2.5 mb-5.5 flex justify-center gap-2">
                {["1 · Model plays", "2 · You recite", "3 · Hear yourself"].map((label, i) => (
                  <span
                    key={label}
                    className="rounded-full border px-3 py-1.5 text-[11.5px]"
                    style={{
                      borderColor: pdPhase === i ? "rgba(203,165,92,.6)" : "rgba(237,231,216,.12)",
                      background: pdPhase === i ? "rgba(203,165,92,.1)" : "transparent",
                      color: pdPhase === i ? "#D9B96E" : "#5F6B64",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6.5">
                <button onClick={() => setPdPhase(0)} aria-label="Play the model" className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-teal/45 bg-teal/10 text-[15px] text-teal">▶</button>
                <button
                  onClick={() => setPdPhase(1)}
                  aria-label="Record your attempt"
                  className="flex h-[86px] w-[86px] items-center justify-center rounded-full border-2 border-gold/70 cursor-pointer"
                  style={{ background: "radial-gradient(circle at 50% 36%,#D9B96E,#B98F45)", animation: pdPhase === 1 ? "rw-pulse 2.4s ease-in-out infinite" : "none" }}
                >
                  <svg width="24" height="31" viewBox="0 0 17 22" fill="none" stroke="#0A100E" strokeWidth={1.7} strokeLinecap="round">
                    <rect x="5.5" y="1.5" width="6" height="11" rx="3" />
                    <path d="M2 10.5a6.5 6.5 0 0 0 13 0" />
                    <line x1="8.5" y1="17" x2="8.5" y2="20.5" />
                  </svg>
                </button>
                <button onClick={() => setPdPhase(2)} aria-label="Replay your attempt" className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#EDE7D8]/[.16] text-sm text-[#EDE7D8]">↻</button>
              </div>
              <div aria-live="polite" className="mt-4 min-h-[20px] text-[13.5px] text-[#9FAAA3]">{pdMsg}</div>
              <div className="mt-4.5 flex justify-center gap-3">
                <button className="h-[42px] rounded-[11px] border border-[#EDE7D8]/[.14] px-5 text-[13px] font-bold text-[#9FAAA3]">Again</button>
                <button
                  onClick={() => goStep(4)}
                  className="h-[42px] rounded-[11px] border-none px-5.5 text-[13.5px] font-bold text-[#0A100E]"
                  style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
                >
                  Feels ready → Mastery check
                </button>
              </div>
            </div>
          )}

          {view === 4 && outcome === "pass" && (
            <div className="rounded-2xl border border-gold/35 bg-[#0D1512] px-7.5 py-10 text-center">
              <div className="relative mx-auto mb-5 h-24 w-24">
                <div className="absolute inset-3.5 rotate-45 border-[1.5px] border-gold bg-gold/[.16] animate-[rw-bloom_.9s_cubic-bezier(.32,0,.16,1)_both]" />
                <div className="absolute inset-0 rotate-45 border border-gold/40 animate-[rw-bloom2_1.1s_cubic-bezier(.32,0,.16,1)_both]" />
                <div className="absolute inset-0 flex items-center justify-center text-2xl text-gold-bright">✓</div>
              </div>
              <div className="text-2xl font-extrabold text-[#EDE7D8]">Mastered — your ghunnah held its two counts.</div>
              <div className="my-2.5 mb-5.5 text-sm text-[#9FAAA3]">
                Quiz 3/3 · production confirmed by the AI, logged for your teacher&apos;s spot-check
              </div>
              <button
                onClick={() => setOutcome("fail")}
                className="h-12 rounded-xl border-none px-6.5 text-[15px] font-bold text-[#0A100E]"
                style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
              >
                Lesson 5 unlocked — The Madd →
              </button>
            </div>
          )}

          {view === 4 && outcome === "fail" && (
            <div className="rounded-2xl border border-[#D99A3D]/35 bg-[#0D1512] px-7.5 py-8.5">
              <div className="mb-2 text-[23px] font-extrabold text-[#EDE7D8]">Not yet — let&apos;s strengthen two things first.</div>
              <div className="mb-5 text-sm text-[#9FAAA3]">
                Everything else was solid. These two items go into a short retry set — five minutes, then the check
                reopens.
              </div>
              <div className="mb-5.5 flex flex-col gap-2.5">
                <div className="flex items-center gap-3 rounded-xl border border-[#D99A3D]/30 bg-[#D99A3D]/[.07] px-4 py-3.5">
                  <div className="h-[7px] w-[7px] flex-none rotate-45 bg-[#D99A3D]" />
                  <div className="text-sm text-[#EDE7D8]">
                    Ghunnah length on <span dir="rtl" className="font-arabic-quran text-lg">ثُمَّ</span> — landing near 1.5 counts
                  </div>
                  <div className="ml-auto flex-none text-xs text-[#D99A3D]">listen drill ×2</div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-[#D99A3D]/30 bg-[#D99A3D]/[.07] px-4 py-3.5">
                  <div className="h-[7px] w-[7px] flex-none rotate-45 bg-[#D99A3D]" />
                  <div className="text-sm text-[#EDE7D8]">Quiz: which letters carry ghunnah when doubled</div>
                  <div className="ml-auto flex-none text-xs text-[#D99A3D]">1 question</div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setOutcome("pass")}
                  className="h-[46px] rounded-xl border-none px-6 text-sm font-bold text-[#0A100E]"
                  style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
                >
                  Start the retry set (5 min)
                </button>
                <button className="h-[46px] rounded-xl border border-[#EDE7D8]/[.14] px-4.5 text-[13.5px] text-[#9FAAA3]">
                  Rest — keep it for tomorrow
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex w-full flex-none flex-col gap-4.5 border-l border-[#EDE7D8]/[.08] p-6 lg:w-[330px]">
          <div>
            <div className="mb-3 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">Lesson steps — each unlocks the next</div>
            <div className="flex flex-col gap-1.5" role="list">
              {LESSON_STEPS.map((st, i) => {
                const done = i < DONE, current = i === DONE, locked = i > DONE, active = i === view;
                return (
                  <button
                    key={st.name}
                    onClick={() => goStep(i)}
                    role="listitem"
                    aria-label={`${st.name}${done ? ", complete" : locked ? ", locked — unlocks in order" : ", current step"}`}
                    className="flex items-center gap-3 rounded-[11px] border px-3.5 py-2.5 text-left focus-visible:outline-2 focus-visible:outline-teal"
                    style={{
                      borderColor: active ? "rgba(203,165,92,.55)" : "rgba(237,231,216,.08)",
                      background: active ? "rgba(203,165,92,.08)" : locked ? "transparent" : "rgba(237,231,216,.02)",
                      cursor: locked ? "default" : "pointer",
                    }}
                  >
                    <div
                      className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg border text-xs font-extrabold"
                      style={{
                        borderColor: done ? "rgba(82,179,164,.45)" : current ? "rgba(203,165,92,.55)" : "rgba(237,231,216,.12)",
                        background: done ? "rgba(82,179,164,.1)" : current ? "rgba(203,165,92,.12)" : "transparent",
                        color: done ? "#52B3A4" : current ? "#D9B96E" : "#5F6B64",
                      }}
                    >
                      {done ? "✓" : locked ? "·" : i + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-bold" style={{ color: locked ? "#5F6B64" : "#EDE7D8" }}>{st.name}</div>
                      <div className="text-xs text-[#5F6B64]">{st.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>
            <div aria-live="polite" className="mt-2.5 min-h-[18px] text-xs leading-[1.5] text-gold-bright">{gateMsg}</div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col">
            <div className="mb-3 flex gap-0.5 rounded-[10px] bg-[#EDE7D8]/5 p-[3px]">
              {(["notes", "ask", "resources"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 rounded-lg border-none py-1.5 text-xs font-bold"
                  style={{ background: tab === t ? "#2E8C7E" : "transparent", color: tab === t ? "#0A100E" : "#9FAAA3" }}
                >
                  {t === "notes" ? "Notes" : t === "ask" ? "Ask the teacher" : "Resources"}
                </button>
              ))}
            </div>
            {tab === "notes" && (
              <>
                <div className="mb-2.5 rounded-xl border border-[#EDE7D8]/[.08] bg-[#0D1512] p-3.5 text-[13px] leading-[1.6] text-[#B9C2BB]">
                  ghunnah = the hum. nose, not throat. 2 counts — heartbeat trick works
                </div>
                <textarea
                  placeholder="Add a note at 1:43…"
                  className="min-h-16 w-full resize-none rounded-xl border border-[#EDE7D8]/10 bg-[#0D1512] p-3.5 text-[13px] text-[#EDE7D8] focus:outline-none"
                />
              </>
            )}
            {tab === "ask" && (
              <>
                <div className="mb-2.5 rounded-xl border border-[#EDE7D8]/[.08] bg-[#0D1512] p-3.5">
                  <div className="mb-1 text-[12.5px] font-bold text-[#EDE7D8]">
                    Is ghunnah the same as madd? <span className="font-normal text-[#5F6B64]">· you, Tue</span>
                  </div>
                  <div className="mt-2 flex gap-2.5">
                    <div className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full border border-gold/40 bg-[#1B2822] text-[10.5px] font-extrabold text-gold-bright">Q</div>
                    <div className="text-[12.5px] leading-[1.55] text-[#B9C2BB]">
                      No — madd stretches a vowel; ghunnah is a nasal hum on nūn/mīm. They can coincide. Good
                      question. <span className="text-[#5F6B64]">— your teacher, Wed</span>
                    </div>
                  </div>
                </div>
                <textarea
                  placeholder="Ask about this lesson — the teacher answers within 72h…"
                  className="min-h-16 w-full resize-none rounded-xl border border-[#EDE7D8]/10 bg-[#0D1512] p-3.5 text-[13px] text-[#EDE7D8] focus:outline-none"
                />
              </>
            )}
            {tab === "resources" && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2.5 rounded-[11px] border border-[#EDE7D8]/[.08] bg-[#0D1512] px-3.5 py-3 text-[13px] text-[#B9C2BB]">
                  <span className="text-gold">↓</span> Ghunnah letters — one-page chart (PDF)
                </div>
                <div className="flex items-center gap-2.5 rounded-[11px] border border-[#EDE7D8]/[.08] bg-[#0D1512] px-3.5 py-3 text-[13px] text-[#B9C2BB]">
                  <span className="text-gold">↓</span> Drill audio pack — offline bundle (12 MB)
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
