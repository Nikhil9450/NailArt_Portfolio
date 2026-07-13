import BookingHeader from "@/components/booking/BookingHeader";
import BookingForm from "@/components/booking/BookingForm";
import { getServicesFromDB } from "@/lib/server/services";

export default async function BookingPage() {
  const services = await getServicesFromDB();
  console.log("Services:", services);
  return (
    <main className="min-h-screen bg-theme-secondary py-24">
      <BookingHeader />
      <BookingForm services={services} />
    </main>
  );
}