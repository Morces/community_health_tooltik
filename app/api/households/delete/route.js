import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 400 });
    }

    const household = await prisma.households.findUnique({
      where: { id: parseInt(id) },
    });

    if (!household) {
      return NextResponse.json(
        { message: "Household not found" },
        { status: 400 }
      );
    }

    await prisma.households.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Household deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
