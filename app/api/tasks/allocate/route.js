import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";
import { parse } from "date-fns";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id, allocated_to } = body;

    const data = {};

    if (allocated_to) data.allocated_to = parseInt(allocated_to);

    const updatedTask = await prisma.tasks.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        task_status_id: parseInt(2)
      },
    });

    const result = convertBigIntToString(updatedTask);

    return NextResponse.json({ updatedTask: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
