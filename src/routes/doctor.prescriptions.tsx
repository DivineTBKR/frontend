import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const Route = createFileRoute("/doctor/prescriptions")({
  head: () => ({ meta: [{ title: "Prescription Builder · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="doctor"
      title="Prescription Builder"
      description="Autocomplete database, dose calculator, interaction checker, e-signature."
      sample={
        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <Panel title="New prescription · Sarah Chen">
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Medication</label>
                <div className="mt-1 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <Search className="size-3.5 text-muted-foreground" />
                  <input defaultValue="Metformin 500 mg" className="flex-1 bg-transparent text-sm focus:outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[["Dosage", "1 tablet"], ["Frequency", "Twice daily"], ["Duration", "90 days"]].map(([l, v]) => (
                  <div key={l}>
                    <label className="text-xs font-medium text-muted-foreground">{l}</label>
                    <input defaultValue={v} className="mt-1 h-9 w-full rounded-lg border border-border bg-surface px-3 text-sm focus:outline-none" />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Patient instructions</label>
                <textarea
                  rows={3}
                  defaultValue="Take with food. Monitor for GI side-effects in the first week."
                  className="mt-1 w-full rounded-lg border border-border bg-surface p-3 text-sm focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-success">✓ No interactions detected</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Save draft</Button>
                  <Button size="sm">Sign & send</Button>
                </div>
              </div>
            </div>
          </Panel>
          <Panel title="Patient context">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Age · 39y · F · 64 kg</li>
              <li>Allergies · Penicillin</li>
              <li>Active · Lisinopril 10mg</li>
              <li>HbA1c · 6.2% (yesterday)</li>
              <li>Insurance · Aetna</li>
            </ul>
          </Panel>
        </div>
      }
    />
  ),
});
