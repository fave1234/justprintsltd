import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center gap-7 px-5 pb-20 pt-32 text-center">
      <p className="font-display text-[7rem] font-semibold leading-none tracking-tightest text-brand sm:text-[10rem]">
        404
      </p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
        This page never made it to press.
      </h1>
      <p className="max-w-md leading-relaxed text-smoke-dark dark:text-smoke-light">
        The link may be old, or the page moved. Let’s get you somewhere worth
        reading.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <ButtonLink href="/" arrow>
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Contact us
        </ButtonLink>
      </div>
      <Link
        href="/work"
        className="text-sm font-medium text-smoke underline underline-offset-4 transition-colors hover:text-brand"
      >
        …or browse the portfolio
      </Link>
    </section>
  );
}
