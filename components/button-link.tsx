import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghost" | "service";
};

const variants = {
  primary: "border border-[#25d366] bg-[var(--whatsapp)] text-black shadow-lg shadow-green-950/15 hover:bg-[#30e273]",
  dark: "border border-black bg-black text-white shadow-lg shadow-black/15 hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)]",
  outline: "border border-black/20 bg-white text-black shadow-sm hover:border-black hover:bg-black hover:text-white",
  ghost: "border border-white/20 bg-white/10 text-white hover:border-white/45 hover:bg-white/20",
  service: "button-service"
};

export function ButtonLink({ href, children, className = "", variant = "dark", ...props }: ButtonLinkProps) {
  const shared = `focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 ${variants[variant]} ${className}`;

  if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a className={shared} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={shared} href={href} {...props}>
      {children}
    </Link>
  );
}
