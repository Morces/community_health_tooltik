import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function PUT(request) {
  try {
    const body = request.json();

    const { id, name, email, bio, specialization, role_id } = body;

    const user = await prisma.members.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const role = await prisma.roles.findUnique({
      where: { id: parseInt(role_id) },
    });

    if (!role) {
      return NextResponse.json({ message: "Role not found" }, { status: 400 });
    }

    const updatedRole = await prisma.members.update({
      where: { id: parseInt(id) },
      data: { name, email, bio, specialization, role_id: parseInt(role_id) },
    });

    return NextResponse.json(updatedRole);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong!" });
  }
}
