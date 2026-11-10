import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel, StatusPill } from "@/components/portal/primitives";

export const Route = createFileRoute("/doctor/analyses")({
  head: () => ({ meta: [{ title: "AI Analyses · Medi Prompt" }] }),
  component: () => {
    const rows = [
      ["#CN-44012", "Sarah Chen", "Tension headache", 86, "Routine"],
      ["#CN-44011", "Marcus Webb", "Possible angina", 94, "Critical"],
      ["#CN-44009", "Lina Ortega", "Pyelonephritis", 78, "Soon"],
      ["#CN-43998", "Aisha Patel", "Allergic rhinitis", 89, "Routine"],
      ["#CN-43991", "Henri Dubois", "T2DM follow-up", 81, "Routine"],
    ];
    return (
      <ComingSoonPage
        portal="doctor"
        title="AI Analyses"
        description="Every AI-generated clinical analysis with traceability."
        sample={
          <Panel className="p-0">
            <div className="-m-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/60 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                    <th className="px-5 py-2.5 font-medium">Ref</th>
                    <th className="px-5 py-2.5 font-medium">Patient</th>
                    <th className="px-5 py-2.5 font-medium">AI working dx</th>
                    <th className="px-5 py-2.5 font-medium">Confidence</th>
                    <th className="px-5 py-2.5 font-medium">Urgency</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r[0] as string} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 font-mono text-xs text-muted-foreground">{r[0]}</td>
                      <td className="px-5 py-3 font-medium">{r[1]}</td>
                      <td className="px-5 py-3 text-foreground/90">{r[2]}</td>
                      <td className="px-5 py-3 font-mono tabular-nums">{r[3]}%</td>
                      <td className="px-5 py-3">
                        <StatusPill tone={r[4] === "Critical" ? "destructive" : r[4] === "Soon" ? "warning" : "muted"}>
                          {r[4] as string}
                        </StatusPill>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        }
      />
    );
  },
});
