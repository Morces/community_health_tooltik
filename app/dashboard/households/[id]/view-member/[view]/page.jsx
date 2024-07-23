"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import PatientRecords from "../../../../../_components/table/PatientRecords";

const View = () => {
  const [member, setMember] = useState({});
  const { view } = useParams();

  useEffect(() => {
    getMember();
  }, []);

  async function getMember() {
    try {
      const res = await axios.get("/api/households/members/single", {
        params: {
          id: parseInt(view),
        },
      });

      const { data } = res;

      setMember(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="pl-24 pr-5 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="bg-white p-4 rounded-xl shadow-xl">
        <h1 className="text-2xl font-bold text-center">
          Household Member Details
        </h1>
        <div className="mt-4 flex justify-between items-center max-md:flex-wrap">
          <h4 className="flex gap-2 items-center">
            <strong>Name:</strong> <span>{member?.name}</span>
          </h4>
          <h4>
            <strong>Age:</strong> <span>{member.age}</span>
          </h4>
          <h4>
            <strong>Relationship:</strong> <span>{member.relationship}</span>
          </h4>
        </div>
      </div>
      <div className="mt-5">
        <PatientRecords />
      </div>
    </div>
  );
};

export default View;
