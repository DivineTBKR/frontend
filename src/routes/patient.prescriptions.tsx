import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { Pill, QrCode, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/patient/prescriptions")({
  head: () => ({ meta: [{ title: "Prescriptions · Medi Prompt" }] }),
  component: PrescriptionsPage,
});

const PRESCRIPTIONS = [
  { name: "Metformin", dose: "500 mg · 2× daily", from: "Dr. E. Ruiz", expires: "12 Sep 2026", status: "Active", tone: "success" as const, refill: 3 },
  { name: "Lisinopril", dose: "10 mg · once daily", from: "Dr. E. Ruiz", expires: "30 Aug 2026", status: "Active", tone: "success" as const, refill: 2 },
  { name: "Atorvastatin", dose: "20 mg · once daily", from: "Dr. M. Okafor", expires: "01 Jul 2026", status: "Renewal needed", tone: "warning" as const, refill: 0 },
  { name: "Amoxicillin", dose: "500 mg · 3× daily · 7d", from: "Dr. E. Ruiz", expires: "Completed 14 May", status: "Past", tone: "muted" as const, refill: 0 },
];

function PrescriptionsPage() {
  const cfg = portalConfigs.patient;
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="Prescriptions"
      pageDescription="Active medications, renewals, and history."
      actions={
        <Button variant="outline" size="sm">
          <RefreshCw className="size-3.5" /> Request renewal
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {PRESCRIPTIONS.map((p) => (
          <Panel key={p.name} className="overflow-hidden">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Pill className="size-4" />
                </div>
                <div>
                  <p className="text-base font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.dose}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Prescribed by {p.from} · Expires {p.expires}
                  </p>
                </div>
              </div>
              <StatusPill tone={p.tone}>{p.status}</StatusPill>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <QrCode className="size-3.5" /> Refills · {p.refill}
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">Download PDF</Button>
                <Button size="sm">View details</Button>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </PortalShell>
  );
}
