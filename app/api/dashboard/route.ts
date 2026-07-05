import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

import Booking from "@/models/Booking";
import Gallery from "@/models/Gallery";
import Service from "@/models/Service";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();

    const [
      bookings,
      services,
      gallery,
      testimonials,
    ] = await Promise.all([
      Booking.countDocuments(),
      Service.countDocuments(),
      Gallery.countDocuments(),
      Testimonial.countDocuments(),
    ]);

    return NextResponse.json({
      bookings,
      services,
      gallery,
      testimonials,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to load dashboard",
      },
      {
        status: 500,
      }
    );
  }
}