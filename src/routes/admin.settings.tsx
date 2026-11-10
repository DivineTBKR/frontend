import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";

export const Route = createFileRoute("/admin/settings")({
  head: () => ({ meta: [{ title: "Platform settings · Admin" }] }),
  component: () => (
    <ComingSoonPage portal="admin" title="Platform settings" description="Global configuration, regions, feature flags." />
  ),
});
