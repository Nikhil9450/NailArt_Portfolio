import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

// GET
export async function GET() {
  try {
    await connectDB();

    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}

// POST
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const testimonial =
      await Testimonial.create(body);

    return NextResponse.json(testimonial, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}