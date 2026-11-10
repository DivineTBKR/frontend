import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/doctor/patients")({
  head: () => ({ meta: [{ title: "Patients · Medi Prompt" }] }),
  component: PatientsPage,
});

const PATIENTS = [
  { name: "Sarah Chen", age: 39, sex: "F", risk: "Low", tone: "success" as const, dx: "Borderline HbA1c", last: "Today", chronic: 0 },
  { name: "Marcus Webb", age: 64, sex: "M", risk: "High", tone: "destructive" as const, dx: "Hypertension, smoker", last: "8m ago", chronic: 2 },
  { name: "Lina Ortega", age: 28, sex: "F", risk: "Moderate", tone: "warning" as const, dx: "Pyelonephritis (recent)", last: "1h", chronic: 0 },
  { name: "Henri Dubois", age: 52, sex: "M", risk: "Moderate", tone: "warning" as const, dx: "Type 2 diabetes", last: "Yesterday", chronic: 1 },
  { name: "Aisha Patel", age: 31, sex: "F", risk: "Low", tone: "success" as const, dx: "Allergic rhinitis", last: "2d", chronic: 0 },
  { name: "Noah Park", age: 47, sex: "M", risk: "Low", tone: "success" as const, dx: "GERD", last: "5d", chronic: 1 },
  { name: "Imani Adeyemi", age: 36, sex: "F", risk: "Moderate", tone: "warning" as const, dx: "Asthma", last: "1w", chronic: 1 },
];

function PatientsPage() {
  const cfg = portalConfigs.doctor;
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="Patients"
      pageDescription={`${PATIENTS.length} active patients · 2 high-risk`}
      actions={<Button size="sm"><Plus className="size-3.5" /> Invite patient</Button>}
    >
      <Panel className="p-0" title="All patients" description="Sorted by recent activity">
        <div className="-m-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/60 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <th className="px-5 py-2.5 font-medium">Patient</th>
                <th className="px-5 py-2.5 font-medium">Latest diagnosis</th>
                <th className="px-5 py-2.5 font-medium">Risk</th>
                <th className="px-5 py-2.5 font-medium">Chronic</th>
                <th className="px-5 py-2.5 font-medium">Last visit</th>
                <th className="px-5 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {PATIENTS.map((p) => (
                <tr key={p.name} className="border-b border-border last:border-0 hover:bg-surface/50">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="grid size-8 place-items-center rounded-full bg-primary/15 text-[11px] font-semibold text-primary">
                        {p.name.split(" ").map((s) => s[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium">{p.name}</p>
                        <p className="text-[11px] text-muted-foreground">{p.age}y · {p.sex}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-foreground/90">{p.dx}</td>
                  <td className="px-5 py-3"><StatusPill tone={p.tone}>{p.risk}</StatusPill></td>
                  <td className="px-5 py-3 font-mono tabular-nums text-muted-foreground">{p.chronic}</td>
                  <td className="px-5 py-3 text-muted-foreground">{p.last}</td>
                  <td className="px-5 py-3 text-right">
                    <Button size="sm" variant="outline">Open</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </PortalShell>
  );
}
