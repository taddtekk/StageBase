"use client";

import clsx from "clsx";
import {
  Boxes,
  CalendarDays,
  CarFront,
  ClipboardList,
  Gauge,
  Menu,
  PackageCheck,
  Settings,
  Users,
  UserRoundCheck,
  Warehouse
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: Gauge },
  { label: "Jobs", href: "/jobs", icon: ClipboardList },
  { label: "Dienstplan", href: "/dienstplan", icon: CalendarDays },
  { label: "Anfragen", href: "/anfragen", icon: UserRoundCheck },
  { label: "Crew", href: "/crew", icon: Users },
  { label: "Inventar", href: "/inventar", icon: Warehouse },
  { label: "Packlisten", href: "/packlisten", icon: PackageCheck },
  { label: "Fahrzeuge", href: "/fahrzeuge", icon: CarFront },
  { label: "Kalender", href: "/kalender", icon: Boxes },
  { label: "Einstellungen", href: "/einstellungen", icon: Settings }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-work-surface">
      <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-slate-200 bg-white px-4 lg:hidden">
        <Link className="flex items-center gap-2" href="/">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-base-black text-sm font-bold text-signal-amber">
            SB
          </span>
          <span className="font-semibold text-base-black">StageBase</span>
        </Link>
        <button
          aria-label="Navigation öffnen"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-stage-graphite"
          type="button"
        >
          <Menu aria-hidden="true" size={20} />
        </button>
      </header>

      <div className="lg:grid lg:min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden bg-base-black text-white lg:flex lg:flex-col">
          <Link className="flex min-h-24 flex-col justify-center gap-2 border-b border-white/10 px-6" href="/">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-signal-amber text-sm font-bold text-base-black">
                SB
              </span>
              <span className="text-xl font-semibold">StageBase</span>
            </div>
            <span className="text-sm text-slate-300">Crew. Jobs. Material.</span>
          </Link>
          <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Hauptnavigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;

              return (
                <Link
                  className={clsx(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition",
                    active
                      ? "bg-signal-amber text-base-black"
                      : "text-slate-300 hover:bg-white/10 hover:text-white"
                  )}
                  href={item.href}
                  key={item.href}
                >
                  <Icon aria-hidden="true" size={18} />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-white/10 px-6 py-4 text-xs leading-5 text-slate-400">
            Interne Plattform. Keine öffentliche Registrierung.
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
