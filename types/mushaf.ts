export interface MushafWord {
  text: string;
  tag?: "madd" | "lazim";
}

export interface MushafAyah {
  number: string;
  words: MushafWord[];
  translation: string;
}
