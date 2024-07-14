import { NextResponse } from "next/server";

import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";

// Create a handler for the POST request
export async function POST(req) {
  try {
    const body = await req.json();

    const { name, description, url, resource_type } = body;

    if (!name || !url) {
      return NextResponse.json(
        { message: "Missing name or url" },
        { status: 400 }
      );
    }

    const resource = await prisma.resources.create({
      data: {
        name,
        description,
        url,
        resource_type,
      },
    });

    const result = convertBigIntToString(resource);

    return NextResponse.json(
      result,
      { message: "Resource created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
