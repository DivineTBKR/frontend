import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/api-reference")({
  head: () => ({ meta: [{ title: "API Reference · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Resources · API"
      title="API Reference."
      lede="A typed, versioned REST API and SMART on FHIR surface for integrating Medi Prompt into your clinical stack — designed with idempotency, clear errors, and thoughtful defaults."
      updated="July 2026"
      readingTime="6 min"
      primaryCta={{ label: "Talk to engineering", to: "/contact" }}
      secondaryCta={{ label: "Documentation", to: "/docs" }}
      stats={[
        { value: "v1", label: "Current major" },
        { value: "REST + FHIR", label: "Surfaces" },
        { value: "TS · Py", label: "SDKs" },
        { value: "99.98%", label: "API uptime" },
      ]}
      sections={[
        {
          id: "highlights",
          heading: "Highlights",
          bullets: [
            { title: "OAuth 2.0 + PKCE", desc: "SMART launch flows, refresh tokens, and short-lived service tokens." },
            { title: "FHIR R4 resources", desc: "Patient, Encounter, Observation, MedicationRequest, DocumentReference." },
            { title: "Webhooks", desc: "Consult lifecycle, prescription events, red-flag triggers, message events." },
            { title: "Rate limits", desc: "Per-tenant burst allowances with clear headers and honest retry semantics." },
          ],
        },
        {
          id: "conventions",
          heading: "Conventions",
          bullets: [
            { title: "Idempotency", desc: "All POST endpoints accept an Idempotency-Key header." },
            { title: "Versioning", desc: "URI-versioned major, additive minor changes, six-month deprecation windows." },
            { title: "Errors", desc: "Structured JSON with code, message, hint, and correlation ID." },
            { title: "Pagination", desc: "Cursor-based with stable ordering." },
          ],
        },
        {
          id: "getting-a-key",
          heading: "Getting an API key",
          body: "API keys are issued per environment (sandbox and production) and scoped to specific capabilities. Rotate at any time from the admin console.",
          callout: {
            label: "Sandbox first",
            text: "Every account gets a free sandbox with realistic synthetic patients — build and test without touching real PHI.",
          },
        },
      ]}
      related={[
        { to: "/docs", label: "Documentation", kind: "Resources" },
        { to: "/changelog", label: "Changelog", kind: "Resources" },
        { to: "/trust/security", label: "Security", kind: "Trust" },
      ]}
    />
  ),
});
