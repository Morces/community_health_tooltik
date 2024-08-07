import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { message: "Organisation ID is required" },
        { status: 400 }
      );
    }

    const org = await prisma.organisations.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!org) {
      return NextResponse.json(
        { error: "No such organisation found" },
        { status: 404 }
      );
    }

    await prisma.organisations.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({
      message: `Organisation ${org?.name} deleted successfully`,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
