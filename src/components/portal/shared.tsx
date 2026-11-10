import { PortalShell } from "./PortalShell";
import { Panel, StatCard, StatusPill } from "./primitives";
import { patientNav, doctorNav, adminNav } from "./nav";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Sparkles, Construction } from "lucide-react";
import type { NavSection } from "./PortalShell";

export const portalConfigs = {
  patient: {
    role: "Patient" as const,
    user: { name: "Sarah Chen", meta: "Patient ID · MA-2918" },
    nav: patientNav,
  },
  doctor: {
    role: "Doctor" as const,
    user: { name: "Dr. Elena Ruiz", meta: "Internal Medicine" },
    nav: doctorNav,
  },
  admin: {
    role: "Admin" as const,
    user: { name: "Platform Admin", meta: "Super Admin · Global" },
    nav: adminNav,
  },
};

export function ComingSoonPage({
  portal,
  title,
  description,
  sample,
}: {
  portal: keyof typeof portalConfigs;
  title: string;
  description: string;
  sample?: React.ReactNode;
}) {
  const cfg = portalConfigs[portal];
  return (
    <PortalShell
      role={cfg.role}
      user={cfg.user}
      sections={cfg.nav}
      pageTitle={title}
      pageDescription={description}
    >
      {sample ?? (
        <div className="rounded-xl border border-dashed border-border bg-surface p-12 text-center">
          <div className="mx-auto grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
            <Construction className="size-5" />
          </div>
          <h2 className="mt-4 text-lg font-semibold">{title}</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
          <Button className="mt-6" size="sm">
            <Sparkles className="size-3.5" /> Notify me when ready
          </Button>
        </div>
      )}
    </PortalShell>
  );
}

export { PortalShell, Panel, StatCard, StatusPill, Button, CalendarPlus };
export type { NavSection };
