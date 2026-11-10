import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/legal/subprocessors")({
  head: () => ({ meta: [{ title: "Subprocessors · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Legal · Subprocessors"
      title="Subprocessors."
      lede="A current list of the third-party subprocessors we engage to help deliver Medi Prompt, with the purpose and processing region for each. Notification of changes is available on request."
      updated="July 2026"
      readingTime="3 min"
      primaryCta={{ label: "Subscribe to changes", to: "/contact" }}
      secondaryCta={{ label: "See our DPA", to: "/legal/dpa" }}
      sections={[
        {
          id: "infra",
          heading: "Infrastructure",
          bullets: [
            { title: "Cloud hosting", desc: "EU and US regions · compute and managed storage." },
            { title: "Managed database", desc: "EU and US regions · primary data store with encryption at rest." },
            { title: "Object storage", desc: "EU and US regions · attachments, exports, and backups." },
          ],
        },
        {
          id: "ai-ops",
          heading: "AI & operations",
          bullets: [
            { title: "AI Gateway", desc: "Model inference with zero-retention configuration." },
            { title: "Email", desc: "Transactional notifications only; no marketing sends from this pipeline." },
            { title: "Observability", desc: "Logs and metrics aggregated with PHI stripped at the collector." },
            { title: "Error monitoring", desc: "Application errors with PII scrubbing." },
          ],
        },
        {
          id: "changes",
          heading: "Changes",
          body: "Customers under a signed DPA receive advance notice of subprocessor changes and may object per the terms of that DPA.",
          callout: {
            label: "Full list",
            text: "The current full list, including regional details, is available on request under NDA.",
          },
        },
      ]}
      related={[
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
        { to: "/trust/gdpr", label: "GDPR", kind: "Trust" },
        { to: "/trust/security", label: "Security", kind: "Trust" },
      ]}
    />
  ),
});
