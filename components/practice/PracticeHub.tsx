"use client";

import { useState } from "react";
import { DIAGNOSIS_REPORT, WAVE_REPORT } from "@/lib/constants/lesson-data";
import { Waveform } from "@/components/ui/Waveform";

type Phase = "hub" | "session" | "analyzing" | "report";

const RECENT_REPORTS = [
  { label: "Yesterday · Al-Fatiha", right: "2 flags", extra: "· 1 unclear", color: "#D99A3D" },
  { label: "Tuesday · Al-Ikhlas", right: "clean run", extra: "", color: "#52B3A4" },
];

const MARKER_POSITIONS = [
  { left: "13%", label: "Definite flag at 0:12", glyph: "!" },
  { left: "46%", label: "Likely flag at 0:44", glyph: "!" },
  { left: "80%", label: "Unclear at 1:08", glyph: "?" },
];

export function PracticeHub() {
  const [phase, setPhase] = useState<Phase>("hub");
  const [strict, setStrict] = useState(false);
  const [markerIndex, setMarkerIndex] = useState(0);

  const selD = DIAGNOSIS_REPORT[markerIndex];

  if (phase === "hub") {
    return (
      <div className="mx-auto w-full max-w-3xl px-6 py-8 text-[#EDE7D8] md:px-10 md:py-10">
        <div className="mb-1 text-[11px] tracking-[0.14em] text-gold uppercase">Practice · The Studio</div>
        <h1 className="mb-4.5 text-[22px] font-extrabold">Today&apos;s training</h1>

        <div className="mb-3 rounded-2xl border border-gold/25 bg-[#131D19] px-4.5 py-4">
          <div className="mb-2.5 flex items-center justify-between">
            <div className="text-[14.5px] font-extrabold">Drill queue — from your mistake log</div>
            <div className="text-xs text-gold">3 drills · 7 min</div>
          </div>
          <div className="text-[13px] leading-[1.8] text-[#B9C2BB]">
            Ghunnah length · <span dir="rtl" className="font-arabic-quran">ثُمَّ</span> ×4 <span className="text-[#5F6B64]">from yesterday</span>
            <br />
            Madd count · <span dir="rtl" className="font-arabic-quran">ٱلرَّحْمَـٰنِ</span> ×3{" "}
            <span className="text-[#5F6B64]">from Tuesday&apos;s session</span>
            <br />
            Qāf depth · minimal pairs ×5 <span className="text-[#5F6B64]">teacher-assigned</span>
          </div>
          <button
            onClick={() => setPhase("session")}
            className="mt-3.5 h-11 w-full rounded-[11px] border-none text-sm font-bold text-[#0A100E]"
            style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
          >
            Start the queue
          </button>
        </div>

        <div className="mb-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {[
            { title: "Repeat after Qari", body: "Phrase-by-phrase echo practice" },
            { title: "Free practice", body: "Any passage, AI follows gently" },
            { title: "Interactive Mushaf", body: "One tool among these — word taps, tajweed layer" },
            { title: "Submission recorder", body: "Record for your teacher's review" },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-[#EDE7D8]/[.09] bg-[#0D1512] px-4 py-3.5">
              <div className="text-[13.5px] font-extrabold">{c.title}</div>
              <div className="mt-0.5 text-xs text-[#9FAAA3]">{c.body}</div>
            </div>
          ))}
        </div>

        <div className="mb-2 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">Recent session reports</div>
        <div className="flex flex-col gap-2">
          {RECENT_REPORTS.map((r) => (
            <div key={r.label} className="flex items-center gap-3 rounded-[11px] border border-[#EDE7D8]/[.08] bg-[#0D1512] px-3.5 py-2.5 text-[13px] text-[#B9C2BB]">
              {r.label}
              <span className="ml-auto" style={{ color: r.color }}>{r.right}</span>
              <span className="text-[#5F6B64]">{r.extra}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (phase === "session") {
    return (
      <div className="mx-auto flex min-h-[70vh] w-full max-w-sm flex-col bg-[#0A100E] text-[#EDE7D8]">
        <div className="flex items-center justify-between px-4.5 pt-4 pb-2">
          <div className="text-xs text-[#9FAAA3]">Live session · Al-Fatiha</div>
          <div className="flex items-center gap-1.5 text-[10.5px] text-gold">
            <span className="h-[7px] w-[7px] animate-[rw-glow_2s_ease-in-out_infinite] rounded-full bg-gold" />
            listening
          </div>
        </div>
        <div dir="rtl" className="font-arabic-quran flex-1 px-5 py-3.5 text-center text-2xl leading-[2.2]">
          <span className="text-teal-hover">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</span>
          <br />
          <span className="text-teal-hover">ٱلْحَمْدُ لِلَّهِ رَبِّ</span> <span className="text-teal-hover">ٱلْعَـٰلَمِينَ</span>
          <br />
          <span className="text-teal-hover">ٱلرَّحْمَـٰ</span>
          <span style={{ color: "#D9A845", textShadow: "0 0 14px rgba(217,168,69,.45)" }}>نِ</span>{" "}
          <span style={{ color: "#D9A845" }}>ٱلرَّحِيمِ</span>
          <br />
          <span className="border-b-2 border-teal/50 text-[#EDE7D8]">مَـٰلِكِ يَوْمِ ٱلدِّينِ</span>
          <br />
          <span className="text-[#5F6B64]">إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</span>
        </div>
        <div className="px-4.5 pb-1.5 text-center text-[11.5px] text-[#9FAAA3]">
          soft green = confirmed · amber glow = suspected, never interrupts
        </div>
        <div className="flex items-center gap-3.5 border-t border-[#EDE7D8]/[.08] px-4.5 pt-3 pb-6">
          <button
            onClick={() => setPhase("analyzing")}
            aria-label="Recording — tap to pause"
            className="flex h-[58px] w-[58px] flex-none animate-[rw-pulse_2.6s_ease-in-out_infinite] items-center justify-center rounded-full border-2 border-gold/70 cursor-pointer"
            style={{ background: "radial-gradient(circle at 50% 36%,#D9B96E,#B98F45)" }}
          >
            <div className="h-4 w-4 rounded-[4px] bg-[#0A100E]" />
          </button>
          <Waveform bars={10} className="h-[26px] flex-1" barClassName="bg-teal/50" />
          <button
            onClick={() => setStrict((s) => !s)}
            aria-label="Toggle strict mode"
            className="h-[34px] flex-none rounded-[9px] border px-3 text-[11px] font-bold"
            style={{
              borderColor: strict ? "rgba(217,154,61,.55)" : "rgba(237,231,216,.14)",
              background: strict ? "rgba(217,154,61,.1)" : "transparent",
              color: strict ? "#D99A3D" : "#9FAAA3",
            }}
          >
            Strict: {strict ? "on" : "off"}
          </button>
        </div>
      </div>
    );
  }

  if (phase === "analyzing") {
    return (
      <div className="mx-auto flex min-h-[60vh] w-full max-w-lg flex-col items-center justify-center px-6 text-center text-[#EDE7D8]">
        <div className="mb-5.5 h-14 w-14 rounded-full border-2 border-gold/20 animate-[rw-spin_1.2s_linear_infinite]" style={{ borderTopColor: "var(--color-gold)" }} />
        <div className="text-xl font-extrabold">Listening with care…</div>
        <div className="mt-2 max-w-[300px] text-[13.5px] leading-[1.6] text-[#9FAAA3]">
          Measuring your madd counts and ghunnah lengths. On your device — nothing leaves it.
        </div>
        <button
          onClick={() => setPhase("report")}
          className="mt-5.5 h-[38px] rounded-[10px] border border-[#EDE7D8]/[.14] px-4 text-xs text-[#9FAAA3]"
        >
          (preview: show report)
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-8 text-[#EDE7D8] md:px-10 md:py-10">
      <div className="mb-1.5 flex items-baseline justify-between">
        <div className="text-xl font-extrabold">Session report — Al-Fatiha</div>
        <button onClick={() => setPhase("hub")} className="text-xs text-[#5F6B64]">Practice again</button>
      </div>
      <div className="mb-4.5 flex flex-wrap gap-4 text-[12.5px] text-[#9FAAA3]">
        <span>1:22 recited</span>
        <span className="text-teal-hover">31 words confirmed</span>
        <span className="text-[#D99A3D]">2 flags</span>
        <span>1 unclear</span>
        <span>pace 0.92× of model</span>
      </div>
      <div className="relative mb-1 h-[52px]">
        <div className="absolute inset-0 flex items-center gap-0.5">
          {WAVE_REPORT.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: "rgba(46,140,126,.4)" }} />
          ))}
        </div>
        {MARKER_POSITIONS.map((m, i) => {
          const selected = markerIndex === i;
          return (
            <button
              key={i}
              onClick={() => setMarkerIndex(i)}
              aria-label={m.label}
              className="absolute -top-2 flex h-[25px] w-[25px] items-center justify-center rounded-full border-2 text-[11px] font-extrabold"
              style={{
                left: m.left,
                borderColor: selected ? "#D99A3D" : "rgba(217,154,61,.5)",
                background: selected ? "#EBC079" : "rgba(235,192,121,.35)",
                color: "#0A100E",
                borderStyle: i === 1 ? "dashed" : "solid",
              }}
            >
              {m.glyph}
            </button>
          );
        })}
      </div>
      <div className="mb-4 flex justify-between text-[10.5px] text-[#5F6B64]">
        <span>0:00</span><span>0:41</span><span>1:22</span>
      </div>
      <div className="mb-4.5 flex flex-wrap gap-3.5 text-[11px] text-[#9FAAA3]">
        <span><span className="mr-1 inline-block h-[9px] w-[9px] rounded-full bg-[#D99A3D] align-[-1px]" /> definite</span>
        <span><span className="mr-1 inline-block h-[9px] w-[9px] rounded-full border-[1.5px] border-dashed border-[#D99A3D] align-[-2px]" /> likely — compare</span>
        <span><span className="mr-1 inline-block h-[9px] w-[9px] rounded-full border-[1.5px] border-[#5F6B64] align-[-2px]" /> unclear — ask teacher</span>
      </div>
      <div className="rounded-2xl border border-[#EDE7D8]/10 bg-[#131D19] px-5 py-4.5">
        <div
          className="mb-2.5 inline-flex rounded-full border px-3 py-1 text-[11.5px] font-extrabold"
          style={{ background: selD.cbg, borderColor: selD.cbd, color: selD.cc }}
        >
          {selD.band}
        </div>
        <div className="mb-1.5 text-[17px] font-extrabold">
          {selD.title} <span dir="rtl" className="font-arabic-quran text-[22px] text-teal-hover">{selD.ar}</span>
        </div>
        <div className="mb-1 text-[13.5px] leading-[1.6] text-[#B9C2BB]">
          <strong className="text-[#EDE7D8]">What happened:</strong> {selD.what}
        </div>
        <div className="mb-3.5 text-[13.5px] leading-[1.6] text-[#B9C2BB]">
          <strong className="text-[#EDE7D8]">Why it matters:</strong> {selD.why}
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="h-[38px] rounded-[10px] border border-teal/40 bg-teal/[.08] px-3.5 text-xs font-bold text-teal">▶ Model audio</button>
          <button className="h-[38px] rounded-[10px] border border-gold/40 bg-gold/[.08] px-3.5 text-xs font-bold text-gold-bright">+ Add drill to tomorrow</button>
          {selD.unclear && (
            <button className="h-[38px] rounded-[10px] border border-[#EDE7D8]/[.16] px-3.5 text-xs font-bold text-[#EDE7D8]">Send to teacher →</button>
          )}
        </div>
      </div>
    </div>
  );
}
