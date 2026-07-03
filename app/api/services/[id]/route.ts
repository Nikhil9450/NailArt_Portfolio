import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

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

    const service =
      await Service.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

    return NextResponse.json(service);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to update service",
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

    await Service.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to delete service",
      },
      {
        status: 500,
      }
    );
  }
}