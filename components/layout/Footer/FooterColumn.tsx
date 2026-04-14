import React from "react"

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  label?: React.ReactNode;
  links?: FooterLink[];
};

export default function FooterColumn({ label, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <h4 className="text-white font-semibold text-base mb-4">{label}</h4>
      )}
      
      {links && links.length === 0 ? (
        <p className="text-[#CACACA] text-sm">No services yet</p>
      ) : (
        links?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#CACACA] text-sm hover:opacity-70 transition-colors"
          >
            {link.label}
          </a>
        ))
      )}
    </div>
  )
}