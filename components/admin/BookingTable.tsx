"use client";

import { Booking } from "@/types/booking";
import { Pencil, Trash2 } from "lucide-react";
import {
  updateBookingStatus,
  deleteBooking,
} from "@/lib/api/booking";

interface BookingTableProps {
  bookings: Booking[];
  onEdit: (booking: Booking) => void;
}

export default function BookingTable({
  bookings,
  onEdit,
}: BookingTableProps) {

      const handleDelete = async (id: string) => {
      const confirmed = window.confirm(
        "Delete this booking?"
      );

      if (!confirmed) return;

      try {
        await deleteBooking(id);

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

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
        All Bookings
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
                  colSpan={7}
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
                      <div className="flex items-center gap-3">
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

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onEdit(booking)}
                            className="rounded-lg p-2 text-blue-600 hover:bg-blue-100"
                          >
                            <Pencil size={18} />
                          </button>

                          <button
                            onClick={() => handleDelete(booking._id)}
                            className="rounded-lg p-2 text-red-600 hover:bg-red-100"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
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