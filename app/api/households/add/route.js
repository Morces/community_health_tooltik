import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function POST(req) {
  try {
    const body = await req.json();

    const { household_head_name, description, location } = body;

    if (!household_head_name || !location) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const record = await prisma.households.create({
      data: {
        household_head_name,
        description,
        location,
      },
    });

    const result = convertBigIntToString(record);

    return NextResponse.json(
      { record: result, message: `Household ${household_head_name} created` },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
