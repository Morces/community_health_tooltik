import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const body = req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const user = await prisma.members.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ message: "User with this email not found" });
    }

    const hassPass = "";
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong! Try again!" });
  }
}
