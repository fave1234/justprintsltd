import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center gap-7 px-5 pb-20 pt-32 text-center">
      <p className="font-display text-[7rem] font-extrabold leading-none text-brand sm:text-[10rem]">
        404
      </p>
      <h1 className="font-display text-3xl font-extrabold text-ink dark:text-mist sm:text-4xl">
        Page not found.
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
    </section>
  );
}
