import { prisma } from "@/app/api/_components/prisma";
import { convertBigIntToString } from "@/app/api/_components/util/convertBigint";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id, household_id, name, age, relationship } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const householdMember = await prisma.househole_members.findUnique({
      where: { id: parseInt(id) },
    });

    if (!householdMember) {
      return NextResponse.json(
        { error: "Household member not found" },
        { status: 400 }
      );
    }

    const data = {};

    if (household_id) {
      data.household_id = parseInt(household_id);
    }
    if (name) {
      data.name = name;
    }

    if (age) {
      data.age = parseInt(age);
    }

    if (relationship) {
      data.relationship = relationship;
    }

    const member = await prisma.househole_members.update({
      where: { id: parseInt(id) },
      data: data,
    });

    const result = convertBigIntToString(member);

    return NextResponse.json(
      result,
      { status: 200 },
      { message: "Household member updated" }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
