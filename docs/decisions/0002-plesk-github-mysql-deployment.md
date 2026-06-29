# 0002 Plesk, GitHub und MySQL/MariaDB Deployment

## Status

Akzeptiert

## Kontext

StageBase soll von Anfang an fuer Betrieb ueber GitHub und Plesk vorbereitet sein. Das Hosting-Ziel ist keine Vercel-only Umgebung.

## Entscheidung

StageBase wird ueber ein privates GitHub Repository versioniert. Plesk Git Deployment wird als Deployment-Weg vorbereitet. Die Plesk Node.js Extension wird als Laufzeitumgebung angenommen.

Die produktive Datenbank laeuft ueber Plesk MySQL/MariaDB. Prisma nutzt `provider = "mysql"` und verbindet sich direkt ueber `DATABASE_URL`.

Docker wird nicht fuer Produktion genutzt. Eine lokale Docker-Konfiguration waere nur fuer MySQL/MariaDB-Entwicklung zulaessig.

## Begruendung

Plesk Git Deployment passt zum vorgesehenen Betrieb mit manueller Kontrolle. Die Node.js Extension kann den Next.js Standalone Server starten.

MySQL/MariaDB ist die Datenbank, die im Zielbetrieb ueber Plesk bereitgestellt wird. Eine PostgreSQL-Zwischenloesung wuerde unnoetige Migrationsrisiken erzeugen.

## Konsequenzen

- Keine Vercel-spezifischen APIs oder Hosting-Annahmen.
- Keine PostgreSQL-Konfiguration.
- Produktive Migrationen laufen mit `pnpm db:deploy`.
- Secrets und echte Serverdaten werden ausschliesslich in Plesk oder lokalen Umgebungen hinterlegt.
