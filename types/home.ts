export interface ArabicLetter {
  c: string;
  n: string;
  t: string;
  g: string;
  p: string;
  d: string;
  m: string;
}

export interface TajweedRule {
  frag: string;
  name: string;
  col: string;
  bb: string;
  txt: string;
}

export interface TajweedWord {
  ar: string;
  tr: string;
  gloss: string;
  rules: TajweedRule[];
}

export interface DiagnosisItem {
  band: string;
  chipBg: string;
  chipBd: string;
  chipC: string;
  title: string;
  ar: string;
  what: string;
  why: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface MaqamPair {
  correct: "A" | "B";
  other: string;
  explain: string;
}

export interface SuccessStory {
  name: string;
  what: string;
  passage: string;
}
