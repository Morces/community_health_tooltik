"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [password, setPassword] = useState("");
  const [role_id, setRoleId] = useState("");
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  async function getRoles() {
    try {
      const res = await axios.get("/api/roles");
      const { data } = res;
      setRoles(data?.roles || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  }

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">Add Memeber</h3>

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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
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
            type="email"
            label="Email"
            labelPlacement="outside"
            variant="bordered"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
