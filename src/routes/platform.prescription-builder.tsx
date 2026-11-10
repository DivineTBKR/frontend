import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/platform/prescription-builder")({
  head: () => ({ meta: [{ title: "Prescription Builder · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Platform · Prescription Builder"
      title="Safer prescribing, faster."
      lede="Autocomplete medications, calculate weight- and age-aware doses, screen for interactions and allergies, and electronically sign — all with a clean audit trail behind every line."
      updated="July 2026"
      readingTime="4 min"
      primaryCta={{ label: "Enter Doctor Portal", to: "/login/doctor" }}
      secondaryCta={{ label: "See the platform", to: "/platform/doctor-portal" }}
      stats={[
        { value: "62%", label: "Fewer transcription errors" },
        { value: "12k+", label: "Molecules in the index" },
        { value: "3 s", label: "Median interaction check" },
        { value: "100%", label: "Signed & logged" },
      ]}
      sections={[
        {
          id: "guardrails",
          heading: "Guardrails that catch what tired eyes miss",
          bullets: [
            { title: "Interaction screening", desc: "Real-time drug-drug and drug-condition checks with clear severity grading." },
            { title: "Allergy and intolerance", desc: "Cross-checked against the patient's chart and family history where recorded." },
            { title: "Dose calculation", desc: "Weight-, age-, and renal-function-aware suggestions with clear reference ranges." },
            { title: "Repeat & taper protocols", desc: "PRN, taper, and repeat schedules with plain-language patient instructions." },
          ],
        },
        {
          id: "signing",
          heading: "Signing that stands up to review",
          body: "Every prescription is electronically signed, timestamped, and versioned. Amendments preserve the original with a clear provenance chain.",
          callout: {
            label: "Regulator-ready",
            text: "The audit log is built to satisfy pharmacy inspections, insurance reviews, and internal governance without extra work.",
          },
        },
        {
          id: "patient-experience",
          heading: "What the patient sees",
          body: "A clear, printable script — with dose, timing, duration, and honest side-effect notes. In their language. On their device. Ready when they leave.",
        },
      ]}
      related={[
        { to: "/platform/doctor-portal", label: "Doctor Portal", kind: "Platform" },
        { to: "/trust/audit-logs", label: "Audit Logs", kind: "Trust" },
        { to: "/trust/security", label: "Security", kind: "Trust" },
      ]}
    />
  ),
});
