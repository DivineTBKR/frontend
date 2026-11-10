import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Resources · Contact"
      title="Talk to us."
      lede="Whether you're a solo clinician, a clinic administrator, or a hospital IT lead — we'd love to hear from you. Real humans answer, usually within one business day."
      updated="July 2026"
      readingTime="2 min"
      primaryCta={{ label: "Book a walkthrough", to: "/contact" }}
      secondaryCta={{ label: "See pricing", to: "/" }}
      stats={[
        { value: "< 24 h", label: "First response" },
        { value: "24/7", label: "Enterprise support" },
        { value: "EU · US", label: "Time zones covered" },
        { value: "9", label: "Languages" },
      ]}
      sections={[
        {
          id: "sales",
          heading: "Sales",
          body: "Book a 20-minute call to see the platform end to end — from patient intake to signed prescription — and get pricing tailored to your team size.",
          callout: {
            label: "Email",
            text: "sales@mediprompt.health",
          },
        },
        {
          id: "support",
          heading: "Support",
          body: "Existing customers get help from clinicians and engineers, not scripts. Enterprise plans include 24/7 coverage; other plans are covered during business hours across EU and US time zones.",
          callout: {
            label: "Email",
            text: "support@mediprompt.health",
          },
        },
        {
          id: "security",
          heading: "Security & privacy",
          body: "For DPAs, BAAs, security questionnaires, and coordinated disclosure of vulnerabilities.",
          callout: {
            label: "Email",
            text: "security@mediprompt.health · privacy@mediprompt.health",
          },
        },
      ]}
      related={[
        { to: "/trust/security", label: "Security", kind: "Trust" },
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
        { to: "/docs", label: "Documentation", kind: "Resources" },
      ]}
    />
  ),
});
