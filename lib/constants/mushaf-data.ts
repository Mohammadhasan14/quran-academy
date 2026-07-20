import type { MushafAyah } from "@/types/mushaf";

const w = (text: string, tag?: "madd" | "lazim") => ({ text, tag });

export const AL_FATIHA: MushafAyah[] = [
  {
    number: "١",
    words: [w("بِسْمِ"), w("اللَّهِ"), w("الرَّحْمَـٰنِ", "madd"), w("الرَّحِيمِ", "madd")],
    translation: "In the name of Allah — the Most Compassionate, Most Merciful.",
  },
  {
    number: "٢",
    words: [w("الْحَمْدُ"), w("لِلَّهِ"), w("رَبِّ"), w("الْعَـٰلَمِينَ", "madd")],
    translation: "All praise is for Allah — Lord of all worlds.",
  },
  {
    number: "٣",
    words: [w("الرَّحْمَـٰنِ", "madd"), w("الرَّحِيمِ", "madd")],
    translation: "The Most Compassionate, Most Merciful.",
  },
  {
    number: "٤",
    words: [w("مَـٰلِكِ", "madd"), w("يَوْمِ"), w("الدِّينِ")],
    translation: "Master of the Day of Judgment.",
  },
  {
    number: "٥",
    words: [w("إِيَّاكَ"), w("نَعْبُدُ"), w("وَإِيَّاكَ"), w("نَسْتَعِينُ", "madd")],
    translation: "You alone we worship, and You alone we ask for help.",
  },
  {
    number: "٦",
    words: [w("اهْدِنَا"), w("الصِّرَٰطَ"), w("الْمُسْتَقِيمَ", "madd")],
    translation: "Guide us along the Straight Path.",
  },
  {
    number: "٧",
    words: [
      w("صِرَٰطَ"), w("الَّذِينَ"), w("أَنْعَمْتَ"), w("عَلَيْهِمْ"), w("غَيْرِ"),
      w("الْمَغْضُوبِ"), w("عَلَيْهِمْ"), w("وَلَا"), w("الضَّالِّينَ", "lazim"),
    ],
    translation:
      "The Path of those You have blessed — not of those You are displeased with, nor of those who are astray.",
  },
];
