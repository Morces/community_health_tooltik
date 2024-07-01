import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const user = await prisma.members.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    await prisma.members.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "User deleted successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" });
  }
}
