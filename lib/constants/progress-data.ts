export const LETTERS_CH = ["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي"];
export const LETTERS_NM = ["Alif","Bā","Tā","Thā","Jīm","Ḥā","Khā","Dāl","Dhāl","Rā","Zāy","Sīn","Shīn","Ṣād","Ḍād","Ṭā","Ẓā","ʿAyn","Ghayn","Fā","Qāf","Kāf","Lām","Mīm","Nūn","Hā","Wāw","Yā"];
export const LETTERS_MASTERY = [92,88,90,74,85,58,62,89,71,66,87,91,84,55,42,60,48,52,45,93,38,90,86,79,76,81,88,85];

export const LETTER_TIPS: Record<number, string> = {
  20: "Qāf — your growing edge. It sits at 38%: the sound is still fronting toward kāf. Tonight's queue has 5 minimal pairs.",
  14: "Ḍād — 42%, the famous letter takes time for every student. The side-of-tongue drill is queued.",
  5: "Ḥā — 58% and climbing steadily since Week 2. The throat is opening.",
};

export function letterColor(v: number) {
  if (v >= 80) return { bg: "rgba(62,143,92,.22)", bd: "rgba(62,143,92,.5)", c: "#8FD0A8", pc: "#6BAF87" };
  if (v >= 60) return { bg: "rgba(120,150,75,.16)", bd: "rgba(140,160,80,.4)", c: "#C4CF8A", pc: "#9AA870" };
  if (v >= 45) return { bg: "rgba(217,154,61,.14)", bd: "rgba(217,154,61,.4)", c: "#E3BE7F", pc: "#B98F45" };
  return { bg: "rgba(217,154,61,.22)", bd: "rgba(217,154,61,.6)", c: "#EBC079", pc: "#D99A3D" };
}

export const RULE_FAMILIES = [
  { name: "Ghunnah family", v: 76 },
  { name: "Madd family", v: 64 },
  { name: "Qalqalah", v: 71 },
  { name: "Ikhfa & idgham", v: 52 },
  { name: "Heavy & light", v: 44 },
];

export function ruleColor(v: number) {
  return v >= 70 ? "#52B3A4" : v >= 50 ? "#A8B36B" : "#D99A3D";
}

const HEAT_RAW = [
  0,1,2,0,3,2,1, 1,2,0,2,3,1,0, 2,3,1,2,0,2,3, 1,0,2,3,2,1,2, 3,2,1,0,2,3,1, 2,1,3,2,1,0,2,
  0,2,3,1,2,2,3, 2,3,2,1,3,0,1, 1,2,3,2,2,1,3, 3,1,2,3,0,2,2, 2,3,3,2,1,3,2, 3,2,3,3,2,1,0,
];
const HEAT_COLORS = ["rgba(237,231,216,.06)", "rgba(46,140,126,.25)", "rgba(46,140,126,.5)", "rgba(82,179,164,.85)"];

export const PRACTICE_HEATMAP: string[][] = Array.from({ length: 12 }, (_, w) =>
  HEAT_RAW.slice(w * 7, w * 7 + 7).map((v) => HEAT_COLORS[v]),
);

export const SETTINGS_NAV = ["Account", "Subscription", "Notifications", "Playback & access", "Offline downloads", "Privacy Center"] as const;

export const ONBOARDING_GOALS = [
  { t: "Fix my salah recitation", s: "Confidence in the daily prayers" },
  { t: "Become a hafiz", s: "Memorization with sound tajweed" },
  { t: "Learn the maqamat", s: "The melodic art, ear first" },
  { t: "Lead taraweeh", s: "Ready to stand before a congregation" },
];

export const ONBOARDING_EXPERIENCE = [
  { t: "I'm starting from the letters", s: "Alphabet and sounds, from the beginning" },
  { t: "I read, but slowly", s: "Fluency and rules need strengthening" },
  { t: "I recite comfortably", s: "Here for refinement, maqamat, or ijazah" },
];
