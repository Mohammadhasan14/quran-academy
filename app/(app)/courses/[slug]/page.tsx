import type { Metadata } from "next";
import { CourseDetail } from "@/components/courses/CourseDetail";

export const metadata: Metadata = { title: "Course" };

export default function CourseDetailPage() {
  return (
    <div className="bg-[#F6F1E5]">
      <CourseDetail />
    </div>
  );
}
