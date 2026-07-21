import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

function TemplateSlot({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-dashed border-[#A8853E]/55 bg-[#D99A3D]/[.12] px-[7px] py-px font-mono text-[12.5px] font-bold text-[#8B6A1F]">
      {children}
    </span>
  );
}

export function MeetYourTeacher() {
  return (
    <div id="teacher" className="border-t border-[#20241F]/[.06] bg-[#FDFBF4] text-[#20241F]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:gap-14 lg:px-8 lg:py-[76px]">
        <div className="flex min-w-0 flex-[0.75] flex-col gap-4">
          <div className="h-[260px] w-full sm:h-[320px] lg:h-[380px]">
            <ImagePlaceholder label="PORTRAIT SLOT — shoot: natural light, eye-level, warm neutral background, looking at camera" />
          </div>
          <div className="relative h-[150px] w-full">
            <ImagePlaceholder label="CLIP SLOT — 30s, one real correction moment, captioned · poster frame" />
            <div className="pointer-events-none absolute bottom-3 left-3.5 flex items-center gap-2">
              <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#0A100E]/75 text-xs text-gold-bright">
                ▶
              </div>
              <span className="text-xs text-[#FDFBF4]" style={{ textShadow: "0 1px 3px rgba(0,0,0,.5)" }}>
                Watch him teach (0:30)
              </span>
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2.5 text-xs tracking-[0.16em] text-[#A8853E] uppercase">The human heart of the academy</div>
          <h2 className="m-0 mb-3.5 text-4xl font-extrabold tracking-[-0.01em]">
            Your teacher is a Qari, not an algorithm.
          </h2>
          <p className="m-0 mb-2.5 text-balance text-base leading-loose text-[#33403B]">
            <TemplateSlot>[TEACHER NAME]</TemplateSlot> holds an ijazah in <TemplateSlot>[IJAZAH LINEAGE]</TemplateSlot>{" "}
            and has taught recitation for <TemplateSlot>[YEARS TEACHING]</TemplateSlot> at{" "}
            <TemplateSlot>[INSTITUTIONS]</TemplateSlot> — from children&apos;s first letters to students completing
            their own ijazah. He reviews the advanced submissions himself, and his ear remains the academy&apos;s
            gold standard: the AI drills you between lessons; he confirms mastery.
          </p>
          <div className="mb-2 text-xs text-[#8B8778]">
            Dashed fields are template slots — no claim ships until the founder fills it.
          </div>
          <div className="my-[22px] flex flex-col gap-2.5">
            <div className="flex items-baseline gap-3">
              <div className="h-[7px] w-[7px] flex-none rotate-45 bg-[#A8853E]" />
              <div className="text-[14.5px] text-[#33403B]">
                <strong>Ijazah:</strong> <TemplateSlot>[IJAZAH LINEAGE]</TemplateSlot> — an unbroken chain of
                transmission, teacher to teacher
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <div className="h-[7px] w-[7px] flex-none rotate-45 bg-[#A8853E]" />
              <div className="text-[14.5px] text-[#33403B]">
                <strong>Teaching:</strong> <TemplateSlot>[YEARS TEACHING]</TemplateSlot> of talaqqi — mosque circles,
                institutes, one-to-one
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <div className="h-[7px] w-[7px] flex-none rotate-45 bg-[#A8853E]" />
              <div className="text-[14.5px] text-[#33403B]">
                <strong>Every course on this platform</strong> — written, recorded, and examined by him
              </div>
            </div>
          </div>
          <div className="mb-[22px] rounded-2xl border border-[#A8853E]/30 bg-[#A8853E]/5 px-4.5 py-4">
            <div className="mb-3.5 text-[11px] tracking-[0.12em] text-[#A8853E] uppercase">The chain of teachers</div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:flex-nowrap sm:justify-normal sm:gap-2.5">
              <div className="text-center">
                <div className="mx-auto mb-1.5 h-[9px] w-[9px] rotate-45 bg-[#A8853E]" />
                <div className="text-[11.5px] whitespace-nowrap text-[#33403B]">The Prophet ﷺ</div>
              </div>
              <div className="hidden h-px flex-1 bg-[#A8853E]/45 sm:block" />
              <div className="text-[13px] text-[#8B8778]">···</div>
              <div className="hidden h-px flex-1 bg-[#A8853E]/45 sm:block" />
              <div className="text-center">
                <div className="mx-auto mb-1.5 h-[9px] w-[9px] rotate-45 border border-[#A8853E]" />
                <div className="font-mono text-[10.5px] font-bold whitespace-nowrap text-[#8B6A1F]">
                  [TEACHER&apos;S SHAYKH]
                </div>
              </div>
              <div className="hidden h-px flex-1 bg-[#A8853E]/45 sm:block" />
              <div className="text-center">
                <div
                  className="mx-auto mb-1.5 h-[11px] w-[11px] rotate-45"
                  style={{ background: "linear-gradient(160deg,#D9B96E,#B98F45)" }}
                />
                <div className="font-mono text-[10.5px] font-bold whitespace-nowrap text-[#8B6A1F]">[TEACHER NAME]</div>
              </div>
            </div>
          </div>
          <button className="h-12 cursor-pointer rounded-xl border border-[#14655A]/40 bg-[#14655A]/[.06] px-6 text-[14.5px] font-bold text-[#14655A] focus-visible:outline-2 focus-visible:outline-[#14655A]">
            Read his story &amp; the full chain
          </button>
        </div>
      </div>
    </div>
  );
}
