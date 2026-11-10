import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms of Service · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Legal · Terms"
      title="Terms of service."
      lede="The agreement between you and Medi Prompt when you use the platform. This page is a plain-language summary; the binding text is available in the full agreement."
      updated="July 2026"
      readingTime="5 min"
      primaryCta={{ label: "Contact legal", to: "/contact" }}
      secondaryCta={{ label: "See Privacy Policy", to: "/legal/privacy" }}
      sections={[
        {
          id: "use",
          heading: "Use of the service",
          body: "Medi Prompt is designed for use by licensed clinicians and their patients. Do not use it to make clinical decisions without appropriate professional judgment, and do not attempt to bypass safety controls.",
          callout: {
            label: "Clinical judgment",
            text: "AI outputs are drafts for a licensed clinician's review. They are not clinical decisions on their own.",
          },
        },
        {
          id: "accounts",
          heading: "Accounts",
          bullets: [
            { title: "Credentials", desc: "You are responsible for keeping credentials secure and for activity on your account." },
            { title: "Roles", desc: "Administrators may set permissions for other users in their workspace." },
            { title: "Suspension", desc: "We may suspend accounts that violate these terms, applicable law, or platform safety." },
          ],
        },
        {
          id: "liability",
          heading: "Liability",
          body: "The service is provided as-is, with limitations of liability described in the full agreement available to enterprise customers. Nothing in these terms limits liability where it cannot be limited by law.",
        },
        {
          id: "changes",
          heading: "Changes to these terms",
          body: "We may update these terms as the product evolves. Material changes are communicated at least 30 days in advance to account owners.",
        },
      ]}
      related={[
        { to: "/legal/privacy", label: "Privacy Policy", kind: "Legal" },
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
        { to: "/medical-disclaimer", label: "Medical Disclaimer", kind: "Resources" },
      ]}
    />
  ),
});
