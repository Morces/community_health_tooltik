import { NextResponse } from "next/server";
import { formatOrder, inFilter } from "../_components/util/list";
import { prisma } from "../_components/prisma";
import { convertBigIntToString } from "../_components/util/convertBigint";
import sendMail from "../_components/util/sendEmail";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 10;
    const order = searchParams.get("order") || "desc";
    const status = searchParams.get("status") || "";
    const member = searchParams.get("member");

    const whereDoc = {};
    const orderBy = formatOrder(order);

    inFilter({
      filter: status,
      whereDoc,
      field: "task_status_id",
    });

    inFilter({
      filter: member,
      whereDoc,
      field: "allocated_to",
    });

    const total = await prisma.tasks.count({ where: whereDoc });
    const pageNumber = parseInt(page);
    const pageLimit = parseInt(limit);
    const pageCount = Math.ceil(total / pageLimit);

    const offset = pageNumber > 1 ? pageNumber * pageLimit - pageLimit : 0;

    const items = await prisma.tasks.findMany({
      where: whereDoc,
      orderBy: orderBy,
      skip: offset,
      take: pageLimit,
      include: {
        members_tasks_allocated_byTomembers: true,
        members_tasks_allocated_toTomembers: true,
        task_status: true,
        visits: true,
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

    let mailOptions = {
      from: "karanim594@gmail.com",
      to: "mwkazungu@gmail.com",
      subject: "Test Email from Nodemailer and Gmail",
      text: "Hello from Nodemailer using Gmail!",
      html: `
        
        `,
    };

    sendMail(mailOptions);

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
