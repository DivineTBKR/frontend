import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";
import { Panel } from "@/components/portal/primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/patient/settings")({
  head: () => ({ meta: [{ title: "Settings · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="patient"
      title="Settings"
      description="Personal info, security, notifications, and language."
      sample={
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Profile", "Name, DOB, contact, address"],
            ["Security", "Password, 2FA, sessions"],
            ["Notifications", "Email, SMS, push"],
            ["Privacy", "Consent, data export, deletion"],
            ["Insurance", "Provider, policy, attachments"],
            ["Language", "English (US)"],
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
