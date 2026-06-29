import { Warehouse } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function InventarPage() {
  return (
    <PlaceholderPage
      description="Inventar wird später über denselben Ressourcen-Kern wie Personal, Fahrzeuge und Cases geplant."
      icon={Warehouse}
      title="Inventar"
    />
  );
}
