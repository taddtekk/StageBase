# Architekturueberblick

StageBase startet als modularer Monolith. Die erste Ausbaustufe legt klare Modulgrenzen an, ohne verfrueht verteilte Services einzufuehren.

## Web-App

Die Web-App liegt in `apps/web` und nutzt Next.js mit App Router, React, TypeScript und Tailwind CSS.

## Packages

Gemeinsame Logik wird in `packages/*` vorbereitet:

- `database` fuer Prisma
- `auth` fuer spaetere Authentifizierung
- `permissions` fuer spaetere Rollen und Rechte
- `ui` fuer gemeinsame UI-Bausteine
- `core` fuer fachliche Kernlogik
- `email` fuer spaetere E-Mail-Funktionen
- `calendar` fuer spaetere Kalenderfunktionen
- `validators` fuer Zod-Schemas

## Datenbank

StageBase nutzt MySQL/MariaDB ueber Plesk. Prisma ist mit `provider = "mysql"` konfiguriert.

## Ressourcen-Kern

Der gemeinsame Kern besteht aus:

- `resources`
- `resource_requirements`
- `resource_bookings`

Personal, Inventar, Fahrzeuge, Cases, Verbrauchsmaterial und Raeume laufen langfristig ueber diese gemeinsame Modellierung.

## Spaetere Module

Fachmodule sollen ihre Business-Logik nicht direkt in React-Komponenten ablegen. Datenbankzugriffe und Regeln werden spaeter ueber Service- und Repository-Schichten organisiert.
