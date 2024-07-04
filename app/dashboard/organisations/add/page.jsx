"use client";

import axios from "axios";
import React, { useState, useMemo } from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const validateEmail = (email) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const { toast } = useToast();
  const router = useRouter();

  async function handleSubmit() {
    try {
      const res = await axios.post("/api/organisations/add", {
        name,
        email,
        phone,
        description,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Organisation has been added successfully.",
      });

      router.push("/dashboard/organisations");
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
        <h3 className="text-center font-semibold text-xl">Add Member</h3>

        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Name"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Full Name"
          />
          <Input
            type="email"
            label="Email"
            labelPlacement="outside"
            variant="bordered"
            value={email}
            isInvalid={isInvalid}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Phone"
            labelPlacement="outside"
            variant="bordered"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="">
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
            Add Organisation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
