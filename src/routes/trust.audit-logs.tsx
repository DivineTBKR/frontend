import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/trust/audit-logs")({
  head: () => ({ meta: [{ title: "Audit Logs · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Trust · Audit Logs"
      title="Every action, accounted for."
      lede="Tamper-evident audit logs record who accessed what, when, and why — across clinical, administrative, and API surfaces. Built to satisfy inspectors and your own future self."
      updated="July 2026"
      readingTime="3 min"
      primaryCta={{ label: "See a sample export", to: "/contact" }}
      secondaryCta={{ label: "Security whitepaper", to: "/trust/security" }}
      sections={[
        {
          id: "what",
          heading: "What we log",
          bullets: [
            { title: "Authentication events", desc: "Sign-in, sign-out, MFA challenges, token issuance, and revocations." },
            { title: "Clinical actions", desc: "Record views, edits, exports, prescription drafts, signatures, and amendments." },
            { title: "Admin activity", desc: "Permission changes, invitations, and configuration updates." },
            { title: "API access", desc: "Every authenticated API call with method, scope, and outcome." },
          ],
        },
        {
          id: "retention",
          heading: "Retention & export",
          body: "Logs are retained for a minimum of 12 months. Hospital and Enterprise plans support extended retention and SIEM export via secure syslog or object storage delivery.",
          callout: {
            label: "Tamper evidence",
            text: "Log records are append-only and chained. Any modification is detectable during audit review.",
          },
        },
        {
          id: "access",
          heading: "Who can see what",
          body: "Access to audit data is scoped: clinic admins see their clinic, platform admins see aggregate operational events, and no single role can silently disable logging.",
        },
      ]}
      related={[
        { to: "/trust/security", label: "Security", kind: "Trust" },
        { to: "/trust/hipaa", label: "HIPAA", kind: "Trust" },
        { to: "/platform/analytics", label: "Analytics", kind: "Platform" },
      ]}
    />
  ),
});
