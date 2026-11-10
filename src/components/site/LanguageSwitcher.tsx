import { useEffect, useState } from "react";
import { Check, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "el", label: "Greek", native: "Ελληνικά", flag: "🇬🇷" },
  { code: "ru", label: "Russian", native: "Русский", flag: "🇷🇺" },
] as const;

type LangCode = (typeof LANGUAGES)[number]["code"];

const STORAGE_KEY = "medi-prompt:lang";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<LangCode>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as LangCode | null;
      if (saved && LANGUAGES.some((l) => l.code === saved)) setLang(saved);
    } catch {}
  }, []);

  const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  const change = (code: LangCode) => {
    setLang(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
      document.documentElement.lang = code;
    } catch {}
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 rounded-full px-2.5 text-muted-foreground hover:text-foreground"
          aria-label="Select language"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden text-xs font-medium uppercase tracking-wider sm:inline">
            {active.code}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
          Language
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => change(l.code)}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="text-base leading-none">{l.flag}</span>
              <span className="flex flex-col">
                <span className="text-sm">{l.native}</span>
                <span className="text-[11px] text-muted-foreground">{l.label}</span>
              </span>
            </span>
            {lang === l.code && <Check className="h-3.5 w-3.5 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
