# Plesk Deployment

Diese Anleitung beschreibt das vorbereitete Ziel-Deployment fuer StageBase ueber GitHub, Plesk Git Integration, Plesk Node.js Extension und Plesk MySQL/MariaDB.

## Voraussetzungen

- Privates GitHub Repository fuer StageBase.
- Plesk Hosting mit aktivierter Git Integration.
- Plesk Node.js Extension.
- Plesk MySQL/MariaDB Datenbank.
- Shell-Zugriff oder Plesk-Moeglichkeit fuer Install- und Build-Befehle.

## GitHub Repository verbinden

1. In Plesk die Git-Funktion oeffnen.
2. Das private GitHub Repository verbinden.
3. Deployment-Modus als Pull Deployment konfigurieren.
4. Deployment manuell ausloesen oder bewusst kontrolliert ausfuehren.

Es soll kein automatisches Produktiv-Deployment ohne manuelle Kontrolle eingerichtet werden.

## Node.js in Plesk aktivieren

In der Domain oder Subdomain die Node.js Extension aktivieren.

Empfohlene Einstellungen nach dem Build:

```text
Application Root: /httpdocs
Document Root: /httpdocs/apps/web/public
Application Startup File: apps/web/.next/standalone/apps/web/server.js
```

Je nach Plesk-Pfad kann `Application Root` auf das Repository-Wurzelverzeichnis zeigen. Wichtig ist, dass die Startup File relativ zur Application Root erreichbar ist.

## Umgebungsvariablen

Die Variablen werden in Plesk hinterlegt, nicht im Git Repository.

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/STAGEBASE"
STAGEBASE_APP_URL=
STAGEBASE_EMAIL_FROM=
STAGEBASE_CALENDAR_FEED_SECRET=
NODE_ENV=production
PORT=
```

`DATABASE_URL` zeigt auf die Plesk MySQL/MariaDB Datenbank. Keine echten Zugangsdaten in `.env.example`, README oder Dokumentation speichern.

## Install- und Build-Ablauf

```bash
pnpm install
pnpm db:generate
pnpm build
```

Der Next.js Build nutzt `output: "standalone"`. Dadurch wird eine Node.js-Startdatei fuer den produktiven Betrieb erzeugt.

## Prisma Migrationen

Produktive Migrationen werden kontrolliert ausgefuehrt:

```bash
pnpm db:deploy
```

`db:deploy` nutzt `prisma migrate deploy` und ist fuer produktive Umgebungen gedacht. `db:migrate` ist fuer lokale Entwicklung vorgesehen.

## App neu starten

Nach Pull, Install, Build und Migration:

1. In Plesk die Node.js App neu starten.
2. Logs pruefen.
3. Startseite aufrufen.

## Logs

Fehler beim Start, fehlende Umgebungsvariablen oder Datenbankprobleme werden ueber die Plesk Node.js Logs und Domain-Logs geprueft.

## Produktionshinweise

- Produktiv laeuft die Datenbank ueber Plesk MySQL/MariaDB.
- Docker wird nicht fuer Produktion verwendet.
- Keine Vercel-spezifischen Deployments voraussetzen.
- Secrets gehoeren niemals ins Git Repository.
