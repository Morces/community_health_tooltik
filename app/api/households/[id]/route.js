import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const household = await prisma.households.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        househole_members: true,
      },
    });

    if (!household) {
      return NextResponse.json(
        { error: "Household not found" },
        { status: 404 }
      );
    }

    const result = convertBigIntToString(household);

    return NextResponse.json({ household: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const household = await prisma.households.findUnique({
      where: { id: parseInt(id, 10) },
      include: {
        househole_members: true,
      },
    });

    if (!household) {
      return NextResponse.json(
        { error: "Household not found" },
        { status: 404 }
      );
    }

    await prisma.households.delete({
      where: { id: parseInt(id, 10) },
    });

    const result = convertBigIntToString(household);

    return NextResponse.json(
      { household: result },
      { status: 200 },
      { message: `Household ${household.name} deleted successfully` }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
