"use client";

import React, { useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useToast } from "../../../../../components/ui/use-toast";
import { ToastAction } from "../../../../../components/ui/toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const Edit = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const { edit } = useParams();

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    getHousehold();
  }, []);

  async function getHousehold() {
    try {
      const res = await axios.get(`/api/households/${edit}`);

      const { data } = res;

      setName(data?.household?.household_head_name);
      setLocation(data?.household?.location);
      setDescription(data?.household?.description);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.put("/api/households/edit", {
        id: parseInt(edit),
        household_head_name: name,
        location,
        description,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Household has been updated successfully.",
      });

      router.push("/dashboard/households");
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
    <div className="pl-24 pr-5 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">Edit Household</h3>

        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Household Head Name"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Household Head Name"
          />
          <Input
            type="text"
            label="Location"
            labelPlacement="outside"
            variant="bordered"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
        </div>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Textarea
            label="Description"
            labelPlacement="outside"
            placeholder="Enter Description"
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
            Edit Household
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
