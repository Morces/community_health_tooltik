import { NextResponse } from "next/server";

import { prisma } from "../../_components/prisma";

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const task = await prisma.tasks.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 400 });
    }

    await prisma.tasks.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
