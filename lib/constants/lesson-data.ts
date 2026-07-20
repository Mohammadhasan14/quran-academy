export const LESSON_STEPS = [
  { name: "Concept", sub: "video · 2:40" },
  { name: "Interactive demo", sub: "worked example" },
  { name: "Listening drill", sub: "3 exercises" },
  { name: "Production drill", sub: "repeat after teacher" },
  { name: "Mastery check", sub: "quiz + recording" },
];

export const DIAGNOSIS_REPORT = [
  {
    band: "Definite — clear in the audio",
    cbg: "rgba(217,154,61,.16)", cbd: "rgba(217,154,61,.55)", cc: "#D99A3D",
    title: "Madd shortened in", ar: "ٱلرَّحْمَـٰنِ",
    what: "the long ā measured ~1 count; this position calls for two steady counts.",
    why: "long vowels are the skeleton of the rhythm — when they shrink, the verse hurries.",
    unclear: false,
  },
  {
    band: "Likely — compare and decide",
    cbg: "rgba(217,154,61,.1)", cbd: "rgba(217,154,61,.4)", cc: "#D9B96E",
    title: "Ghunnah possibly early in", ar: "أَنعَمْتَ",
    what: "the nasal hold may have released near 1.5 counts — close to the line.",
    why: "listen to both side by side; your ear is the judge here, not the machine.",
    unclear: false,
  },
  {
    band: "Unclear — worth your teacher's ear",
    cbg: "rgba(139,135,120,.12)", cbd: "rgba(139,135,120,.4)", cc: "#9FAAA3",
    title: "Couldn't hear clearly at", ar: "ٱلضَّآلِّينَ",
    what: "your voice dipped below what the microphone captured — the AI won't guess.",
    why: "exactly what a teacher settles. One tap sends this moment to his queue.",
    unclear: true,
  },
];

export const WAVE_SHORT = [22, 48, 15, 52, 26, 12, 42, 18, 32, 14];
export const WAVE_LONG = [42, 72, 56, 86, 62, 48, 78, 54, 82, 60];
export const WAVE_REPORT = [30, 55, 70, 45, 80, 60, 35, 72, 50, 66, 40, 75, 58, 32, 62, 48, 70, 44, 56, 38];

export const TEACHER_ANNOTATIONS = [
  { kind: "Voice note", at: "0:18", voice: true, txt: '"Hear this — your bismillah opens beautifully. Keep exactly this pace; it is the pace of the whole surah."' },
  { kind: "Voice note", at: "0:52", voice: true, txt: '"Here, ar-Raḥmān — give the ā its full two counts. Listen to me once… now you. You have it in you, I heard it in verse one."' },
  { kind: "Text note", at: "1:14", voice: false, txt: "Lovely stop on ad-dīn — clean sukun, no added vowel. This is exactly right." },
];
