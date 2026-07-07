import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Theme from "@/models/Theme";

export async function GET() {
  await connectDB();

  const theme = await Theme.findOne();

  return NextResponse.json(theme);
}

export async function PUT(req: Request) {
  await connectDB();

  const body = await req.json();

  const updated = await Theme.findOneAndUpdate(
    {},
    body,
    {
      upsert: true,
      new: true,
    }
  );

  return NextResponse.json(updated);
}