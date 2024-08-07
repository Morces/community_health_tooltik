import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || 1;

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const role = await prisma.roles.findUnique({
      where: { id: parseInt(id) },
      include: {
        members: true,
      },
    });

    if (!role) {
      return NextResponse.json({ message: "Role not found" }, { status: 400 });
    }

    const roleResponse = convertBigIntToString(role);

    return NextResponse.json({ role: roleResponse }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
