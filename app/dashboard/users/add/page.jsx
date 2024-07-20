"use client";

import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);

  const validateEmail = (email) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    getRoles();
  }, []);

  async function getRoles() {
    try {
      const res = await axios.get("/api/roles");
      const { data } = res;
      setRoles(data?.docs || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.post("/api/users/add", {
        name,
        email,
        bio,
        specialization,
        password,
        role_id: parseInt(role_id),
        phone,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "User has been added successfully.",
      });

      router.push("/dashboard/users");
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
        <div className="mt-4">
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

        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Input
            type="text"
            label="Specialization"
            labelPlacement="outside"
            variant="bordered"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            placeholder="Enter Specialization"
          />
          <Input
            type="password"
            label="Password"
            labelPlacement="outside"
            variant="bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="">
          <p className="font-normal text-md">Select a role</p>
          <select
            name="role_id"
            value={role_id}
            onChange={(e) => setRoleId(e.target.value)}
            id=""
            className="w-full p-2 rounded-lg border shadow-sm"
          >
            <option disabled value="">
              Select role
            </option>
            {roles?.map((role, i) => (
              <option value={role?.id} key={i}>
                {role?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <Textarea
            label="Bio"
            labelPlacement="outside"
            placeholder="Enter bio"
            value={bio}
            variant="bordered"
            onChange={(e) => setBio(e.target.value)}
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
            Add Member
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
