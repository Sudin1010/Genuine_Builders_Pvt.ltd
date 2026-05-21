import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { createMetadata } from "@/lib/seo";
import { projects } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description:
    "View sample project categories from Genuine Suppliers & Builders Pvt. Ltd., including residential finishing, electrical upgrades, modular kitchens, waterproofing, ceilings, and aluminium work.",
  path: "/projects"
});

export default function ProjectsPage() {
  return (
    <>
      <section className="container-px bg-[linear-gradient(135deg,#080808,#171717_58%,#3a080c)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--whatsapp)]">Projects</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">Project photos and work examples.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              See the types of interiors, finishing, installation, and repair work we handle.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y container-px">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Clean finishing. Practical details."
            description="Every job starts with the site condition, customer need, budget, and finish expected."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 0.05}>
                <ProjectCard project={project} priority={index < 2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pb-20">
        <WhatsAppCta title="Have a similar project in mind?" />
      </div>
    </>
  );
}
