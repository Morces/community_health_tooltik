"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";

const page = () => {
  const [task_id, setTaskId] = useState(null);
  const [patient_record_id, setPatientRecordId] = useState(null);
  const [comment, setComment] = useState("");
  const [visit_type_id, setVisitTypeId] = useState(null);

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">Add Visit</h3>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Task Name"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Task Name"
          />
          <Input
            type="text"
            label="Allocation Area"
            labelPlacement="outside"
            variant="bordered"
            value={allocationArea}
            onChange={(e) => setAllocationArea(e.target.value)}
            placeholder="Enter Allocation Area"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
