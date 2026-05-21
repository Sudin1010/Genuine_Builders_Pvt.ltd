import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="brand-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--brand-red)]">
      <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white text-black transition group-hover:bg-[var(--brand-red)] group-hover:text-white">
        <Icon size={22} aria-hidden />
      </div>
      <h3 className="brand-red-line mt-8 text-lg font-semibold tracking-normal text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{service.description}</p>
    </article>
  );
}
