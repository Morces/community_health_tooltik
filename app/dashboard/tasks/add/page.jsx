"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { DateInput } from "@nextui-org/date-input";
import {CalendarDate, parseDate} from "@internationalized/date";
import { Button } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    getMembers();
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [allocatedTo, setAllocatedTo] = useState(null);
  const [allocatedBy, setAllocatedBy] = useState(null);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [allocationArea, setAllocationArea] = useState("");
  const [users, setUsers] = useState([]);

  async function getMembers() {
    try {
      const res = await axios.get("/api/users");
      const { data } = res;
      setUsers(data?.docs || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.post("/api/tasks/add", {
        name,
        allocation_period_from: fromDate,
        allocation_period_to: toDate,
        allocated_by: parseInt(allocatedBy),
        allocated_to: parseInt(allocatedTo),
        description,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Task has been added successfully.",
      });

      router.push("/dashboard/tasks");
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">Add Task</h3>
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
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <DateInput
            label="From"
            labelPlacement="outside"
            value={parseDate(fromDate)}
            variant="bordered"
            onChange={(date) => setFromDate(date)}
          />
          <DateInput
            label="To"
            labelPlacement="outside"
            value={parseDate(toDate)}
            variant="bordered"
            onChange={(date) => setToDate(date)}
          />
        </div>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <div>
            <p className="font-normal text-md">Allocated By</p>
            <select
              name="allocatedBy"
              value={allocatedBy}
              onChange={(e) => setAllocatedBy(e.target.value)}
              className="w-full p-2 rounded-lg border shadow-sm"
            >
              <option disabled value="">
                Select user
              </option>
              {users?.map((user, i) => (
                <option value={user?.id} key={i}>
                  {user?.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="font-normal text-md">Allocated To</p>
            <select
              name="allocatedTo"
              value={allocatedTo}
              onChange={(e) => setAllocatedTo(e.target.value)}
              className="w-full p-2 rounded-lg border shadow-sm"
            >
              <option disabled value="">
                Select user
              </option>
              {users?.map((user, i) => (
                <option value={user?.id} key={i}>
                  {user?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            value={description}
            variant="bordered"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-2 w-full flex items-center justify-center">
          <Button
            variant="solid"
            size="md"
            className="w-full"
            color="primary"
            onPress={handleSubmit}
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
