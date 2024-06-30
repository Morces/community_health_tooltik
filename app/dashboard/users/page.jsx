import React from "react";
import { DataTable } from "./data-table";
import columns from "./columns";

const page = async () => {
  async function getData() {
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
    ];
  }

  const data = await getData();

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0 max-md:p-4">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
