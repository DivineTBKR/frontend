import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel, StatusPill } from "@/components/portal/primitives";

export const Route = createFileRoute("/admin/clinics")({
  head: () => ({ meta: [{ title: "Clinics · Admin" }] }),
  component: () => {
    const rows = [
      ["MedClinic NYC", "Hospital", 92, "Active", "success"],
      ["São Paulo Saúde", "Clinic", 41, "Active", "success"],
      ["LondonCare", "Clinic", 28, "Trial", "warning"],
      ["Berlin Medizin", "Hospital", 64, "Active", "success"],
      ["Lagos HealthHub", "Clinic", 19, "Active", "success"],
      ["Tokyo Med", "Enterprise", 211, "Active", "success"],
      ["Clinic 8821", "Solo", 1, "Suspended", "destructive"],
    ];
    return (
      <ComingSoonPage
        portal="admin"
        title="Clinics"
        description="All registered clinics and hospital systems."
        sample={
          <Panel className="p-0">
            <div className="-m-5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/60 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                    <th className="px-5 py-2.5 font-medium">Name</th>
                    <th className="px-5 py-2.5 font-medium">Tier</th>
                    <th className="px-5 py-2.5 font-medium">Seats</th>
                    <th className="px-5 py-2.5 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r[0] as string} className="border-b border-border last:border-0 hover:bg-surface/50">
                      <td className="px-5 py-3 font-medium">{r[0]}</td>
                      <td className="px-5 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-5 py-3 font-mono tabular-nums">{r[2]}</td>
                      <td className="px-5 py-3"><StatusPill tone={r[4] as any}>{r[3] as string}</StatusPill></td>
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
