import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";

export const Route = createFileRoute("/admin/ai")({
  head: () => ({ meta: [{ title: "AI Management · Admin" }] }),
  component: () => (
    <ComingSoonPage
      portal="admin"
      title="AI Management"
      description="Prompt versions, model rollouts, accuracy, hallucination reports, escalation rules."
      sample={
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Model · v4.0.2", "Rolled out to 5% · 0 regressions"],
            ["Prompt · clinical_v12", "Live · last edit 2d"],
            ["Accuracy · 30d", "91.4% · ↑ 1.8%"],
            ["Hallucination reports", "3 open · 17 resolved"],
            ["Escalation rules", "12 active"],
            ["Reference corpus", "Updated 14 Jun · PubMed sync OK"],
          ].map(([t, d]) => (
            <Panel key={t} title={t} description={d as string}>
              <p className="text-xs text-muted-foreground">Manage configuration, versions and rollout.</p>
            </Panel>
          ))}
        </div>
      }
    />
  ),
});
