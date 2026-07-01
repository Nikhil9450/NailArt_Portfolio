"use client";

import { Booking } from "@/types/booking";
import { updateBookingStatus } from "@/lib/api/booking";
interface BookingTableProps {
    bookings: Booking[];
}

export default function BookingTable({
    bookings,
}: BookingTableProps) {

    const handleStatusChange = async (
    id: string,
    status: string
    ) => {
    try {
        await updateBookingStatus(id, status);

        window.location.reload();
    } catch (error) {
        console.error(error);
    }
    };
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Bookings
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Service</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left"> Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-8 text-center text-gray-500"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">
                    {booking.name}
                  </td>

                  <td className="p-4">
                    {booking.service}
                  </td>

                  <td className="p-4">
                    {booking.phone}
                  </td>

                  <td className="p-4">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    {booking.time}
                  </td>

                    <td className="p-4">
                    <span
                        className={`rounded-full px-3 py-1 text-sm ${
                        booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : booking.status === "Confirmed"
                            ? "bg-blue-100 text-blue-700"
                            : booking.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                        {booking.status}
                    </span>
                    </td>
                    
                    <td className="p-4">
                    <select
                        value={booking.status}
                        onChange={(e) =>
                        handleStatusChange(booking._id, e.target.value)
                        }
                        className="rounded-lg border px-3 py-2"
                    >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                    </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}