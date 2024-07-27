"use client";

import React, { useEffect, useState } from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { DateInput } from "@nextui-org/date-input";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/react";
import { useToast } from "../../../../../components/ui/use-toast";
import { ToastAction } from "../../../../../components/ui/toast";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";

const Allocate = () => {
  const { toast } = useToast();
  const router = useRouter();
  const { allocate } = useParams();

  useEffect(() => {
    getWorkers();
  }, []);

  const [allocatedTo, setAllocatedTo] = useState(null);

  const [workers, setWorkers] = useState([]);

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
      const res = await axios.put("/api/tasks/allocate", {
        id: parseInt(allocate),
        allocated_to: parseInt(allocatedTo),
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Task has been allocated successfully.",
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
        <h3 className="text-center font-semibold text-xl">Allocate Task</h3>

        <div className="flex justify-between gap-5 max-md:flex-wrap max-md:w-full">
          <div className="w-full">
            <p className="font-normal text-md">Allocated To</p>
            <select
              name="allocatedTo"
              value={allocatedTo}
              onChange={(e) => setAllocatedTo(e.target.value)}
              className="w-full p-2 rounded-lg border shadow-sm"
            >
              <option disabled value="">
                Select health worker
              </option>
              {workers?.map((user, i) => (
                <option value={user?.id} key={i}>
                  {user?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-2 w-full flex items-center justify-center">
          <Button
            variant="solid"
            size="md"
            className="w-full"
            color="primary"
            onPress={handleSubmit}
          >
            Allocate Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Allocate;
