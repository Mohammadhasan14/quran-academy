"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ONBOARDING_EXPERIENCE, ONBOARDING_GOALS } from "@/lib/constants/progress-data";

const STEP_COUNT = 9;

function GoldButton({ children, onClick, disabled }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="h-13 w-full cursor-pointer rounded-[13px] border-none text-[15.5px] font-bold text-surface disabled:opacity-50"
      style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
    >
      {children}
    </button>
  );
}

function PickerButton({ selected, title, subtitle, onClick }: { selected: boolean; title: string; subtitle: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-[13px] border px-4.5 py-4 text-left"
      style={{
        borderColor: selected ? "rgba(203,165,92,.55)" : "rgba(237,231,216,.12)",
        background: selected ? "rgba(203,165,92,.08)" : "transparent",
      }}
    >
      <div className="text-[15px] font-bold text-text">{title}</div>
      <div className="mt-0.5 text-xs text-text-muted">{subtitle}</div>
    </button>
  );
}

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState(0);
  const [exp, setExp] = useState(1);
  const [consent, setConsent] = useState(false);

  const next = () => setStep((s) => Math.min(STEP_COUNT - 1, s + 1));

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col bg-surface text-text">
      <div className="flex gap-1.5 px-6 pt-5">
        {Array.from({ length: STEP_COUNT }).map((_, i) => (
          <div key={i} className="h-[3px] flex-1 rounded-sm" style={{ background: i <= step ? "var(--color-gold)" : "rgba(237,231,216,.12)" }} />
        ))}
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-6 pt-6.5 pb-7">
        {step === 0 && (
          <>
            <div className="flex flex-1 flex-col justify-center text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 rotate-45 items-center justify-center border-[1.5px] border-gold">
                <div className="h-5.5 w-5.5 -rotate-45 bg-gold/40" />
              </div>
              <div className="text-balance text-[27px] leading-[1.25] font-extrabold">Welcome to the Riwaq.</div>
              <div className="mt-3.5 text-balance text-[15px] leading-[1.6] text-text-muted">
                A few quiet questions, so your path begins where you are — not where an app assumes.
              </div>
            </div>
            <GoldButton onClick={next}>Begin</GoldButton>
          </>
        )}

        {step === 1 && (
          <>
            <div className="mb-1.5 text-2xl font-extrabold">What brings you here?</div>
            <div className="mb-5 text-[13.5px] text-text-muted">One honest answer shapes everything after it.</div>
            <div className="flex flex-1 flex-col gap-2.5">
              {ONBOARDING_GOALS.map((g, i) => (
                <PickerButton key={g.t} selected={i === goal} title={g.t} subtitle={g.s} onClick={() => setGoal(i)} />
              ))}
            </div>
            <div className="mt-4">
              <GoldButton onClick={next}>Continue</GoldButton>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-1.5 text-2xl font-extrabold">Where are you starting from?</div>
            <div className="mb-5 text-[13.5px] text-text-muted">There is no wrong answer here.</div>
            <div className="flex flex-1 flex-col gap-2.5">
              {ONBOARDING_EXPERIENCE.map((g, i) => (
                <PickerButton key={g.t} selected={i === exp} title={g.t} subtitle={g.s} onClick={() => setExp(i)} />
              ))}
            </div>
            <div className="mt-4">
              <GoldButton onClick={next}>Continue</GoldButton>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="mb-1.5 text-2xl font-extrabold">May we hear your Fatiha?</div>
            <div className="mb-2 text-[13.5px] leading-[1.6] text-text-muted">
              Optional — one recitation lets us begin your map where you truly are. Analyzed on this device, then
              discarded.
            </div>
            <div dir="rtl" className="font-arabic-quran mb-auto rounded-2xl border border-text/[.08] bg-surface-2 p-4 text-center text-2xl leading-[2] text-text">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ …
            </div>
            <div className="my-5.5 flex justify-center">
              <button
                onClick={next}
                aria-label="Record your Fatiha"
                className="flex h-[88px] w-[88px] animate-[rw-pulse_3s_ease-in-out_infinite] items-center justify-center rounded-full border-2 border-gold/70 cursor-pointer"
                style={{ background: "radial-gradient(circle at 50% 36%,#D9B96E,#B98F45)" }}
              >
                <svg width="26" height="34" viewBox="0 0 17 22" fill="none" stroke="var(--color-surface)" strokeWidth={1.6} strokeLinecap="round">
                  <rect x="5.5" y="1.5" width="6" height="11" rx="3" />
                  <path d="M2 10.5a6.5 6.5 0 0 0 13 0" />
                  <line x1="8.5" y1="17" x2="8.5" y2="20.5" />
                </svg>
              </button>
            </div>
            <button onClick={() => setStep(6)} className="h-11 border-none bg-transparent text-[13.5px] text-text-muted">
              Skip — start at the beginning instead
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <div className="flex flex-1 flex-col justify-center text-center">
              <div
                className="mx-auto mb-5.5 h-14 w-14 rounded-full border-2 border-gold/20 animate-[rw-spin_1.2s_linear_infinite]"
                style={{ borderTopColor: "var(--color-gold)" }}
              />
              <div className="text-xl font-extrabold">Listening with care…</div>
              <div className="mt-2.5 text-[13.5px] leading-[1.6] text-text-muted">
                Your letters, your lengths, your breath.
                <br />
                Nothing leaves this device.
              </div>
            </div>
            <button onClick={next} className="h-10 border-none bg-transparent text-[11.5px] text-[#5F6B64]">
              (preview: reveal)
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <div className="mb-1 text-center text-2xl font-extrabold">Your recitation, today.</div>
            <div className="mb-3 text-center text-[13px] text-text-muted">Not a grade — a starting point.</div>
            <div className="flex flex-1 items-center justify-center">
              <svg width="294" height="170" viewBox="-52 0 294 170" role="img" aria-label="Your skill fingerprint drawing itself" style={{ animation: "rw-radar .9s cubic-bezier(.32,0,.16,1) both" }}>
                <g stroke="rgba(237,231,216,.1)" fill="none">
                  <polygon points="95,15 160,52 160,118 95,155 30,118 30,52" />
                  <polygon points="95,45 134,67 134,103 95,125 56,103 56,67" />
                </g>
                <polygon points="95,38 138,64 122,108 90,132 50,100 56,66" fill="rgba(82,179,164,.18)" stroke="#52B3A4" strokeWidth={2} />
                <g fill="#9FAAA3" fontSize="9.5" fontFamily="Alegreya Sans">
                  <text x="95" y="10" textAnchor="middle">Makharij</text>
                  <text x="166" y="50">Rules</text>
                  <text x="166" y="124">Fluency</text>
                  <text x="95" y="167" textAnchor="middle">Breath</text>
                  <text x="24" y="124" textAnchor="end">Maqamat</text>
                  <text x="24" y="50" textAnchor="end">Memory</text>
                </g>
              </svg>
            </div>
            <div className="mb-4.5 text-center text-[13.5px] leading-[1.6] text-[#B9C2BB]">
              A warm voice already — your throat letters are strong. We&apos;ll begin with the long vowels.
            </div>
            <GoldButton onClick={next}>See my path</GoldButton>
          </>
        )}

        {step === 6 && (
          <>
            <div className="mb-3.5 text-2xl font-extrabold">Your path, Amina.</div>
            <div className="mb-3.5 rounded-2xl border border-gold/30 bg-surface-3 p-5">
              <div className="mb-1.5 text-[11px] tracking-[0.12em] text-gold uppercase">Recommended</div>
              <div className="text-[19px] leading-[1.3] font-extrabold">Foundations — ~9 weeks at 15 min/day</div>
              <div className="mt-2.5 text-[13px] leading-[1.7] text-text-muted">
                Weeks 1–3 · long vowels &amp; your Fatiha
                <br />
                Weeks 4–6 · the nasal family
                <br />
                Weeks 7–9 · heavy &amp; light, first submission to your teacher
              </div>
            </div>
            <div className="mb-auto text-[12.5px] leading-[1.6] text-text-muted">
              Mastery-gated, not calendar-gated — the weeks are an honest estimate, not a treadmill.
            </div>
            <div className="mt-4">
              <GoldButton onClick={next}>This is my path</GoldButton>
            </div>
          </>
        )}

        {step === 7 && (
          <>
            <div className="mb-1.5 text-2xl font-extrabold">A daily knock, or silence?</div>
            <div className="mb-5 text-[13.5px] leading-[1.65] text-text-muted">
              One reminder a day at a time you choose — never streak-guilt, never &quot;we miss you&quot; theater. You
              can silence us anytime.
            </div>
            <div className="flex flex-1 flex-col gap-2.5">
              <button onClick={next} className="rounded-[13px] border border-gold/45 bg-gold/[.07] px-4.5 py-4 text-left">
                <div className="text-[15px] font-bold text-gold-bright">Remind me after Fajr</div>
                <div className="mt-0.5 text-xs text-text-muted">or pick any time next</div>
              </button>
              <button onClick={next} className="rounded-[13px] border border-text/[.12] bg-transparent px-4.5 py-4 text-left">
                <div className="text-[15px] font-bold text-text">No notifications</div>
                <div className="mt-0.5 text-xs text-text-muted">the Riwaq will simply be here</div>
              </button>
            </div>
          </>
        )}

        {step === 8 && (
          <>
            <div className="mb-1.5 text-2xl font-extrabold">Your voice is an amanah.</div>
            <div className="mb-4.5 text-sm leading-[1.7] text-[#B9C2BB]">
              A trust. Practice analysis happens <strong className="text-text">on your device</strong>. Recordings
              leave it only when <strong className="text-text">you submit them to your teacher</strong>. You can
              download or erase everything, always.
            </div>
            <div className="mb-auto rounded-2xl border border-text/10 bg-surface-2 px-4.5 py-4">
              <div className="flex items-center justify-between gap-3.5">
                <div className="min-w-0 text-[13.5px] leading-[1.5] text-[#B9C2BB]">
                  Share my practice audio to improve the AI coach
                  <br />
                  <span className="text-[11.5px] text-[#5F6B64]">Optional · anonymized · reversible in Settings any day</span>
                </div>
                <button
                  onClick={() => setConsent((c) => !c)}
                  role="switch"
                  aria-checked={consent}
                  aria-label="Share practice audio for AI improvement"
                  className="relative h-[30px] w-[52px] flex-none cursor-pointer rounded-full border"
                  style={{ borderColor: consent ? "rgba(82,179,164,.6)" : "rgba(237,231,216,.2)", background: consent ? "#2E8C7E" : "rgba(237,231,216,.08)" }}
                >
                  <div className="absolute top-[3px] h-[22px] w-[22px] rounded-full bg-text transition-[left]" style={{ left: consent ? "25px" : "3px" }} />
                </button>
              </div>
            </div>
            <div className="my-3.5 text-[11.5px] text-[#5F6B64]">
              Never pre-checked. Saying no changes nothing about your learning.
            </div>
            <GoldButton onClick={() => router.push("/today")}>Enter the Riwaq</GoldButton>
          </>
        )}
      </div>
    </div>
  );
}
