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
export default function Dashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
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
            <BookingTable bookings={filteredBookings} />      
        </Container>
    </main>
  );
}