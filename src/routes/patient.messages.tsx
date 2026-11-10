import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";

export const Route = createFileRoute("/patient/messages")({
  head: () => ({ meta: [{ title: "Messages · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="patient"
      title="Doctor Messages"
      description="Secure, threaded conversations with your care team."
      sample={
        <div className="grid gap-4 lg:grid-cols-[280px_1fr] h-[600px]">
          <Panel className="overflow-hidden p-0">
            <ul className="divide-y divide-border">
              {["Dr. Elena Ruiz", "Front desk", "Medi Prompt", "Dr. M. Okafor"].map((n, i) => (
                <li key={n} className={`p-4 cursor-pointer hover:bg-surface ${i === 0 ? "bg-surface" : ""}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{n}</p>
                    <span className="text-[10px] text-muted-foreground">{["11m", "1h", "3h", "1d"][i]}</span>
                  </div>
                  <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                    {["Your AI report looks straightforward…", "Reminder: bring insurance card…", "A new lab result is available…", "Cardiology follow-up scheduled…"][i]}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel className="overflow-hidden p-0">
            <div className="flex h-full flex-col">
              <header className="border-b border-border px-5 py-3">
                <p className="text-sm font-semibold">Dr. Elena Ruiz</p>
                <p className="text-xs text-muted-foreground">Internal Medicine</p>
              </header>
              <div className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
                <div className="max-w-[70%] rounded-2xl rounded-tl-sm border border-border bg-surface px-4 py-2.5 text-sm">
                  Your AI report looks straightforward. I'll review and sign by 16:00.
                </div>
                <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                  Thank you, doctor.
                </div>
              </div>
              <div className="border-t border-border p-3">
                <input className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm focus:outline-none" placeholder="Reply…" />
              </div>
            </div>
          </Panel>
        </div>
      }
    />
  ),
});
