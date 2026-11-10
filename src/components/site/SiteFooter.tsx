import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

type FooterLink = { label: string; to: string };

export function SiteFooter() {
  const columns: { title: string; links: FooterLink[] }[] = [
    {
      title: "Platform",
      links: [
        { label: "AI Consultation", to: "/platform/ai-consultation" },
        { label: "Doctor Portal", to: "/platform/doctor-portal" },
        { label: "Patient Portal", to: "/platform/patient-portal" },
        { label: "Prescription Builder", to: "/platform/prescription-builder" },
        { label: "Analytics", to: "/platform/analytics" },
      ],
    },
    {
      title: "Trust",
      links: [
        { label: "HIPAA", to: "/trust/hipaa" },
        { label: "GDPR", to: "/trust/gdpr" },
        { label: "Security Whitepaper", to: "/trust/security" },
        { label: "Audit Logs", to: "/trust/audit-logs" },
        { label: "Status", to: "/trust/status" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", to: "/docs" },
        { label: "API Reference", to: "/api-reference" },
        { label: "Changelog", to: "/changelog" },
        { label: "Medical Disclaimer", to: "/medical-disclaimer" },
        { label: "Contact", to: "/resources/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", to: "/legal/privacy" },
        { label: "Terms", to: "/legal/terms" },
        { label: "DPA", to: "/legal/dpa" },
        { label: "Subprocessors", to: "/legal/subprocessors" },
        { label: "Cookie Settings", to: "/legal/cookies" },
      ],
    },
  ];
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Clinical intelligence for the modern practitioner. Built with the rigor of medicine and
              the elegance of modern software.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                <span className="size-1.5 rounded-full bg-success" /> HIPAA
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                <span className="size-1.5 rounded-full bg-success" /> GDPR
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                <span className="size-1.5 rounded-full bg-success" /> SOC 2
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h5 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {col.title}
                </h5>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-foreground/80 transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Medi Prompt · For licensed clinical use only.</p>
          <p className="font-mono uppercase tracking-widest">v 1.0 · build · clinical</p>
        </div>
      </div>
    </footer>
  );
}
