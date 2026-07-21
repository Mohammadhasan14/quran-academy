"use client";

import { useState } from "react";

const STEP_LABELS = ["Concept", "Listen", "Try", "Result"];

export function MiniLesson() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-[#F6F1E5] text-[#20241F]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-14">
          <div className="w-full flex-[0.8]">
            <div className="mb-2.5 text-xs tracking-[0.16em] text-[#A8853E] uppercase">
              Try a lesson — 3 minutes, as a guest
            </div>
            <h2 className="m-0 mb-2 text-[28px] font-extrabold tracking-[-0.01em] text-[#20241F] sm:text-4xl">
              The Ghunnah: the hum inside the letters.
            </h2>
            <p className="m-0 text-balance text-[15px] leading-[1.55] text-[#5A6159] sm:text-[16.5px]">
              A complete micro-lesson from Tajweed Foundations, exactly as students experience it: concept,
              listening, your own attempt, and a gentle result. Nothing to install, no account.
            </p>
            <div className="mt-[26px] flex gap-2">
              {STEP_LABELS.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-[3px]"
                  style={{ background: i <= step ? "#14655A" : "rgba(32,36,31,.12)" }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] tracking-[0.08em] text-[#8B8778] uppercase">
              {STEP_LABELS.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>

          <div
            className="min-h-[340px] w-full flex-[1.1] rounded-[18px] border border-[#A8853E]/25 bg-[#FDFBF4] px-5 py-6 sm:px-8 sm:py-[30px]"
            style={{ boxShadow: "0 2px 12px rgba(32,36,31,.06)" }}
          >
            {step === 0 && (
              <>
                <div className="mb-2.5 text-[13px] tracking-[0.1em] text-[#A8853E] uppercase">Step 1 · Concept</div>
                <div className="mb-3 text-xl font-bold">
                  When nūn or mīm is doubled, the sound moves into the nose.
                </div>
                <div className="mb-4 text-[15px] leading-[1.65] text-[#33403B]">
                  Say &quot;in<strong>-n</strong>a&quot; and pinch your nose halfway through — the sound stops. That
                  trapped hum is the <em>ghunnah</em>, and it is held for two steady counts. It is one of the most
                  beloved sounds in recitation.
                </div>
                <div dir="rtl" className="font-arabic-quran my-2.5 text-center text-[44px] text-[#20241F]">
                  إِنَّ · ثُمَّ
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="h-[46px] cursor-pointer rounded-xl border-none bg-[#14655A] px-6 text-[14.5px] font-bold text-[#F6F1E5] hover:brightness-110"
                >
                  Continue → Listen
                </button>
              </>
            )}

            {step === 1 && (
              <>
                <div className="mb-2.5 text-[13px] tracking-[0.1em] text-[#A8853E] uppercase">Step 2 · Listen</div>
                <div className="mb-3.5 text-xl font-bold">Two counts — about one relaxed heartbeat.</div>
                <div className="mb-4 flex gap-3">
                  {["إِنَّ · inna — hold the nn", "ثُمَّ · thumma — hold the mm"].map((pair) => {
                    const [ar, label] = pair.split(" · ");
                    return (
                      <button
                        key={ar}
                        className="flex-1 cursor-pointer rounded-[13px] border border-[#A8853E]/35 bg-[#A8853E]/[.06] p-4 text-center"
                      >
                        <span dir="rtl" className="font-arabic-quran block text-[34px] text-[#20241F]">
                          {ar}
                        </span>
                        <span className="text-[12.5px] font-bold text-[#14655A]">▶ {label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="mb-4 text-sm leading-[1.55] text-[#5A6159]">
                  Listen twice. Notice the hum has a <em>duration</em> — it is not brushed past.
                </div>
                <div className="flex flex-wrap gap-2.5">
                  <button
                    onClick={() => setStep(0)}
                    className="h-[46px] cursor-pointer rounded-xl border border-[#20241F]/[.18] bg-transparent px-4.5 text-sm font-medium text-[#33403B]"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="h-[46px] cursor-pointer rounded-xl border-none bg-[#14655A] px-6 text-[14.5px] font-bold text-[#F6F1E5]"
                  >
                    Continue → Try it
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-2.5 text-[13px] tracking-[0.1em] text-[#A8853E] uppercase">Step 3 · Your turn</div>
                <div className="mb-2 text-xl font-bold">
                  Recite <span dir="rtl" className="font-arabic-quran">إِنَّ</span> — hold the hum for two counts.
                </div>
                <div className="mb-[22px] text-sm leading-[1.55] text-[#5A6159]">
                  Recorded on your device, analyzed, then discarded — nothing is stored for guests. Your voice is an
                  amanah.
                </div>
                <div className="mb-[22px] flex justify-center">
                  <button
                    onClick={() => setStep(3)}
                    aria-label="Hold to record"
                    className="flex h-[88px] w-[88px] cursor-pointer items-center justify-center rounded-full border-2 border-[#A8853E]/60 animate-[rw-pulse_3s_ease-in-out_infinite]"
                    style={{ background: "radial-gradient(circle at 50% 36%,#D9B96E,#B98F45)" }}
                  >
                    <svg width="26" height="34" viewBox="0 0 17 22" fill="none" stroke="#20241F" strokeWidth={1.6} strokeLinecap="round">
                      <rect x="5.5" y="1.5" width="6" height="11" rx="3" />
                      <path d="M2 10.5a6.5 6.5 0 0 0 13 0" />
                      <line x1="8.5" y1="17" x2="8.5" y2="20.5" />
                    </svg>
                  </button>
                </div>
                <div className="text-center text-[13px] text-[#8B8778]">tap and recite · we&apos;re listening with care</div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="mb-2.5 text-[13px] tracking-[0.1em] text-[#A8853E] uppercase">Step 4 · Result</div>
                <div className="mb-3 text-xl font-bold">A lovely start. The hum was there.</div>
                <div className="mb-3.5 flex gap-2.5 rounded-xl border border-[#D99A3D]/30 bg-[#D99A3D]/[.09] px-4 py-3.5">
                  <div className="mt-1.5 h-[7px] w-[7px] flex-none rotate-45 bg-[#D99A3D]" />
                  <div className="text-sm leading-[1.55] text-[#6B5426]">
                    <strong>Likely — worth a listen:</strong> the hum may have ended around 1.5 counts. Two counts is
                    roughly one relaxed breath-tap.{" "}
                    <span className="cursor-pointer font-bold text-[#A8853E]">Compare with the teacher ▶</span>
                  </div>
                </div>
                <div className="mb-[18px] text-sm leading-[1.6] text-[#5A6159]">
                  That&apos;s the whole method in miniature: hear → try → be told the truth, gently → try again.
                  Imagine it across 200 lessons, with a real Qari confirming your mastery.
                </div>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <button
                    className="h-12 cursor-pointer rounded-xl border-none px-6.5 text-[15px] font-bold text-[#20241F]"
                    style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
                  >
                    Keep my progress — start free
                  </button>
                  <button
                    onClick={() => setStep(0)}
                    className="h-12 cursor-pointer rounded-xl border border-[#20241F]/[.18] bg-transparent px-4.5 text-sm text-[#33403B]"
                  >
                    Replay lesson
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
