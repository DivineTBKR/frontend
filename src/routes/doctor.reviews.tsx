import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Check, Edit3, FileText, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/doctor/reviews")({
  head: () => ({ meta: [{ title: "Pending Reviews · Medi Prompt" }] }),
  component: ReviewsPage,
});

function ReviewsPage() {
  const cfg = portalConfigs.doctor;
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="Marcus Webb · 64y · Critical"
      pageDescription="AI consultation #CN-44011 · Submitted 8 minutes ago"
      actions={
        <>
          <Button variant="outline" size="sm"><X className="size-3.5" /> Reject</Button>
          <Button variant="outline" size="sm"><Edit3 className="size-3.5" /> Edit</Button>
          <Button size="sm"><Check className="size-3.5" /> Approve & Sign</Button>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {/* LEFT — conversation */}
        <Panel title="AI conversation" description="18 exchanges · 6m 42s" className="overflow-hidden p-0">
          <div className="h-[640px] space-y-5 overflow-y-auto px-5 py-5">
            {CONVO.map((m, i) => (
              <div key={i} className={m.role === "patient" ? "flex justify-end" : "flex gap-2.5"}>
                {m.role === "ai" && (
                  <div className="mt-1 grid size-6 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Sparkles className="size-3" />
                  </div>
                )}
                <div
                  className={
                    m.role === "patient"
                      ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground"
                      : "max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-surface px-3.5 py-2.5 text-sm"
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        {/* RIGHT — AI report */}
        <div className="space-y-4">
          <Panel title="AI Clinical Report" description="Generated · 12:18 UTC" actions={<StatusPill tone="destructive"><AlertTriangle className="size-3" /> Critical</StatusPill>}>
            <div className="space-y-5">
              <Section title="Differential diagnosis">
                <ul className="space-y-2 text-sm">
                  <DxRow name="Unstable angina" conf={62} icd="I20.0" tone="destructive" />
                  <DxRow name="Acute coronary syndrome" conf={48} icd="I24.9" tone="destructive" />
                  <DxRow name="GERD with chest pain" conf={22} icd="K21.0" tone="muted" />
                </ul>
              </Section>
              <Section title="Clinical reasoning">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  64-year-old male, retrosternal chest discomfort radiating to left arm on exertion,
                  relieved by rest. Prior history of hypertension and 30-pack-year smoking. Symptom
                  profile and risk factors elevate concern for cardiac etiology.
                </p>
              </Section>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Section title="Recommended labs">
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li>· Troponin I, serial</li>
                    <li>· BNP, BMP</li>
                    <li>· Lipid panel</li>
                  </ul>
                </Section>
                <Section title="Imaging">
                  <ul className="space-y-1.5 text-muted-foreground">
                    <li>· 12-lead ECG · STAT</li>
                    <li>· CXR PA + lateral</li>
                  </ul>
                </Section>
              </div>
              <Section title="Suggested action">
                <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm">
                  <p className="font-medium text-destructive">Refer to Emergency Department immediately.</p>
                  <p className="mt-1 text-xs text-destructive/80">
                    Time-sensitive — instruct patient not to drive, call EMS.
                  </p>
                </div>
              </Section>
              <Section title="Drug interactions">
                <p className="text-sm text-success">No conflicts found with current medications (Amlodipine, Atorvastatin).</p>
              </Section>
            </div>
          </Panel>

          <Panel title="Doctor notes">
            <textarea
              rows={4}
              placeholder="Add private notes for the patient's record…"
              className="w-full rounded-lg border border-border bg-background p-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15"
            />
            <div className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <FileText className="size-3" /> Auto-saved as draft
              </span>
              <Button size="sm" variant="outline">Save draft</Button>
            </div>
          </Panel>
        </div>
      </div>
    </PortalShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{title}</p>
      {children}
    </div>
  );
}
function DxRow({ name, conf, icd, tone }: { name: string; conf: number; icd: string; tone: any }) {
  return (
    <li className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="font-mono text-[10px] text-muted-foreground">ICD-10 · {icd}</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
          <div className={`h-full ${tone === "destructive" ? "bg-destructive" : "bg-muted-foreground/40"}`} style={{ width: `${conf}%` }} />
        </div>
        <span className="font-mono text-xs tabular-nums">{conf}%</span>
      </div>
    </li>
  );
}

const CONVO = [
  { role: "ai", text: "Good morning. What's bringing you in today?" },
  { role: "patient", text: "Chest tightness and pain in my left arm, started this morning when I was carrying groceries." },
  { role: "ai", text: "Thank you. On a scale of 0 to 10, how would you describe the pain right now?" },
  { role: "patient", text: "Maybe a 6 when it happens, then it eases off when I sit down." },
  { role: "ai", text: "Does the pain spread to your jaw, neck or back?" },
  { role: "patient", text: "A little into the jaw, yes." },
  { role: "ai", text: "Are you feeling short of breath, sweaty or nauseous?" },
  { role: "patient", text: "I was a bit sweaty before. Not nauseous." },
  { role: "ai", text: "Do you have any history of heart disease, high blood pressure or diabetes?" },
  { role: "patient", text: "High blood pressure, on amlodipine. I smoked for about 30 years." },
] as const;
