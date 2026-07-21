"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ParentSignupForm() {
  const router = useRouter();
  const [consent, setConsent] = useState(false);

  return (
    <div className="rounded-2xl border border-[#A8853E]/30 bg-[#F6F1E5] p-5 text-[#20241F] sm:p-7.5">
      <div className="mb-2 text-[10.5px] tracking-[0.13em] text-[#A8853E] uppercase">Family plan · step 2 of 3</div>
      <div className="mb-1 text-[19px] font-extrabold">Create Yusuf&apos;s account.</div>
      <div className="mb-4.5 text-[13px] leading-[1.55] text-[#5A6159]">
        A child account lives inside yours: kids mode, no open chat, and you see progress — never their raw
        recordings without their knowing.
      </div>
      <label htmlFor="child-name" className="mb-1.5 block text-[11.5px] font-bold text-[#5A6159]">
        Child&apos;s first name
      </label>
      <input
        id="child-name"
        defaultValue="Yusuf"
        className="mb-3 h-11 w-full rounded-[11px] border border-[#20241F]/[.18] bg-[#FDFBF4] px-3.5 text-sm text-[#20241F] focus:border-[#14655A]/50 focus:outline-none"
      />
      <label htmlFor="child-age" className="mb-1.5 block text-[11.5px] font-bold text-[#5A6159]">
        Age
      </label>
      <input
        id="child-age"
        defaultValue="9"
        className="mb-4 h-11 w-[90px] rounded-[11px] border border-[#20241F]/[.18] bg-[#FDFBF4] px-3.5 text-sm text-[#20241F] focus:border-[#14655A]/50 focus:outline-none"
      />
      <div className="mb-4 rounded-xl border border-[#A8853E]/30 bg-[#FDFBF4] px-4 py-3.5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-[#14655A]"
          />
          <span className="text-[12.5px] leading-[1.55] text-[#33403B]">
            I am Yusuf&apos;s parent or legal guardian, and I consent to his use of the academy — including voice
            recording for practice, processed on-device, under the children&apos;s privacy terms.
          </span>
        </label>
      </div>
      <button
        onClick={() => router.push("/courses")}
        disabled={!consent}
        className="h-12 w-full cursor-pointer rounded-xl border-none bg-[#14655A] text-[14.5px] font-bold text-[#F6F1E5] disabled:opacity-50"
      >
        Continue — choose his first course
      </button>
      <div className="mt-2.5 text-center text-[11.5px] text-[#8B8778]">
        Consent is re-confirmable and withdrawable in your Privacy Center.
      </div>
    </div>
  );
}
