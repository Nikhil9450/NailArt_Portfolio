import ServiceCard from "@/components/cards/ServiceCard";
import { getServicesFromDB } from "@/lib/server/services";
import { Service } from "@/types/service";

export default async function ServiceGrid() {
  const services = await getServicesFromDB();

  return (
    <>
      {/* Mobile - Horizontal Scroll */}
      <div className="mt-16 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:hidden hide-scrollbar">
        {services.map((service: Service) => (
          <div
            key={service._id}
            className="min-w-[260px] max-w-[260px] snap-center flex-shrink-0"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      {/* Tablet & Desktop */}
      <div className="mt-16 hidden gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {services.map((service: Service) => (
        <div
          key={service._id}
          className="min-w-[240px] max-w-[240px] flex-shrink-0 snap-center sm:min-w-[260px] sm:max-w-[260px]"
        >
          <ServiceCard service={service} />
        </div>
        ))}
      </div>
    </>
  );
}