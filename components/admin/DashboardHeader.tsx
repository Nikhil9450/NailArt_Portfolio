import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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

      <div className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3 shadow-sm">
        <CalendarDays size={18} />
        <span>{today}</span>
      </div>
    </div>
  );
}