import { prisma } from "@/app/api/_components/prisma";
import { convertBigIntToString } from "@/app/api/_components/util/convertBigint";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const member = await prisma.househole_members.findUnique({
      where: { id: parseInt(id) },
      include: {
        households: true,
        patient_records: true,
      },
    });

    if (!member) {
      return NextResponse.json({ error: "Member not found" }, { status: 400 });
    }

    const result = convertBigIntToString(member);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
