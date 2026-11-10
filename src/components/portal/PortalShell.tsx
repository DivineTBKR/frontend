import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/site/Logo";
import { cn } from "@/lib/utils";
import { Bell, ChevronDown, LogOut, Search, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = { label: string; to: string; icon: LucideIcon; badge?: string | number };
export type NavSection = { title?: string; items: NavItem[] };

export function PortalShell({
  role,
  user,
  sections,
  children,
  pageTitle,
  pageDescription,
  actions,
}: {
  role: "Patient" | "Doctor" | "Admin";
  user: { name: string; meta: string };
  sections: NavSection[];
  children: React.ReactNode;
  pageTitle: string;
  pageDescription?: string;
  actions?: React.ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-[260px_1fr]">
      <aside className="sticky top-0 hidden h-screen flex-col border-r border-border bg-sidebar lg:flex">
        <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-5">
          <Logo />
          <span className="rounded-md border border-sidebar-border bg-sidebar-accent px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-sidebar-accent-foreground">
            {role}
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          {sections.map((sec, i) => (
            <div key={i} className={i > 0 ? "mt-6" : ""}>
              {sec.title && (
                <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/50">
                  {sec.title}
                </p>
              )}
              <ul className="space-y-0.5">
                {sec.items.map((item) => {
                  const active = pathname === item.to;
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to as never}
                        className={cn(
                          "group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition",
                          active
                            ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground",
                        )}
                      >
                        <item.icon
                          className={cn(
                            "size-4 shrink-0",
                            active ? "text-primary" : "text-sidebar-foreground/60 group-hover:text-sidebar-foreground/80",
                          )}
                        />
                        <span className="flex-1 truncate">{item.label}</span>
                        {item.badge && (
                          <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <div className="flex items-center gap-3 rounded-lg px-2 py-2">
            <div className="grid size-9 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
              {user.name
                .split(" ")
                .map((p) => p[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-sm font-medium">{user.name}</p>
              <p className="truncate text-[11px] text-muted-foreground">{user.meta}</p>
            </div>
            <Link to="/" className="rounded-md p-1.5 text-muted-foreground hover:bg-sidebar-accent hover:text-foreground">
              <LogOut className="size-4" />
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex flex-col">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/85 px-6 backdrop-blur-xl">
          <div className="flex min-w-0 items-center gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {role} workspace
              </p>
              <h1 className="truncate text-lg font-semibold tracking-tight">{pageTitle}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm md:flex w-64">
              <Search className="size-3.5 text-muted-foreground" />
              <input
                placeholder="Search…"
                className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              <span className="rounded border border-border bg-background px-1.5 font-mono text-[10px] text-muted-foreground">
                ⌘K
              </span>
            </div>
            <button className="relative rounded-lg border border-border bg-background p-2 text-muted-foreground hover:text-foreground">
              <Bell className="size-4" />
              <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-destructive" />
            </button>
            <button className="rounded-lg border border-border bg-background p-2 text-muted-foreground hover:text-foreground">
              <Settings className="size-4" />
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-border bg-background py-1.5 pl-1.5 pr-2.5 text-sm">
              <div className="size-6 rounded-full bg-primary/15 text-[10px] font-semibold text-primary grid place-items-center">
                {user.name[0]}
              </div>
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-6 py-8">
          <div className="mx-auto max-w-7xl">
            {(pageDescription || actions) && (
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                {pageDescription && (
                  <p className="max-w-2xl text-sm text-muted-foreground">{pageDescription}</p>
                )}
                {actions && <div className="flex items-center gap-2">{actions}</div>}
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
