import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Waveform } from "@/components/ui/Waveform";

const SCHEDULE = [
  { title: "Tajweed Clinic", time: "Sundays · 19:00", tag: "Premium", tagColor: "#52B3A4" },
  { title: "Maqam Circle", time: "Wednesdays · 20:00", tag: "Premium", tagColor: "#52B3A4" },
  { title: "Open Halaqa", time: "Fridays · after Maghrib", tag: "Free", tagColor: "#CBA55C" },
];

const COMMUNITY = [
  { title: "Study Circles", body: "Small groups matched by level and time zone, working toward shared goals." },
  { title: "Community Events", body: "Ramadan khatm relays, and listening nights on the great Qurra." },
  { title: "Mentors", body: "Advanced students who walk beside beginners — everyone recites for someone." },
];

export function LiveClasses() {
  return (
    <div id="live" className="border-t border-gold/[.18] bg-[#0A100E]">
      <div className="mx-auto max-w-[1180px] px-8 py-[76px]">
        <div className="mb-2.5 text-xs tracking-[0.16em] text-gold uppercase">Live teaching · every week</div>
        <h2 className="m-0 mb-2 text-4xl font-extrabold tracking-[-0.01em] text-[#EDE7D8]">
          You will recite — and the teacher will hear you.
        </h2>
        <p className="mb-8 max-w-[600px] text-[16.5px] leading-[1.55] text-[#9FAAA3]">
          Classes are small and participatory: the Qari teaches, hands go up, and one by one the whole class listens
          as he corrects — gently, in real time.
        </p>

        <div className="flex items-stretch gap-6 max-lg:flex-col">
          <div className="flex flex-[1.5] gap-3.5 rounded-[18px] border border-gold/[.22] bg-[#0D1512] p-4.5 max-md:flex-col">
            <div className="relative min-w-0 flex-[1.4]">
              <div className="h-[300px] w-full">
                <ImagePlaceholder label="Teacher on camera — the live class stage" />
              </div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-[#0A100E]/82 px-3 py-1.5 text-[11px] font-bold text-[#EDE7D8]">
                <span className="h-2 w-2 rounded-full bg-[#B4573F]" />
                REC · Tajweed Clinic
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-2.5">
              <div className="flex-1 rounded-xl border border-[#EDE7D8]/[.09] bg-[#131D19] p-3.5">
                <div className="mb-2.5 text-[10.5px] tracking-[0.1em] text-[#9FAAA3] uppercase">
                  Shared lesson content
                </div>
                <div dir="rtl" className="font-arabic-quran text-center text-[23px] leading-[2] text-[#EDE7D8]">
                  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
                </div>
              </div>
              <div className="rounded-xl border border-gold/35 bg-gold/[.08] px-3.5 py-3">
                <div className="mb-2 text-[10.5px] tracking-[0.1em] text-gold uppercase">Now reciting</div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border border-gold/40 bg-[#1B2822] text-xs font-bold text-gold-bright">
                    Y
                  </div>
                  <div className="min-w-0 text-[13px] text-[#EDE7D8]">
                    Yusuf K. <span className="text-[#9FAAA3]">· up next: Amina, Bilal</span>
                  </div>
                  <Waveform bars={3} className="h-4 flex-none gap-0.5" barClassName="w-[3px] rounded-[1px] bg-teal/70" />
                </div>
              </div>
              <div className="text-xs text-[#9FAAA3]">✋ 3 hands raised · 14 in class · chat is open</div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className="text-[11px] tracking-[0.12em] text-[#9FAAA3] uppercase">
              This week — times shown in your time zone
            </div>
            {SCHEDULE.map((cls) => (
              <div
                key={cls.title}
                className="flex items-center justify-between gap-3 rounded-[13px] border border-[#EDE7D8]/[.09] bg-[#0D1512] px-4.5 py-3.5"
              >
                <div>
                  <div className="text-[14.5px] font-bold text-[#EDE7D8]">{cls.title}</div>
                  <div className="text-[12.5px] text-[#9FAAA3]">{cls.time}</div>
                </div>
                <span
                  className="flex-none rounded-full border px-2.5 py-1 text-[11.5px]"
                  style={{ color: cls.tagColor, borderColor: `${cls.tagColor}59` }}
                >
                  {cls.tag}
                </span>
              </div>
            ))}
            <div className="mt-auto rounded-[13px] border border-gold/25 bg-[#131D19] px-4.5 py-4">
              <div className="mb-1.5 text-[10.5px] tracking-[0.1em] text-gold uppercase">Replay · last Wednesday</div>
              <div className="mb-3 text-[14.5px] font-bold text-[#EDE7D8]">
                Maqam Circle — first steps in Bayati
              </div>
              <div className="relative flex h-3.5 items-center">
                <div className="absolute inset-x-0 h-[3px] rounded-sm bg-[#EDE7D8]/[.12]" />
                {[6, 20, 44, 78].map((left) => (
                  <div key={left} className="absolute h-2.5 w-px bg-gold/60" style={{ left: `${left}%` }} />
                ))}
              </div>
              <div className="mt-2 text-[11.5px] leading-[1.6] text-[#9FAAA3]">
                0:00 Warm-up · 6:30 The quarter-tone · 14:00 Students recite · 41:00 Q&amp;A
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {COMMUNITY.map((c) => (
            <div key={c.title} className="rounded-2xl border border-[#EDE7D8]/[.09] bg-[#0D1512] px-6 py-[22px]">
              <div className="mb-3.5 h-2 w-2 rotate-45 bg-gold/60" />
              <div className="mb-1 text-[16.5px] font-extrabold text-[#EDE7D8]">{c.title}</div>
              <div className="text-[13.5px] leading-[1.55] text-[#9FAAA3]">{c.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
