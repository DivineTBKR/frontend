import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/doctor/templates")({
  head: () => ({ meta: [{ title: "Templates · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="doctor"
      title="Templates"
      description="SOAP, referral, sick leave, prescription macros."
      sample={
        <div className="space-y-4">
          <div className="flex justify-end"><Button size="sm"><Plus className="size-3.5" /> New template</Button></div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["SOAP · primary care", "Subjective · Objective · Assessment · Plan"],
              ["Referral · Cardiology", "Stress test + echo with rationale"],
              ["Sick leave · 3 days", "Standard format · employer-ready"],
              ["URI · supportive care", "Standard URI plan with patient handouts"],
              ["T2DM · annual review", "Includes HbA1c, lipid, microalbumin"],
              ["Hypertension · monthly", "BP log, medication reconciliation"],
            ].map(([t, d]) => (
              <Panel key={t} title={t}>
                <p className="text-xs text-muted-foreground">{d}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button size="sm">Use</Button>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      }
    />
  ),
});
