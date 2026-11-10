import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatCard, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ClipboardCheck, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/doctor/")({
  head: () => ({ meta: [{ title: "Doctor Dashboard · Medi Prompt" }] }),
  component: DoctorDashboard,
});

const QUEUE = [
  { id: "CN-44012", patient: "Sarah Chen", age: 39, urgency: "Routine", tone: "muted" as const, confidence: 86, dx: "Tension-type headache" },
  { id: "CN-44011", patient: "Marcus Webb", age: 64, urgency: "Critical", tone: "destructive" as const, confidence: 94, dx: "Possible angina · refer ER" },
  { id: "CN-44009", patient: "Lina Ortega", age: 28, urgency: "Soon", tone: "warning" as const, confidence: 78, dx: "Pyelonephritis suspected" },
  { id: "CN-44004", patient: "Henri Dubois", age: 52, urgency: "Routine", tone: "muted" as const, confidence: 81, dx: "Type 2 diabetes follow-up" },
  { id: "CN-43998", patient: "Aisha Patel", age: 31, urgency: "Routine", tone: "muted" as const, confidence: 89, dx: "Allergic rhinitis" },
];

function DoctorDashboard() {
  const cfg = portalConfigs.doctor;
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="Clinical command center"
      pageDescription="7 reviews pending · 1 critical · 12 patients today."
      actions={
        <Button asChild>
          <Link to="/doctor/reviews">
            <ClipboardCheck className="size-4" /> Open review queue
          </Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Pending reviews" value="7" delta="+2" tone="primary" hint="Avg wait 14m" />
        <StatCard label="Critical cases" value="1" tone="destructive" hint="Marcus Webb · ER referral" />
        <StatCard label="AI confidence avg" value="84%" delta="+3%" tone="success" hint="Last 50 analyses" />
        <StatCard label="Hours saved · month" value="92h" delta="+18h" tone="success" hint="~$11.5k operational" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel
          className="lg:col-span-2"
          title="Review queue"
          description="Ordered by urgency"
          actions={<Link to="/doctor/reviews" className="text-xs text-primary hover:underline">See all</Link>}
        >
          <div className="-m-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/60 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                  <th className="px-5 py-2.5 font-medium">Patient</th>
                  <th className="px-5 py-2.5 font-medium">AI Diagnosis</th>
                  <th className="px-5 py-2.5 font-medium">Confidence</th>
                  <th className="px-5 py-2.5 font-medium">Urgency</th>
                  <th className="px-5 py-2.5" />
                </tr>
              </thead>
              <tbody>
                {QUEUE.map((q) => (
                  <tr key={q.id} className="border-b border-border last:border-0 hover:bg-surface/50">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="grid size-7 place-items-center rounded-full bg-primary/15 text-[10px] font-semibold text-primary">
                          {q.patient.split(" ").map((p) => p[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium">{q.patient}</p>
                          <p className="font-mono text-[10px] text-muted-foreground">
                            #{q.id} · {q.age}y
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-foreground/90">{q.dx}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
                          <div className="h-full bg-primary" style={{ width: `${q.confidence}%` }} />
                        </div>
                        <span className="font-mono text-xs tabular-nums text-muted-foreground">
                          {q.confidence}%
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <StatusPill tone={q.tone}>
                        {q.urgency === "Critical" && <AlertTriangle className="size-3" />}
                        {q.urgency}
                      </StatusPill>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <Button size="sm" variant="outline" asChild>
                        <Link to="/doctor/reviews">Review</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Today's signal">
          <div className="space-y-4">
            <Signal label="Consultations" value="12" trend="+3 vs yesterday" />
            <Signal label="Approval rate" value="92%" trend="↑ 2 pts" />
            <Signal label="Avg review time" value="3m 12s" trend="−18s" />
            <Signal label="Patient NPS" value="74" trend="↑ 4" />
          </div>
          <Button variant="outline" size="sm" className="mt-5 w-full" asChild>
            <Link to="/doctor/analytics">
              <TrendingUp className="size-3.5" /> Full analytics
            </Link>
          </Button>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {[
          { title: "Most common · 30d", items: [["Hypertension f/u", 28], ["URI", 19], ["T2DM follow-up", 17], ["Lumbar strain", 11]] },
          { title: "Most prescribed", items: [["Metformin", 32], ["Lisinopril", 27], ["Atorvastatin", 19], ["Sertraline", 12]] },
          { title: "Patient retention", items: [["6-month retention", "91%"], ["Avg visits / yr", "4.2"], ["Reactivated", 18], ["Churned", 3]] },
        ].map((c) => (
          <Panel key={c.title} title={c.title}>
            <ul className="space-y-2.5 text-sm">
              {c.items.map(([k, v]) => (
                <li key={k as string} className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-mono font-semibold tabular-nums">{v}</span>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </PortalShell>
  );
}

function Signal({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-3 last:border-0 last:pb-0">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-1 text-xl font-semibold tabular-nums">{value}</p>
      </div>
      <span className="text-xs text-muted-foreground">{trend}</span>
    </div>
  );
}
