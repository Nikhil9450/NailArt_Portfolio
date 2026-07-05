import ServiceCard from "@/components/cards/ServiceCard";
import { getServicesFromDB } from "@/lib/server/services";
import { Service } from "@/types/service";

export default async function ServiceGrid() {
  const services = await getServicesFromDB();

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-1
sm:grid-cols-2
lg:grid-cols-3">
      {services.map((service: Service) => (
        <ServiceCard
          key={service._id}
          service={service}
        />
      ))}
    </div>
  );
}