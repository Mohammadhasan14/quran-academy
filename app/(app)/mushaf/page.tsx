import type { Metadata } from "next";
import { MushafReader } from "@/components/mushaf/MushafReader";

export const metadata: Metadata = { title: "Mushaf" };

export default function MushafPage() {
  return <MushafReader />;
}
