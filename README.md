# StageBase

StageBase ist ein internes Ressourcenplanungssystem fuer Veranstaltungstechnik.

**Claim:** Crew. Jobs. Material. Alles an einem Ort.

StageBase ist kein oeffentliches SaaS-Produkt. Es gibt keine oeffentliche Registrierung. Alle Nutzer gehoeren zur eigenen Organisation.

## Tech-Stack

- Next.js mit App Router
- React
- TypeScript strict
- Tailwind CSS
- Prisma ORM
- MySQL/MariaDB
- pnpm Workspaces
- PWA vorbereitet

## Projektstruktur

```text
apps/web              Next.js Web-App
packages/database     Prisma Schema, Migrationen und Datenbank-Scripts
packages/auth         Auth-Package-Platzhalter
packages/permissions  Berechtigungs-Package-Platzhalter
packages/ui           UI-Package-Platzhalter
packages/core         Core-Package-Platzhalter
packages/email        E-Mail-Package-Platzhalter
packages/calendar     Kalender-Package-Platzhalter
packages/validators   Zod-Validierung
docs                  Produkt-, Architektur- und Deployment-Dokumentation
tests                 Platzhaltertests und spaetere E2E-Fixtures
```

## Lokales Setup

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm dev
```

Die lokale `.env` darf nicht committed werden. `.env.example` enthaelt nur Platzhalter und keine echten Zugangsdaten.

## Entwicklungsbefehle

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
pnpm test
```

`pnpm start` startet nach `pnpm build` die Plesk-kompatible Startdatei `App.js`.

## Prisma-Befehle

```bash
pnpm db:generate
pnpm db:migrate
pnpm db:deploy
pnpm db:studio
```

Prisma nutzt ausschliesslich den Provider `mysql`.

Beispiel fuer lokale oder Plesk-Umgebungsvariablen:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/STAGEBASE"
```

Keine echten Zugangsdaten in Git speichern.

## Datenbank

StageBase verwendet MySQL/MariaDB. Es wird keine PostgreSQL-Datenbank verwendet und keine spaetere Migration von PostgreSQL zu MySQL eingeplant.

Die produktive Datenbank wird ueber Plesk MySQL/MariaDB bereitgestellt. Prisma verbindet sich direkt ueber `DATABASE_URL` mit dieser Datenbank.

## GitHub + Plesk Deployment

Das Repository ist fuer ein privates GitHub Repository und Plesk Git Deployment vorbereitet.

Empfohlene Plesk-Einstellungen fuer `stagebase.taddtekk.de`:

```text
Node.js Version: 20.20.2
Application Mode: production
Application Root: /stagebase.taddtekk.de
Document Root: /stagebase.taddtekk.de/apps/web/public
Application Startup File: App.js
```

Von den genannten Node.js-Versionen ist `20.20.2` fuer StageBase die passendere Wahl. `21.7.3` ist keine LTS-Linie und wird fuer den produktiven Betrieb nicht empfohlen.

Vorgesehener Ablauf:

1. Plesk mit dem privaten GitHub Repository verbinden.
2. Git Pull Deployment in Plesk nutzen.
3. Plesk Node.js Extension aktivieren.
4. Umgebungsvariablen in Plesk setzen.
5. `pnpm install` ausfuehren.
6. `pnpm db:generate` ausfuehren.
7. `pnpm build` ausfuehren.
8. Produktive Migrationen mit `pnpm db:deploy` ausfuehren.
9. App ueber Plesk neu starten.

Details stehen in `docs/deployment/plesk.md`.

## Wichtige Hinweise

- Keine Vercel-only Architektur.
- Kein Docker-Produktionsdeployment.
- Docker ist hoechstens fuer lokale MySQL/MariaDB-Entwicklung vorgesehen.
- Keine echten Secrets committen.
- Keine echten Serverdaten committen.
