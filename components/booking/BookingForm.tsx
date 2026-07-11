"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBooking } from "@/lib/api/booking";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ServiceSelect from "./ServiceSelect";
import TimeSelector from "./TimeSelector";
import DateSelector from "./DateSelector";
import CustomerDetails from "./CustomerDetails";
import SelectedServiceCard from "./selectedServiceCard";
// import { services } from "@/data/services";
import { timeSlots } from "@/data/timeSlots";
import BookingSuccessDialog from "./BookingSuccessDialog";
import { Service } from "@/types/service";
import {
  bookingSchema,
  BookingSchema,
} from "@/lib/validations/bookingSchema";

interface BookingFormProps {
  services: Service[];
}

export default function BookingForm({
  services,
}: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const selectedServiceFromURL =
    searchParams.get("service");
  const {
  register,
  handleSubmit,
  watch,
  setValue,
  reset,
  formState: { errors },
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
//   const selectedService = services.find(
//   (service) => service.title === watch("service")
// );

  // const onSubmit = (data: BookingSchema) => {
  //   console.log({
  //     ...data,
  //     date: selectedDate,
  //     time: selectedTime,
  //   });
  //   setSuccessOpen(true);
  // };
  useEffect(() => {
    if (selectedServiceFromURL) {
      setValue("service", selectedServiceFromURL);
    }
  }, [selectedServiceFromURL, setValue]);
const selectedService = services?.find(
  (service) => service._id === watch("service")
);
const onSubmit = async (data: BookingSchema) => {
  if (!selectedService) return;

  try {
    setLoading(true);

    const booking = {
      ...data,

      serviceId: selectedService._id,
      service: selectedService.title,

      price: selectedService.price,
      duration: selectedService.duration,

      date: selectedDate,
      // time: selectedTime,
    };

    console.log("Booking:", booking);

    await createBooking(booking);

    setSuccessOpen(true);

    reset();

    setSelectedDate(undefined);
    setSelectedTime("");
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
console.log("BookingForm services:", services);
  return (
<Container>
  <div className="mx-auto mt-8 flex w-full flex-col gap-6 lg:mt-14 lg:grid lg:grid-cols-[2fr_1fr] lg:gap-10">

    {/* Summary */}
    <div className="w-full lg:order-2">
      <div className="w-full rounded-theme p-5 bg-theme text-white shadow-xl lg:sticky lg:top-28 lg:p-8"
      >
        <h3 className="mb-5 text-xl font-bold lg:text-2xl">
          Booking Summary
        </h3>

        <SelectedServiceCard
          service={selectedService}
        />

        <div className="mt-6 space-y-5">

          <div className="border-t border-pink-400 pt-4">
            <p className="text-xs uppercase tracking-wide text-pink-200">
              Date
            </p>

            <p className="mt-1 font-semibold">
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "Not Selected"}
            </p>
          </div>

          {/* <div className="border-t border-pink-400 pt-4">
            <p className="text-xs uppercase tracking-wide text-pink-200">
              Time
            </p>

            <p className="mt-1 font-semibold">
              {selectedTime || "Not Selected"}
            </p>
          </div> */}

          <div className="border-t border-pink-400 pt-4">
            <p className="text-xs uppercase tracking-wide text-pink-200">
              Customer
            </p>

            <p className="mt-1 font-semibold">
              {watch("name") || "Not Entered"}
            </p>
          </div>

          <div className="border-t border-pink-400 pt-4">
            <p className="text-xs uppercase tracking-wide text-pink-200">
              Phone
            </p>

            <p className="mt-1 font-semibold">
              {watch("phone") || "Not Entered"}
            </p>
          </div>

        </div>
      </div>
    </div>

    {/* Form */}
    <div className="w-full lg:order-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-theme bg-theme-surface p-5 shadow-xl sm:p-6 lg:p-8"
      >
        <div className="rounded-2xl border border-gray-100 p-5">
        <ServiceSelect
          services={services}
          value={watch("service")}
          onChange={(value) =>
            setValue("service", value)
          }
        />
        </div>

      <div className="mt-6 rounded-2xl border border-gray-100 p-5">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Calendar */}
          <div>
            <DateSelector
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </div>

          {/* Customer Details */}
          <div className="flex flex-col justify-center">
            <CustomerDetails
              register={register}
              errors={errors}
            />
          </div>

        </div>
      </div>

        {/* <div className="mt-6 rounded-2xl border border-gray-100 p-5">
          <TimeSelector
            slots={timeSlots}
            value={selectedTime}
            onChange={setSelectedTime}
          />
        </div> */}

        {/* <div className="mt-6 rounded-2xl border border-gray-100 p-5">
          <CustomerDetails
            register={register}
            errors={errors}
          />
        </div> */}

        <Button
          type="submit"
          disabled={loading}
          className="
            mt-8
            h-14
            w-full
            rounded-full
            text-base
            font-semibold
            shadow-lg
            transition-all
            hover:-translate-y-1
            hover:bg-pink-700
            hover:shadow-xl
            active:scale-95
            bg-theme
          "
        >
          {loading ? "Booking..." : "Book Appointment"}
        </Button>
      </form>
    </div>

  </div>

  <BookingSuccessDialog
    open={successOpen}
    onOpenChange={setSuccessOpen}
  />
</Container>
  );
}