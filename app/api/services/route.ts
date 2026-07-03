import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectDB();

    const services = await Service.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(services);
  } catch {
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

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    console.log("Received Service:", body);

    const service = await Service.create(body);

    console.log("Saved Service:", service);

    return NextResponse.json(service);

  } catch (error) {
    console.error("Service Create Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed",
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}