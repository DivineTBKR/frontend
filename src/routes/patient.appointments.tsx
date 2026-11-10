import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/patient/appointments")({
  head: () => ({ meta: [{ title: "Appointments · Medi Prompt" }] }),
  component: Appointments,
});

const APTS = [
  { when: "Tue · 14:00", who: "Dr. Elena Ruiz", type: "Telemedicine follow-up", tone: "primary" as const, icon: Video },
  { when: "Fri · 09:30", who: "Lab — Quest Diagnostics", type: "Fasting glucose & lipid panel", tone: "muted" as const, icon: Clock },
  { when: "28 Jul · 10:00", who: "Dr. M. Okafor", type: "Cardiology consultation", tone: "muted" as const, icon: Calendar },
];

function Appointments() {
  return (
    <ComingSoonPage
      portal="patient"
      title="Appointments"
      description="Upcoming, past, and ready-to-book."
      sample={
        <div className="space-y-4">
          <div className="flex items-center justify-end">
            <Button size="sm"><Calendar className="size-3.5" /> Book new</Button>
          </div>
          <Panel title="Upcoming" description={`${APTS.length} scheduled`}>
            <ul className="divide-y divide-border">
              {APTS.map((a) => (
                <li key={a.when} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                  <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="size-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{a.type}</p>
                    <p className="text-xs text-muted-foreground">{a.who}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{a.when}</span>
                  <StatusPill tone={a.tone}>Confirmed</StatusPill>
                  <Button size="sm" variant="outline">Manage</Button>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      }
    />
  );
}
