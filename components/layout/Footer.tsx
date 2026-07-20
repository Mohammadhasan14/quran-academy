import { footerLinks } from "@/lib/constants/nav-links";

export function Footer() {
  return (
    <div className="border-t border-[#EDE7D8]/[.07]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-7 text-[12.5px] text-[#9FAAA3]">
        <div>The Digital Riwaq · a school of the art of recitation</div>
        <div className="flex gap-[22px]">
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
