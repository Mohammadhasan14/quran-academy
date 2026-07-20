export interface CourseLesson {
  name: string;
  glyph: string;
  state: "done" | "current" | "locked";
  free?: boolean;
  steps: ("done" | "current" | "locked")[];
  note: string;
}

export interface CourseModule {
  number: string;
  name: string;
  meta: string;
  state: "done" | "current" | "locked";
  lessons: CourseLesson[];
}

const stepColor = (s: "done" | "current" | "locked") =>
  s === "done" ? "#14655A" : s === "current" ? "#A8853E" : "rgba(32,36,31,.15)";

export const COURSE_MODULES: CourseModule[] = [
  {
    number: "١",
    name: "Module 1 — The letters, at home",
    meta: "12 lessons · complete",
    state: "done",
    lessons: [
      { name: "Lesson 3 — The throat letters", glyph: "✓", state: "done", steps: ["done", "done", "done", "done", "done"], note: "mastered" },
      { name: "Lesson 4 — The ghunnah", glyph: "▶", state: "current", free: true, steps: ["done", "done", "current", "locked", "locked"], note: "in progress · step 3" },
      { name: "Lesson 5 — The madd family", glyph: "·", state: "locked", steps: ["locked", "locked", "locked", "locked", "locked"], note: "unlocks after L4" },
    ],
  },
  {
    number: "٢",
    name: "Module 2 — The nasal family",
    meta: "8 lessons · in progress",
    state: "current",
    lessons: [
      { name: "Lesson 1 — Ikhfa, the concealment", glyph: "·", state: "locked", free: true, steps: ["locked", "locked", "locked", "locked", "locked"], note: "free preview" },
      { name: "Lesson 2 — Idgham, the merging", glyph: "·", state: "locked", steps: ["locked", "locked", "locked", "locked", "locked"], note: "locked" },
    ],
  },
  {
    number: "٣",
    name: "Module 3 — Heavy and light",
    meta: "10 lessons · locked — completes after Module 2",
    state: "locked",
    lessons: [
      { name: "Lesson 1 — Tafkhim: the seven heavy letters", glyph: "·", state: "locked", steps: ["locked", "locked", "locked", "locked", "locked"], note: "locked" },
    ],
  },
];

export { stepColor };
