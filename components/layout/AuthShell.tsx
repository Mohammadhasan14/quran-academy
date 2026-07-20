import Link from "next/link";

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A100E] px-6 py-16 text-[#EDE7D8]">
      <Link href="/" className="mb-10 flex items-center gap-3">
        <div className="flex h-8 w-8 rotate-45 items-center justify-center border-[1.5px] border-[#CBA55C]">
          <div className="h-3 w-3 -rotate-45 bg-[#CBA55C]/50" />
        </div>
        <div className="text-[16px] font-extrabold">The Digital Riwaq</div>
      </Link>
      <div className="w-full max-w-[400px]">{children}</div>
    </div>
  );
}
