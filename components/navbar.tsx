"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { defaultWhatsappMessage, navItems, siteConfig, telLink, whatsappLink } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
          <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/logo.webp"
              alt="Genuine Suppliers and Builders logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-black sm:text-base">Genuine</span>
            <span className="hidden text-xs text-zinc-500 sm:block">Suppliers & Builders Pvt. Ltd.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-5 py-3 text-[15px] font-semibold transition ${
                  active ? "nav-link-active" : "nav-link"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={telLink(siteConfig.phonePrimary)} variant="outline" className="gap-2">
            <Phone size={16} aria-hidden />
            Call
          </ButtonLink>
          <ButtonLink href={whatsappLink(defaultWhatsappMessage)} variant="primary" target="_blank" rel="noreferrer">
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="container-px border-t border-black/10 bg-white py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-2xl px-4 py-3 text-base font-semibold text-black hover:bg-zinc-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ButtonLink href={telLink(siteConfig.phonePrimary)} variant="outline" onClick={() => setOpen(false)}>
                Call
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(defaultWhatsappMessage)}
                variant="primary"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
