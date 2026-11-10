import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonPage } from "@/components/portal/shared";

export const Route = createFileRoute("/doctor/appointments")({
  head: () => ({ meta: [{ title: "Appointments · Medi Prompt" }] }),
  component: () => (
    <ComingSoonPage
      portal="doctor"
      title="Appointments"
      description="Schedule view, telemedicine room launch, video room status."
    />
  ),
});
