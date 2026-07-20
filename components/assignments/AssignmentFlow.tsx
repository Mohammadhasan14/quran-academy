"use client";

import { useState } from "react";
import { TEACHER_ANNOTATIONS, WAVE_REPORT } from "@/lib/constants/lesson-data";

type Phase = "brief" | "review" | "submitted" | "reviewed";

export function AssignmentFlow() {
  const [phase, setPhase] = useState<Phase>("brief");
  const [uploadError, setUploadError] = useState(true);
  const [noteIndex, setNoteIndex] = useState(0);
  const [outcome, setOutcome] = useState<"pass" | "redo">("pass");

  const note = TEACHER_ANNOTATIONS[noteIndex];

  return (
    <div className="mx-auto w-full max-w-md px-6 py-8 text-[#EDE7D8]">
      {phase === "brief" && (
        <div>
          <div className="mb-1.5 text-[11px] tracking-[0.13em] text-gold uppercase">Assignment · Module 2 capstone</div>
          <div className="mb-3 text-xl leading-[1.25] font-extrabold">Recite Al-Fatiha, complete, with every ghunnah held.</div>
          <div dir="rtl" className="font-arabic-quran mb-3.5 rounded-xl border border-[#EDE7D8]/[.08] bg-[#0D1512] p-3.5 text-center text-xl leading-[2] text-[#EDE7D8]">
            بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ …
          </div>
          <div className="mb-2 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">Your teacher will listen for</div>
          <div className="mb-3.5 text-[13px] leading-[1.8] text-[#B9C2BB]">
            · Ghunnah held two counts, every time
            <br />
            · Madd lengths steady across verses
            <br />
            · Clean stops at each verse end
          </div>
          <div className="flex justify-between border-t border-[#EDE7D8]/[.08] py-2.5 text-[12.5px] text-[#9FAAA3]">
            <span>Due Sunday night</span>
            <span>3 attempts allowed</span>
            <span>review ≤ 72h</span>
          </div>
          <button
            onClick={() => setPhase("review")}
            className="mt-2 h-12 w-full rounded-xl border-none text-[14.5px] font-bold text-[#0A100E]"
            style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
          >
            Begin recording
          </button>
        </div>
      )}

      {phase === "review" && (
        <div className="text-center">
          <div className="mb-4 text-[11px] tracking-[0.13em] text-[#9FAAA3] uppercase">Attempt 2 of 3 · review before sending</div>
          <div className="mb-2 flex h-10 items-end gap-0.5">
            {WAVE_REPORT.slice(0, 20).map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-teal/45" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mb-4.5 text-xs text-[#9FAAA3]">1:31 · recorded just now</div>
          <div className="mb-4.5 flex justify-center gap-3">
            <button className="h-11 rounded-[11px] border border-teal/40 bg-teal/[.08] px-4.5 text-[13px] font-bold text-teal">▶ Listen back</button>
            <button className="h-11 rounded-[11px] border border-[#EDE7D8]/[.14] px-4.5 text-[13px] font-bold text-[#9FAAA3]">Re-record</button>
          </div>
          <button
            onClick={() => (uploadError ? null : setPhase("submitted"))}
            className="mb-4 h-12 w-full rounded-xl border-none text-[14.5px] font-bold text-[#0A100E]"
            style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
          >
            Submit to your teacher
          </button>
          {uploadError && (
            <div className="flex gap-2.5 rounded-[11px] border border-[#B4573F]/30 bg-[#B4573F]/[.08] px-3.5 py-3 text-left">
              <div className="mt-1 h-[7px] w-[7px] flex-none rotate-45 bg-[#B4573F]" />
              <div className="text-[12.5px] leading-[1.5] text-[#D8A79A]">
                Upload paused — connection dropped. Your recording is safe on this device.{" "}
                <button onClick={() => setUploadError(false)} className="font-bold text-[#EDE7D8]">Retry</button>
              </div>
            </div>
          )}
          <div className="mt-2.5 text-[10.5px] text-[#5F6B64]">system error red — never used for recitation feedback</div>
        </div>
      )}

      {phase === "submitted" && (
        <div className="pt-2 text-center">
          <div className="relative mx-auto mb-4.5 h-16 w-16">
            <div className="absolute inset-2.5 rotate-45 border-[1.5px] border-teal bg-teal/[.14]" />
            <div className="absolute inset-0 flex items-center justify-center text-xl text-teal">✓</div>
          </div>
          <div className="mb-2 text-lg font-extrabold">With your teacher now.</div>
          <div className="mx-auto mb-4.5 max-w-[250px] text-[13.5px] leading-[1.6] text-[#9FAAA3]">
            He reviews in the evenings. Expect his notes within 72 hours — we&apos;ll wake this card when they arrive.
          </div>
          <div className="flex items-center gap-2.5 rounded-[11px] border border-[#EDE7D8]/[.08] bg-[#0D1512] px-3.5 py-3 text-left">
            <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border border-gold/40 bg-[#1B2822] text-[11px] font-extrabold text-gold-bright">Q</div>
            <div className="text-[12.5px] leading-[1.5] text-[#B9C2BB]">Meanwhile: today&apos;s drill queue is 7 quiet minutes.</div>
          </div>
          <button onClick={() => setPhase("reviewed")} className="mt-5 text-xs text-[#5F6B64]">
            (preview: show teacher review)
          </button>
        </div>
      )}

      {phase === "reviewed" && (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full border border-gold/45 bg-[#1B2822] text-[13px] font-extrabold text-gold-bright">Q</div>
            <div>
              <div className="text-[15px] font-extrabold">Your teacher reviewed your Fatiha</div>
              <div className="text-[11.5px] text-[#9FAAA3]">3 notes on your recording · yesterday</div>
            </div>
          </div>
          <div className="relative mb-0.5 h-[46px]">
            <div className="absolute inset-0 flex items-center gap-0.5" style={{ opacity: note.voice ? 0.35 : 1 }}>
              {WAVE_REPORT.slice(0, 20).map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-teal/45" style={{ height: `${h}%` }} />
              ))}
            </div>
            {TEACHER_ANNOTATIONS.map((a, i) => (
              <button
                key={a.at}
                onClick={() => setNoteIndex(i)}
                aria-label={`${a.kind} at ${a.at}`}
                className="absolute -top-2.5 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-[#1B2822] text-[10.5px] font-extrabold text-gold-bright focus-visible:outline-2 focus-visible:outline-teal"
                style={{ left: i === 0 ? "16%" : i === 1 ? "49%" : "77%", borderColor: noteIndex === i ? "rgba(203,165,92,.9)" : "rgba(203,165,92,.35)" }}
              >
                {a.voice ? "Q" : "✎"}
              </button>
            ))}
          </div>
          <div className="mb-3.5 flex justify-between text-[10.5px] text-[#5F6B64]">
            <span>0:00</span><span>your recording · 1:31</span>
          </div>
          <div aria-live="polite" className="mb-3.5 min-h-[118px] rounded-2xl border border-gold/30 bg-[#131D19] px-4.5 py-4">
            <div className="mb-2.5 flex items-center gap-2.5">
              <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border border-gold/45 bg-[#1B2822] text-[11px] font-extrabold text-gold-bright">Q</div>
              <div className="text-xs font-bold text-gold">{note.kind} · at {note.at}</div>
            </div>
            <div className="text-[13.5px] leading-[1.6] text-[#EDE7D8]">{note.txt}</div>
            {note.voice && <div className="mt-2 text-xs text-[#5F6B64]">your recitation ducks softly while his note plays, then resumes</div>}
          </div>
          <div className="mb-3.5 rounded-xl border border-[#EDE7D8]/[.08] bg-[#0D1512] px-4 py-3.5">
            <div className="mb-1.5 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">His summary</div>
            <div className="text-[13.5px] leading-[1.6] text-[#B9C2BB]">
              &quot;Your ghunnah has truly settled — I can hear the counting. We will let the madd in verse 3 breathe
              a little longer, and then this surah is yours.&quot;
            </div>
          </div>

          {outcome === "pass" ? (
            <div className="flex items-center gap-3 rounded-xl border border-gold/40 bg-gold/[.08] px-4 py-3.5">
              <div className="relative h-6.5 w-6.5 flex-none">
                <div className="absolute inset-1 rotate-45 border border-gold bg-gold/20" />
              </div>
              <div className="text-[13.5px] font-bold text-gold-bright">Mastery confirmed — Module 3 unlocked.</div>
            </div>
          ) : (
            <div className="rounded-xl border border-[#D99A3D]/35 bg-[#D99A3D]/[.07] px-4 py-3.5">
              <div className="mb-2.5 text-[13.5px] leading-[1.55] text-[#EDE7D8]">
                &quot;One more pass, with your ear on the verse-3 madd. Attempt 3 is open — take your time.&quot;
              </div>
              <button className="h-10 rounded-[10px] border border-gold/45 bg-gold/10 px-4.5 text-[12.5px] font-bold text-gold-bright">
                Resubmit — focus: madd, verse 3
              </button>
            </div>
          )}

          <div className="mt-4 text-xs text-[#5F6B64]">
            Demo outcome:{" "}
            <button onClick={() => setOutcome("pass")} className="text-teal underline">mastery confirmed</button> ·{" "}
            <button onClick={() => setOutcome("redo")} className="text-teal underline">kind resubmit</button>
          </div>
        </div>
      )}
    </div>
  );
}
