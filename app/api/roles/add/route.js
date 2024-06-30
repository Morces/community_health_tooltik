const { NextResponse } = require("next/server");
const { prisma } = require("../../_components/prisma");

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, screen, features } = body;

    if (!name) {
      return NextResponse.json(
        { message: "Role name is required" },
        { status: 400 }
      );
    }

    const existingRole = await prisma.roles.findUnique({
      where: { name },
    });

    if (existingRole) {
      return NextResponse.json(
        { message: "Role with this name already exists" },
        { status: 400 }
      );
    }

    const role = await prisma.roles.create({
      data: {
        name,
        description,
        screen: screen || [],
        features: features || [],
      },
    });

    const roleResponse = {
      ...role,
      id: role.id.toString(),
    };

    return NextResponse.json(
      { role: roleResponse },
      { message: "Role created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
