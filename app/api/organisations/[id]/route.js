import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const org = await prisma.organisations.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        members: true,
      },
    });

    if (!org) {
      return NextResponse.json(
        { error: "No such organisation found" },
        { status: 404 }
      );
    }

    const result = convertBigIntToString(org);

    return NextResponse.json({ org: result }, { status: 200 });
  } catch (error) {
    console.error("Error fetching organisation:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    const org = await prisma.organisations.findUnique({
      where: { id: parseInt(id) },
    });

    if (!org) {
      return NextResponse.json(
        { error: "No such organisation found" },
        { status: 404 }
      );
    }

    await prisma.organisations.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(
      { org },
      { status: 200 },
      { message: "Organisation deleted successfully" }
    );
  } catch (error) {
    console.error("Error deleting organisation:", error);

    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
