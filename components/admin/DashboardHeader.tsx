"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/api/logout";
import { useRouter } from "next/navigation";
export default function DashboardHeader() {
  const [today, setToday] = useState("");
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };
  useEffect(() => {
    setToday(
      new Intl.DateTimeFormat("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date())
    );
  }, []);

  return (
    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
      <div>
        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Manage appointments and customers
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3 shadow-sm">
          <CalendarDays size={18} />
          <span>{today}</span>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-5 py-3 text-white transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}