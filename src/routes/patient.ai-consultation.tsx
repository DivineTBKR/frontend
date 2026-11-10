import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Mic, Paperclip, ShieldCheck, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/patient/ai-consultation")({
  head: () => ({ meta: [{ title: "AI Consultation · Medi Prompt" }] }),
  component: AIConsultation,
});

type Msg = { role: "ai" | "patient"; text: string; meta?: string };

const INITIAL: Msg[] = [
  {
    role: "ai",
    text: "Hello Sarah. I'm your AI clinical assistant. Before we begin, can you tell me what brings you in today?",
  },
];

function AIConsultation() {
  const cfg = portalConfigs.patient;
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((m) => [...m, { role: "patient", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "ai",
          text: "Thank you. On a scale of 0 to 10, how would you describe the pain right now?",
        },
      ]);
    }, 700);
  };

  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="AI Consultation"
      pageDescription="Take your time. One question at a time. You can pause anytime."
      actions={
        <>
          <StatusPill tone="success">
            <span className="size-1.5 rounded-full bg-success animate-pulse-dot" /> Live · Encrypted
          </StatusPill>
          <Button variant="outline" size="sm">
            Pause
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Panel className="overflow-hidden p-0">
          <div className="flex h-[640px] flex-col">
            <header className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
              <div className="flex items-center gap-2.5">
                <div className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Medi Prompt Clinical Assistant</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Session · #CN-44013 · 12:04
                  </p>
                </div>
              </div>
              <StatusPill tone="muted">Reviewed by Dr. Ruiz</StatusPill>
            </header>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "patient" ? "flex justify-end" : "flex gap-3"}>
                  {m.role === "ai" && (
                    <div className="grid size-7 shrink-0 place-items-center rounded-md bg-primary/10 text-primary mt-1">
                      <Sparkles className="size-3.5" />
                    </div>
                  )}
                  <div
                    className={
                      m.role === "patient"
                        ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground shadow-sm"
                        : "max-w-[80%] rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-foreground"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <form
              className="border-t border-border bg-background p-4"
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
            >
              <div className="flex items-end gap-2 rounded-xl border border-border bg-surface p-2 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/15">
                <button type="button" className="rounded-md p-2 text-muted-foreground hover:bg-background hover:text-foreground">
                  <Paperclip className="size-4" />
                </button>
                <button type="button" className="rounded-md p-2 text-muted-foreground hover:bg-background hover:text-foreground">
                  <Mic className="size-4" />
                </button>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send();
                    }
                  }}
                  rows={1}
                  placeholder="Type your answer…"
                  className="flex-1 resize-none bg-transparent px-1 py-1.5 text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <Button type="submit" size="sm" className="h-8 rounded-md">
                  Send <ArrowUpRight className="size-3.5" />
                </Button>
              </div>
              <p className="mt-2 flex items-center gap-1.5 px-2 text-[11px] text-muted-foreground">
                <ShieldCheck className="size-3 text-success" /> End-to-end encrypted · Saved automatically
              </p>
            </form>
          </div>
        </Panel>

        <div className="space-y-4">
          <Panel title="Pre-consult checklist" description="Confirmed for this session">
            <ul className="space-y-2.5 text-sm">
              {[
                "Name · Sarah Chen",
                "DOB · 14 Mar 1986",
                "Weight · 64 kg",
                "Allergies · Penicillin",
                "Medications · 2 active",
                "Consent · Acknowledged",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2 text-muted-foreground">
                  <span className="grid size-4 place-items-center rounded-full bg-success/15 text-success text-[10px]">
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Live AI signals" description="Internal — not shown until review">
            <div className="space-y-3 text-sm">
              <Signal label="Possible conditions" value="3 candidates" />
              <Signal label="Severity score" value="2 / 10" tone="success" />
              <Signal label="Urgency" value="Routine" tone="success" />
              <Signal label="Emergency triggers" value="None detected" tone="success" />
              <Signal label="Drug interactions" value="0 conflicts" tone="success" />
            </div>
          </Panel>
          <Panel title="Assigned clinician">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                ER
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Dr. Elena Ruiz</p>
                <p className="text-xs text-muted-foreground">Internal Medicine · 12 yrs</p>
              </div>
              <Stethoscope className="size-4 text-muted-foreground" />
            </div>
          </Panel>
        </div>
      </div>
    </PortalShell>
  );
}

function Signal({ label, value, tone = "default" }: { label: string; value: string; tone?: any }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <StatusPill tone={tone === "default" ? "muted" : tone}>{value}</StatusPill>
    </div>
  );
}
