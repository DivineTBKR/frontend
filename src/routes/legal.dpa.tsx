import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/legal/dpa")({
  head: () => ({ meta: [{ title: "Data Processing Agreement · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Legal · DPA"
      title="Data Processing Agreement."
      lede="Our standard DPA covers processing of personal data under the GDPR and equivalent laws, including Standard Contractual Clauses for international transfers where required."
      updated="July 2026"
      readingTime="4 min"
      primaryCta={{ label: "Request the DPA", to: "/contact" }}
      secondaryCta={{ label: "See GDPR posture", to: "/trust/gdpr" }}
      sections={[
        {
          id: "coverage",
          heading: "What it covers",
          bullets: [
            { title: "Scope of processing", desc: "Nature, purpose, and duration of processing on your behalf." },
            { title: "Data categories", desc: "Categories of personal data and data subjects concerned." },
            { title: "Subprocessors", desc: "Engagement rules and notification of changes." },
            { title: "Security & incidents", desc: "Technical and organizational measures and incident notification timelines." },
          ],
        },
        {
          id: "sccs",
          heading: "International transfers",
          body: "Where personal data is transferred outside the EU/EEA or UK, we rely on the current EU Standard Contractual Clauses and the UK IDTA, complemented by supplementary measures.",
          callout: {
            label: "Data residency",
            text: "EU customers are stored in EU regions by default. Regional residency options are available on Hospital and Enterprise plans.",
          },
        },
        {
          id: "sign",
          heading: "How to sign",
          body: "Request the current DPA at legal@mediprompt.health. Enterprise customers can sign electronically during onboarding; smaller customers can accept via a click-through addendum in the admin console.",
        },
      ]}
      related={[
        { to: "/trust/gdpr", label: "GDPR", kind: "Trust" },
        { to: "/legal/subprocessors", label: "Subprocessors", kind: "Legal" },
        { to: "/legal/privacy", label: "Privacy Policy", kind: "Legal" },
      ]}
    />
  ),
});
