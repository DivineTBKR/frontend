import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { Bell, Pill, Sparkles, FlaskConical } from "lucide-react";

export const Route = createFileRoute("/patient/notifications")({
  head: () => ({ meta: [{ title: "Notifications · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="patient"
      title="Notifications"
      description="Care updates, lab releases, doctor responses."
      sample={
        <Panel className="p-0">
          <ul className="divide-y divide-border">
            {[
              { icon: Sparkles, title: "AI report ready", sub: "Submitted for Dr. Ruiz review", time: "11m", tone: "primary" },
              { icon: FlaskConical, title: "New lab result · HbA1c", sub: "View in Lab Results", time: "3h", tone: "warning" },
              { icon: Pill, title: "Prescription renewed", sub: "Lisinopril 10 mg — next refill 30 Aug", time: "1d", tone: "success" },
              { icon: Bell, title: "Cardiology appointment confirmed", sub: "Tue · 14:00 with Dr. Ruiz", time: "2d", tone: "muted" },
            ].map((n, i) => (
              <li key={i} className="flex items-start gap-4 px-5 py-4">
                <div className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <n.icon className="size-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{n.title}</p>
                    <span className="text-[11px] text-muted-foreground">{n.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{n.sub}</p>
                </div>
                <StatusPill tone={n.tone as any}>•</StatusPill>
              </li>
            ))}
          </ul>
        </Panel>
      }
    />
  ),
});
