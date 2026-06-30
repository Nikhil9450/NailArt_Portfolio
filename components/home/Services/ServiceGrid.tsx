import ServiceCard from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export default function ServiceGrid() {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}