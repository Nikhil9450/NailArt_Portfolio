import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PATCH(
  request: Request,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const body = await request.json();

    const booking = await Booking.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    return NextResponse.json(booking);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update booking" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    await Booking.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}