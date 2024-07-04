import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, description, phone, email } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const org = await prisma.organisations.create({
      data: {
        name,
        description,
        phone,
        email,
      },
    });

    return NextResponse.json(
      { message: "Organisation created Successfully" },
      { organisation: org },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { error: error.message },
      { status: 500 }
    );
  }
}
