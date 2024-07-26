"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { LuUsers } from "react-icons/lu";

const AllSupervisors = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, []);

  async function getTotal() {
    try {
      const res = await axios.get("/api/users/analytics/total-supervisors");
      const { data } = res;
      setTotal(data.total_supervisors);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-white duration-150 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl p-4 flex items-center justify-between gap-8 col-span-1 cursor-pointer group shadow-analytic-card flex-grow ">
      <div className="flex flex-col">
        <p>{total}</p>
        <p className="text-sm">Total Supervisors</p>
      </div>
      <p>
        <LuUsers className="text-2xl" />
      </p>
    </div>
  );
};

export default AllSupervisors;
