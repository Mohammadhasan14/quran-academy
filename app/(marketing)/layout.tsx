import { MarketingNavbar } from "@/components/layout/MarketingNavbar";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen shrink-0 flex-col bg-[#0A100E] text-[#EDE7D8]">
      <MarketingNavbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
