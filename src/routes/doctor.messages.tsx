import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";

export const Route = createFileRoute("/doctor/messages")({
  head: () => ({ meta: [{ title: "Doctor Messages · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="doctor"
      title="Messages"
      description="Threaded patient and staff conversations with attachments."
    />
  ),
});
