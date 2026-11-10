import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoSrc from "@/assets/medi-prompt-logo.png";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative grid size-14 place-items-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 shadow-sm">
        <img
          src={logoSrc}
          alt="Medi Prompt logo"
          width={56}
          height={56}
          className="size-12 object-contain drop-shadow-sm"
        />
        <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-success ring-2 ring-background animate-pulse-dot" />
      </div>
      {!compact && (
        <span className="text-[15px] font-semibold tracking-tight">
          Medi<span className="text-primary"> Prompt</span>
        </span>
      )}
    </Link>
  );
}
