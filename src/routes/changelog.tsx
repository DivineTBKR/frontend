import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/changelog")({
  head: () => ({ meta: [{ title: "Changelog · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Resources · Changelog"
      title="What's new."
      lede="Product updates, model improvements, and platform changes — dated, honest, and written by the people who shipped them."
      updated="July 2026"
      readingTime="4 min"
      primaryCta={{ label: "Subscribe by email", to: "/contact" }}
      secondaryCta={{ label: "See documentation", to: "/docs" }}
      sections={[
        {
          id: "v1-clinical",
          heading: "v1.0 · Clinical · July 2026",
          bullets: [
            { title: "General availability", desc: "Doctor, Patient, and Admin portals shipped." },
            { title: "Guided AI intake", desc: "Adaptive intake with red-flag detection across 27 pathways." },
            { title: "Prescription builder", desc: "Interaction and allergy checks with dose calculation." },
            { title: "SMART on FHIR", desc: "Bi-directional sync with Epic, Cerner, and Athena." },
          ],
        },
        {
          id: "v0-9",
          heading: "v0.9 · Preview · May 2026",
          bullets: [
            { title: "Multi-language intake", desc: "Nine languages, with clinical English output." },
            { title: "Audit log export", desc: "SIEM-ready delivery via syslog and object storage." },
            { title: "Templates", desc: "SOAP, referral, and sick-leave macros." },
          ],
        },
        {
          id: "v0-8",
          heading: "v0.8 · Alpha · March 2026",
          body: "Early access with the first pilot clinics. Focused on core intake, review, and signing.",
          callout: {
            label: "How we ship",
            text: "Weekly product updates, monthly model evaluations, and a public post-mortem for every incident.",
          },
        },
      ]}
      related={[
        { to: "/docs", label: "Documentation", kind: "Resources" },
        { to: "/api-reference", label: "API Reference", kind: "Resources" },
        { to: "/trust/status", label: "Status", kind: "Trust" },
      ]}
    />
  ),
});
