import { createFileRoute } from "@tanstack/react-router";
import { PortalShell } from "@/components/portal/PortalShell";
import { Panel, StatusPill } from "@/components/portal/primitives";
import { portalConfigs } from "@/components/portal/shared";
import { Button } from "@/components/ui/button";
import { Download, FileText, Search } from "lucide-react";

export const Route = createFileRoute("/patient/archive")({
  head: () => ({ meta: [{ title: "Medical Archive · Medi Prompt" }] }),
  component: ArchivePage,
});

const RECORDS = [
  { id: "CN-44012", date: "Today · 10:42", type: "AI Consultation", dx: "Tension-type headache (working)", status: "Under review", tone: "primary" as const },
  { id: "CN-43891", date: "12 Jun 2026", type: "Annual physical", dx: "Borderline HbA1c · lifestyle plan", status: "Signed", tone: "success" as const },
  { id: "CN-43775", date: "04 May 2026", type: "Telemedicine", dx: "Upper respiratory infection", status: "Signed", tone: "success" as const },
  { id: "CN-43012", date: "18 Mar 2026", type: "AI Consultation", dx: "Lumbar strain", status: "Signed", tone: "success" as const },
  { id: "CN-42440", date: "22 Jan 2026", type: "In-clinic visit", dx: "Hypertension follow-up", status: "Signed", tone: "success" as const },
];

function ArchivePage() {
  const cfg = portalConfigs.patient;
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle="Medical Archive"
      pageDescription="Every consultation, signed and stored forever."
      actions={
        <Button variant="outline" size="sm">
          <Download className="size-3.5" /> Export all
        </Button>
      }
    >
      <Panel
        className="p-0"
        title="All records"
        description={`${RECORDS.length} entries`}
        actions={
          <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-2 py-1 text-xs">
            <Search className="size-3 text-muted-foreground" />
            <input placeholder="Search records" className="w-40 bg-transparent focus:outline-none" />
          </div>
        }
      >
        <div className="-m-5">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/60 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <th className="px-5 py-2.5 font-medium">Reference</th>
                <th className="px-5 py-2.5 font-medium">Date</th>
                <th className="px-5 py-2.5 font-medium">Type</th>
                <th className="px-5 py-2.5 font-medium">Working diagnosis</th>
                <th className="px-5 py-2.5 font-medium">Status</th>
                <th className="px-5 py-2.5" />
              </tr>
            </thead>
            <tbody>
              {RECORDS.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0 hover:bg-surface/50">
                  <td className="px-5 py-3 font-mono text-xs text-muted-foreground">#{r.id}</td>
                  <td className="px-5 py-3 text-muted-foreground">{r.date}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1.5">
                      <FileText className="size-3.5 text-muted-foreground" /> {r.type}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-foreground/90">{r.dx}</td>
                  <td className="px-5 py-3"><StatusPill tone={r.tone}>{r.status}</StatusPill></td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-xs font-medium text-primary hover:underline">Open</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </PortalShell>
  );
}
