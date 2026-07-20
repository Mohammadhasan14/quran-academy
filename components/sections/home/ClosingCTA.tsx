import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
  return (
    <div className="border-t border-gold/20 bg-[#0A100E]">
      <div className="mx-auto max-w-[1180px] px-8 pt-20 pb-16 text-center">
        <div className="mb-5.5 flex justify-center gap-2">
          <div className="h-2 w-2 rotate-45 border border-gold/60" />
          <div className="h-2 w-2 rotate-45 bg-gold/50" />
          <div className="h-2 w-2 rotate-45 border border-gold/60" />
        </div>
        <h2 className="m-0 mb-3 text-[38px] font-extrabold tracking-[-0.01em] text-[#EDE7D8]">
          Your Fatiha, perfected in 30 days.
        </h2>
        <p className="m-0 mb-7 text-[16.5px] text-[#9FAAA3]">
          The flagship course is free, start to finish. All it asks is 15 minutes a day.
        </p>
        <Button size="lg" className="h-[54px] animate-[rw-pulse_4s_ease-in-out_infinite] px-8">
          Start learning free
        </Button>
      </div>
    </div>
  );
}
