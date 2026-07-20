import type {
  ArabicLetter,
  DiagnosisItem,
  FaqItem,
  MaqamPair,
  SuccessStory,
  TajweedWord,
} from "@/types/home";

export const ARABIC_LETTERS: ArabicLetter[] = [
  { c: "ا", n: "Alif", t: "ā", g: "The jawf — open cavity", p: "4%", d: "An open, unobstructed vowel carried on the empty space of the mouth and throat.", m: "Clipping it short — as a madd letter the alif holds two full counts." },
  { c: "ب", n: "Bā", t: "b", g: "The lips", p: "94%", d: "Both lips pressed together, voiced and unaspirated.", m: "Adding an English puff of air; remember bā bounces (qalqalah) when it carries sukun." },
  { c: "ت", n: "Tā", t: "t", g: "Tongue tip — upper teeth", p: "76%", d: "The tongue tip touches the base of the upper front teeth, lighter than an English t.", m: "Placing it on the gum ridge as in English — Arabic tā meets the teeth themselves." },
  { c: "ث", n: "Thā", t: "th", g: "Tongue tip — between teeth", p: "80%", d: "The tip rests lightly between the teeth with soft airflow, as in \"think\".", m: "Substituting s — keep the tongue visible between the teeth." },
  { c: "ج", n: "Jīm", t: "j", g: "Middle of the tongue", p: "54%", d: "The middle of the tongue presses fully against the roof of the mouth.", m: "Softening it to a French j — jīm has complete contact, like \"judge\"." },
  { c: "ح", n: "Ḥā", t: "ḥ", g: "Middle of the throat", p: "12%", d: "A breathy, unvoiced friction from the middle of the throat — warmth without any scrape.", m: "English speakers often say ه (a plain h) instead of ح — keep the friction low in the throat, not in the mouth." },
  { c: "خ", n: "Khā", t: "kh", g: "Upper throat", p: "20%", d: "From the nearest part of the throat: a gentle, steady scrape.", m: "Overdoing the rasp — it is lighter and smoother than the German \"ach\"." },
  { c: "د", n: "Dāl", t: "d", g: "Tongue tip — upper teeth", p: "76%", d: "The tip at the base of the upper front teeth, voiced.", m: "Gum-ridge placement; and dāl bounces (qalqalah) when it carries sukun." },
  { c: "ذ", n: "Dhāl", t: "dh", g: "Tongue tip — between teeth", p: "80%", d: "The tip between the teeth, voiced, as in \"this\".", m: "Substituting z — the tongue must reach the teeth." },
  { c: "ر", n: "Rā", t: "r", g: "Tongue tip — ridge", p: "70%", d: "The tip taps the ridge behind the upper teeth: a light, single trill.", m: "The English r — no lip rounding, and the tip must actually strike." },
  { c: "ز", n: "Zāy", t: "z", g: "Tongue tip — teeth", p: "74%", d: "A voiced whistle with the tip close behind the lower teeth.", m: "Letting it thicken next to heavy letters — zāy stays light." },
  { c: "س", n: "Sīn", t: "s", g: "Tongue tip — teeth", p: "74%", d: "An unvoiced whistle, tip close behind the lower teeth.", m: "Comfortable for English speakers — guard its lightness beside ص." },
  { c: "ش", n: "Shīn", t: "sh", g: "Middle of the tongue", p: "54%", d: "The middle of the tongue spreads wide as air flows over it.", m: "Rounding the lips as in English \"sh\" — keep them relaxed and neutral." },
  { c: "ص", n: "Ṣād", t: "ṣ", g: "Tongue tip — heavy", p: "74%", d: "A heavy s: the tip near the teeth while the back of the tongue rises, cupping the sound.", m: "Saying a light س — the whole mouth posture changes, not just the tip." },
  { c: "ض", n: "Ḍād", t: "ḍ", g: "Side of the tongue", p: "60%", d: "The famous letter of the Arabs: the side of the tongue presses against the upper molars.", m: "Substituting a heavy d — ḍād is born from the tongue's side, not its tip." },
  { c: "ط", n: "Ṭā", t: "ṭ", g: "Tongue tip — heavy", p: "76%", d: "A heavy t: tip at the teeth with the back of the tongue raised.", m: "Losing the heaviness mid-word; ṭā also bounces when sākin." },
  { c: "ظ", n: "Ẓā", t: "ẓ", g: "Between teeth — heavy", p: "80%", d: "A heavy dh: tongue between the teeth while the back rises.", m: "Collapsing it into ز or ض — it keeps the between-teeth position." },
  { c: "ع", n: "ʿAyn", t: "ʿ", g: "Middle of the throat", p: "12%", d: "A voiced squeeze from the middle of the throat — felt, not breathed.", m: "Dropping it to a plain vowel — ʿayn must be present in the throat." },
  { c: "غ", n: "Ghayn", t: "gh", g: "Upper throat", p: "20%", d: "A voiced, gargled softness from the upper throat, like a gentle French r.", m: "Substituting a plain g." },
  { c: "ف", n: "Fā", t: "f", g: "Lip and teeth", p: "90%", d: "The lower lip touches the edges of the upper front teeth.", m: "Comfortable for English speakers." },
  { c: "ق", n: "Qāf", t: "q", g: "Deepest tongue", p: "34%", d: "The deepest part of the tongue meets the soft palate: a deep, full k.", m: "Fronting it into ك — qāf sits much deeper, and bounces when sākin." },
  { c: "ك", n: "Kāf", t: "k", g: "Back of the tongue", p: "44%", d: "The back of the tongue at the hard palate, unvoiced and aspirated.", m: "Comfortable for English speakers — keep it distinct from ق." },
  { c: "ل", n: "Lām", t: "l", g: "Tongue tip and blade", p: "68%", d: "Tip and blade at the ridge — light by default.", m: "Darkening every lām — only the lām of Allāh thickens, and only after a or u." },
  { c: "م", n: "Mīm", t: "m", g: "The lips — nasal", p: "94%", d: "Both lips together while the sound flows through the nose.", m: "Cutting the ghunnah short when mīm is doubled — hold the hum two counts." },
  { c: "ن", n: "Nūn", t: "n", g: "Tongue tip — nasal", p: "70%", d: "The tip at the ridge while the sound flows through the nose.", m: "Losing the ghunnah on the doubled nūn — the hum has a duration." },
  { c: "ه", n: "Hā", t: "h", g: "Deepest throat", p: "6%", d: "A soft, open breath from the deepest part of the throat — like an English h.", m: "Confusing it with ح — hā has no friction at all, only breath." },
  { c: "و", n: "Wāw", t: "w", g: "The lips — rounded", p: "92%", d: "Rounded lips, a voiced glide.", m: "Under-rounding; as a madd letter it stretches two full counts." },
  { c: "ي", n: "Yā", t: "y", g: "Middle of the tongue", p: "54%", d: "The middle of the tongue rises toward the roof: a voiced glide.", m: "As a madd letter it stretches two counts — resist clipping it." },
];

