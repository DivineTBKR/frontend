import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatCard, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Super Admin · Medi Prompt" }] }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const cfg = portalConfigs.admin;
  return (
    <PortalShell role={cfg.role} user={cfg.user} sections={cfg.nav} pageTitle="Platform overview" pageDescription="All systems operational.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active clinics" value="412" delta="+18" tone="primary" />
        <StatCard label="Doctors" value="3,841" delta="+128" tone="primary" />
        <StatCard label="Patients" value="284,201" delta="+4.2k" tone="primary" />
        <StatCard label="MRR" value="$612,540" delta="+9.2%" tone="success" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2" title="System health" description="Last 24 hours">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              ["API", "99.99%", "success"],
              ["AI Gateway", "99.97%", "success"],
              ["Database", "99.99%", "success"],
              ["Storage · 14.8 TB", "Healthy", "success"],
              ["GPU pool", "62%", "warning"],
              ["Edge cache", "Healthy", "success"],
            ].map(([k, v, tone]: any) => (
              <div key={k} className="rounded-lg border border-border bg-surface p-4">
                <p className="text-xs text-muted-foreground">{k}</p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-lg font-semibold tabular-nums">{v}</p>
                  <StatusPill tone={tone}>•</StatusPill>
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Active alerts">
          <ul className="space-y-3 text-sm">
            <li className="rounded-lg border border-warning/30 bg-warning/10 p-3">
              <p className="font-medium">GPU utilization at 62%</p>
              <p className="text-xs text-muted-foreground">Auto-scaling armed · review by 18:00</p>
            </li>
            <li className="rounded-lg border border-border bg-surface p-3">
              <p className="font-medium">Support ticket spike · Clinic 8821</p>
              <p className="text-xs text-muted-foreground">12 tickets in last hour · investigating</p>
            </li>
            <li className="rounded-lg border border-border bg-surface p-3">
              <p className="font-medium">Model rollout · v4.0.2 → 5%</p>
              <p className="text-xs text-muted-foreground">No regressions detected</p>
            </li>
          </ul>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel title="AI Gateway requests · 24h">
          <p className="text-3xl font-semibold tabular-nums">2.41M</p>
          <p className="text-xs text-muted-foreground">+8.4% vs prior</p>
          <div className="mt-4 flex h-24 items-end gap-1">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="flex-1 rounded-sm bg-primary/40" style={{ height: `${20 + Math.random() * 80}%` }} />
            ))}
          </div>
        </Panel>
        <Panel title="Top clinics by usage">
          <ul className="space-y-2 text-sm">
            {[["MedClinic NYC", "48k req"], ["São Paulo Saúde", "31k"], ["LondonCare", "24k"], ["Berlin Medizin", "19k"], ["Lagos HealthHub", "12k"]].map(([k, v]) => (
              <li key={k} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0">
                <span>{k}</span>
                <span className="font-mono text-muted-foreground">{v}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Support queue">
          <div className="space-y-3">
            <div className="flex items-center justify-between"><span className="text-sm">Open</span><span className="font-mono tabular-nums">42</span></div>
            <div className="flex items-center justify-between"><span className="text-sm">Awaiting customer</span><span className="font-mono tabular-nums">17</span></div>
            <div className="flex items-center justify-between"><span className="text-sm">SLA breach risk</span><span className="font-mono tabular-nums text-warning-foreground">2</span></div>
            <div className="flex items-center justify-between"><span className="text-sm">Resolved · 24h</span><span className="font-mono tabular-nums text-success">128</span></div>
          </div>
        </Panel>
      </div>
    </PortalShell>
  );
}
