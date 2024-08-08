import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    const body = await req.json();

    const { id, task_id, patient_record_id, comment } = body;

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