export const TAJWEED_WORDS: TajweedWord[] = [
  {
    ar: "إِنَّ",
    tr: "inna",
    gloss: '"inna" — indeed · with one rule',
    rules: [
      { frag: "نَّ", name: "Ghunnah — nasalization", col: "#4FB3A5", bb: "0", txt: "The doubled nūn is held in the nose for two full counts — a warm hum before the vowel continues." },
    ],
  },
  {
    ar: "وَٱلسَّمَآءِ",
    tr: "was-samā'i",
    gloss: '"and the sky" (86:1) · two rules',
    rules: [
      { frag: "مَآءِ", name: "Madd muttasil — obligatory lengthening", col: "#D9A845", bb: "2px solid rgba(217,168,69,.6)", txt: "The long ā runs into a hamza inside the same word, so it stretches to four–five counts instead of two." },
      { frag: "ٱلسَّ", name: "Solar assimilation — idgham shamsi", col: "#D68CA6", bb: "3px double rgba(214,140,166,.7)", txt: "The written lām of \"al-\" melts into the sīn: you hear was-samā, never wal-samā." },
    ],
  },
  {
    ar: "مِن قَبْلُ",
    tr: "min qablu",
    gloss: '"before" · two rules',
    rules: [
      { frag: "ن ق", name: "Ikhfa — concealment", col: "#5C9BD6", bb: "2px dashed rgba(92,155,214,.7)", txt: "The nūn of \"min\" hides before qāf: not a full n, not gone — a nasal hint held while the mouth prepares the q." },
      { frag: "بْ", name: "Qalqalah — the echo", col: "#9D8CE0", bb: "2px dotted rgba(157,140,224,.8)", txt: "The resting bā bounces with a small echo — qab-lu, never a dead stop." },
    ],
  },
];

export const VERSE_WORDS = ["قُلْ", "هُوَ", "ٱللَّهُ", "أَحَدٌ"];

export const VERSE_TEACHING = [
  "Qul — a clean, immediate command. The lām closes crisply; no bounce, because lām is not a qalqalah letter.",
  "Huwa — light and brief. Short vowels keep their size; stretching them is the most common beginner habit.",
  "Allāhu — the lām of majesty turns heavy (tafkhim) here, because the letter before it carries an u-vowel.",
  "Aḥadun — stopping on this word, the tanwīn falls away and the dāl bounces: aḥad, with the qalqalah echo.",
];

