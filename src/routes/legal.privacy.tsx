import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Legal · Privacy"
      title="Privacy policy."
      lede="How Medi Prompt collects, uses, and protects personal and health information across the platform. Plain-language summary here; the full policy is available on request."
      updated="July 2026"
      readingTime="6 min"
      primaryCta={{ label: "Contact privacy", to: "/contact" }}
      secondaryCta={{ label: "See our DPA", to: "/legal/dpa" }}
      sections={[
        {
          id: "collect",
          heading: "What we collect",
          bullets: [
            { title: "Account information", desc: "Name, contact details, role, and organization." },
            { title: "Clinical content", desc: "Information you enter, upload, or generate during a consultation." },
            { title: "Technical data", desc: "Device, browser, and log data necessary to operate and secure the service." },
          ],
        },
        {
          id: "use",
          heading: "How we use it",
          body: "To provide the service, keep it safe, meet legal obligations, and — with permission — improve product quality. We never sell personal data, and we never use patient content to train foundational models.",
          callout: {
            label: "Never for sale",
            text: "We do not sell personal data. We do not share it with data brokers, ad networks, or third-party marketers.",
          },
        },
        {
          id: "rights",
          heading: "Your rights",
          bullets: [
            { title: "Access", desc: "Request a copy of the personal data we hold about you." },
            { title: "Rectify", desc: "Ask us to correct anything inaccurate." },
            { title: "Erase", desc: "Ask us to delete data, subject to legal retention where applicable." },
            { title: "Port", desc: "Receive your data in a portable format." },
          ],
        },
        {
          id: "contact",
          heading: "Contact",
          body: "Reach our Data Protection Officer at privacy@mediprompt.health. We aim to acknowledge within 72 hours and to fulfil verified requests within 30 days.",
        },
      ]}
      related={[
        { to: "/legal/terms", label: "Terms of Service", kind: "Legal" },
        { to: "/legal/dpa", label: "DPA", kind: "Legal" },
        { to: "/legal/cookies", label: "Cookie Settings", kind: "Legal" },
      ]}
    />
  ),
});
