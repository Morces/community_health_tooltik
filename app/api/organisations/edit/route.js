import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id, name, description, phone, email } = body;

    const organisation = await prisma.organisations.findUnique({
      where: { id: parseInt(id) },
    });

    if (!organisation) {
      return NextResponse.json(
        { error: "Organisation not found" },
        { status: 400 }
      );
    }

    const data = {};

    if (name) {
      data.name = name;
    }

    if (description) {
      data.description = description;
    }

    if (phone) {
      data.phone = phone;
    }

    if (email) {
      data.email = email;
    }

    let d = new Date();

    data.updated_at = d.toISOString();

    const org = await prisma.organisations.update({
      where: { id: parseInt(id) },
      data: data,
    });

    return NextResponse.json(
      { message: "Organisation updated Successfully" },
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
