"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { DateInput } from "@nextui-org/date-input";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/react";
import { useToast } from "../../../../components/ui/use-toast";
import { ToastAction } from "../../../../components/ui/toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const Edit = () => {
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    getMembers();
    getWorkers();
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [allocatedTo, setAllocatedTo] = useState(null);
  const [allocatedBy, setAllocatedBy] = useState(null);
  const [fromDate, setFromDate] = useState(parseDate("2024-04-04"));
  const [toDate, setToDate] = useState(parseDate("2024-04-04"));
  const [allocationArea, setAllocationArea] = useState("");
  const [users, setUsers] = useState([]);
  const [workers, setWorkers] = useState([]);
  const { edit } = useParams();

  async function getTask() {
    try {
      let res = await axios("/api/");
    } catch (error) {
      console.log(error);
    }
  }

  async function getMembers() {
    try {
      const res = await axios.get("/api/users", {
        params: {},
      });
      const { data } = res;
      setUsers(data?.docs || []);
    } catch (error) {
      console.error(error);
    }
  }
  async function getWorkers() {
    try {
      const res = await axios.get("/api/users", {
        params: {
          role: 3,
        },
      });
      const { data } = res;
      setWorkers(data?.docs || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.post("/api/tasks/edit", {
        id: parseInt(edit),
        name,
        allocation_period_from: fromDate.toString(),
        allocation_period_to: toDate.toString(),
        allocated_by: parseInt(allocatedBy),
        description,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Task has been updated successfully.",
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
        <h3 className="text-center font-semibold text-xl">Edit Task</h3>
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
            value={fromDate}
            variant="bordered"
            onChange={(date) => setFromDate(date)}
          />
          <DateInput
            label="To"
            labelPlacement="outside"
            value={toDate}
            variant="bordered"
            onChange={(date) => setToDate(date)}
          />
        </div>
        <div className="flex justify-between gap-5 max-md:flex-wrap max-md:w-full">
          <div className="w-full">
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
            Edit Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
