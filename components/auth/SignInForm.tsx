"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SignInForm() {
  const router = useRouter();
  const [stage, setStage] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");

  if (stage === "code") {
    return (
      <div className="rounded-2xl border border-[#A8853E]/30 bg-[#F6F1E5] p-7.5 text-[#20241F]">
        <div className="mb-1 text-[19px] font-extrabold">Check your email.</div>
        <div className="mb-4.5 text-[13px] text-[#5A6159]">
          We sent a six-digit key to <strong>{email || "a•••@gmail.com"}</strong>. It works for 10 minutes.
        </div>
        <div className="mb-4 flex gap-2" role="group" aria-label="Six-digit code">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              aria-label={`Digit ${i + 1}`}
              maxLength={1}
              className="h-[54px] min-w-0 flex-1 rounded-[11px] border border-[#20241F]/[.18] bg-[#FDFBF4] text-center text-xl font-extrabold text-[#20241F] focus:border-[#14655A]/50 focus:outline-none"
            />
          ))}
        </div>
        <button
          onClick={() => router.push("/today")}
          className="mb-3 h-12 w-full cursor-pointer rounded-xl border-none bg-[#14655A] text-[14.5px] font-bold text-[#F6F1E5]"
        >
          Sign in
        </button>
        <div className="text-center text-[12.5px] text-[#5A6159]">
          Nothing arrived?{" "}
          <button onClick={() => setStage("email")} className="text-[#14655A] underline">
            Resend
          </button>{" "}
          · check spam ·{" "}
          <button onClick={() => setStage("email")} className="text-[#14655A] underline">
            use another email
          </button>
        </div>
        <div className="mt-3.5 border-t border-[#20241F]/[.08] pt-3 text-[11px] text-[#8B8778]">
          This replaces password reset too — there is no password to forget.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#A8853E]/30 bg-[#F6F1E5] p-7.5 text-[#20241F]">
      <div className="mb-1 text-[21px] font-extrabold">Welcome back.</div>
      <div className="mb-5 text-[13px] text-[#5A6159]">No passwords — we email you a six-digit key.</div>
      <label htmlFor="email" className="mb-1.5 block text-[11.5px] font-bold text-[#5A6159]">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="mb-3 h-[46px] w-full rounded-[11px] border border-[#20241F]/[.18] bg-[#FDFBF4] px-3.5 text-sm text-[#20241F] focus:border-[#14655A]/50 focus:outline-none"
      />
      <button
        onClick={() => setStage("code")}
        className="mb-4 h-12 w-full cursor-pointer rounded-xl border-none bg-[#14655A] text-[14.5px] font-bold text-[#F6F1E5]"
      >
        Email me the code
      </button>
      <div className="mb-4 flex items-center gap-2.5">
        <div className="h-px flex-1 bg-[#20241F]/10" />
        <span className="text-[11px] text-[#8B8778]">or</span>
        <div className="h-px flex-1 bg-[#20241F]/10" />
      </div>
      <div className="flex flex-col gap-2.5">
        <button className="h-[46px] cursor-pointer rounded-[11px] border border-[#20241F]/[.18] bg-[#FDFBF4] text-[13.5px] font-bold text-[#20241F]">
          Continue with Google
        </button>
        <button className="h-[46px] cursor-pointer rounded-[11px] border border-[#20241F]/[.18] bg-[#20241F] text-[13.5px] font-bold text-[#F6F1E5]">
          Continue with Apple
        </button>
      </div>
      <div className="mt-4 text-center text-xs text-[#8B8778]">
        New here? The same three buttons create your account.
      </div>
    </div>
  );
}
