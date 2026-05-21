import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { createMetadata } from "@/lib/seo";
import { services, whatsappLink } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Services",
  description:
    "Explore electrical, plumbing, tiles, marble, painting, false ceiling, CCTV, modular kitchen, AC, aluminium, parqueting, waterproofing, and appliance repair services.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="container-px bg-[linear-gradient(135deg,#080808,#171717_58%,#3a080c)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--whatsapp)]">Services</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">Services you can call us for.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Choose a service and contact us directly for a site visit, estimate, or urgent repair.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y container-px">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we cover"
            title="One team for many site needs."
            description="We cover common construction, finishing, installation, and maintenance jobs for homes and commercial spaces."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 0.04}>
                <div className="h-full">
                  <ServiceCard service={service} />
                  <ButtonLink
                    href={whatsappLink(`Hello Genuine Builders, I would like to inquire about ${service.title}.`)}
                    variant="service"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 w-full"
                  >
                    Ask about {service.title}
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20">
        <WhatsAppCta title="Tell us what needs to be fixed or built." />
      </div>
    </>
  );
}
