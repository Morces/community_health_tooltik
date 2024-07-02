import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const user = await prisma.members.findUnique({
      where: { id: parseInt(id) },
      include: {
        roles: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 400 }
    );
  }
}
