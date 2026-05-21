import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  defaultWhatsappMessage,
  featuredServices,
  projects,
  services,
  siteConfig,
  socialLinks,
  stats,
  telLink,
  whatsappLink
} from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(92svh-5rem)] overflow-hidden bg-black text-white">
        <Image
          src="/images/hero-premium-interior.webp"
          alt="Premium interior construction finishing by Genuine Suppliers and Builders"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.86)_32%,rgba(0,0,0,0.42)_68%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#000_0%,transparent_42%)]" />

        <div className="container-px relative mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl items-center py-14 sm:py-18">
          <Reveal className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100 backdrop-blur">
              {siteConfig.tagline}
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              Building and repair work done properly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
              Genuine Suppliers & Builders handles finishing, repairs, interiors, electrical, plumbing, CCTV, AC, and maintenance work in Lalitpur and nearby areas.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsappLink(defaultWhatsappMessage)} variant="primary" target="_blank" rel="noreferrer" className="gap-2 shadow-2xl shadow-green-950/40">
                <MessageCircle size={18} aria-hidden />
                Get a WhatsApp Quote
              </ButtonLink>
              <ButtonLink href={telLink(siteConfig.phonePrimary)} variant="ghost" className="gap-2 border border-white/15">
                <Phone size={18} aria-hidden />
                Call Now
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-zinc-300">Follow us</span>
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:border-[var(--whatsapp)] hover:bg-[var(--whatsapp)] hover:text-black"
                    aria-label={item.label}
                  >
                    <Icon size={18} aria-hidden />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>
        <div className="container-px absolute bottom-5 left-0 right-0 hidden sm:block">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/15 bg-black/35 px-5 py-3 text-sm text-zinc-200 backdrop-blur">
            <span>Scroll for services, projects, and contact options</span>
            <span className="font-semibold text-[var(--whatsapp)]">12 service categories</span>
          </div>
        </div>
      </section>

      <section className="container-px bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-b-[2rem] bg-black/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 sm:p-8">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y container-px">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <SectionHeading eyebrow="What we do" title="Services for homes, offices, and buildings." description="Call or message us with the work you need. We inspect, quote, and complete the job with clear communication." />
            <div className="grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
              {["Clear quotations", "Skilled technicians", "Good materials", "Direct follow-up"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
                  <CheckCircle2 size={18} className="text-[var(--brand-red)]" aria-hidden />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.04}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/services" variant="outline" className="gap-2">
              View all {services.length} services
              <ArrowRight size={18} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-y container-px bg-zinc-100">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Recent work"
            title="Work that looks clean and lasts."
            description="A look at the kind of finishing, interiors, repair, and installation work our customers ask for."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.title} delay={index * 0.05}>
                <ProjectCard project={project} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-y">
        <WhatsAppCta />
      </div>
    </>
  );
}
