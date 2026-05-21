type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-red)]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-normal text-black sm:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-zinc-600">{description}</p> : null}
    </div>
  );
}
