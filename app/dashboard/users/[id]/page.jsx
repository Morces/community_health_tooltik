"use client";

import React, { useEffect, useState } from "react";
import UserTasks from "../../../_components/table/UserTasks";
import { useParams } from "next/navigation";
import axios from "axios";

const Page = () => {
  useEffect(() => {
    getUser();
  }, []);

  const { id } = useParams();

  const [user, setUser] = useState({});

  async function getUser() {
    try {
      const res = await axios.get(`/api/users/${id}`);

      const { data } = res;

      setUser(data?.user);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="pl-24 pr-5 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="rounded-lg p-4 bg-white mb-4 flex justify-between items-center max-md:flex-wrap">
        <p className="flex gap-3">
          Name: <span>{user?.name}</span>
        </p>
        <p className="flex gap-3">
          Role: <span>{user?.roles?.name}</span>
        </p>
        <p className="flex gap-3">
          Specialization: <span>{user?.specialization}</span>
        </p>
      </div>
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 ">
        <UserTasks />
      </div>
    </div>
  );
};

export default Page;
