import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function POST(req) {
  try {
    const body = await req.json();

    const { househole_member_id, vitals, allergies, diagnosis } = body;

    if (!househole_member_id || !vitals) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const householdMember = await prisma.househole_members.findUnique({
      where: { id: parseInt(househole_member_id) },
    });

    if (!householdMember) {
      return NextResponse.json({ message: "Household member not found" });
    }

    const patientRecords = await prisma.patient_records.create({
      data: {
        househole_member_id: parseInt(househole_member_id),
        vitals: vitals,
        allergies: allergies,
        diagnosis: diagnosis,
      },
    });

    const result = convertBigIntToString(patientRecords);

    return NextResponse.json(
      result,
      { status: 201 },
      { message: "Patient Record added" }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
