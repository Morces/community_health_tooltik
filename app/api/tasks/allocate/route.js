import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";
import { formatISO, parse } from "date-fns";
import sendMail from "../../_components/util/sendEmail";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id, allocated_to } = body;

    const data = {};

    if (allocated_to) data.allocated_to = parseInt(allocated_to);

    const updatedAt = formatISO(new Date().now());

    const updatedTask = await prisma.tasks.update({
      where: { id: parseInt(id) },
      data: {
        ...data,
        task_status_id: parseInt(2),
        updated_at: updatedAt,
      },
      include: {
        members_tasks_allocated_toTomembers: true,
      },
    });

    let mailOptions = {
      from: "itsmunyasia@gmail.com",
      to: `${updatedTask?.members_tasks_allocated_toTomembers?.email}`,
      subject: "Task Allocation",
      html: `
        <p>Dear ${updatedTask?.members_tasks_allocated_toTomembers?.name}</p>,
        <p>Task ${updatedTask?.name} has been allocated to you.</p>
        <p>Log in and check it out</p>
      `,
    };

    sendMail(mailOptions);

    const result = convertBigIntToString(updatedTask);

    return NextResponse.json({ updatedTask: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
