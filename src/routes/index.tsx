import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroChat } from "@/components/landing/HeroChat";
import { HowItWorks, Features, DoctorCTA, FAQ } from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medi Prompt — Your AI Clinical Assistant" },
      {
        name: "description",
        content:
          "Reduce consultation time and improve patient care. AI clinical co-pilot for doctors, reviewed by a licensed physician before reaching the patient.",
      },
      { property: "og:title", content: "Medi Prompt — Your AI Clinical Assistant" },
      {
        property: "og:description",
        content: "AI Clinical Assistant for doctors and patients. HIPAA / GDPR ready.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroChat />
        <HowItWorks />
        <Features />
        <DoctorCTA />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  );
}
