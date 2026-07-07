"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface DateSelectorProps {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export default function DateSelector({
  value,
  onChange,
}: DateSelectorProps) {
  const [open, setOpen] = useState(false);

  const formattedDate = value
    ? value.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Select Date";

  return (
    <div>
      <label className="mb-4 block text-sm font-medium text-gray-700">
        Select Date
      </label>

      {/* ---------- Mobile ---------- */}

      <div className="md:hidden">
        <Button
          type="button"
          variant="outline"
          onClick={() => setOpen(true)}
          className="h-14 w-full justify-start rounded-2xl border-gray-200 bg-white text-left"
        >
          <CalendarIcon className="mr-3 h-5 w-5 text-pink-500" />

          {formattedDate}
        </Button>

        <Dialog
          open={open}
          onOpenChange={setOpen}
        >
          <DialogContent className="max-w-sm rounded-theme">
            <DialogHeader>
              <DialogTitle>
                Choose Appointment Date
              </DialogTitle>
            </DialogHeader>

            <div className="flex justify-center">
              <DayPicker
                mode="single"
                selected={value}
                onSelect={(date) => {
                  onChange(date);

                  if (date) {
                    setOpen(false);
                  }
                }}
                disabled={{
                  before: new Date(),
                }}
                fixedWeeks
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* ---------- Desktop ---------- */}

      <div className="hidden md:block">
        <div className="overflow-hidden rounded-2xl border bg-white p-4">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={{
              before: new Date(),
            }}
            fixedWeeks
          />
        </div>
      </div>
    </div>
  );
}