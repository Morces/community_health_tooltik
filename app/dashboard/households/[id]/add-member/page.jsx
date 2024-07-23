"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const Add = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [relationship, setRelationship] = useState("");

  const { toast } = useToast();
  const router = useRouter();
  const { id } = useParams();

  async function handleSubmit() {
    try {
      const response = await axios.post("/api/households/members/add", {
        name,
        age: parseInt(age),
        relationship,
        household_id: parseInt(id),
      });

      toast({
        variant: "success",
        title: "Success!",
        description: `Household Member - ${name} has been added successfully.`,
      });

      router.push(`/dashboard/households/${id}`);
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
        <h3 className="text-center font-semibold text-xl">Add Household</h3>

        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <Input
            type="number"
            label="Age"
            labelPlacement="outside"
            variant="bordered"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
          />
        </div>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Relationship"
            labelPlacement="outside"
            variant="bordered"
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            placeholder="Enter Relationship"
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
            Add Household
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Add;
