"use client";

import { useEffect, useState } from "react";
import {
  CalendarDays,
  LogOut,
  Menu,
} from "lucide-react";

import { logout } from "@/lib/api/logout";
import { useRouter } from "next/navigation";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  const [today, setToday] = useState("");

  const router = useRouter();

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

  async function handleLogout() {
    await logout();

    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-30 border-b bg-theme-surface">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">

        <div className="flex items-center gap-4">

          <button
            onClick={onMenuClick}
            className="rounded-lg border p-2 md:hidden"
          >
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              Admin Dashboard
            </h1>

            <p className="hidden text-gray-500 md:block">
              Manage appointments and customers
            </p>
          </div>

        </div>

        <div className="flex items-center gap-3">

          <div className="hidden items-center gap-2 rounded-xl border bg-theme-surface px-4 py-2 shadow-sm md:flex">
            <CalendarDays size={18} />
            <span>{today}</span>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <LogOut size={18} />

            <span className="hidden md:block">
              Logout
            </span>
          </button>

        </div>

      </div>
    </header>
  );
}