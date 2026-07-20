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
      <div className="mx-auto max-w-[1180px] px-8 py-[76px]">
        <div className="mb-2.5 text-xs tracking-[0.16em] text-[#A8853E] uppercase">The road ahead</div>
        <h2 className="m-0 mb-2 text-4xl font-extrabold tracking-[-0.01em]">From your first letter to ijazah.</h2>
        <p className="mb-10 max-w-[560px] text-[16.5px] leading-[1.55] text-[#5A6159]">
          Five stages, mastery-gated: you advance when your recitation is ready, confirmed by your teacher&apos;s
          ear — not when a timer says so.
        </p>
        <div className="flex items-start max-md:flex-col max-md:gap-8">
          {STAGES.map((s, i) => (
            <div key={s.title} className="relative flex-1 text-center">
              {i > 0 && (
                <div
                  className="absolute top-[17px] left-0 right-1/2 h-0.5"
                  style={{ background: s.state === "upcoming" || s.state === "final" ? "rgba(32,36,31,.15)" : "#14655A" }}
                />
              )}
              {i < STAGES.length - 1 && (
                <div
                  className="absolute top-[17px] left-1/2 right-0 h-0.5"
                  style={{ background: s.state === "done" ? "#14655A" : "rgba(32,36,31,.15)" }}
                />
              )}
              <div
                className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full border-2 text-[13px] font-extrabold"
                style={{
                  background: s.state === "done" ? "#14655A" : "#FDFBF4",
                  borderColor: s.state === "final" ? "#A8853E" : s.state === "upcoming" ? "rgba(32,36,31,.25)" : "#14655A",
                  color: s.state === "done" ? "#F6F1E5" : s.state === "current" ? "#14655A" : s.state === "final" ? "#A8853E" : "#8B8778",
                }}
              >
                {s.n}
              </div>
              <div
                className="mt-3 text-[15px] font-bold"
                style={{ color: s.state === "final" ? "#8B6A1F" : "#20241F" }}
              >
                {s.title}
              </div>
              <div className="mt-[3px] px-3 text-[12.5px] text-[#5A6159]">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
