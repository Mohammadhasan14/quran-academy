const STEPS = [
  {
    title: "Learn from the Qari",
    body: "Structured video courses, taught by a master teacher.",
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor">
        <path d="M3 1.5 l10 6 -10 6 z" />
      </svg>
    ),
  },
  {
    title: "Practice with your AI coach",
    body: "Honest, amber-flagged feedback on every repetition.",
    icon: (
      <svg width="13" height="17" viewBox="0 0 17 22" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
        <rect x="5.5" y="1.5" width="6" height="11" rx="3" />
        <path d="M2 10.5a6.5 6.5 0 0 0 13 0" />
        <line x1="8.5" y1="17" x2="8.5" y2="20.5" />
      </svg>
    ),
  },
  {
    title: "The teacher confirms mastery",
    body: "Human ears decide when you advance.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round">
        <circle cx="8" cy="8" r="6.2" />
        <path d="M5 8.2 l2.1 2.1 L11 6" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <div className="mx-auto max-w-[1180px] px-8 pb-[60px]">
      <div className="flex items-stretch gap-3.5 max-lg:flex-col">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-1 items-start gap-3.5 rounded-[14px] border border-[#EDE7D8]/[.09] bg-[#0D1512] px-5 py-[18px]"
          >
            <div
              className={
                i === 2
                  ? "flex h-9 w-9 flex-none items-center justify-center rounded-[11px] border border-gold/35 bg-gold/10 text-gold"
                  : "flex h-9 w-9 flex-none items-center justify-center rounded-[11px] border border-teal/30 bg-teal/10 text-teal"
              }
            >
              {step.icon}
            </div>
            <div>
              <div className="text-[15px] font-extrabold">{step.title}</div>
              <div className="mt-0.5 text-[13px] leading-[1.5] text-[#9FAAA3]">{step.body}</div>
            </div>
          </div>
        ))}
        <a
          href="#courses"
          className="flex flex-[.85] flex-col justify-center gap-1 rounded-[14px] border border-gold/35 bg-gold/[.07] px-5 py-[18px] text-gold hover:bg-gold/[.12]"
        >
          <span className="text-[10.5px] tracking-[0.14em] text-gold uppercase">Flagship · free</span>
          <span className="text-[15px] leading-[1.3] font-extrabold text-[#EDE7D8]">
            Perfect Your Fatiha in 30 Days →
          </span>
        </a>
      </div>
    </div>
  );
}
