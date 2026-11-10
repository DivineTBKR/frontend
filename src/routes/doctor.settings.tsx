import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/doctor/settings")({
  head: () => ({ meta: [{ title: "Settings · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="doctor"
      title="Practice settings"
      description="Clinic branding, AI behavior, signatures, API, security."
      sample={
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Clinic branding", "Logo, colors, letterhead"],
            ["AI behavior", "Tone, language, prompt templates"],
            ["Electronic signature", "Upload signature image"],
            ["Two-factor auth", "Enabled · Authenticator"],
            ["API keys", "2 active · last used 3h"],
            ["Audit logs", "Last 12 months"],
          ].map(([t, d]) => (
            <Panel key={t} title={t} description={d}>
              <Button variant="outline" size="sm">Manage</Button>
            </Panel>
          ))}
        </div>
      }
    />
  ),
});
