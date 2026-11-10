import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/platform/doctor-portal")({
  head: () => ({ meta: [{ title: "Doctor Portal · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Platform · Doctor Portal"
      title="A clinical command center, without the noise."
      lede="Review AI-prepared summaries, sign prescriptions, message patients, and manage your day — all in one calm workspace, tuned for the rhythm of a working clinician."
      updated="July 2026"
      readingTime="5 min"
      primaryCta={{ label: "Enter Doctor Portal", to: "/login/doctor" }}
      secondaryCta={{ label: "Book a walkthrough", to: "/contact" }}
      stats={[
        { value: "3.8×", label: "Faster review vs. paper" },
        { value: "< 90 s", label: "Median approval time" },
        { value: "100%", label: "Audit coverage" },
        { value: "24/7", label: "Availability" },
      ]}
      sections={[
        {
          id: "workspace",
          heading: "A workspace built for the working clinician",
          body: "The queue is triaged by urgency, red flags are surfaced first, and every AI draft sits next to the patient's own words. Nothing is buried three clicks deep.",
          bullets: [
            { title: "Urgency-based queue", desc: "Critical, high, standard, and follow-up lanes with clear SLAs and clean transitions." },
            { title: "Split-view review", desc: "AI summary on the left, patient's raw intake on the right — always in sight, never in the way." },
            { title: "One-click actions", desc: "Sign, edit, request more information, or escalate to a specialist without leaving the screen." },
            { title: "Templates that adapt", desc: "SOAP, referral, sick leave, and prescription macros that respect your voice." },
          ],
        },
        {
          id: "patients",
          heading: "Patients, in context",
          body: "Every patient carries their full timeline: prior consultations, prescriptions, labs, and messages. You never open a chart cold.",
          bullets: [
            { title: "Longitudinal view", desc: "See the story, not just today's snapshot." },
            { title: "Attached documents", desc: "Labs, imaging, referrals, and OCR-parsed scripts — all searchable." },
          ],
        },
        {
          id: "signature",
          heading: "Signature and audit",
          body: "Every clinical action is signed, timestamped, and logged. Amendments carry a clean revision history that survives inspection.",
          callout: {
            label: "Compliance",
            text: "Signatures are cryptographically bound to your account and the record. Regulators, insurers, and your own future self can trust the trail.",
          },
        },
      ]}
      related={[
        { to: "/platform/prescription-builder", label: "Prescription Builder", kind: "Platform" },
        { to: "/platform/analytics", label: "Analytics", kind: "Platform" },
        { to: "/trust/audit-logs", label: "Audit Logs", kind: "Trust" },
      ]}
    />
  ),
});
