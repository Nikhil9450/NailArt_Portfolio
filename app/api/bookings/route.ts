import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    console.log("Received Body:", body);

    const booking = await Booking.create(body);

    console.log("Saved Booking:", booking);

    return NextResponse.json({
      success: true,
      booking,
    });
  } catch (error) {
    console.error("Booking Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",

        errors:
          error instanceof Error
            ? error
            : null,
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET() {
  try {
    await connectDB();

    const bookings = await Booking.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(bookings);

  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}