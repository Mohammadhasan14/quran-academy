import type { AppNavItem } from "@/lib/constants/nav-links";

export function AppNavIcon({ icon, size = 20 }: { icon: AppNavItem["icon"]; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  } as const;

  switch (icon) {
    case "today":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7" />
          <path d="M10 6v4l2.5 2.5" />
        </svg>
      );
    case "mushaf":
      return (
        <svg {...common}>
          <path d="M10 4c-1.5-1.2-3.8-1.5-6-1.5v13c2.2 0 4.5.3 6 1.5 1.5-1.2 3.8-1.5 6-1.5v-13c-2.2 0-4.5.3-6 1.5z" />
          <line x1="10" y1="4" x2="10" y2="17" />
        </svg>
      );
    case "practice":
      return (
        <svg {...common} strokeLinecap="round">
          <rect x="7" y="2" width="6" height="10" rx="3" />
          <path d="M4 10a6 6 0 0 0 12 0" />
          <line x1="10" y1="16" x2="10" y2="18.5" />
        </svg>
      );
    case "majlis":
      return (
        <svg {...common}>
          <circle cx="6" cy="8" r="2.6" />
          <circle cx="14" cy="8" r="2.6" />
          <path d="M2 17c0-2.3 1.8-4 4-4s4 1.7 4 4M10 17c0-2.3 1.8-4 4-4s4 1.7 4 4" />
        </svg>
      );
    case "account":
      return (
        <svg {...common}>
          <circle cx="10" cy="7" r="3.4" />
          <path d="M3.5 17.5c1.2-3 3.6-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
        </svg>
      );
  }
}
