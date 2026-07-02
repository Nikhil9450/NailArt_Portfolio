"use client";

import { useEffect, useState } from "react";

import Container from "@/components/layout/Container";
import DashboardHeader from "./DashboardHeader";
import StatsCards from "./StatsCard";
import RecentBookings from "./RecentBookings";
import RevenueChart from "./charts/RevenueChart";

import { Booking } from "@/types/booking";
import { getBookings } from "@/lib/api/booking";

export default function Dashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    getBookings().then(setBookings);
  }, []);

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

        <RecentBookings bookings={bookings} />

        <RevenueChart data={revenueData} />
      </Container>
    </main>
  );
}