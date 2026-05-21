import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { createMetadata } from "@/lib/seo";
import { defaultWhatsappMessage, services, siteConfig, socialLinks, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Genuine Suppliers & Builders Pvt. Ltd. in Bhainsepati, Lalitpur by phone, WhatsApp, or email for construction, maintenance, repair, and finishing inquiries.",
  path: "/contact"
});

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`;

  return (
    <>
      <section className="container-px bg-[linear-gradient(135deg,#080808,#171717_58%,#3a080c)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--whatsapp)]">Contact</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">Call or message us for work inquiries.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Send the form, call directly, or message us on WhatsApp. We will reply with the next step.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(defaultWhatsappMessage)} variant="primary" target="_blank" rel="noreferrer" className="gap-2">
                <MessageCircle size={18} aria-hidden />
                WhatsApp
              </ButtonLink>
              <ButtonLink href={telLink(siteConfig.phonePrimary)} variant="ghost" className="gap-2">
                <Phone size={18} aria-hidden />
                Call {siteConfig.phonePrimary}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y container-px">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            <ContactCard icon={Phone} title="Phone" text={`${siteConfig.phonePrimary} / ${siteConfig.phoneSecondary}`} href={telLink(siteConfig.phonePrimary)} />
            <ContactCard icon={Mail} title="Email" text={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <ContactCard icon={MapPin} title="Location" text={siteConfig.location} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`} />
            <Reveal>
              <div className="rounded-3xl border border-black/10 bg-black p-6 text-white">
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--whatsapp)]">Social media</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-300">Connect with us on social platforms for updates, project photos, and quick messages.</p>
                <div className="mt-5 flex gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 transition hover:border-[var(--whatsapp)] hover:bg-[var(--whatsapp)] hover:text-black"
                        aria-label={item.label}
                      >
                        <Icon size={18} aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <ContactForm services={services.map((service) => service.title)} />
          </Reveal>
        </div>
      </section>

      <section className="container-px pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/10 bg-zinc-100">
          <iframe
            title="Google Map for Genuine Suppliers & Builders Pvt. Ltd. location in Bhainsepati, Lalitpur"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0"
          />
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon: Icon, title, text, href }: { icon: LucideIcon; title: string; text: string; href: string }) {
  return (
    <Reveal>
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="focus-ring brand-card block rounded-3xl p-6 transition hover:border-[var(--brand-red)]">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-black">
          <Icon size={22} aria-hidden />
        </div>
        <h2 className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-red)]">{title}</h2>
        <p className="mt-3 text-lg font-semibold leading-7 text-white">{text}</p>
      </a>
    </Reveal>
  );
}
