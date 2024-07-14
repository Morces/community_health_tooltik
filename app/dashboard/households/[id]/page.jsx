"use client";

import Households from "@/app/_components/table/HouseholdMembers";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = () => {
  const [household, setHousehold] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getHousehold();
  }, []);

  async function getHousehold() {
    try {
      const res = await axios.get(`/api/households/${id}`);

      const { data } = res;

      setHousehold(data?.household);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="mt-5 bg-white shadow-xl rounded-xl p-4 flex justify-between max-md:flex-wrap items-center">
        <h3 className="flex gap-2 items-center">
          <span className="text-xl font-semibold">Household Name : </span>
          <span className=" font-semibold text-blue-500">
            {household?.household_head_name || ""}
          </span>
        </h3>
        <h3 className="flex gap-2 items-center">
          <span className="text-xl font-semibold">Location : </span>
          <span className="font-semibold text-blue-500">
            {household?.location || ""}
          </span>
        </h3>
        <h3 className="flex gap-2 items-center">
          <span className="text-xl font-semibold">Description : </span>
          <span className=" font-semibold text-blue-500">
            {household?.description || ""}
          </span>
        </h3>
        <h3 className="flex gap-2 items-center">
          <span className="text-xl font-semibold">Total Members : </span>
          <span className=" font-semibold text-blue-500">
            {household?.househole_members?.length + 1 || "0"}
          </span>
        </h3>
      </div>
      <div className="mt-5">
        <Households />
      </div>
    </div>
  );
};

export default page;
