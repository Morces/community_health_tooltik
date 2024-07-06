import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";

export async function PUT(req) {
  try {
    const body = await req.json();

    const {
      id,
      name,
      description,
      allocated_to,
      allocated_by,
      allocation_period_from,
      allocation_period_to,
      allocation_area,
    } = body;

    const task = await prisma.tasks.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }

    const data = {};

    if (name) {
      data.name = name;
    }

    if (description) {
      data.description = description;
    }

    if (allocated_by) {
      data.allocated_by = parseInt(allocated_by);
    }

    if (allocated_to) {
      data.allocated_to = parseInt(allocated_to);
    }

    if (allocation_area) {
      data.allocation_area = allocation_area;
    }

    if (allocation_period_from) {
      const formattedFrom = new Date();
      data.allocation_period_from = allocation_period_from;
    }
  } catch (error) {
    return NextResponse.json();
  }
}