export const DIAGNOSES: DiagnosisItem[] = [
  { band: "Likely — compare and hear", chipBg: "rgba(217,154,61,.14)", chipBd: "rgba(217,154,61,.45)", chipC: "#8B6A1F", title: "Madd shortened in", ar: "ٱلرَّحْمَـٰنِ", what: "the long ā measured about one count; the target in this position is two steady counts.", why: "long vowels are the skeleton of the rhythm — when they shrink, the whole verse hurries." },
  { band: "Definite — clear in the audio", chipBg: "rgba(217,154,61,.2)", chipBd: "rgba(217,154,61,.6)", chipC: "#6B5426", title: "Ghunnah released early in", ar: "أَنعَمْتَ", what: "the nasal hold before the ʿayn was released at roughly half length.", why: "the hum is a rule with a duration, not a flavor — two counts, like a relaxed heartbeat." },
  { band: "Unclear — ask your teacher", chipBg: "rgba(139,135,120,.12)", chipBd: "rgba(139,135,120,.4)", chipC: "#5A6159", title: "Couldn't hear clearly at", ar: "ٱلضَّآلِّينَ", what: "your voice dipped below what the microphone could capture, so the AI won't guess.", why: "this is exactly what a Talaqqi review settles — a teacher's ear where the machine stays humble." },
];

export const FAQS: FaqItem[] = [
  { q: "Do I need any Arabic to start?", a: "No. Foundations begins at the very first letter, with transliteration beside every Arabic word and the alphabet explorer built into the first module. Many of our strongest reciters started with zero Arabic." },
  { q: "Can the AI really hear Tajweed?", a: "Some of it, honestly. It measures durations (madd, ghunnah), detects clear substitutions, and follows your place in the text well. It cannot judge beauty, subtle makhraj shading, or maqam artistry — so it never pretends to: every flag carries a confidence band, and the unclear ones are routed to your teacher." },
  { q: "What is an ijazah, and can I earn one online?", a: "An ijazah is a certified license to recite (and teach), passed teacher-to-teacher in an unbroken chain. The credential itself is only ever granted by the Qari after live examination — the platform prepares you for it and manages the journey; it never auto-issues one." },
  { q: "Is my voice recording private?", a: "Practice analysis runs on your device by default. Nothing is uploaded unless you submit a recording to your teacher, and you can download or erase everything at any time. We treat your voice as an amanah — a trust." },
  { q: "Is this suitable for children?", a: "Yes. Family plans include a kids mode — larger targets, gentler pacing, a parent progress view, and no open chat anywhere a child can reach." },
  { q: "Can I learn on slow internet, or offline?", a: "Yes. Lessons download as offline bundles, audio streams at low bitrates without losing the teacher's voice, and practice analysis runs on your device — the platform is built for modest connections." },
  { q: "Do I get a certificate?", a: "Completed courses earn verifiable, shareable certificates. The ijazah is different: it remains a traditional human credential, granted only by the Qari after live examination." },
  { q: "Can I cancel easily?", a: "Yes — one place in settings, two taps, no retention maze. Your progress is kept if you ever return." },
];

export const MAQAM_PAIRS: MaqamPair[] = [
  { correct: "A", other: "Rast", explain: "Bayati lowers its second step by a quarter-tone — a note the piano does not have — which gives it that settled, tender gravity. Rast lifts the same step half-bright, so it sounds sunlit and proclamatory." },
  { correct: "B", other: "Hijaz", explain: "Hijaz opens an unusually wide stretch between its second and third steps — the sound much of the world knows from the adhan. Bayati keeps its steps close and low, resting on its quarter-tone." },
];

export const SUCCESS_STORIES: SuccessStory[] = [
  { name: "Amina — United Kingdom", what: "Her madd found its full length.", passage: "Al-Fatiha, verse 3 · the same eight seconds" },
  { name: "Bilal — United States", what: "His qāf moved from the mouth to its true home, deep in the throat.", passage: "Al-Ikhlas · opening phrase" },
  { name: "Maryam — Malaysia · Talaqqi", what: '"Three voice notes from the Qari changed my ghunnah in a week."', passage: "Al-Fatiha, verse 7 · closing phrase" },
];

export const PRICING = {
  USD: ["$0", "$12", "$49", "$19"],
  GBP: ["£0", "£10", "£39", "£15"],
  EUR: ["€0", "€11", "€45", "€17"],
} as const;
