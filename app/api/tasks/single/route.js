import { NextResponse } from "next/server";

import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const task = await prisma.tasks.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 400 });
    }

    const result = convertBigIntToString(task);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
