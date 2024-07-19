import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
