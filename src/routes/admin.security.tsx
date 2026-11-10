import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";

export const Route = createFileRoute("/admin/security")({
  head: () => ({ meta: [{ title: "Security · Admin" }] }),
  component: () => (
    <ComingSoonPage portal="admin" title="Security" description="Audit logs, access logs, API keys, permissions, compliance reports." />
  ),
});
