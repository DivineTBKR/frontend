import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";
import { Activity, FileText, FlaskConical, Pill, Sparkles, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/patient/timeline")({
  head: () => ({ meta: [{ title: "Health Timeline · Medi Prompt" }] }),
  component: () => {
    const events = [
      { d: "Today", t: "AI consultation submitted", icon: Sparkles, body: "Headache evaluation · Severity 2/10" },
      { d: "Yesterday", t: "Lab result available", icon: FlaskConical, body: "HbA1c 6.2% — borderline prediabetic" },
      { d: "3 days ago", t: "Prescription renewed", icon: Pill, body: "Lisinopril 10 mg — refill 30 Aug" },
      { d: "12 Jun 2026", t: "Annual physical", icon: Stethoscope, body: "BP 118/76 · weight 64 kg · BMI 22.4" },
      { d: "04 May 2026", t: "Telemedicine visit", icon: Activity, body: "URI — supportive care, follow up if persistent" },
      { d: "18 Mar 2026", t: "AI consultation signed", icon: FileText, body: "Lumbar strain — PT referral" },
    ];
    return (
      <ComingSoonPage
        portal="patient"
        title="Health Timeline"
        description="A chronological view of every event in your record."
        sample={
          <Panel>
            <ol className="relative space-y-6 border-l-2 border-border pl-6">
              {events.map((e, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[33px] grid size-6 place-items-center rounded-full border-2 border-background bg-primary/15 text-primary">
                    <e.icon className="size-3" />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{e.d}</p>
                  <p className="mt-1 text-sm font-medium">{e.t}</p>
                  <p className="text-xs text-muted-foreground">{e.body}</p>
                </li>
              ))}
            </ol>
          </Panel>
        }
      />
    );
  },
});
