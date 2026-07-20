export const marketingNavLinks = [
  { href: "/#method", label: "The Method" },
  { href: "/#courses", label: "Courses" },
  { href: "/#live", label: "Live Classes" },
  { href: "/#teacher", label: "Your Teacher" },
  { href: "/#pricing", label: "Pricing" },
];

export const footerLinks = [
  { href: "/#method", label: "Method" },
  { href: "/#courses", label: "Courses" },
  { href: "/#teacher", label: "Teacher" },
];

export interface AppNavItem {
  href: string;
  label: string;
  icon: "today" | "mushaf" | "practice" | "majlis" | "account";
}

export const appNavItems: AppNavItem[] = [
  { href: "/today", label: "Today", icon: "today" },
  { href: "/mushaf", label: "Mushaf", icon: "mushaf" },
  { href: "/practice", label: "Practice", icon: "practice" },
  { href: "/courses", label: "Majlis", icon: "majlis" },
  { href: "/settings", label: "Account", icon: "account" },
];
