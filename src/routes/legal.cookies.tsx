import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({ meta: [{ title: "Cookie Settings · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Legal · Cookies"
      title="Cookie settings."
      lede="We use a minimal set of cookies necessary to operate the service, keep it secure, and — with your consent — understand product usage in aggregate."
      updated="July 2026"
      readingTime="3 min"
      primaryCta={{ label: "Contact privacy", to: "/contact" }}
      secondaryCta={{ label: "Privacy Policy", to: "/legal/privacy" }}
      sections={[
        {
          id: "categories",
          heading: "Categories",
          bullets: [
            { title: "Strictly necessary", desc: "Authentication, security, and session state. Cannot be disabled." },
            { title: "Preferences", desc: "Language and interface settings you've chosen." },
            { title: "Analytics", desc: "Aggregated usage; disabled by default in the EU and configurable elsewhere." },
          ],
        },
        {
          id: "manage",
          heading: "Manage preferences",
          body: "You can adjust non-essential cookies at any time from the cookie banner or from your account settings once signed in. Changes take effect immediately for the current browser.",
          callout: {
            label: "No dark patterns",
            text: "Accept and reject are equally prominent. Rejecting is a single click and doesn't degrade the service.",
          },
        },
        {
          id: "third-party",
          heading: "Third-party cookies",
          body: "We keep third-party cookies to a minimum. Marketing pixels are not present on authenticated clinical pages.",
        },
      ]}
      related={[
        { to: "/legal/privacy", label: "Privacy Policy", kind: "Legal" },
        { to: "/legal/terms", label: "Terms of Service", kind: "Legal" },
        { to: "/trust/gdpr", label: "GDPR", kind: "Trust" },
      ]}
    />
  ),
});
