import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";
import { hash } from "bcrypt";

export async function PUT(request) {
  try {
    const body = await request.json();

    const { id, name, email, bio, specialization, phone, password } = body;

    const user = await prisma.members.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    let hashPass = await hash(password, 10);

    const updatedRole = await prisma.members.update({
      where: { id: parseInt(id) },
      data: {
        name,
        email,
        bio,
        specialization,
        phone,
        password: password && hashPass,
      },
    });

    const result = convertBigIntToString(updatedRole);

    return NextResponse.json(
      { updatedRole: { ...result, password: "" } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
