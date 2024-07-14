import { NextResponse } from "next/server";

import { prisma } from ".../";
import { convertBigIntToString } from "../_components/util/convertBigint";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id") || 1;

    const task = await prisma.tas;

    const result = convertBigIntToString(pagination);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
