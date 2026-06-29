# 0001 Initiale Foundation

## Status

Akzeptiert

## Kontext

StageBase startet als internes Ressourcenplanungssystem fuer Veranstaltungstechnik. Die Anwendung soll deutschsprachig, mobil bedienbar und robust erweiterbar sein.

## Entscheidung

StageBase wird als pnpm Monorepo mit Next.js, React, TypeScript, Tailwind CSS, Prisma und MySQL/MariaDB aufgebaut.

## Begruendung

Next.js bietet eine stabile Grundlage fuer eine interne Web-App mit App Router, serverseitigen Optionen und produktionsfaehigem Node.js-Betrieb.

TypeScript strict reduziert Fehler in einem fachlich wachsenden System.

MySQL/MariaDB passt zum vorgesehenen Plesk-Betrieb. Es wird keine PostgreSQL-Zwischenloesung gebaut.

Prisma bietet ein gut versionierbares Schema, Migrationen und typisierte Datenbankzugriffe.

Ein modularer Monolith ist fuer den Start angemessen, weil StageBase zusammenhaengende Fachmodule hat und noch keine getrennten Services braucht.

Der gemeinsame Ressourcen-Kern verhindert eine getrennte Personal-only-Architektur. Personal, Inventar, Fahrzeuge, Cases, Verbrauchsmaterial und Raeume werden als planbare Ressourcen vorbereitet.

## Annahmen

- Die erste Organisation wird intern betrieben, trotzdem besitzen Kernmodelle eine `organizationId`.
- Login, Authentifizierung, E-Mail und Kalenderintegration werden spaeter gebaut.
- Die erste UI ist ein Platzhalter fuer Navigation und Produktidentitaet, keine fertige Featureimplementierung.
