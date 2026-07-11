import ServiceCard from "@/components/cards/ServiceCard";
import { getServicesFromDB } from "@/lib/server/services";
import { Service } from "@/types/service";

export default async function ServiceGrid() {
  const services = await getServicesFromDB();

  return (
    <>
      {/* Mobile - Horizontal Scroll */}
      <div className="mt-16 w-full overflow-hidden md:hidden">
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory overscroll-x-contain hide-scrollbar">
          {services.map((service: Service) => (
            <div
              key={service._id}
              className="w-[260px] shrink-0 snap-start"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>

    {/* Tablet & Desktop */}
    <div className="mt-16 hidden gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory overscroll-x-contain hide-scrollbar md:flex">
      {services.map((service: Service) => (
        <div
          key={service._id}
          className="min-w-[240px] max-w-[300px] shrink-0 snap-center md:min-w-[260px] md:max-w-[260px]"
        >
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
    </>
  );
}