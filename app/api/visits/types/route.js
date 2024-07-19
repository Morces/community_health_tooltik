import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { convertBigIntToString } from "../../_components/util/convertBigint";
import { formatOrder } from "../../_components/util/list";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const order = searchParams.get("order") || "desc";

    const orderBy = formatOrder(order);

    const items = await prisma.visit_type.findMany({
      orderBy: orderBy,
    });

    const result = convertBigIntToString(items);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
