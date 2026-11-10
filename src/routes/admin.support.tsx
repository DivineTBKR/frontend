import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";

export const Route = createFileRoute("/admin/support")({
  head: () => ({ meta: [{ title: "Support · Admin" }] }),
  component: () => (
    <ComingSoonPage portal="admin" title="Support" description="Tickets, knowledge base, live chat, announcements." />
  ),
});
