import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function PUT(
  request: Request,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;
    const body = await request.json();

    const image = await Gallery.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json(image);
  } catch {
    return NextResponse.json(
      {
        message: "Failed to update image",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    await Gallery.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });
  } catch {
    return NextResponse.json(
      {
        message: "Failed to delete image",
      },
      {
        status: 500,
      }
    );
  }
}