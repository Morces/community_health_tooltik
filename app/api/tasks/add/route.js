import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { formatISO } from "date-fns";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      allocated_to,
      allocated_by,
      allocation_period_from,
      allocation_period_to,
      allocation_area,
    } = body;

    if (
      !name ||
      !allocation_area ||
      !allocation_period_from ||
      !allocation_period_to
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // const status = await prisma.task_status.findUnique({
    //   where: { id: parseInt(task_status_id) },
    // });

    // if (!status) {
    //   return NextResponse.json({ message: "Task status not found" });
    // }

    const allocationPeriodFrom = new Date(allocation_period_from).toISOString();
    const allocationPeriodTo = new Date(allocation_period_to).toISOString();

    const task = await prisma.tasks.create({
      data: {
        name,
        description,
        task_status_id: parseInt(1),
        allocated_by: allocated_by ? parseInt(allocated_by) : null,
        allocated_to: allocated_to ? parseInt(allocated_to) : null,
        allocation_period_from: allocation_period_from
          ? allocationPeriodFrom
          : null,
        allocation_period_to: allocationPeriodTo ? allocationPeriodTo : null,
        allocation_area: allocation_area,
      },
    });

    const result = convertBigIntToString(task);

    return NextResponse.json(
      { task: result },
      { status: 201 },
      { message: "Task Created successfully" }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
