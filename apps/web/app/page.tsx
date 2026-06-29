import { ArrowRight, CalendarDays, ClipboardList, PackageCheck } from "lucide-react";

const focusItems = [
  {
    title: "Jobs",
    text: "Termine, Anforderungen und Einsatzstatus an einem Ort.",
    icon: ClipboardList
  },
  {
    title: "Crew",
    text: "Schichten und Anfragen mobil vorbereitet.",
    icon: CalendarDays
  },
  {
    title: "Material",
    text: "Ressourcen, Packlisten und Buchungen gemeinsam gedacht.",
    icon: PackageCheck
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <section className="grid gap-5 rounded-lg bg-base-black p-5 text-white shadow-panel sm:p-7 lg:grid-cols-[1.5fr_1fr] lg:p-8">
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-signal-amber">
              Interne Ressourcenplanung
            </p>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold sm:text-4xl">StageBase</h1>
              <p className="max-w-2xl text-lg text-slate-200">
                Crew. Jobs. Material. Alles an einem Ort.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200">
              Kein öffentlicher Zugang
            </span>
            <span className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200">
              MySQL/MariaDB vorbereitet
            </span>
            <span className="rounded-md border border-white/15 px-3 py-2 text-sm text-slate-200">
              Plesk-kompatibel
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">Zugang</p>
              <h2 className="text-xl font-semibold">Anmeldung folgt</h2>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-signal-amber text-base-black">
              <ArrowRight aria-hidden="true" size={20} />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-slate-200" htmlFor="email">
              Organisationskonto
            </label>
            <input
              className="w-full rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400"
              disabled
              id="email"
              placeholder="name@firma.de"
              type="email"
            />
            <button
              className="w-full rounded-md bg-signal-amber px-4 py-2 text-sm font-semibold text-base-black opacity-70"
              disabled
              type="button"
            >
              Bald verfügbar
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {focusItems.map((item) => {
          const Icon = item.icon;

          return (
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-panel" key={item.title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-work-surface text-stage-graphite">
                <Icon aria-hidden="true" size={20} />
              </div>
              <h2 className="text-base font-semibold text-base-black">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-concrete-grey">{item.text}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}
