import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/site/MarketingPage";

export const Route = createFileRoute("/resources/contact")({
  head: () => ({ meta: [{ title: "Contact · Medi Prompt" }] }),
  component: () => (
    <MarketingPage
      kind="Resources · Contact"
      title="Get in touch."
      lede="Whether you are a clinician interested in joining Medi Prompt, a clinic evaluating the platform, or a patient with a question, our team is ready to help."
      sections={[
        {
          id: "clinicians",
          heading: "For clinicians",
          body: "Interested in using Medi Prompt in your practice? Tell us about your specialty, team size, and workflow. We will respond within one business day with next steps and a tailored overview.",
          bullets: [
            { title: "Email", desc: "clinicians@mediprompt.health" },
            { title: "Response time", desc: "Within 24 hours on business days." },
          ],
        },
        {
          id: "patients",
          heading: "For patients",
          body: "Medi Prompt is available through participating clinics. If your doctor uses Medi Prompt and you need support, please contact your clinic directly or reach us here.",
          bullets: [
            { title: "Support email", desc: "support@mediprompt.health" },
            { title: "Hours", desc: "Monday – Friday, 09:00 – 18:00 CET." },
          ],
        },
        {
          id: "partners",
          heading: "Partners & press",
          body: "For integration partnerships, media inquiries, and enterprise evaluations, contact our partnerships team.",
          bullets: [
            { title: "Partnerships", desc: "partnerships@mediprompt.health" },
            { title: "Press", desc: "press@mediprompt.health" },
          ],
        },
        {
          id: "address",
          heading: "Office",
          body: "Medi Prompt GmbH\nRosenthaler Strasse 40\n10178 Berlin, Germany",
        },
      ]}
      related={[
        { to: "/platform/ai-consultation", label: "AI Consultation", kind: "Platform" },
        { to: "/platform/doctor-portal", label: "Doctor Portal", kind: "Platform" },
        { to: "/legal/privacy", label: "Privacy Policy", kind: "Legal" },
      ]}
    />
  ),
});
