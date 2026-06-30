import Container from "@/components/layout/Container";

export default function BookingForm() {
  return (
    <Container>
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-lg">
          Booking Form
        </div>

        <div className="rounded-3xl bg-pink-600 p-8 text-white shadow-lg">
          Booking Summary
        </div>
      </div>
    </Container>
  );
}