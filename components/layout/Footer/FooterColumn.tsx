import React from "react"

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  label?: React.ReactNode;
  links?: FooterLink[];
  text?: string;
};

export default function FooterColumn({ label, links, text }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <h4 className="text-white font-semibold text-base mb-4">{label}</h4>
      )}

      {text && (
        <p className="text-[#CACACA] text-sm">{text}</p>
      )}

      {links?.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-[#CACACA] text-sm hover:opacity-70 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}