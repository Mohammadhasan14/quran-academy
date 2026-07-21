"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { useHasMounted } from "@/hooks/useHasMounted";
import { SETTINGS_NAV } from "@/lib/constants/progress-data";

function Toggle({ on, onClick, label }: { on: boolean; onClick?: () => void; label?: string }) {
  return (
    <button
      onClick={onClick}
      role="switch"
      aria-checked={on}
      aria-label={label}
      className="relative h-[26px] w-11 flex-none rounded-full"
      style={{ background: on ? "#2E8C7E" : "rgba(237,231,216,.12)", cursor: onClick ? "pointer" : "default" }}
    >
      <div className="absolute top-[3px] h-5 w-5 rounded-full bg-text transition-[left]" style={{ left: on ? "21px" : "3px" }} />
    </button>
  );
}

function Row({ title, subtitle, right }: { title: string; subtitle?: string; right?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3.5 rounded-xl border border-text/[.08] bg-surface-2 px-4.5 py-3.5">
      <div className="min-w-0">
        <div className="text-[13.5px] font-bold text-text">{title}</div>
        {subtitle && <div className="text-xs text-text-muted">{subtitle}</div>}
      </div>
      {right}
    </div>
  );
}

export function SettingsPage() {
  const [section, setSection] = useState(5);
  const [consent, setConsent] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-0 text-text md:flex-row md:px-6 md:py-8">
      <nav className="hidden w-[230px] flex-none border-r border-text/[.08] px-4 py-6 md:block">
        <div className="mb-3 px-2.5 text-[11px] tracking-[0.13em] text-text-muted uppercase">Settings</div>
        <div className="flex flex-col gap-0.5">
          {SETTINGS_NAV.map((name, i) => (
            <button
              key={name}
              onClick={() => setSection(i)}
              className="rounded-[10px] border px-3 py-2.5 text-left text-[13.5px] font-bold focus-visible:outline-2 focus-visible:outline-teal"
              style={{
                borderColor: i === section ? "rgba(203,165,92,.45)" : "transparent",
                background: i === section ? "rgba(203,165,92,.08)" : "transparent",
                color: i === section ? "var(--color-gold-bright)" : "var(--color-text-muted)",
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </nav>

      <div role="tablist" aria-label="Settings sections" className="flex flex-none gap-2 overflow-x-auto px-4 pt-4 pb-1 md:hidden">
        {SETTINGS_NAV.map((name, i) => (
          <button
            key={name}
            role="tab"
            aria-selected={i === section}
            onClick={() => setSection(i)}
            className="flex-none rounded-full border px-3.5 py-2 text-[13px] font-bold whitespace-nowrap focus-visible:outline-2 focus-visible:outline-teal"
            style={{
              borderColor: i === section ? "rgba(203,165,92,.45)" : "rgba(237,231,216,.14)",
              background: i === section ? "rgba(203,165,92,.08)" : "transparent",
              color: i === section ? "var(--color-gold-bright)" : "var(--color-text-muted)",
            }}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="min-w-0 flex-1 px-6 py-6 md:px-7.5">
        {section === 0 && (
          <>
            <h1 className="mb-4 text-xl font-extrabold">Account</h1>
            <div className="flex max-w-[520px] flex-col gap-2.5">
              <Row title="Amina Rahman" subtitle="amina•••@gmail.com" right={<button className="h-[34px] rounded-[9px] border border-text/[.14] px-3.5 text-xs font-bold text-text-muted">Edit</button>} />
              <Row title="Family: Yusuf (child account)" right={<button className="h-[34px] rounded-[9px] border border-text/[.14] px-3.5 text-xs font-bold text-text-muted">Manage</button>} />
            </div>
          </>
        )}

        {section === 1 && (
          <>
            <h1 className="mb-4 text-xl font-extrabold">Subscription</h1>
            <div className="max-w-[520px]">
              <div className="mb-2.5 rounded-xl border border-gold/25 bg-surface-2 px-4.5 py-4">
                <div className="text-[14.5px] font-extrabold text-gold-bright">Premium · $12/month</div>
                <div className="mt-0.5 text-[12.5px] text-text-muted">Renews 3 August 2026 · Visa ···4821</div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button className="h-10 rounded-[10px] border border-text/[.14] px-4 text-[13px] font-bold text-text">Change plan</button>
                <button className="h-10 rounded-[10px] border border-text/[.14] px-4 text-[13px] font-bold text-text">Update payment</button>
                <button className="h-10 rounded-[10px] border border-[#B4573F]/40 px-4 text-[13px] font-bold text-[#D8A79A]">Cancel subscription</button>
              </div>
              <div className="mt-3 text-[12.5px] leading-[1.6] text-text-muted">
                Cancelling takes two taps and keeps your access until 3 August. Your progress, notes, and
                certificates remain yours forever. No retention offers, no maze.
              </div>
            </div>
          </>
        )}

        {section === 2 && (
          <>
            <h1 className="mb-4 text-xl font-extrabold">Notifications</h1>
            <div className="flex max-w-[520px] flex-col gap-2.5">
              <Row title="Daily practice reminder" subtitle="After Fajr · one per day, never guilt" right={<Toggle on />} />
              <Row title="Teacher feedback arrived" subtitle="The one worth interrupting for" right={<Toggle on />} />
              <Row title="Live class starting soon" subtitle="30 minutes before reserved seats" right={<Toggle on={false} />} />
            </div>
          </>
        )}

        {section === 3 && (
          <>
            <h1 className="mb-4 text-xl font-extrabold">Playback &amp; accessibility</h1>
            <div className="flex max-w-[520px] flex-col gap-2.5">
              <Row
                title="Dark mode"
                subtitle="Night practice, easy on the eyes — OLED-friendly"
                right={<Toggle on={isDark} onClick={() => setTheme(isDark ? "light" : "dark")} label="Toggle dark mode" />}
              />
              <Row
                title="Default recitation speed"
                right={
                  <div className="flex gap-1.5">
                    {["0.5×", "0.75×", "1×"].map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border px-2.5 py-1 text-xs"
                        style={s === "0.75×" ? { borderColor: "rgba(203,165,92,.5)", background: "rgba(203,165,92,.1)", color: "var(--color-gold-bright)", fontWeight: 700 } : { borderColor: "rgba(237,231,216,.14)", color: "var(--color-text-muted)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                }
              />
              <Row
                title="Quran text size"
                right={
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-arabic-quran text-base text-text-muted">ب</span>
                    <span className="font-arabic-quran text-[22px] text-gold-bright">ب</span>
                    <span className="font-arabic-quran text-[28px] text-text-muted">ب</span>
                  </div>
                }
              />
              <Row title="Reduce motion" subtitle="Blooms become gentle fades" right={<Toggle on={false} />} />
              <Row title="Captions on teacher video" subtitle="Always on by default" right={<Toggle on />} />
            </div>
          </>
        )}

        {section === 4 && (
          <>
            <h1 className="mb-4 text-xl font-extrabold">Offline downloads</h1>
            <div className="flex max-w-[520px] flex-col gap-2.5">
              <div className="rounded-xl border border-text/[.08] bg-surface-2 px-4.5 py-3.5">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[13.5px] font-bold">Tajweed Foundations I</div>
                  <span className="text-xs text-teal">downloaded · 180 MB</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button className="h-8 rounded-lg border border-text/[.14] px-3 text-[11.5px] font-bold text-text-muted">Remove</button>
                  <button className="h-8 rounded-lg border border-text/[.14] px-3 text-[11.5px] font-bold text-text-muted">Audio only (44 MB)</button>
                </div>
              </div>
              <Row
                title="Perfect Your Fatiha"
                subtitle="120 MB · or audio-only 28 MB"
                right={<button className="h-[34px] rounded-[9px] border border-gold/40 bg-gold/[.08] px-3.5 text-xs font-bold text-gold-bright">↓ Download</button>}
              />
              <div className="rounded-xl border border-text/[.08] bg-surface-2 px-4.5 py-3.5">
                <div className="mb-2 flex justify-between text-[12.5px] text-text-muted">
                  <span>Storage used</span>
                  <span>180 MB of 2 GB limit you set</span>
                </div>
                <div className="relative h-1.5 rounded-sm bg-text/[.08]">
                  <div className="absolute inset-y-0 left-0 w-[9%] rounded-sm bg-teal-deep" />
                </div>
                <div className="mt-2 text-[11.5px] text-[#5F6B64]">
                  Oldest unwatched downloads clear themselves first if space runs low.
                </div>
              </div>
            </div>
          </>
        )}

        {section === 5 && (
          <>
            <div className="mb-1.5 flex items-baseline gap-3">
              <h1 className="text-xl font-extrabold">Privacy Center</h1>
              <div className="text-[11px] tracking-[0.1em] text-gold uppercase">your voice is an amanah</div>
            </div>
            <div className="mb-4.5 max-w-[560px] text-[13px] leading-[1.6] text-text-muted">
              Everything about your data, in one honest place — written in plain language, not legalese.
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex flex-[1.2] flex-col gap-2.5">
                <div className="flex items-center justify-between gap-3.5 rounded-xl border border-text/[.08] bg-surface-2 px-4.5 py-3.5">
                  <div className="min-w-0">
                    <div className="text-[13.5px] font-bold">Share practice audio to improve the AI</div>
                    <div className="text-xs text-text-muted">Anonymized · you said no at onboarding — still no</div>
                  </div>
                  <Toggle on={consent} onClick={() => setConsent((c) => !c)} label="Share practice audio" />
                </div>
                <Row title="Show my progress to my study circle" subtitle="Milestones only — never recordings" right={<Toggle on />} />
                <div className="flex gap-2.5">
                  <button className="h-11 flex-1 rounded-[11px] border border-text/[.14] text-[13px] font-bold text-text">↓ Download my data</button>
                  <button className="h-11 flex-1 rounded-[11px] border border-[#B4573F]/40 text-[13px] font-bold text-[#D8A79A]">Delete my data…</button>
                </div>
                <div className="text-[11.5px] leading-[1.6] text-[#5F6B64]">
                  Deletion is complete and permanent within 30 days — certificates included, if you ask. We will
                  confirm twice, then obey.
                </div>
              </div>
              <div className="flex-1 rounded-2xl border border-gold/25 bg-surface-3 px-5 py-4.5">
                <div className="mb-3 text-xs tracking-[0.1em] text-gold uppercase">What leaves your device</div>
                <div className="text-[13px] leading-[1.75] text-[#B9C2BB]">
                  <strong className="text-teal-hover">Never:</strong> practice audio (analyzed here, then gone), your
                  microphone when idle.
                  <br />
                  <strong className="text-gold-bright">Only when you act:</strong> submissions you send to your
                  teacher; questions you post.
                  <br />
                  <strong className="text-text-muted">Always, minimal:</strong> progress numbers so your courses
                  sync — never sound.
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
