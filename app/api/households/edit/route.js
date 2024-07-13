import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id, household_head_name, location, description } = body;

    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const household = await prisma.households.findUnique({
      where: { id: parseInt(id) },
    });

    if (!household) {
      return NextResponse.json(
        { message: "Household not found" },
        { status: 404 }
      );
    }

    const data = {};

    if (household_head_name) data.household_head_name = household_head_name;
    if (location) data.location = location;
    if (description) data.description = description;

    const updatedHousehold = await prisma.households.update({
      where: { id: parseInt(id) },
      data,
    });

    const result = convertBigIntToString(updatedHousehold);

    return NextResponse.json(
      { household: result },
      { status: 200 },
      { message: "Household updated successfully" }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
