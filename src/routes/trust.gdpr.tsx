import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/trust/gdpr")({
  head: () => ({ meta: [{ title: "GDPR · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Trust · GDPR"
      title="GDPR-ready, with EU data residency."
      lede="We treat health information as special-category personal data under the GDPR and ship strong defaults for lawful, minimized, and transparent processing."
      updated="July 2026"
      readingTime="4 min"
      primaryCta={{ label: "Request our DPA", to: "/legal/dpa" }}
      secondaryCta={{ label: "Contact privacy", to: "/contact" }}
      sections={[
        {
          id: "posture",
          heading: "Our GDPR posture",
          bullets: [
            { title: "EU-region storage by default", desc: "Regional residency options for Hospital and Enterprise plans." },
            { title: "Data Processing Agreement", desc: "Standard DPA with Standard Contractual Clauses available on request." },
            { title: "Data subject rights", desc: "Access, rectification, erasure, restriction, portability, and objection." },
            { title: "Records of Processing", desc: "Maintained per Article 30, available under NDA to enterprise customers." },
          ],
        },
        {
          id: "lawful-basis",
          heading: "Lawful basis and minimization",
          body: "We process only what a clinical workflow needs. Patient-provided content is used to deliver care; operational logs support security and reliability; nothing is used to train foundational models.",
          callout: {
            label: "AI training",
            text: "Patient data is never included in foundational model training. Model quality improvements happen on synthetic and consented, de-identified evaluation sets only.",
          },
        },
        {
          id: "rights",
          heading: "Exercising your rights",
          body: "Contact privacy@mediprompt.health to exercise data subject rights. We aim to acknowledge within 72 hours and fulfil verified requests within 30 days.",
        },
      ]}
      related={[
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
        { to: "/legal/subprocessors", label: "Subprocessors", kind: "Legal" },
        { to: "/trust/security", label: "Security", kind: "Trust" },
      ]}
    />
  ),
});
