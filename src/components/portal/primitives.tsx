import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  delta,
  hint,
  tone = "default",
}: {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  tone?: "default" | "success" | "warning" | "destructive" | "primary";
}) {
  const toneClass = {
    default: "text-foreground",
    success: "text-success",
    warning: "text-warning",
    destructive: "text-destructive",
    primary: "text-primary",
  }[tone];
  return (
    <div className="group rounded-xl border border-border bg-card p-5 transition hover:shadow-clinical">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="mt-3 flex items-baseline gap-2">
        <p className={cn("text-3xl font-semibold tracking-tight tabular-nums", toneClass)}>{value}</p>
        {delta && (
          <span className={cn("text-xs font-medium", delta.startsWith("-") ? "text-destructive" : "text-success")}>
            {delta}
          </span>
        )}
      </div>
      {hint && <p className="mt-2 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function Panel({
  title,
  description,
  children,
  actions,
  className,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-xl border border-border bg-card", className)}>
      {(title || actions) && (
        <header className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div>
            {title && <h3 className="text-sm font-semibold tracking-tight">{title}</h3>}
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
          {actions}
        </header>
      )}
      <div className="p-5">{children}</div>
    </section>
  );
}

export function StatusPill({
  tone = "default",
  children,
}: {
  tone?: "default" | "success" | "warning" | "destructive" | "primary" | "muted";
  children: React.ReactNode;
}) {
  const map = {
    default: "border-border bg-surface text-foreground",
    muted: "border-border bg-surface text-muted-foreground",
    success: "border-success/30 bg-success/10 text-success",
    warning: "border-warning/30 bg-warning/15 text-warning-foreground",
    destructive: "border-destructive/30 bg-destructive/10 text-destructive",
    primary: "border-primary/30 bg-primary/10 text-primary",
  }[tone];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium", map)}>
      {children}
    </span>
  );
}
