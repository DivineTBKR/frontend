import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/trust/security")({
  head: () => ({ meta: [{ title: "Security Whitepaper · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Trust · Security"
      title="Security whitepaper."
      lede="A plain-language summary of the controls Medi Prompt operates across infrastructure, application, data, and organizational security."
      updated="July 2026"
      readingTime="6 min"
      primaryCta={{ label: "Request full packet", to: "/contact" }}
      secondaryCta={{ label: "See HIPAA posture", to: "/trust/hipaa" }}
      stats={[
        { value: "AES-256", label: "Data at rest" },
        { value: "TLS 1.3", label: "In transit" },
        { value: "Annually", label: "Third-party pentests" },
        { value: "24/7", label: "On-call rotation" },
      ]}
      sections={[
        {
          id: "infrastructure",
          heading: "Infrastructure",
          bullets: [
            { title: "Isolated tenancy", desc: "Per-tenant data siloing with strong logical boundaries." },
            { title: "Hardened images", desc: "Minimal base images, continuous vulnerability scanning, and automated patching." },
            { title: "Network posture", desc: "Private networking by default, mTLS between services, WAF at the edge." },
          ],
        },
        {
          id: "application",
          heading: "Application",
          bullets: [
            { title: "Authentication", desc: "SSO/SAML, MFA, and short-lived tokens with rotation." },
            { title: "Authorization", desc: "Granular role-based access with fine-grained scopes for API tokens." },
            { title: "Secure SDLC", desc: "Code review, dependency scanning, and secrets management on every merge." },
          ],
        },
        {
          id: "data",
          heading: "Data",
          bullets: [
            { title: "Zero-retention AI", desc: "Model inference operates on a zero-retention basis by default." },
            { title: "Per-tenant siloing", desc: "Cryptographic isolation between clinics and workspaces." },
            { title: "No training on PHI", desc: "Patient data is never used in foundational training." },
          ],
        },
        {
          id: "organizational",
          heading: "Organizational",
          body: "Security is a team behavior, not a checkbox. Background checks, security training, incident response runbooks, and annual third-party penetration testing keep the humans as sharp as the systems.",
          callout: {
            label: "Report a vulnerability",
            text: "Coordinated disclosure at security@mediprompt.health. We acknowledge within one business day and update reporters through remediation.",
          },
        },
      ]}
      related={[
        { to: "/trust/hipaa", label: "HIPAA", kind: "Trust" },
        { to: "/trust/audit-logs", label: "Audit Logs", kind: "Trust" },
        { to: "/legal/subprocessors", label: "Subprocessors", kind: "Legal" },
      ]}
    />
  ),
});
