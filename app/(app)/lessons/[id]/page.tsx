import type { Metadata } from "next";
import { LessonPlayer } from "@/components/lessons/LessonPlayer";

export const metadata: Metadata = { title: "Lesson" };

export default function LessonPage() {
  return <LessonPlayer />;
}
