"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();

  const [name, setName] = useState(session?.user?.name);
  const [email, setEmail] = useState(session?.user?.email);
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState(null);

  const validateEmail = (email) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const res = await axios.get("/api/users/single", {
        params: {
          email: session.user.email,
        },
      });

      const { data } = res;
      setName(data?.user?.name);
      setEmail(data?.user?.email);
      setBio(data?.user?.bio);
      setSpecialization(data?.user?.specialization);
      setId(data?.user?.id);
      setPhone(data?.user?.phone);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.put("/api/users/update", {
        id: parseInt(id),
        name,
        email,
        bio,
        specialization,
        password,
        phone,
      });

      toast({
        variant: "success",
        title: "Success!",
        description: "Profile has been updated successfully.",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      console.log(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    }
  }

  return (
    <div className="pl-24 pr-5 w-full max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">User Profile</h3>

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
            isInvalid={isInvalid}
            value={email}
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
        <div className="mt-4">
          <Input
            type="text"
            label="Role"
            labelPlacement="outside"
            variant="bordered"
            value={session?.user?.role}
            isDisabled
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
          <Textarea
            label="Bio"
            labelPlacement="outside"
            placeholder="Enter your bio"
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
            Update Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
