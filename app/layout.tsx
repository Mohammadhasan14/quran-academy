import type { Metadata } from "next";
import { Amiri_Quran, Noto_Naskh_Arabic, Alegreya_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const amiriQuran = Amiri_Quran({
  variable: "--font-amiri-quran",
  subsets: ["arabic"],
  weight: "400",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const alegreya = Alegreya_Sans({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Digital Riwaq — Quran Recitation Academy",
    template: "%s · The Digital Riwaq",
  },
  description:
    "Learn the art of Quran recitation from a master Qari: Tajweed, voice training, Maqamat, and the path to ijazah - with an AI coach for the repetitions in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${amiriQuran.variable} ${notoNaskh.variable} ${alegreya.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface text-text">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
