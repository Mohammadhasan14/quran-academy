"use client";

import { useState } from "react";
import { MAQAM_PAIRS } from "@/lib/constants/home-data";

const CLIP_A_BARS = [35, 60, 45, 80, 55, 70, 40, 65];
const CLIP_B_BARS = [50, 30, 75, 55, 85, 45, 68, 38];

export function MaqamGame() {
  const [pairIndex, setPairIndex] = useState(0);
  const [playedA, setPlayedA] = useState(false);
  const [playedB, setPlayedB] = useState(false);
  const [pick, setPick] = useState<"A" | "B" | null>(null);

  const mq = MAQAM_PAIRS[pairIndex];
  const ready = playedA && playedB;
  const revealed = pick !== null;

  function choose(c: "A" | "B") {
    if (!ready || revealed) return;
    setPick(c);
  }

  function tryAnother() {
    setPairIndex((i) => (i + 1) % MAQAM_PAIRS.length);
    setPlayedA(false);
    setPlayedB(false);
    setPick(null);
  }

  const otherClipLabel = mq.correct === "A" ? "B" : "A";

  return (
    <div className="border-y border-[#EDE7D8]/[.06] bg-[#0D1512]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <div className="mb-2.5 text-xs tracking-[0.16em] text-gold uppercase">Open classroom · The melodic modes</div>
        <h2 className="m-0 mb-2 text-[28px] font-extrabold tracking-[-0.01em] sm:text-4xl">Can you hear the maqam?</h2>
        <p className="mb-8 max-w-[600px] text-[15px] leading-[1.55] text-[#9FAAA3] sm:text-[16.5px]">
          Two short recitations of the same verse, in two different melodic modes. Listen to both — no timer, no
          score — then trust your ear.
        </p>

        <div className="mb-4.5 flex flex-col gap-5 md:flex-row">
          {(["A", "B"] as const).map((clip) => {
            const isA = clip === "A";
            const played = isA ? playedA : playedB;
            const correctHere = mq.correct === clip;
            const tag = revealed ? (correctHere ? "Bayati" : mq.other) : "";
            return (
              <div
                key={clip}
                className="flex-1 rounded-2xl border bg-[#0A100E] px-4 py-4 sm:px-6 sm:py-[22px]"
                style={{
                  borderColor: revealed && correctHere ? "rgba(217,168,69,.6)" : "rgba(237,231,216,.12)",
                }}
              >
                <div className="mb-3.5 flex items-center justify-between">
                  <div className="text-[15px] font-extrabold text-[#EDE7D8]">Clip {clip}</div>
                  <div className="text-xs font-bold tracking-[0.06em]" style={{ color: isA ? "#D9A845" : "#52B3A4" }}>
                    {tag}
                  </div>
                </div>
                <div className="mb-3.5 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={() => (isA ? setPlayedA(true) : setPlayedB(true))}
                    aria-label={`Play clip ${clip}`}
                    className="h-[42px] flex-none cursor-pointer rounded-[11px] border border-teal/40 bg-teal/[.07] px-4.5 text-[13px] font-bold text-teal focus-visible:outline-2 focus-visible:outline-teal"
                  >
                    {played ? "↻ Play again" : `▶ Play clip ${clip}`}
                  </button>
                  <div className="font-mono text-[10.5px] text-[#9FAAA3]">[ placeholder audio · 0:14 ]</div>
                </div>
                <div className="flex h-[26px] items-end gap-0.5" aria-hidden="true">
                  {(isA ? CLIP_A_BARS : CLIP_B_BARS).map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-[#EDE7D8]/[.16]" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <button
                  onClick={() => choose(clip)}
                  className="mt-4 h-11 w-full rounded-[11px] border border-gold/40 bg-gold/[.08] text-[13.5px] font-bold text-gold-bright focus-visible:outline-2 focus-visible:outline-teal"
                  style={{ opacity: ready && !revealed ? 1 : 0.45, cursor: ready && !revealed ? "pointer" : "default" }}
                >
                  This one is Bayati
                </button>
              </div>
            );
          })}
        </div>

        <div aria-live="polite" className="mb-2.5 min-h-[22px] text-[14.5px] text-gold-bright">
          {revealed
            ? pick === mq.correct
              ? `Your ear caught it — Clip ${mq.correct} is Bayati.`
              : `It was Clip ${mq.correct}. Listen once more — the difference lives in the second step.`
            : ready
              ? "Now — which one is Bayati?"
              : "Listen to both clips first. There is no timer, and no score."}
        </div>

        {revealed && (
          <div className="rounded-2xl border border-[#D9A845]/40 bg-[#0A100E] px-4 py-5 sm:px-[26px] sm:py-6">
            <div className="mb-3.5 text-[17px] font-extrabold text-[#EDE7D8]">
              {pick === mq.correct
                ? `Your ear caught it — Clip ${mq.correct} is Bayati.`
                : `It was Clip ${mq.correct}. Listen once more — the difference lives in the second step.`}
            </div>
            <svg
              viewBox="0 0 640 160"
              width="100%"
              className="block"
              role="img"
              aria-label="Pitch curves of both clips drawn over maqam ledger lines, with the quarter-tone step marked"
            >
              <line x1="0" y1="20" x2="640" y2="20" stroke="rgba(237,231,216,.1)" strokeWidth={1} />
              <line x1="0" y1="50" x2="640" y2="50" stroke="rgba(237,231,216,.1)" strokeWidth={1} />
              <line x1="0" y1="80" x2="640" y2="80" stroke="rgba(237,231,216,.1)" strokeWidth={1} />
              <line x1="0" y1="110" x2="640" y2="110" stroke="rgba(237,231,216,.1)" strokeWidth={1} />
              <line x1="0" y1="140" x2="640" y2="140" stroke="rgba(237,231,216,.1)" strokeWidth={1} />
              <line x1="0" y1="95" x2="640" y2="95" stroke="rgba(217,168,69,.55)" strokeWidth={1} strokeDasharray="4 5" />
              <text x="8" y="90" fill="#D9A845" fontSize="10" fontFamily="ui-monospace,Menlo,monospace">
                quarter-tone step — between the lines
              </text>
              <path d="M20,132 C70,116 110,130 170,112 S270,90 330,96 Q370,98 400,95 S520,84 620,98" fill="none" stroke="#D9A845" strokeWidth={2.5} />
              <path d="M20,112 C70,84 130,98 190,70 S310,44 380,58 S540,32 620,46" fill="none" stroke="#52B3A4" strokeWidth={2} />
            </svg>
            <div className="my-3 flex flex-col gap-2 text-[12.5px] font-bold sm:flex-row sm:flex-wrap sm:gap-6">
              <span className="flex items-center gap-1.5 text-[#D9A845]">
                <span className="h-[3px] w-[18px] flex-none rounded-sm bg-[#D9A845]" />
                Clip {mq.correct} — Bayati, resting on the quarter-tone
              </span>
              <span className="flex items-center gap-1.5 text-teal">
                <span className="h-0.5 w-[18px] flex-none rounded-sm bg-teal" />
                Clip {otherClipLabel} — {mq.other}
              </span>
            </div>
            <div className="max-w-[660px] text-[14.5px] leading-[1.6] text-[#B9C2BB]">{mq.explain}</div>
            <button
              onClick={tryAnother}
              className="mt-4.5 h-[42px] cursor-pointer rounded-[11px] border border-[#EDE7D8]/[.16] bg-transparent px-5 text-[13.5px] font-bold text-[#EDE7D8] hover:border-gold/50 focus-visible:outline-2 focus-visible:outline-teal"
            >
              Try another pair
            </button>
          </div>
        )}

        <div className="mt-6 max-w-[640px] text-[13.5px] leading-[1.6] text-[#9FAAA3]">
          The full Maqamat path — Bayati, Rast, Hijaz, Nahawand, Saba, Sikah — is taught step by step, ear first, then
          voice. <span className="text-gold">Nowhere else online.</span>
        </div>
      </div>
    </div>
  );
}
