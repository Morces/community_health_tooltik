import { NextResponse } from "next/server";
import { formatOrder, inFilter } from "../_components/util/list";
import { prisma } from "../_components/prisma";
import { convertBigIntToString } from "../_components/util/convertBigint";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;
    const order = searchParams.get("order") || "desc";
    const patient = searchParams.get("patient");
    const task = searchParams.get("task") || "";

    const whereDoc = {};
    const orderBy = formatOrder(order);

    inFilter({
      filter: patient,
      whereDoc,
      field: "patient_record_id",
    });

    inFilter({
      filter: task,
      whereDoc,
      field: "task_id",
    });

    const total = await prisma.visits.count({ where: whereDoc });
    const pageNumber = parseInt(page);
    const pageLimit = parseInt(limit);
    const pageCount = Math.ceil(total / pageLimit);

    const offset = pageNumber > 1 ? pageNumber * pageLimit - pageLimit : 0;

    const items = await prisma.visits.findMany({
      where: whereDoc,
      orderBy: orderBy,
      skip: offset,
      take: pageLimit,
      include: {
        patient_records: {
          include: {
            househole_members: true,
          },
        },
        tasks: {
          include: {
            members_tasks_allocated_byTomembers: true,
            members_tasks_allocated_toTomembers: true,
          },
        },
        visit_type: true,
      },
    });

    const pagination = {
      pagination: {
        total,
        total_docs: items.length,
        pages: pageCount,
        hasNextPage: pageCount > pageNumber,
        hasPrevPage: pageCount >= pageNumber && pageNumber > 1,
      },
      docs: items,
      query: {
        where: whereDoc,
        orderBy: orderBy,
        skip: offset,
        take: pageLimit,
      },
    };

    const result = convertBigIntToString(pagination);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
