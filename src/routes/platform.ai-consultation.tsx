import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/platform/ai-consultation")({
  head: () => ({ meta: [{ title: "AI Consultation · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Platform · AI Consultation"
      title="An AI intake that respects everyone's time."
      lede="A calm, conversational assistant gathers context, explores symptoms with clinical rigor, and hands the physician a structured summary — so the visit starts with clarity, not paperwork."
      updated="July 2026"
      readingTime="4 min"
      primaryCta={{ label: "Try the live demo", to: "/" }}
      secondaryCta={{ label: "Enter Patient Portal", to: "/login/patient" }}
      stats={[
        { value: "12 min", label: "Avg. intake time saved" },
        { value: "38%", label: "Fewer follow-up questions" },
        { value: "27", label: "Clinical pathways" },
        { value: "9", label: "Languages supported" },
      ]}
      sections={[
        {
          id: "what-it-does",
          heading: "What it does",
          body: "Every consultation begins with a conversational intake designed by clinicians. It's warm without being chatty, thorough without being cold, and adapts to the person on the other side of the screen.",
          bullets: [
            { title: "Adaptive branching", desc: "Symptom-aware questioning that routes into the appropriate clinical pathway — cardiac, GI, neuro, derm, mental health." },
            { title: "Red-flag detection", desc: "Emergency triggers halt the intake immediately and surface local emergency guidance." },
            { title: "Multi-language intake", desc: "Speak in the patient's preferred language; deliver a summary in clinical English." },
            { title: "Structured handoff", desc: "SOAP-ready summary with chief complaint, HPI, ROS, and pertinent negatives." },
          ],
        },
        {
          id: "doctor-in-the-loop",
          heading: "Doctor-in-the-loop, always",
          body: "The AI drafts. A licensed physician always reviews, edits, and signs before anything reaches the patient. No exceptions, no auto-send, no shortcuts around clinical judgment.",
          callout: {
            label: "Design principle",
            text: "Recommendations are drafts. Decisions are human. Every prescription, referral, and plan carries an electronic signature and a full audit trail.",
          },
        },
        {
          id: "how-it-feels",
          heading: "How it feels to use",
          bullets: [
            { title: "Patient side", desc: "Unhurried pace, plain language, gentle progress cues. No forms to fill, no dropdowns to hunt." },
            { title: "Clinician side", desc: "A pre-organized summary next to the patient's file. Edit inline, ask for more, or approve." },
          ],
        },
      ]}
      related={[
        { to: "/platform/doctor-portal", label: "Doctor Portal", kind: "Platform" },
        { to: "/platform/prescription-builder", label: "Prescription Builder", kind: "Platform" },
        { to: "/trust/security", label: "Security whitepaper", kind: "Trust" },
      ]}
    />
  ),
});
