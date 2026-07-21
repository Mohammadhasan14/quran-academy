"use client";

import { useState } from "react";
import { FAQS, PRICING } from "@/lib/constants/home-data";
import { Accordion } from "@/components/ui/Accordion";

const COURSES = [
  {
    title: "Perfect Your Fatiha in 30 Days",
    body: "The seven verses you recite every day — mastered word by word, with AI coaching on every attempt.",
    meta: "4 modules · 22 lessons · mastery-gated",
    flagship: true,
  },
  {
    title: "Tajweed Foundations I–II",
    body: "Every rule from makhraj to madd, taught with the five-step method: watch, hear, drill, produce, master.",
    meta: "8 modules · 64 lessons · Premium",
  },
  {
    title: "The Reciter's Voice",
    body: "Breath, tone, and stamina — the physical craft beneath beautiful recitation.",
    meta: "5 modules · 30 lessons · Premium",
  },
];

type Currency = "USD" | "GBP" | "EUR";

export function CoursesPricingFAQ() {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [free, prem, tal, fam] = PRICING[currency];

  return (
    <div id="courses" className="border-t border-[#20241F]/[.06] bg-[#F6F1E5] text-[#20241F]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <h2 className="m-0 mb-2 text-[28px] font-extrabold tracking-[-0.01em] sm:text-4xl">Begin with the flagship — free.</h2>
        <p className="mb-8 max-w-[560px] text-[15px] leading-[1.55] text-[#5A6159] sm:text-[16.5px]">
          Structured courses with video lessons, drills, mastery checks, and live class access at the higher tiers.
        </p>

        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <div
              key={c.title}
              className="relative rounded-2xl bg-[#FDFBF4] p-6"
              style={{ border: c.flagship ? "1.5px solid rgba(168,133,62,.45)" : "1px solid rgba(32,36,31,.1)" }}
            >
              {c.flagship && (
                <div
                  className="absolute -top-[11px] left-5 rounded-full px-3 py-1 text-[10.5px] font-extrabold tracking-[0.12em] text-[#20241F] uppercase"
                  style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
                >
                  Free flagship
                </div>
              )}
              <div className="mt-1.5 mb-1 text-[19px] font-extrabold">{c.title}</div>
              <div className="mb-3.5 text-[13.5px] leading-[1.5] text-[#5A6159]">{c.body}</div>
              <div className="text-[12.5px] text-[#8B8778]">{c.meta}</div>
            </div>
          ))}
        </div>

        <div className="mb-16 border-y border-[#A8853E]/45 px-4 py-9 text-center sm:px-6">
          <div className="mb-2 text-[21px] font-extrabold">No one is turned away.</div>
          <div className="mx-auto mb-4.5 max-w-[560px] text-balance text-[15px] leading-[1.6] text-[#5A6159]">
            Our waqf fund covers students who cannot pay — funded by the community, for the community. Every
            Talaqqi seat sponsors a scholarship.
          </div>
          <div className="flex flex-wrap justify-center gap-x-6.5 gap-y-2 text-sm font-bold">
            <a href="#pricing" className="text-[#14655A]">Apply for a scholarship</a>
            <a href="#pricing" className="text-[#8B6A1F]">Give to the fund</a>
          </div>
        </div>

        <div id="pricing" className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="m-0 text-[26px] font-extrabold tracking-[-0.01em] sm:text-[30px]">Honest pricing, no dark patterns.</h2>
          <div className="flex flex-wrap items-center gap-3 text-[13px] text-[#8B8778]">
            <span>Regional pricing available · cancel anytime, in two taps</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as Currency)}
              className="rounded-md border border-[#20241F]/15 bg-[#FDFBF4] px-2 py-1 text-xs text-[#20241F]"
            >
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#20241F]/10 bg-[#FDFBF4] p-[22px]">
            <div className="text-[15px] font-extrabold">Free</div>
            <div className="my-2 text-[26px] font-extrabold">{free}</div>
            <div className="mb-3 text-xs text-[#8B8778]">forever</div>
            <div className="text-[13px] leading-[1.7] text-[#33403B]">
              Alphabet &amp; Tajweed explorers · the Fatiha course · Mushaf &amp; listening, always
            </div>
          </div>
          <div className="relative rounded-2xl bg-[#FDFBF4] p-[22px]" style={{ border: "1.5px solid rgba(20,101,90,.55)" }}>
            <div className="absolute -top-[11px] left-4.5 rounded-full bg-[#14655A] px-3 py-1 text-[10.5px] font-extrabold tracking-[0.12em] text-[#F6F1E5] uppercase">
              Most popular
            </div>
            <div className="mt-1 text-[15px] font-extrabold text-[#14655A]">Premium</div>
            <div className="my-2 text-[26px] font-extrabold">{prem}</div>
            <div className="mb-3 text-xs text-[#8B8778]">per month</div>
            <div className="text-[13px] leading-[1.7] text-[#33403B]">
              All courses · unlimited AI coaching · live group classes · full progress analytics
            </div>
          </div>
          <div className="rounded-2xl border border-[#20241F]/10 bg-[#FDFBF4] p-[22px]">
            <div className="text-[15px] font-extrabold">Family</div>
            <div className="my-2 text-[26px] font-extrabold">{fam}</div>
            <div className="mb-3 text-xs text-[#8B8778]">per month · up to 5</div>
            <div className="text-[13px] leading-[1.7] text-[#33403B]">
              Premium for the household · kids mode · parent progress view
            </div>
          </div>
          <div className="rounded-2xl p-[22px] text-[#EDE7D8]" style={{ background: "#12332C", border: "1.5px solid rgba(203,165,92,.6)" }}>
            <div className="text-[15px] font-extrabold text-gold-bright">Talaqqi</div>
            <div className="mt-px text-xs text-[#9FCCC2]">Learn directly with the Qari</div>
            <div className="my-2 text-[26px] font-extrabold">{tal}</div>
            <div className="mb-3 text-xs text-[#9FCCC2]">per month</div>
            <div className="text-[13px] leading-[1.7] text-[#D8E2DC]">
              Everything in Premium · monthly 1-to-1 review by the Qari · ijazah-track eligibility
            </div>
            <div className="mt-3 border-t border-gold/25 pt-2.5 text-xs text-gold">
              Limited seats — reviews are done by human ears.
            </div>
          </div>
        </div>
        <div className="mb-16 text-[13.5px] text-[#5A6159]">
          The Mushaf and all recitation audio are{" "}
          <strong className="text-[#8B6A1F]">free forever, for everyone</strong> — a waqf.
        </div>

        <h2 className="m-0 mb-5 text-[26px] font-extrabold tracking-[-0.01em] sm:text-[30px]">Questions, answered plainly.</h2>
        <Accordion items={FAQS} />
      </div>
    </div>
  );
}
