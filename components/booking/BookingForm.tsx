"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

import ServiceSelect from "./ServiceSelect";
import TimeSelector from "./TimeSelector";
import DateSelector from "./DateSelector";
import CustomerDetails from "./CustomerDetails";

import { services } from "@/data/services";
import { timeSlots } from "@/data/timeSlots";

import {
  bookingSchema,
  BookingSchema,
} from "@/lib/validations/bookingSchema";

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: "",
      name: "",
      phone: "",
      instagram: "",
      notes: "",
    },
  });

  const onSubmit = (data: BookingSchema) => {
    console.log({
      ...data,
      date: selectedDate,
      time: selectedTime,
    });
  };

  return (
    <Container>
      <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-3">

        {/* LEFT */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-3xl bg-white p-8 shadow-lg lg:col-span-2"
        >
          <ServiceSelect
            services={services}
            value={watch("service")}
            onChange={(value) => setValue("service", value)}
          />

          <DateSelector
            value={selectedDate}
            onChange={setSelectedDate}
          />

          <TimeSelector
            slots={timeSlots}
            value={selectedTime}
            onChange={setSelectedTime}
          />

          <CustomerDetails
            register={register}
            errors={errors}
          />

          <Button
            type="submit"
            className="mt-10 w-full rounded-full"
          >
            Book Appointment
          </Button>
        </form>

        {/* RIGHT */}
        <div className="rounded-3xl bg-pink-600 p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold">
            Booking Summary
          </h3>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-sm text-pink-200">
                Service
              </p>

              <p className="font-semibold">
                {watch("service") || "Not Selected"}
              </p>
            </div>

            <div className="border-t border-pink-400 pt-5">
              <p className="text-sm text-pink-200">
                Date
              </p>

              <p className="font-semibold">
                {selectedDate
                  ? selectedDate.toLocaleDateString()
                  : "Not Selected"}
              </p>
            </div>

            <div className="border-t border-pink-400 pt-5">
              <p className="text-sm text-pink-200">
                Time
              </p>

              <p className="font-semibold">
                {selectedTime || "Not Selected"}
              </p>
            </div>

            <div className="border-t border-pink-400 pt-5">
              <p className="text-sm text-pink-200">
                Customer
              </p>

              <p className="font-semibold">
                {watch("name") || "Not Entered"}
              </p>
            </div>

            <div className="border-t border-pink-400 pt-5">
              <p className="text-sm text-pink-200">
                Phone
              </p>

              <p className="font-semibold">
                {watch("phone") || "Not Entered"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}