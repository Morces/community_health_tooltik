import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function GET(request, context) {
  try {
    const id = context.params.id;

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

    const roleResponse = {
      ...role,
      id: role.id.toString(),
    };

    return NextResponse.json({ role: roleResponse }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
