const STAGES = [
  { n: "١", title: "Foundations", body: "Letters, makharij, core Tajweed · your Fatiha perfected", state: "done" as const },
  { n: "٢", title: "The Voice", body: "Breath, tone, phrase length — a reciter's instrument", state: "current" as const },
  { n: "٣", title: "Maqamat", body: "The melodic modes — Bayati, Rast, and beyond", state: "upcoming" as const },
  { n: "٤", title: "Mujawwad", body: "The artistry of the great Qurra, studied closely", state: "upcoming" as const },
  { n: "◈", title: "Ijazah track", body: "Certified transmission, in your teacher's unbroken chain", state: "final" as const },
];

export function LearningPaths() {
  return (
    <div className="border-t border-[#20241F]/[.06] bg-[#F6F1E5] text-[#20241F]">
      <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-[76px]">
        <div className="mb-2.5 text-xs tracking-[0.16em] text-[#A8853E] uppercase">The road ahead</div>
        <h2 className="m-0 mb-2 text-[28px] font-extrabold tracking-[-0.01em] sm:text-4xl">From your first letter to ijazah.</h2>
        <p className="mb-10 max-w-[560px] text-[15px] leading-[1.55] text-[#5A6159] sm:text-[16.5px]">
          Five stages, mastery-gated: you advance when your recitation is ready, confirmed by your teacher&apos;s
          ear — not when a timer says so.
        </p>
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-0">
          {STAGES.map((s, i) => (
            <div key={s.title} className="relative flex w-full items-start gap-4 text-left md:block md:w-auto md:flex-1 md:text-center">
              {i > 0 && (
                <div
                  className="absolute top-[17px] left-0 right-1/2 hidden h-0.5 md:block"
                  style={{ background: s.state === "upcoming" || s.state === "final" ? "rgba(32,36,31,.15)" : "#14655A" }}
                />
              )}
              {i < STAGES.length - 1 && (
                <div
                  className="absolute top-[17px] left-1/2 right-0 hidden h-0.5 md:block"
                  style={{ background: s.state === "done" ? "#14655A" : "rgba(32,36,31,.15)" }}
                />
              )}
              <div
                className="relative mx-0 flex h-9 w-9 flex-none items-center justify-center rounded-full border-2 text-[13px] font-extrabold md:mx-auto"
                style={{
                  background: s.state === "done" ? "#14655A" : "#FDFBF4",
                  borderColor: s.state === "final" ? "#A8853E" : s.state === "upcoming" ? "rgba(32,36,31,.25)" : "#14655A",
                  color: s.state === "done" ? "#F6F1E5" : s.state === "current" ? "#14655A" : s.state === "final" ? "#A8853E" : "#8B8778",
                }}
              >
                {s.n}
              </div>
              <div className="min-w-0 md:mt-3">
                <div
                  className="text-[15px] font-bold"
                  style={{ color: s.state === "final" ? "#8B6A1F" : "#20241F" }}
                >
                  {s.title}
                </div>
                <div className="mt-[3px] text-[12.5px] text-[#5A6159] md:px-3">{s.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
