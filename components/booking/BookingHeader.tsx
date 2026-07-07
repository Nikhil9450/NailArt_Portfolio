import Container from "@/components/layout/Container";

export default function BookingHeader() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-medium uppercase tracking-[0.3em] text-pink-500">
          Book Appointment
        </p>

        <h1 className="mt-4 font-serif text-5xl font-bold">
          Let's Create Your Dream Nails
        </h1>

        <p className="mt-6 text-lg text-[var(--theme-muted)]">
          Choose your service, preferred date, and time. We'll confirm your appointment shortly.
        </p>
      </div>
    </Container>
  );
}