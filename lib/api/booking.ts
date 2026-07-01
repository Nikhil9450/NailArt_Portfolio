import { Booking } from "@/types/booking";

export async function createBooking(data: unknown) {
  const response = await fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create booking");
  }

  return response.json();
}

export async function getBookings(): Promise<Booking[]> {
  const response = await fetch("/api/bookings");

  if (!response.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return response.json();
}


export async function updateBookingStatus(
  id: string,
  status: string
) {
  const response = await fetch(
    `/api/bookings/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update");
  }

  return response.json();
}