import { NextResponse } from "next/server";
import { prisma } from "../../../_components/prisma";

export async function GET(req) {
  try {
    const total = await prisma.members.count({
        where: {roles: {name: "Health Worker"}}
    });

    return NextResponse.json({ total_members: total }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
