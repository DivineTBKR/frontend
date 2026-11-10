import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";

export const Route = createFileRoute("/admin/doctors")({
  head: () => ({ meta: [{ title: "Doctors · Admin" }] }),
  component: () => (
    <ComingSoonPage portal="admin" title="Doctors" description="All registered practitioners, verification status, license sync." />
  ),
});
