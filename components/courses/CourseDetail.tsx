"use client";

import { useState } from "react";
import Link from "next/link";
import { COURSE_MODULES, stepColor } from "@/lib/constants/course-detail-data";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function CourseDetail() {
  const [open, setOpen] = useState(1);

  return (
    <div className="text-[#20241F]">
      <div className="flex flex-col gap-8 bg-[#FDFBF4] px-4 py-6 sm:px-6 md:flex-row md:px-9 md:py-8.5" style={{ borderBottom: "1px solid rgba(32,36,31,.07)" }}>
        <div className="min-w-0 flex-[1.2]">
          <div className="mb-2 text-[11px] tracking-[0.14em] text-[#A8853E] uppercase">Course · Tajweed path</div>
          <h1 className="mb-2.5 text-[26px] font-extrabold tracking-[-0.01em] sm:text-[34px]">Tajweed Foundations I</h1>
          <div className="mb-4.5 text-balance text-[15px] leading-[1.6] text-[#5A6159]">
            Every core rule from makhraj to madd, taught in the five-step method — watch, hear, drill, produce,
            master. Your teacher&apos;s voice on every model recording.
          </div>
          <div className="mb-4.5 flex flex-wrap gap-2">
            {["Clean makhraj for all 28 letters", "Ghunnah & the nasal family", "Every madd, measured"].map((tag) => (
              <span key={tag} className="rounded-full border border-[#14655A]/25 bg-[#14655A]/[.07] px-3.5 py-1.5 text-[12.5px] font-bold text-[#14655A]">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-[13px] text-[#8B8778]">
            6 weeks · 15 min/day · 8 modules, 64 lessons · <strong className="text-[#33403B]">2,140 students enrolled</strong>
          </div>
        </div>
        <div className="relative min-w-0 flex-[0.8]">
          <div className="h-[250px] w-full">
            <ImagePlaceholder label="Teacher's course intro video — poster frame (1:20)" />
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3.5 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A100E]/75 text-xs text-gold-bright">▶</div>
            <span className="text-xs text-[#FDFBF4]" style={{ textShadow: "0 1px 3px rgba(0,0,0,.5)" }}>Why this course exists (1:20)</span>
          </div>
        </div>
      </div>

      <div className="px-4 pt-6 pb-8 sm:px-6 md:px-9 md:pt-7 md:pb-8.5">
        <div className="mb-3.5 text-[11px] tracking-[0.12em] text-[#8B8778] uppercase">Curriculum — five steps inside every lesson</div>
        <div className="mb-6.5 flex flex-col gap-2.5">
          {COURSE_MODULES.map((m, i) => (
            <div key={m.number} className="overflow-hidden rounded-2xl border border-[#20241f]/[.09] bg-[#FDFBF4]">
              <button
                onClick={() => setOpen((cur) => (cur === i ? -1 : i))}
                className="flex w-full items-center gap-3.5 px-5 py-4 text-left focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#14655A]"
              >
                <div
                  className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-lg border text-xs font-extrabold"
                  style={{
                    background: m.state === "done" ? "rgba(82,179,164,.1)" : m.state === "current" ? "rgba(168,133,62,.1)" : "transparent",
                    borderColor: m.state === "done" ? "rgba(82,179,164,.45)" : m.state === "current" ? "rgba(168,133,62,.5)" : "rgba(32,36,31,.18)",
                    color: m.state === "done" ? "#14655A" : m.state === "current" ? "#8B6A1F" : "#8B8778",
                  }}
                >
                  {m.number}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[15.5px] font-extrabold">{m.name}</div>
                  <div className="text-xs text-[#8B8778]">{m.meta}</div>
                </div>
                <span className="flex-none text-[15px] text-[#A8853E]">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="border-t border-[#20241f]/[.07] px-5 pb-3.5">
                  {m.lessons.map((ls) => (
                    <div key={ls.name} className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 border-b border-[#20241f]/5 py-2.5 last:border-0">
                      <div
                        className="flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full border text-[10.5px] font-extrabold"
                        style={{
                          background: ls.state === "done" ? "rgba(82,179,164,.1)" : "transparent",
                          borderColor: ls.state === "done" ? "rgba(82,179,164,.5)" : "rgba(32,36,31,.18)",
                          color: ls.state === "done" ? "#14655A" : "#8B8778",
                        }}
                      >
                        {ls.glyph}
                      </div>
                      <div className="min-w-0 flex-1 text-sm font-semibold" style={{ color: ls.state === "locked" ? "#8B8778" : "#20241F" }}>
                        {ls.name}
                        {ls.free && (
                          <span className="ml-2 rounded-full border border-[#14655A]/35 px-2 py-0.5 text-[10.5px] font-extrabold tracking-[0.08em] text-[#14655A] uppercase">
                            Free preview
                          </span>
                        )}
                      </div>
                      <div className="flex flex-none gap-1" aria-label="Five steps">
                        {ls.steps.map((s, si) => (
                          <div key={si} className="h-[7px] w-[7px] rounded-sm" style={{ background: stepColor(s) }} />
                        ))}
                      </div>
                      <div className="w-full flex-none pl-[34px] text-left text-[11.5px] text-[#8B8778] sm:w-[120px] sm:pl-0 sm:text-right">{ls.note}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#20241f]/[.09] bg-[#FDFBF4] px-5 py-4.5">
          <div className="mb-2.5 text-[10.5px] tracking-[0.1em] text-[#8B8778] uppercase">Enrolled</div>
          <Link
            href="/lessons/4"
            className="block h-[46px] rounded-xl border-none bg-[#14655A] text-center text-sm font-bold text-[#F6F1E5] leading-[46px]"
          >
            Continue — Lesson 4, step 3
          </Link>
        </div>
      </div>
    </div>
  );
}
