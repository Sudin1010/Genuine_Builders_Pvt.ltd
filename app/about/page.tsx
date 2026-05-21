import type { Metadata } from "next";
import Image from "next/image";
import { Award, CheckCircle2, MapPin, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { createMetadata } from "@/lib/seo";
import { defaultWhatsappMessage, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Genuine Suppliers & Builders Pvt. Ltd., led by CEO Saugat Basnet and serving Lalitpur with trusted construction, repair, finishing, and maintenance services.",
  path: "/about"
});

const values = [
  "Transparent communication from inquiry to handover",
  "Service coverage across building, finishing, repair, and maintenance",
  "Practical material guidance for better long-term value",
  "Clean workmanship with strong attention to site discipline"
];

export default function AboutPage() {
  return (
    <>
      <section className="container-px bg-[linear-gradient(135deg,#080808,#171717_58%,#3a080c)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--whatsapp)]">About us</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">A local team for building, finishing, and repair work.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Genuine Suppliers & Builders Pvt. Ltd. helps homeowners and businesses complete construction, maintenance, and interior work with clear communication and clean finishing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y container-px">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="relative max-w-xl overflow-hidden rounded-[2rem] bg-black p-3 shadow-2xl shadow-black/20">
              <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-[var(--brand-red)]/30 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(90deg,var(--brand-red),transparent)] opacity-25" />
              <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10">
                <div className="relative h-[430px] sm:h-[500px] lg:h-[560px]">
                  <Image
                    src="/images/ceo_saugat_basnet.jpeg"
                    alt="CEO Saugat Basnet of Genuine Suppliers and Builders"
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover object-[center_16%]"
                    priority
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,#000_0%,rgba(0,0,0,0.72)_18%,rgba(0,0,0,0.04)_50%)]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-[var(--brand-red)]">CEO</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">Saugat Basnet</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300">Leading Genuine Suppliers & Builders Pvt. Ltd. from Bhainsepati, Lalitpur.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Leadership"
              title="Led by Saugat Basnet"
              description="The company is based in Bhainsepati, Lalitpur, and focuses on dependable service for everyday building needs."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="brand-card rounded-3xl p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-red)]">Direct</p>
                <p className="mt-3 text-2xl font-semibold text-white">Clear follow-up</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">Customers can call or WhatsApp directly for service inquiries and site visits.</p>
              </div>
              <div className="brand-card rounded-3xl p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-red)]">Local</p>
                <p className="mt-3 text-2xl font-semibold text-white">Lalitpur based</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">Focused on practical building, repair, and finishing work in nearby areas.</p>
              </div>
            </div>
            <ButtonLink href={whatsappLink(defaultWhatsappMessage)} variant="primary" target="_blank" rel="noreferrer" className="mt-8">
              Start a WhatsApp Inquiry
            </ButtonLink>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <InfoCard icon={UserRound} title="CEO" text={siteConfig.ceo} />
            <InfoCard icon={MapPin} title="Location" text={siteConfig.location} />
            <InfoCard icon={Award} title="Promise" text={siteConfig.tagline} />
            <InfoCard icon={CheckCircle2} title="Focus" text="Clean work, clear talks, and reliable follow-up." />
          </div>
        </div>
      </section>

      <section className="section-y container-px bg-zinc-100">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our standards"
            title="Professional execution for everyday building needs."
            description="We keep the experience simple for customers: inspect, advise, quote clearly, execute neatly, and stay reachable."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="brand-card flex gap-4 rounded-3xl p-6">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[var(--brand-red)]" size={22} aria-hidden />
                <p className="text-base font-medium leading-7 text-zinc-100">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-y">
        <WhatsAppCta title="Planning a new job or urgent repair?" />
      </div>
    </>
  );
}

function InfoCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <Reveal>
      <article className="brand-card rounded-3xl p-6">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-black">
          <Icon size={22} aria-hidden />
        </div>
        <h2 className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand-red)]">{title}</h2>
        <p className="mt-3 text-lg font-semibold leading-7 text-white">{text}</p>
      </article>
    </Reveal>
  );
}
