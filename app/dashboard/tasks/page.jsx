import React from "react";
import TasksTable from "../../_components/table/Tasks";

const page = () => {
  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="">
        <TasksTable />
      </div>
    </div>
  );
};

export default page;
