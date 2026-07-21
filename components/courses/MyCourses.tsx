import Link from "next/link";

function ProgressRing({ pct, color }: { pct: number; color: string }) {
  const circumference = 163.4;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" role="img" aria-label={`${pct} percent complete`}>
      <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(237,231,216,.1)" strokeWidth={5} />
      <circle
        cx="32" cy="32" r="26" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round"
        strokeDasharray={`${(pct / 100) * circumference} ${circumference}`}
        transform="rotate(-90 32 32)"
      />
      <text x="32" y="37" textAnchor="middle" fill="#EDE7D8" fontSize="14" fontWeight="800" fontFamily="Alegreya Sans">{pct}%</text>
    </svg>
  );
}

export function MyCourses() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 text-[#EDE7D8] md:px-10 md:py-10">
      <div className="mb-5 flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-[1.5] items-center gap-5.5 rounded-2xl border border-gold/25 bg-[#131D19] px-6 py-5.5">
          <div className="min-w-0 flex-1">
            <div className="mb-1.5 text-[11px] tracking-[0.12em] text-gold uppercase">Continue where you left off</div>
            <div className="text-xl font-extrabold">
              Lesson 4 — The Ghunnah · <span className="font-medium text-[#9FAAA3]">Step 3 of 5, Listening drill</span>
            </div>
            <div className="relative mt-3.5 h-[5px] rounded-sm bg-[#EDE7D8]/10">
              <div className="absolute inset-y-0 left-0 w-[52%] rounded-sm" style={{ background: "linear-gradient(90deg,#2E8C7E,#52B3A4)" }} />
            </div>
            <div className="mt-1.5 text-xs text-[#5F6B64]">Tajweed Foundations I · Module 2</div>
          </div>
          <Link
            href="/lessons/4"
            className="flex h-13 flex-none animate-[rw-pulse_4s_ease-in-out_infinite] items-center rounded-[13px] border-none px-6.5 text-[15px] font-bold text-[#0A100E]"
            style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
          >
            Resume
          </Link>
        </div>
        <div className="flex-1 rounded-2xl border border-[#EDE7D8]/[.08] bg-[#0D1512] px-5.5 py-5">
          <div className="mb-2 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">Today · 12 minutes, 3 items</div>
          <div className="text-[13.5px] leading-[1.8] text-[#B9C2BB]">
            1 · Finish the listening drill <span className="text-[#5F6B64]">4 min</span>
            <br />
            2 · Retry set: ghunnah length <span className="text-[#5F6B64]">5 min</span>
            <br />
            3 · Free recitation, AI following <span className="text-[#5F6B64]">3 min</span>
          </div>
        </div>
        <div className="flex-[0.8] rounded-2xl border border-[#EDE7D8]/[.08] bg-[#0D1512] px-5.5 py-5">
          <div className="mb-2.5 text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">27 days of connection</div>
          <div className="mb-2.5 flex gap-1.5">
            <div className="h-3 w-3 rotate-45 bg-gold" />
            <div className="h-3 w-3 rotate-45 bg-gold" />
            <div className="h-3 w-3 rotate-45 bg-gold" />
            <div className="h-3 w-3 rotate-45 border border-gold/60" />
            <div className="h-3 w-3 rotate-45 bg-gold" />
            <div className="h-3 w-3 rotate-45 bg-gold" />
            <div className="h-3 w-3 rotate-45 border border-dashed border-gold/70" />
          </div>
          <div className="text-xs leading-[1.55] text-[#9FAAA3]">
            Thursday was a <span className="text-gold-bright">rest day</span> — the chain holds. Today is open.
          </div>
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-1 items-center gap-4.5 rounded-2xl border border-[#EDE7D8]/[.08] bg-[#0D1512] px-5.5 py-5">
          <ProgressRing pct={52} color="#52B3A4" />
          <div className="min-w-0">
            <div className="text-base font-extrabold">Tajweed Foundations I</div>
            <div className="mt-0.5 text-[12.5px] text-[#9FAAA3]">
              Module 2 of 4 · next milestone: <span className="text-gold-bright">the Madd family</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-4.5 rounded-2xl border border-[#EDE7D8]/[.08] bg-[#0D1512] px-5.5 py-5">
          <ProgressRing pct={88} color="#CBA55C" />
          <div className="min-w-0">
            <div className="text-base font-extrabold">Perfect Your Fatiha in 30 Days</div>
            <div className="mt-0.5 text-[12.5px] text-[#9FAAA3]">
              Final module · next: <span className="text-gold-bright">full-surah submission to your teacher</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-4.5 rounded-2xl border border-dashed border-[#EDE7D8]/[.14] bg-[#0D1512]/50 px-5.5 py-5">
          <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full border border-dashed border-[#EDE7D8]/20 text-lg text-[#5F6B64]">🔒</div>
          <div className="min-w-0">
            <div className="text-base font-extrabold text-[#9FAAA3]">The Reciter&apos;s Voice</div>
            <div className="mt-0.5 text-[12.5px] text-[#5F6B64]">
              Unlocks after Tajweed Foundations II — your voice work builds on clean makhraj
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-1 items-center gap-3.5 rounded-2xl border border-teal/25 bg-teal/5 px-5 py-3.5">
          <div className="h-[7px] w-[7px] flex-none rotate-45 bg-teal" />
          <div className="min-w-0 flex-1 text-[13.5px] text-[#B9C2BB]">
            <span className="font-bold text-teal">Live tonight 21:00</span> — Maqam Circle with your teacher · seat reserved
          </div>
          <button className="ml-auto h-9 flex-none rounded-[10px] border border-teal/40 px-4 text-[12.5px] font-bold text-teal">
            Add reminder
          </button>
        </div>
        <div className="flex flex-1 items-center gap-3.5 rounded-2xl border border-gold/30 bg-gold/[.06] px-5 py-3.5">
          <div className="h-[7px] w-[7px] flex-none animate-[rw-glow_2.4s_ease-in-out_infinite] rotate-45 bg-gold" />
          <div className="min-w-0 flex-1 text-[13.5px] text-[#B9C2BB]">
            <span className="font-bold text-gold-bright">Your teacher reviewed your Fatiha</span> — 3 notes on your recording
          </div>
          <Link href="/assignments/module-2-capstone" className="ml-auto h-9 flex-none rounded-[10px] border border-gold/45 bg-gold/10 px-4 text-[12.5px] leading-9 font-bold text-gold-bright">
            Listen
          </Link>
        </div>
      </div>
    </div>
  );
}
