import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function POST(request) {
  try {
    const body = await request.json();

    const { task_id, patient_record_id, comment, visit_type_id } = body;

    if (!visit_type_id || !task_id) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const visitType = await prisma.visit_type.findUnique({
      where: { id: parseInt(visit_type_id) },
    });

    if (!visitType) {
      return NextResponse.json(
        { message: "Visit Type not found" },
        { status: 400 }
      );
    }

    const tasks = await prisma.tasks.findUnique({
      where: { id: parseInt(task_id) },
    });

    if (!tasks) {
      return NextResponse.json({ message: "Task not found" }, { status: 400 });
    }

    const visit = await prisma.visits.create({
      data: {
        patient_record_id: parseInt(patient_record_id),
        visit_type_id: parseInt(visit_type_id),
        task_id: parseInt(task_id),
        comment: comment,
      },
    });

    const result = convertBigIntToString(visit);

    return NextResponse.json(
      result,
      { message: "Visit created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
