import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Id is required" }, { status: 400 });
    }

    const roles = await prisma.roles.findUnique({
      where: { id: parseInt(id) },
    });

    if (!roles) {
      return NextResponse.json({ message: "Role not found" }, { status: 400 });
    }

    await prisma.roles.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json({ message: "Role deleted successfully" });
  } catch (error) {
    return NextResponse.json();
  }
}
