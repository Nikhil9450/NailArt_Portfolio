"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCard";
import BookingTable from "./BookingTable";
import SearchBar from "./SearchBar";
import { Booking } from "@/types/booking";
import { getBookings } from "@/lib/api/booking";
import StatusFilter from "./StatusFilter";
import EditBookingDialog from "./EditBookingDialog";
import RevenueChart from "./charts/RevenueChart";
export default function Dashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
    const [editOpen, setEditOpen] = useState(false);
  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

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
// const revenueData = [
//   {
//     month: "Jan",
//     revenue: 12000,
//   },
//   {
//     month: "Feb",
//     revenue: 18000,
//   },
//   {
//     month: "Mar",
//     revenue: 15000,
//   },
//   {
//     month: "Apr",
//     revenue: 25000,
//   },
//   {
//     month: "May",
//     revenue: 22000,
//   },
//   {
//     month: "Jun",
//     revenue: 30000,
//   },
// ];
const revenueData = Array.from({ length: 12 }, (_, index) => {
  const month = new Date(2026, index).toLocaleString("en-US", {
    month: "short",
  });

  const revenue = bookings
    .filter((booking) => {
      const bookingDate = new Date(booking.date);

      return (
        booking.status === "Completed" &&
        bookingDate.getMonth() === index
      );
    })
    .reduce((sum, booking) => sum + booking.price, 0);

  return {
    month,
    revenue,
  };
});
  return (
    <main className="min-h-screen bg-gray-100 py-10">
        <Container>
            <DashboardHeader />

            <StatsCards bookings={bookings} />
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
            <RevenueChart
              data={revenueData}
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