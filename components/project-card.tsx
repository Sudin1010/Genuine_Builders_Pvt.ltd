import Image from "next/image";
import { projects } from "@/lib/site";

type Project = (typeof projects)[number];

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="brand-card group overflow-hidden rounded-3xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-red)]">{project.category}</p>
        <h3 className="mt-3 text-xl font-semibold tracking-normal text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{project.location}</p>
      </div>
    </article>
  );
}
