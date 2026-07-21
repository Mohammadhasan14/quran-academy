import { footerLinks } from "@/lib/constants/nav-links";

export function Footer() {
  return (
    <div className="border-t border-[#EDE7D8]/[.07]">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3 px-4 py-7 text-center text-[12.5px] text-[#9FAAA3] sm:px-6 lg:flex-row lg:justify-between lg:gap-4 lg:px-8 lg:text-left">
        <div>The Digital Riwaq · a school of the art of recitation</div>
        <div className="flex flex-wrap items-center justify-center gap-x-[22px] gap-y-2 lg:justify-end">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[#9FAAA3] hover:text-[#EDE7D8]">
              {link.label}
            </a>
          ))}
          <span>AI honesty</span>
          <span>Privacy — your voice is an amanah</span>
        </div>
      </div>
    </div>
  );
}
