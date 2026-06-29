import type { LucideIcon } from "lucide-react";

type PlaceholderPageProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  status?: "geplant" | "vorbereitet";
};

export function PlaceholderPage({
  title,
  description,
  icon: Icon,
  status = "vorbereitet"
}: PlaceholderPageProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-work-surface text-stage-graphite">
              <Icon aria-hidden="true" size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-concrete-grey">Modul {status}</p>
              <h1 className="mt-1 text-2xl font-semibold text-base-black">{title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-concrete-grey">{description}</p>
            </div>
          </div>
          <span className="inline-flex w-fit rounded-md bg-signal-amber px-3 py-1 text-xs font-semibold text-base-black">
            Platzhalter
          </span>
        </div>
      </section>
    </main>
  );
}
