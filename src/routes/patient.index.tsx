import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatCard, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Bell, Calendar, FileText, FlaskConical, Pill, Sparkles } from "lucide-react";

export const Route = createFileRoute("/patient/")({
  head: () => ({ meta: [{ title: "Dashboard · Patient · Medi Prompt" }] }),
  component: PatientDashboard,
});

function PatientDashboard() {
  const cfg = portalConfigs.patient;
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="Good afternoon, Sarah."
      pageDescription="Here's a quick look at your health this week."
      actions={
        <Button asChild>
          <Link to="/patient/ai-consultation">
            <Sparkles className="size-4" /> Start AI consultation
          </Link>
        </Button>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's status" value="All clear" tone="success" hint="No active red flags" />
        <StatCard label="Pending review" value="1" tone="primary" hint="Dr. Ruiz · within 2h" />
        <StatCard label="Active prescriptions" value="2" hint="Metformin · Lisinopril" />
        <StatCard label="Next appointment" value="Tue · 14:00" hint="Telemedicine follow-up" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel
          className="lg:col-span-2"
          title="Latest consultation"
          description="AI intake completed · Submitted for doctor review"
          actions={
            <StatusPill tone="primary">
              <span className="size-1.5 rounded-full bg-primary animate-pulse-dot" /> Under review
            </StatusPill>
          }
        >
          <div className="space-y-4">
            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Reference · #CN-44012
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Mild headache, no fever, sleeping 5h on average. AI captured 18 data points, suggested
                lifestyle review and rule-out for tension-type headache.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <StatusPill tone="muted">Severity · Low</StatusPill>
                <StatusPill tone="muted">Urgency · Routine</StatusPill>
                <StatusPill tone="success">Emergency · None</StatusPill>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Estimated review · 2 hours</span>
              <Link to="/patient/archive" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                View full report <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </Panel>

        <Panel title="Reminders" description="Today's care actions">
          <ul className="space-y-3 text-sm">
            <Reminder icon={Pill} label="Metformin 500 mg" meta="08:00 · taken" tone="success" />
            <Reminder icon={Pill} label="Lisinopril 10 mg" meta="20:00 · upcoming" />
            <Reminder icon={FlaskConical} label="Fasting glucose" meta="Wed · order open" tone="warning" />
            <Reminder icon={Calendar} label="Cardiology follow-up" meta="Tue · 14:00" />
          </ul>
        </Panel>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Panel title="Recent messages" actions={<Link to="/patient/messages" className="text-xs text-primary hover:underline">Open inbox</Link>}>
          <ul className="space-y-3 text-sm">
            <MsgRow from="Dr. Elena Ruiz" preview="Your AI report looks straightforward. I'll review and sign by 16:00." time="11m" />
            <MsgRow from="Medi Prompt" preview="A new lab result is available: HbA1c 6.2%." time="3h" />
            <MsgRow from="Front desk" preview="Reminder: bring insurance card for Tuesday's visit." time="1d" />
          </ul>
        </Panel>
        <Panel title="Health overview" description="Last 30 days">
          <div className="space-y-4">
            <Metric label="Avg blood pressure" value="118 / 76" trend="−4 vs prior" />
            <Metric label="Resting heart rate" value="64 bpm" trend="stable" />
            <Metric label="Sleep average" value="5.8 h" trend="−0.4 h" warn />
          </div>
        </Panel>
        <Panel title="Recent activity" actions={<Link to="/patient/timeline" className="text-xs text-primary hover:underline">Timeline</Link>}>
          <ol className="relative space-y-3 border-l border-border pl-4 text-sm">
            <Timeline icon={Sparkles} label="AI consultation submitted" time="Today · 10:42" />
            <Timeline icon={FlaskConical} label="Lab result · HbA1c" time="Yesterday" />
            <Timeline icon={FileText} label="Prescription renewed" time="3d ago" />
            <Timeline icon={Bell} label="Doctor message" time="1w ago" />
          </ol>
        </Panel>
      </div>
    </PortalShell>
  );
}

function Reminder({ icon: Icon, label, meta, tone = "default" }: any) {
  return (
    <li className="flex items-center gap-3">
      <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-3.5" />
      </span>
      <div className="flex-1">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{meta}</p>
      </div>
      {tone !== "default" && <StatusPill tone={tone}>•</StatusPill>}
    </li>
  );
}
function MsgRow({ from, preview, time }: { from: string; preview: string; time: string }) {
  return (
    <li className="flex gap-3">
      <div className="size-8 shrink-0 rounded-full bg-primary/15 text-[11px] font-semibold text-primary grid place-items-center">
        {from.split(" ").map((s) => s[0]).slice(0, 2).join("")}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <p className="truncate text-sm font-medium">{from}</p>
          <span className="text-[11px] text-muted-foreground">{time}</span>
        </div>
        <p className="truncate text-xs text-muted-foreground">{preview}</p>
      </div>
    </li>
  );
}
function Metric({ label, value, trend, warn }: { label: string; value: string; trend: string; warn?: boolean }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-3 last:border-0 last:pb-0">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="mt-1 text-xl font-semibold tabular-nums">{value}</p>
      </div>
      <span className={warn ? "text-xs text-warning-foreground" : "text-xs text-muted-foreground"}>{trend}</span>
    </div>
  );
}
function Timeline({ icon: Icon, label, time }: any) {
  return (
    <li className="relative">
      <span className="absolute -left-[22px] grid size-4 place-items-center rounded-full border-2 border-background bg-primary/15 text-primary">
        <Icon className="size-2.5" />
      </span>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-xs text-muted-foreground">{time}</p>
    </li>
  );
}
