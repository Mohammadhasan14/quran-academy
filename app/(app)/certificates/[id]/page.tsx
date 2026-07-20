import type { Metadata } from "next";

export const metadata: Metadata = { title: "Verify Certificate" };

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-10 text-[#20241F] md:py-16">
      <div className="rounded-2xl border border-[#A8853E]/30 bg-[#F6F1E5] px-6.5 py-6">
        <div className="mb-3.5 text-[10.5px] tracking-[0.14em] text-[#8B8778] uppercase">
          Public verification — riwaq.academy/v/{id}
        </div>
        <div className="mb-3.5 flex items-center gap-3">
          <div className="relative h-10 w-10 flex-none">
            <div className="absolute inset-[7px] rotate-45 border-[1.5px] border-[#14655A] bg-[#14655A]/[.12]" />
            <div className="absolute inset-0 flex items-center justify-center text-[15px] text-[#14655A]">✓</div>
          </div>
          <div>
            <div className="text-base font-extrabold">Valid certificate</div>
            <div className="text-[11.5px] text-[#5A6159]">Issued by The Digital Riwaq — Recitation Academy</div>
          </div>
        </div>
        <div className="border-t border-[#20241F]/[.08] pt-3 text-[13px] leading-[1.9] text-[#33403B]">
          Holder: <strong>Amina Rahman</strong>
          <br />
          Award: Certificate of Mastery — Tajweed Foundations I
          <br />
          Rank: <span className="font-bold text-[#8B6A1F]">Teacher-certified</span> — examined in live recitation by
          [TEACHER NAME]
          <br />
          Issued: 18 July 2026 · № {id}
        </div>
        <div className="mt-3 text-[11.5px] text-[#8B8778]">
          Teacher-certified awards are confirmed by human examination. AI-verified records are measured by the
          academy&apos;s coach and say so plainly.
        </div>
      </div>
    </div>
  );
}
