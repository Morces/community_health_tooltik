import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const visits = await prisma.visits.findUnique({
      where: { id: parseInt(id) },
    });

    if (!visits) {
      return NextResponse.json({ message: "Visit not found" }, { status: 400 });
    }

    await prisma.visits.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Visit deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
