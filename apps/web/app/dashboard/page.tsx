import { Gauge } from "lucide-react";
import { PlaceholderPage } from "@/components/placeholder-page";

export default function DashboardPage() {
  return (
    <PlaceholderPage
      description="Das Dashboard wird später Einsätze, offene Anfragen, Buchungen und wichtige Statusmeldungen zusammenfassen."
      icon={Gauge}
      title="Dashboard"
    />
  );
}
