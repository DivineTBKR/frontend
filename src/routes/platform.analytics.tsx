import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/platform/analytics")({
  head: () => ({ meta: [{ title: "Analytics · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Platform · Analytics"
      title="Insight without surveillance."
      lede="Understand throughput, review times, prescription patterns, and patient outcomes — with strong defaults for privacy and role-scoped exports."
      updated="July 2026"
      readingTime="3 min"
      primaryCta={{ label: "See a sample dashboard", to: "/login/doctor" }}
      secondaryCta={{ label: "Talk to us", to: "/contact" }}
      stats={[
        { value: "20+", label: "Clinical KPIs" },
        { value: "Role-scoped", label: "Exports" },
        { value: "EU / US", label: "Data residency" },
        { value: "0", label: "PHI in exports by default" },
      ]}
      sections={[
        {
          id: "signals",
          heading: "The signals that matter",
          bullets: [
            { title: "Consultation throughput", desc: "Volume, wait time, and average review time by clinician and pathway." },
            { title: "Prescription patterns", desc: "Category distribution, interaction flags caught, and repeat rates." },
            { title: "Outcome & follow-up", desc: "Patient-reported outcomes and adherence to follow-up plans." },
            { title: "Operational health", desc: "SLA attainment, queue depth, and after-hours load." },
          ],
        },
        {
          id: "privacy-defaults",
          heading: "Privacy defaults, not afterthoughts",
          body: "Reports are aggregate by default, exports strip PHI unless a clinical purpose is declared, and every export is logged.",
          callout: {
            label: "Governance",
            text: "Every report you can build, an admin can audit. Every export you request, a compliance officer can trace.",
          },
        },
        {
          id: "share",
          heading: "Share cleanly",
          body: "Send a PDF to your board, pipe a CSV to your finance team, or connect a warehouse via secure export — with clear role scopes on every surface.",
        },
      ]}
      related={[
        { to: "/platform/doctor-portal", label: "Doctor Portal", kind: "Platform" },
        { to: "/trust/audit-logs", label: "Audit Logs", kind: "Trust" },
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
      ]}
    />
  ),
});
