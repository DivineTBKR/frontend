import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type MarketingBullet = { title: string; desc?: string };

export type MarketingSection = {
  id: string;
  heading: string;
  body?: string;
  bullets?: MarketingBullet[];
  callout?: { label: string; text: string };
};

export type RelatedLink = { to: string; label: string; kind: string };

export type MarketingPageProps = {
  kind: string;
  title: string;
  lede: string;
  updated?: string;
  readingTime?: string;
  stats?: { value: string; label: string }[];
  sections: MarketingSection[];
  related?: RelatedLink[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
};

export function MarketingPage({
  kind,
  title,
  lede,
  sections,
  related,
  primaryCta,
  secondaryCta,
}: MarketingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
              {kind}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {lede}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primaryCta && (
                  <Button asChild className="rounded-full">
                    <Link to={primaryCta.to}>
                      {primaryCta.label} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild variant="ghost" className="rounded-full">
                    <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Body */}
        <section className="border-b border-border py-20">
          <div className="mx-auto max-w-3xl px-6 space-y-16">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-2xl font-semibold tracking-tight">
                  {s.heading}
                </h2>
                {s.body && (
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                )}
                {s.bullets && (
                  <ul className="mt-6 space-y-4">
                    {s.bullets.map((b) => (
                      <li key={b.title} className="border-l-2 border-primary/30 pl-4">
                        <p className="font-medium tracking-tight">{b.title}</p>
                        {b.desc && (
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {b.desc}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {s.callout && (
                  <div className="mt-6 rounded-xl border border-primary/15 bg-primary-soft/50 p-5">
                    <p className="text-sm leading-relaxed text-foreground/85">
                      {s.callout.text}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Related */}
        {related && related.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-3xl px-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Related
              </p>
              <ul className="mt-4 divide-y divide-border border-t border-b border-border">
                {related.map((r) => (
                  <li key={r.to}>
                    <Link
                      to={r.to}
                      className="group flex items-center justify-between py-4 text-sm transition hover:text-primary"
                    >
                      <span className="font-medium">{r.label}</span>
                      <ArrowUpRight className="size-4 opacity-40 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
