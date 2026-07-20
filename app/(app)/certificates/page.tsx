import type { Metadata } from "next";
import Link from "next/link";
import { CertificateDocument } from "@/components/certificates/CertificateDocument";

export const metadata: Metadata = { title: "Certificates" };

const WALL = [
  { title: "Tajweed Foundations I", meta: "Teacher-certified · Jul 2026", kind: "certified" as const },
  { title: "Module 2 record", meta: "AI-verified · Jul 2026", kind: "ai" as const },
  { title: "The Reciter's Voice", meta: "in progress", kind: "pending" as const },
  { title: "Ijazah track", meta: "the road continues", kind: "pending" as const },
];

export default function CertificatesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8 text-text md:px-10 md:py-10">
      <div className="mb-1 text-[11px] tracking-[0.13em] text-gold uppercase">Profile · Certificates wall</div>
      <h1 className="mb-6 text-2xl font-extrabold">Your certificates.</h1>

      <div className="mb-8 flex flex-wrap gap-6">
        <div className="w-full max-w-[520px]">
          <Link href="/certificates/TF1-0482" className="block">
            <CertificateDocument />
          </Link>
        </div>
        <div className="flex-1 rounded border border-[#2E8C7E]/50 bg-[#FDFBF4] p-6 text-center text-[#20241F]">
          <div className="mb-2.5 text-[10.5px] tracking-[0.2em] text-[#2E8C7E] uppercase">
            Record of Completion · AI-Verified
          </div>
          <div className="text-xl font-extrabold">Amina Rahman</div>
          <div className="my-1.5 text-[12.5px] leading-[1.6] text-[#5A6159]">
            completed all drills and mastery checks of <strong>Module 2 — The Nasal Family</strong>, measured by the
            academy&apos;s AI coach.
          </div>
          <div className="text-[10.5px] text-[#8B8778]">
            12 July 2026 · № M2-1177 · riwaq.academy/v/M2-1177
            <br />
            <span className="text-[#2E8C7E]">Awaits teacher confirmation to become a Certificate of Mastery.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {WALL.map((item) => (
          <div
            key={item.title}
            className="rounded-xl p-3"
            style={{
              border:
                item.kind === "certified"
                  ? "1px solid rgba(203,165,92,.45)"
                  : item.kind === "ai"
                    ? "1px solid rgba(46,140,126,.4)"
                    : "1px dashed rgba(237,231,216,.16)",
              background: item.kind === "certified" ? "rgba(203,165,92,.05)" : "transparent",
            }}
          >
            <div
              className="mb-2 h-2 w-2 rotate-45"
              style={{
                background: item.kind === "certified" ? "#CBA55C" : "transparent",
                border: item.kind === "ai" ? "1px solid #52B3A4" : undefined,
              }}
            />
            <div className="text-[12.5px] font-extrabold" style={{ color: item.kind === "pending" ? "#5F6B64" : undefined }}>
              {item.title}
            </div>
            <div
              className="mt-0.5 text-[10.5px]"
              style={{ color: item.kind === "certified" ? "#D9B96E" : item.kind === "ai" ? "#52B3A4" : "#5F6B64" }}
            >
              {item.meta}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
