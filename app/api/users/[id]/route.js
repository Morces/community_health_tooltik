import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function GET(request) {
  try {
    const { pathname } = new URL(request.url);
    const id = pathname.split("/").pop();

    const user = await prisma.members.findUnique({
      where: { id: parseInt(id) },
      include: {
        roles: true,
        tasks_tasks_allocated_byTomembers: true,
        tasks_tasks_allocated_toTomembers: true,
        organisations: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const result = convertBigIntToString(user);

    return NextResponse.json({ user: result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
