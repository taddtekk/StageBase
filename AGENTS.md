# StageBase Projektregeln

## Projektziel

StageBase ist ein internes Ressourcenplanungssystem fuer Veranstaltungstechnik. Die Anwendung verwaltet langfristig Jobs, Dienstplan, Crew-Anfragen, Personalplanung, Inventar, Materialplanung, Packlisten, Kalender und Fahrzeuge.

StageBase ist kein oeffentliches SaaS-Produkt. Es gibt keine oeffentliche Registrierung. Alle Nutzer gehoeren zur eigenen Organisation.

## Produkt- und UI-Regeln

- Die UI ist deutschsprachig.
- Texte sind kurz, direkt und intern verstaendlich.
- Mobile-first ist Pflicht.
- Komponenten bleiben klar, robust und arbeitsorientiert.
- Statusfarben muessen eindeutig und konsistent sein.
- Keine verspielten Komponenten fuer Kern-Workflows.

## Architekturregeln

- TypeScript strict bleibt aktiv.
- Business-Logik gehoert nicht direkt in React-Komponenten.
- Datenbankzugriff soll spaeter ueber Service- und Repository-Schichten laufen.
- Zod ist fuer Validierung vorbereitet.
- Jede relevante fachliche Aenderung soll spaeter auditierbar sein.
- StageBase wird als modularer Monolith aufgebaut.

## Ressourcenmodell

- Personal und Inventar werden ueber einen gemeinsamen Resource-Kern modelliert.
- Keine getrennte Personal-only-Architektur bauen.
- Alles, was zeitlich geplant werden kann, ist eine Resource.
- Kernmodelle: `resources`, `resource_requirements`, `resource_bookings`.
- Alle Kernmodelle besitzen `organizationId`.

## Datenbankregeln

- Prisma Provider ist `mysql`.
- Produktionsdatenbank laeuft ueber Plesk MySQL/MariaDB.
- MySQL/MariaDB-Kompatibilitaet beachten.
- Keine PostgreSQL-spezifischen Features verwenden.
- Keine PostgreSQL-Konfiguration oder PostgreSQL-Dokumentation einfuehren.

## Deploymentregeln

- GitHub ist die vorgesehene Quellcode-Quelle.
- Plesk Git Deployment und Plesk Node.js Extension muessen beruecksichtigt werden.
- Keine Vercel-only Architektur.
- Keine Vercel-spezifischen APIs oder Deployment-Annahmen.
- Docker darf hoechstens fuer lokale Entwicklung verwendet werden, nicht fuer Produktion.

## Sicherheit

- Keine Secrets committen.
- Keine echten Zugangsdaten in Beispielen.
- `.env.example` enthaelt nur Platzhalter.
- Echte Serverdaten gehoeren ausschliesslich in lokale oder Plesk-Umgebungsvariablen.
