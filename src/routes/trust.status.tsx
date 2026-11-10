import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/trust/status")({
  head: () => ({ meta: [{ title: "Status · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Trust · Status"
      title="All systems operational."
      lede="Live status of the Medi Prompt platform, AI gateway, and integrations. Subscribe to updates for incident and maintenance notifications."
      updated="July 2026"
      readingTime="2 min"
      primaryCta={{ label: "Subscribe to updates", to: "/contact" }}
      secondaryCta={{ label: "Security whitepaper", to: "/trust/security" }}
      stats={[
        { value: "99.98%", label: "Uptime (90d)" },
        { value: "128 ms", label: "Median API latency" },
        { value: "0", label: "Sev-1 incidents (30d)" },
        { value: "3", label: "Regions" },
      ]}
      sections={[
        {
          id: "current",
          heading: "Current status",
          bullets: [
            { title: "API", desc: "Operational · nominal latency." },
            { title: "Web app", desc: "Operational across web and mobile browsers." },
            { title: "AI Gateway", desc: "Operational · inference within SLO." },
            { title: "EHR integrations", desc: "SMART on FHIR endpoints operational." },
          ],
        },
        {
          id: "history",
          heading: "Recent history",
          body: "No incidents reported in the last 30 days. Scheduled maintenance is announced at least 72 hours in advance and is executed during regional off-peak windows.",
          callout: {
            label: "Incident communication",
            text: "During any active incident we post updates at least every 30 minutes until resolution, and we publish a written post-mortem within five business days.",
          },
        },
      ]}
      related={[
        { to: "/trust/security", label: "Security", kind: "Trust" },
        { to: "/trust/audit-logs", label: "Audit Logs", kind: "Trust" },
        { to: "/api-reference", label: "API Reference", kind: "Resources" },
      ]}
    />
  ),
});
