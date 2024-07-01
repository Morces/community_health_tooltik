import { NextResponse } from "next/server";
import { prisma } from "../../_components/prisma";
import { Fuzzy } from "../../_components/util/Fuzzy";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search");
    const limit = searchParams.get("limit") || 10;

    if (!search) {
      return NextResponse.json({ docs: [] }, { status: 200 });
    }

    let pageNumber = 1;

    let docs = [];

    while (true) {
      const pageLimit = parseInt(limit);
      const offset = pageNumber > 1 ? pageNumber * pageLimit - pageLimit : 0;
      const items = await prisma.members.findMany({
        skip: offset,
        take: pageLimit,
      });
      if (items.length == 0) {
        break;
      }

      const searchResult = Fuzzy({
        search,
        items,
        keys: ["name", "email", "phone"],
      });
      if (searchResult.length > 0) {
        docs = [...docs, ...searchResult];
      }

      pageNumber = pageNumber + 1;
    }

    const searchResult = Fuzzy({
      search,
      items: docs,
      keys: ["name", "email", "phone"],
    });

    return NextResponse.json({
      docs: searchResult,
      length: searchResult.length,
      pageNumber,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong! Try again!" },
      { status: 500 }
    );
  }
}
