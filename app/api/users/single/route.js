import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "Email query parameter is required" },
        { status: 400 }
      );
    }

    const user = await prisma.members.findUnique({
      where: { email: email },
      include: {
        roles: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const result = convertBigIntToString(user);

    return NextResponse.json({ user: result }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
