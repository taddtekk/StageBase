import { ClipboardList } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function JobsPage() {
  return (
    <PlaceholderPage
      description="Jobs werden später Termine, Orte, Anforderungen und Ressourcenplanung für Veranstaltungen bündeln."
      icon={ClipboardList}
      title="Jobs"
    />
  );
}
