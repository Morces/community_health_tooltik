import { prisma } from "../../../_components/prisma";
import { convertBigIntToString } from "../../../_components/util/convertBigint";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { household_id, name, age, relationship } = body;

    if (!household_id || !name || !relationship) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const household = await prisma.households.findUnique({
      where: { id: parseInt(household_id) },
    });

    if (!household) {
      return NextResponse.json({ message: "Household not found" });
    }

    const member = await prisma.househole_members.create({
      data: {
        household_id: parseInt(household_id),
        name: name,
        age: parseInt(age),
        relationship: relationship,
      },
    });

    const result = convertBigIntToString(member);

    return NextResponse.json(
      { members: result },
      { status: 201 },
      { message: "Household member added" }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
