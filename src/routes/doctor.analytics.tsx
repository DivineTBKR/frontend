import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatCard } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";

export const Route = createFileRoute("/doctor/analytics")({
  head: () => ({ meta: [{ title: "Analytics · Medi Prompt" }] }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const cfg = portalConfigs.doctor;
  // simple inline sparkline bars (no chart lib needed for the shell)
  const bars = [42, 55, 38, 61, 48, 72, 68, 80, 74, 88, 82, 95];
  return (
    <PortalShell role={cfg.role} user={cfg.user} sections={cfg.nav} pageTitle="Practice analytics" pageDescription="Last 12 weeks">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Consultations" value="318" delta="+12%" tone="primary" />
        <StatCard label="Hours saved" value="92h" delta="+18h" tone="success" />
        <StatCard label="AI accuracy" value="91.4%" delta="+1.8%" tone="success" />
        <StatCard label="Avg revenue / visit" value="$148" delta="+$6" tone="primary" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-2" title="Consultations · weekly" description="12-week trend">
          <div className="flex h-64 items-end gap-3 px-2 pt-4">
            {bars.map((b, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-md bg-gradient-to-t from-primary/80 to-primary/40"
                  style={{ height: `${b}%` }}
                />
                <span className="font-mono text-[10px] text-muted-foreground">W{i + 1}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Approval breakdown">
          <ul className="space-y-3 text-sm">
            {([["Approved as-is", 72, "bg-success"], ["Approved w/ edits", 21, "bg-primary"], ["Requested info", 4, "bg-warning"], ["Rejected", 3, "bg-destructive"]] as const).map(([k, v, bar]) => (
              <li key={k}>
                <div className="flex justify-between"><span className="text-muted-foreground">{k}</span><span className="font-mono">{v}%</span></div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-border">
                  <div className={`h-full ${bar}`} style={{ width: `${v}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel title="Most common conditions">
          <ul className="space-y-2 text-sm">
            {[["Hypertension follow-up", 28], ["Upper respiratory infection", 19], ["Type 2 diabetes follow-up", 17], ["Lumbar strain", 11], ["Anxiety / depression", 9]].map(([k, v]: any) => (
              <li key={k} className="flex items-center justify-between border-b border-border pb-1.5 last:border-0">
                <span className="text-muted-foreground">{k}</span>
                <span className="font-mono tabular-nums">{v}</span>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Heatmap · day × hour">
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 12 * 7 }).map((_, i) => {
              const v = Math.floor(Math.random() * 100);
              return (
                <div
                  key={i}
                  className="aspect-square rounded-sm"
                  style={{ backgroundColor: `oklch(0.55 0.18 252 / ${v / 100})` }}
                  title={`${v}`}
                />
              );
            })}
          </div>
          <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground">
            <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
          </div>
        </Panel>
      </div>
    </PortalShell>
  );
}
