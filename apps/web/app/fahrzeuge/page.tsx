import { CarFront } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function FahrzeugePage() {
  return (
    <PlaceholderPage
      description="Fahrzeuge sind als eigener Resource-Typ vorbereitet und werden später in Planung und Buchung integriert."
      icon={CarFront}
      title="Fahrzeuge"
    />
  );
}
