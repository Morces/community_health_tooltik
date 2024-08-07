import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function PUT(req) {
  try {
    const body = req.json();

    const { id, name, description } = body;

    const role = await prisma.roles.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!role) {
      return NextResponse.json({ message: "Role not found" }, { status: 400 });
    }

    const data = {};

    if (name) {
      data.name = name;
    }

    if (description) {
      data.description = description;
    }

    const updatedRole = await prisma.roles.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...data,
      },
    });

    const result = convertBigIntToString(updatedRole);

    return NextResponse.json(
      result,
      { message: "Role updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
