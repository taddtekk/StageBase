# Statusmodell

## Resource-Typen

- `EMPLOYEE`
- `ASSET`
- `VEHICLE`
- `CASE`
- `CONSUMABLE`
- `ROOM`

Diese Typen bilden Personal, Material, Fahrzeuge, Cases, Verbrauchsmaterial und Raeume in einem gemeinsamen Resource-Kern ab.

## Booking-Statuswerte

- `DRAFT`
- `REQUESTED`
- `RESERVED`
- `CONFIRMED`
- `DECLINED`
- `CANCELLED`
- `PACKED`
- `CHECKED_OUT`
- `RETURNED`
- `DAMAGED`
- `MISSING`

Die Statuswerte decken fruehe Planung, Anfrage, Reservierung, Bestaetigung, Pack- und Ruecklaufzustaende ab.

## Spaetere Personalstatus

Spaeter koennen zusaetzliche Status fuer Verfuegbarkeit, Einladung, Rueckmeldung oder Qualifikation ergaenzt werden. Diese duerfen den gemeinsamen Resource-Kern nicht umgehen.

## Spaetere Inventarstatus

Spaeter koennen zusaetzliche Status fuer Pruefung, Wartung, Defekt, Ausgabe oder Ruecknahme ergaenzt werden. Diese sollen mit ResourceBooking und AuditLog nachvollziehbar bleiben.
