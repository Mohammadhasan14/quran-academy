import type { Metadata } from "next";
import { AssignmentFlow } from "@/components/assignments/AssignmentFlow";

export const metadata: Metadata = { title: "Assignment" };

export default function AssignmentPage() {
  return <AssignmentFlow />;
}
