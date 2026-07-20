export function CertificateDocument() {
  return (
    <div className="rounded border-2 border-[#A8853E] p-1">
      <div className="relative border border-[#A8853E]/50 bg-[#FDFBF4] px-9 py-8.5 text-center text-[#20241F]">
        <div className="absolute top-2.5 left-2.5 h-[9px] w-[9px] rotate-45 bg-[#A8853E]" />
        <div className="absolute top-2.5 right-2.5 h-[9px] w-[9px] rotate-45 bg-[#A8853E]" />
        <div className="absolute bottom-2.5 left-2.5 h-[9px] w-[9px] rotate-45 bg-[#A8853E]" />
        <div className="absolute right-2.5 bottom-2.5 h-[9px] w-[9px] rotate-45 bg-[#A8853E]" />
        <div className="mb-3.5 flex justify-center gap-2">
          <div className="h-2 w-2 rotate-45 border border-[#A8853E]" />
          <div className="h-2 w-2 rotate-45 bg-[#A8853E]" />
          <div className="h-2 w-2 rotate-45 border border-[#A8853E]" />
        </div>
        <div className="font-arabic-ui text-2xl text-[#8B6A1F]">شهادة إتقان</div>
        <div className="my-1 text-[11px] tracking-[0.22em] text-[#8B8778] uppercase">
          Certificate of Mastery · Teacher-Certified
        </div>
        <div className="mt-4.5 text-[13px] text-[#5A6159]">This certifies that</div>
        <div className="my-1.5 text-[27px] font-extrabold">Amina Rahman</div>
        <div className="mx-auto max-w-[380px] text-[13.5px] leading-[1.7] text-[#33403B]">
          has completed <strong>Tajweed Foundations I</strong> and demonstrated its rules in live recitation,
          examined and confirmed by the ear of her teacher.
        </div>
        <div className="mt-6.5 flex items-end justify-between text-left">
          <div>
            <div className="font-arabic-ui -rotate-2 text-xl">[TEACHER SIGNATURE]</div>
            <div className="mt-1 mb-1 h-px w-[150px] bg-[#20241F]/30" />
            <div className="text-[10.5px] text-[#8B8778]">[TEACHER NAME] · Qari of the academy</div>
            <div className="text-[10.5px] text-[#8B8778]">18 July 2026 · Certificate № TF1-0482</div>
          </div>
          <div className="text-center">
            <svg width="62" height="62" viewBox="0 0 62 62" role="img" aria-label="Verification QR code">
              <rect width="62" height="62" fill="#FDFBF4" />
              <g fill="#20241F">
                <rect x="4" y="4" width="16" height="16" /><rect x="42" y="4" width="16" height="16" /><rect x="4" y="42" width="16" height="16" />
                <rect x="8" y="8" width="8" height="8" fill="#FDFBF4" /><rect x="46" y="8" width="8" height="8" fill="#FDFBF4" /><rect x="8" y="46" width="8" height="8" fill="#FDFBF4" />
                <rect x="26" y="6" width="4" height="4" /><rect x="32" y="12" width="4" height="4" /><rect x="26" y="18" width="4" height="4" />
                <rect x="24" y="26" width="4" height="4" /><rect x="32" y="26" width="4" height="4" /><rect x="40" y="28" width="4" height="4" />
                <rect x="48" y="26" width="4" height="4" /><rect x="54" y="32" width="4" height="4" /><rect x="26" y="34" width="4" height="4" />
                <rect x="34" y="38" width="4" height="4" /><rect x="28" y="44" width="4" height="4" /><rect x="36" y="50" width="4" height="4" />
                <rect x="44" y="44" width="4" height="4" /><rect x="50" y="52" width="4" height="4" /><rect x="26" y="54" width="4" height="4" />
              </g>
            </svg>
            <div className="mt-1 font-mono text-[9px] text-[#8B8778]">riwaq.academy/v/TF1-0482</div>
          </div>
        </div>
      </div>
    </div>
  );
}
