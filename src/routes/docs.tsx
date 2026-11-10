import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [{ title: "Documentation · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Resources · Documentation"
      title="Documentation."
      lede="Guides for clinicians, patients, and developers integrating with the Medi Prompt platform. Written in plain language, indexed for the impatient."
      updated="July 2026"
      readingTime="5 min"
      primaryCta={{ label: "API Reference", to: "/api-reference" }}
      secondaryCta={{ label: "Changelog", to: "/changelog" }}
      sections={[
        {
          id: "getting-started",
          heading: "Getting started",
          bullets: [
            { title: "Set up your clinic", desc: "Create a workspace, add branding, and configure billing." },
            { title: "Invite clinicians", desc: "Roles, permissions, and specialty routing." },
            { title: "Customize intake", desc: "Edit AI prompts and questionnaire flows for your specialty." },
            { title: "Connect an EHR", desc: "SMART on FHIR launch with Epic, Cerner, and Athena." },
          ],
        },
        {
          id: "developer",
          heading: "Developer guides",
          body: "Everything you need to integrate Medi Prompt into your clinical stack — with typed SDKs, versioned endpoints, and reference implementations in TypeScript and Python.",
          bullets: [
            { title: "Authentication", desc: "OAuth 2.0 with PKCE, SMART launch flows, and service tokens." },
            { title: "FHIR resources", desc: "Patient, Encounter, Observation, MedicationRequest, and DocumentReference." },
            { title: "Webhooks", desc: "Consult lifecycle, prescription signed, red-flag triggered, and message received." },
            { title: "Rate limits", desc: "Per-tenant burst allowances with clear headers and retry semantics." },
          ],
        },
        {
          id: "support",
          heading: "Support",
          body: "Docs get you 90% of the way. For the last 10%, our team is on-call.",
          callout: {
            label: "Get help",
            text: "support@mediprompt.health · Enterprise customers get a shared Slack channel and named CSM.",
          },
        },
      ]}
      related={[
        { to: "/api-reference", label: "API Reference", kind: "Resources" },
        { to: "/changelog", label: "Changelog", kind: "Resources" },
        { to: "/contact", label: "Contact", kind: "Resources" },
      ]}
    />
  ),
});
