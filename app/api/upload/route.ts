import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const result = await cloudinary.uploader.upload(base64, {
    folder: "nail-studio",
    resource_type: "image",
    });

    return NextResponse.json({
    success: true,
    url: result.secure_url,
    publicId: result.public_id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Upload failed",
      },
      {
        status: 500,
      }
    );
  }
}