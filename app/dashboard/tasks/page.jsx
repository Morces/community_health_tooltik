"use client";

import React from "react";
import TasksTable from "../../_components/table/Tasks";
import WorkerTasks from "../../_components/table/WorkerTasks";
import { useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();

  const role = session?.user?.role;

  return (
    <div className="pl-24 pr-5 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="">
        {role === "Health Worker" ? <WorkerTasks /> : <TasksTable />}
      </div>
    </div>
  );
};

export default page;
