import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel, StatCard } from "@/components/portal/primitives";

export const Route = createFileRoute("/admin/billing")({
  head: () => ({ meta: [{ title: "Billing · Admin" }] }),
  component: () => (
    <ComingSoonPage
      portal="admin"
      title="Billing & Revenue"
      description="Subscriptions, invoices, usage-based billing, revenue analytics."
      sample={
        <>
          <div className="grid gap-4 md:grid-cols-4">
            <StatCard label="MRR" value="$612,540" delta="+9.2%" tone="success" />
            <StatCard label="ARR" value="$7.35M" delta="+11%" tone="success" />
            <StatCard label="Active subs" value="412" delta="+18" tone="primary" />
            <StatCard label="Churn · 30d" value="1.2%" delta="−0.3" tone="success" />
          </div>
          <div className="mt-6">
            <Panel title="Revenue by tier" description="This month">
              <div className="space-y-2">
                {[["Enterprise", 318000, 52], ["Hospital", 184000, 30], ["Clinic", 92000, 15], ["Solo", 18540, 3]].map(([k, v, p]: any) => (
                  <div key={k}>
                    <div className="flex justify-between text-sm">
                      <span>{k}</span>
                      <span className="font-mono tabular-nums">${v.toLocaleString()} · {p}%</span>
                    </div>
                    <div className="mt-1 h-2 overflow-hidden rounded-full bg-border">
                      <div className="h-full bg-primary" style={{ width: `${p}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </>
      }
    />
  ),
});
