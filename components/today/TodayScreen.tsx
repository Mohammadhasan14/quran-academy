"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const PLAN = [
  { title: "Review: natural madd in Al-Fatiha", minutes: "4 min" },
  { title: "New lesson: Ghunnah — definition and duration", minutes: "5 min" },
  { title: "Free recitation with smart AI follow-along", minutes: "3 min" },
];

export function TodayScreen() {
  const [reminded, setReminded] = useState(false);

  return (
    <div className="mx-auto w-full max-w-2xl px-6 py-8 md:px-10 md:py-10">
      <div className="mb-5.5 flex items-start justify-between">
        <div>
          <div className="text-[23px] leading-tight font-semibold text-text">Assalamu alaikum, Amina</div>
          <div className="mt-0.5 text-[13.5px] text-text-muted">Wednesday, 16 July · Isha in two hours</div>
        </div>
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-surface-3 to-surface-2 text-[15px] text-gold">
          A
        </div>
      </div>

      <div className="mb-4.5 flex items-center gap-2.5 rounded-xl border border-gold/[.18] bg-gold/[.07] px-3.5 py-2.5">
        <div className="mt-0 h-[7px] w-[7px] flex-none rotate-45 bg-gold/70" />
        <div className="text-[13.5px] leading-snug text-gold-bright">
          27 days of connection{" "}
          <span className="text-text-muted">· one rest day available this week — no break in your streak</span>
        </div>
      </div>

      <div className="mb-3.5 rounded-2xl border border-gold/[.22] bg-surface-3 p-5">
        <div className="mb-3.5 flex items-baseline justify-between">
          <div className="text-[17px] font-semibold">Today&apos;s session</div>
          <div className="text-[13px] text-gold">12 minutes · 3 items</div>
        </div>
        <div className="mb-4.5 flex flex-col gap-2.5">
          {PLAN.map((item, i) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[9px] border border-teal/30 bg-teal/[.12] text-xs text-teal">
                {i + 1}
              </div>
              <div className="flex-1 text-[14.5px] text-text">{item.title}</div>
              <div className="text-xs text-text-muted">{item.minutes}</div>
            </div>
          ))}
        </div>
        <Button className="h-13 w-full rounded-[13px] text-base">Start session</Button>
      </div>

      <div className="mb-3.5 rounded-2xl border border-text/[.08] bg-surface-2 px-5 py-4">
        <div className="flex items-center justify-between gap-3.5">
          <div className="flex-1">
            <div className="mb-1 text-xs text-text-muted">Resume where you left off</div>
            <div className="text-[15px] text-text">Lesson 4 — The Madd Rules · Step 3 of 5</div>
            <div className="relative mt-2.5 h-1 rounded-sm bg-text/10">
              <div className="absolute h-1 w-[60%] rounded-sm bg-teal-deep" />
            </div>
          </div>
          <button className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-[13px] text-teal">
            ▶
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-text/[.08] bg-surface-2 px-5 py-4">
        <div className="flex items-center justify-between gap-3.5">
          <div className="flex-1">
            <div className="mb-1 text-[12.5px] text-teal">Live class · tonight 9:00 PM</div>
            <div className="text-[15px] text-text">Maqam Bayati — with Shaykh Yusuf</div>
            <div className="mt-0.5 text-[12.5px] text-text-muted">Synchronized Mushaf · 12 participants</div>
          </div>
          <button
            onClick={() => setReminded(true)}
            disabled={reminded}
            className="h-10 flex-none rounded-[11px] border border-gold/40 bg-gold/10 px-4.5 text-sm text-gold-bright disabled:opacity-60"
          >
            {reminded ? "Reminder set" : "Remind me"}
          </button>
        </div>
      </div>
    </div>
  );
}
