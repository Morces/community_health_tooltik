import { prisma } from "@/app/api/_components/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, description } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const status = await prisma.task_status.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(
      { status },
      { status: 201 },
      { message: "Task Status Created" }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
