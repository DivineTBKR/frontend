import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { User } from "lucide-react";
import { AuthShell } from "./login.doctor";

export const Route = createFileRoute("/login/patient")({
  head: () => ({ meta: [{ title: "Patient Login · Medi Prompt" }] }),
  component: PatientLogin,
});

function PatientLogin() {
  const nav = useNavigate();
  return (
    <AuthShell
      role="Patient"
      icon={<User className="size-4" />}
      subtitle="Sign in to continue your care."
      onSubmit={() => nav({ to: "/patient" })}
    />
  );
}
