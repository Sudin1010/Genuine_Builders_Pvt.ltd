import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="container-px flex min-h-[60vh] items-center bg-white py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-zinc-600">The page you are looking for may have moved, but our team is still easy to reach.</p>
        <ButtonLink href="/" variant="dark" className="mt-8">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
