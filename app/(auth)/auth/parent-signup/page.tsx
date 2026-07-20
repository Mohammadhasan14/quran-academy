import type { Metadata } from "next";
import { ParentSignupForm } from "@/components/auth/ParentSignupForm";

export const metadata: Metadata = { title: "Create a child account" };

export default function ParentSignupPage() {
  return <ParentSignupForm />;
}
