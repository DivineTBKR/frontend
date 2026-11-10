import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";

export const Route = createFileRoute("/patient/lab-results")({
  head: () => ({ meta: [{ title: "Lab Results · Medi Prompt" }] }),
  component: LabResults,
});

const LABS = [
  { name: "HbA1c", value: "6.2 %", ref: "< 5.7 normal · 5.7–6.4 prediabetic", tone: "warning" as const, date: "Yesterday", trend: "↑ 0.1" },
  { name: "Total cholesterol", value: "182 mg/dL", ref: "< 200 normal", tone: "success" as const, date: "Yesterday", trend: "↓ 8" },
  { name: "LDL", value: "104 mg/dL", ref: "< 100 optimal", tone: "warning" as const, date: "Yesterday", trend: "↓ 6" },
  { name: "Creatinine", value: "0.82 mg/dL", ref: "0.6–1.1 normal", tone: "success" as const, date: "Yesterday", trend: "stable" },
  { name: "TSH", value: "2.1 mIU/L", ref: "0.4–4.0 normal", tone: "success" as const, date: "12 Jun", trend: "stable" },
  { name: "Vitamin D", value: "22 ng/mL", ref: "≥ 30 sufficient", tone: "destructive" as const, date: "12 Jun", trend: "↓ 4" },
];

function LabResults() {
  const cfg = portalConfigs.patient;
  return (
    <PortalShell role={cfg.role} user={cfg.user} sections={cfg.nav} pageTitle="Lab Results" pageDescription="Reference ranges and trend over time.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {LABS.map((l) => (
          <Panel key={l.name}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground">{l.date}</p>
                <p className="mt-1 text-base font-medium">{l.name}</p>
              </div>
              <StatusPill tone={l.tone}>{l.tone === "success" ? "Normal" : l.tone === "warning" ? "Borderline" : "Out of range"}</StatusPill>
            </div>
            <p className="mt-4 text-3xl font-semibold tabular-nums">{l.value}</p>
            <p className="mt-2 text-xs text-muted-foreground">{l.ref}</p>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
              <span className="font-mono text-muted-foreground">vs prior</span>
              <span className="font-medium">{l.trend}</span>
            </div>
          </Panel>
        ))}
      </div>
    </PortalShell>
  );
}
