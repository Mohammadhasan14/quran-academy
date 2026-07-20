import type { Metadata } from "next";
import { MyCourses } from "@/components/courses/MyCourses";

export const metadata: Metadata = { title: "My Courses" };

export default function CoursesPage() {
  return <MyCourses />;
}
