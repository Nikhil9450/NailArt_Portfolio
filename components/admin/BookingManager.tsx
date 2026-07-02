"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import BookingTable from "./BookingTable";
import EditBookingDialog from "./EditBookingDialog";

import { Booking } from "@/types/booking";
import { getBookings } from "@/lib/api/booking";

export default function BookingsManager() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedBooking, setSelectedBooking] =
    useState<Booking | null>(null);

  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    const data = await getBookings();
    setBookings(data);
  };

  const filteredBookings = bookings.filter((booking) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      booking.name.toLowerCase().includes(searchText) ||
      booking.phone.includes(searchText) ||
      booking.service.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleEdit = (booking: Booking) => {
    setSelectedBooking(booking);
    setEditOpen(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <Container>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Booking Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage customer appointments.
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <StatusFilter
            value={statusFilter}
            onChange={setStatusFilter}
          />
        </div>

        <BookingTable
          bookings={filteredBookings}
          onEdit={handleEdit}
        />

        <EditBookingDialog
          open={editOpen}
          onOpenChange={setEditOpen}
          booking={selectedBooking}
        />
      </Container>
    </main>
  );
}