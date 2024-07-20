import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const task = await prisma.tasks.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    const updateTask = await prisma.tasks.update({
      where: { id: parseInt(id) },
      data: {
        task_status_id: parseInt(3),
      },
    });

    const result = convertBigIntToString(updateTask);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
