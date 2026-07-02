import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function GET() {
  try {
    await connectDB();

    const images = await Gallery.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(images);
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

    const image = await Gallery.create(body);

    return NextResponse.json(image);
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