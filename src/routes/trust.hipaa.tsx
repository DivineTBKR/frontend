import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/trust/hipaa")({
  head: () => ({ meta: [{ title: "HIPAA · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Trust · HIPAA"
      title="HIPAA-aligned by design."
      lede="Medi Prompt is built to support HIPAA compliance for covered entities and business associates operating in the United States, with signed BAAs and strong technical safeguards as defaults."
      updated="July 2026"
      readingTime="4 min"
      primaryCta={{ label: "Request our BAA", to: "/contact" }}
      secondaryCta={{ label: "Security whitepaper", to: "/trust/security" }}
      sections={[
        {
          id: "supports",
          heading: "How we support HIPAA",
          bullets: [
            { title: "Business Associate Agreement", desc: "Signed BAA available for every covered entity engagement." },
            { title: "Access controls", desc: "MFA, SSO/SAML, role-based permissions, and least-privilege service accounts." },
            { title: "Encryption everywhere", desc: "AES-256 at rest, TLS 1.3 in transit, tenant-scoped keys." },
            { title: "Audit logging", desc: "Comprehensive, tamper-evident logs across clinical and administrative actions." },
          ],
        },
        {
          id: "shared-responsibility",
          heading: "Shared responsibility",
          body: "HIPAA compliance is a shared model between Medi Prompt and each covered entity. We provide the technical safeguards and the BAA; you configure users, policies, and workflows in line with your compliance program.",
          callout: {
            label: "Not a certification",
            text: "This page describes controls we operate. HIPAA is a legal framework, not a certification — always review your organization's obligations with qualified counsel.",
          },
        },
        {
          id: "requesting",
          heading: "Requesting documentation",
          body: "For BAAs, security questionnaires, and vendor risk packets, contact us and we'll route you to the right team.",
        },
      ]}
      related={[
        { to: "/trust/gdpr", label: "GDPR", kind: "Trust" },
        { to: "/trust/security", label: "Security", kind: "Trust" },
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
      ]}
    />
  ),
});
