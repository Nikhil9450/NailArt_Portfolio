import BookingHeader from "@/components/booking/BookingHeader";
import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F5] py-10 lg:py-24">
      <BookingHeader />
      <BookingForm />
    </main>
  );
}