import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/platform/patient-portal")({
  head: () => ({ meta: [{ title: "Patient Portal · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Platform · Patient Portal"
      title="Your health, clearly explained."
      lede="Start a consultation, view prescriptions and lab results, message your care team, and keep your history in one place — designed to feel like a conversation, not a form."
      updated="July 2026"
      readingTime="3 min"
      primaryCta={{ label: "Enter Patient Portal", to: "/login/patient" }}
      secondaryCta={{ label: "Try the demo", to: "/" }}
      stats={[
        { value: "4.9 / 5", label: "Patient satisfaction" },
        { value: "< 2 min", label: "To start a consult" },
        { value: "9", label: "Interface languages" },
        { value: "0", label: "Forms to print" },
      ]}
      sections={[
        {
          id: "what-you-get",
          heading: "What you get",
          bullets: [
            { title: "Guided AI consultation", desc: "Move at your pace. No timers, no pressure, no medical jargon unless you ask." },
            { title: "Prescriptions and labs in one view", desc: "Every script, every result — searchable and easy to share." },
            { title: "Secure messaging", desc: "Follow up with your clinician without waiting on hold." },
            { title: "Your preferred language", desc: "Speak in the language you think in; your clinician gets the clinical translation." },
          ],
        },
        {
          id: "privacy",
          heading: "Privacy that isn't a footnote",
          body: "Your health data is yours. It never trains foundational models, never gets sold, and is siloed per clinic under signed agreements.",
          callout: {
            label: "Your rights",
            text: "Access, export, correct, and delete your data any time. We aim to fulfil verified requests within 30 days.",
          },
        },
        {
          id: "care-team",
          heading: "Care that stays in the room",
          body: "The AI helps prepare the visit; a licensed clinician reviews, signs, and stays with you through follow-up. Nothing you receive is machine-only.",
        },
      ]}
      related={[
        { to: "/platform/ai-consultation", label: "AI Consultation", kind: "Platform" },
        { to: "/legal/privacy", label: "Privacy Policy", kind: "Legal" },
        { to: "/medical-disclaimer", label: "Medical Disclaimer", kind: "Resources" },
      ]}
    />
  ),
});
