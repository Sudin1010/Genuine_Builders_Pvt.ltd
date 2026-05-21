import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { defaultWhatsappMessage, navItems, services, siteConfig, socialLinks, telLink, whatsappLink } from "@/lib/site";
import { ButtonLink } from "@/components/button-link";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-3 rounded-full">
            <span className="relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white">
              <Image
                src="/images/logo.webp"
                alt="Genuine Suppliers and Builders logo"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-zinc-400">{siteConfig.tagline}. Premium construction, finishing, repair, and maintenance services across Lalitpur and Kathmandu Valley.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsappLink(defaultWhatsappMessage)} variant="primary" target="_blank" rel="noreferrer">
              Inquire on WhatsApp
            </ButtonLink>
            <ButtonLink href={telLink(siteConfig.phonePrimary)} variant="ghost">
              Call Now
            </ButtonLink>
          </div>
          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-[var(--whatsapp)] hover:bg-[var(--whatsapp)] hover:text-black"
                  aria-label={item.label}
                >
                  <Icon size={18} aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Pages</h2>
          <ul className="mt-5 grid gap-3 text-sm text-zinc-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="focus-ring rounded text-zinc-300 transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Contact</h2>
          <ul className="mt-5 grid gap-4 text-sm text-zinc-300">
            <li className="flex gap-3">
              <Phone size={18} aria-hidden className="mt-0.5 text-white" />
              <span>{siteConfig.phonePrimary} / {siteConfig.phoneSecondary}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} aria-hidden className="mt-0.5 text-white" />
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} aria-hidden className="mt-0.5 text-white" />
              <span>{siteConfig.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-3 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{services.length} services. One accountable team.</p>
        </div>
      </div>
    </footer>
  );
}
