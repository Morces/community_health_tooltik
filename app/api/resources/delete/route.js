import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const resource = await prisma.resources.findUnique({
      where: { id: parseInt(id) },
    });

    if (!resource) {
      return NextResponse.json(
        { message: "Resource not found" },
        { status: 400 }
      );
    }

    await prisma.resources.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Resource deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
