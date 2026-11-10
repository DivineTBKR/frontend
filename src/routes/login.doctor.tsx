import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/login/doctor")({
  head: () => ({ meta: [{ title: "Doctor Login · Medi Prompt" }] }),
  component: DoctorLogin,
});

function DoctorLogin() {
  const nav = useNavigate();
  return (
    <AuthShell
      role="Doctor"
      icon={<Stethoscope className="size-4" />}
      subtitle="Sign in to your clinical workspace."
      onSubmit={() => nav({ to: "/doctor" })}
    />
  );
}

export function AuthShell({
  role,
  icon,
  subtitle,
  onSubmit,
}: {
  role: string;
  icon: React.ReactNode;
  subtitle: string;
  onSubmit: () => void;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-[1fr_1.1fr]">
      <div className="relative hidden flex-col justify-between overflow-hidden border-r border-border bg-surface p-10 lg:flex">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
        <Logo />
        <div className="relative max-w-md space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Clinical · v1.0</p>
          <p className="text-3xl font-semibold tracking-tight leading-snug">
            "Medi Prompt gave me back 90 minutes a day. I see my patients, not my keyboard."
          </p>
          <div className="flex items-center gap-3 pt-3">
            <div className="size-10 rounded-full bg-primary/15" />
            <div>
              <p className="text-sm font-medium">Dr. Elena Ruiz</p>
              <p className="text-xs text-muted-foreground">Internal Medicine · Madrid</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5 text-success" /> HIPAA · GDPR · SOC 2 Type II
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between px-8 py-6">
          <div className="lg:hidden">
            <Logo />
          </div>
          <Link to="/" className="ml-auto text-xs text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-8 pb-16">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] text-muted-foreground">
            {icon} {role} portal
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight">Welcome back.</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <Field label="Email">
              <input
                type="email"
                defaultValue={`${role.toLowerCase()}@medassist.ai`}
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15"
              />
            </Field>
            <Field label="Password" hint={<a href="#" className="text-primary hover:underline">Forgot?</a>}>
              <input
                type="password"
                defaultValue="demo-password"
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15"
              />
            </Field>
            <Button type="submit" className="h-10 w-full rounded-lg">
              Enter {role} workspace
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="h-px flex-1 bg-border" /> OR <span className="h-px flex-1 bg-border" />
          </div>
          <Button variant="outline" className="h-10 w-full rounded-lg">
            Continue with Google
          </Button>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            New to Medi Prompt?{" "}
            <a href="#" className="text-primary hover:underline">
              Create a {role.toLowerCase()} account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between text-xs font-medium text-foreground">
        <span>{label}</span>
        {hint && <span className="text-[11px] font-normal">{hint}</span>}
      </div>
      {children}
    </label>
  );
}
