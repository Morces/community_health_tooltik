"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/react";
import axios from "axios";

const Add = () => {
  const [task_id, setTaskId] = useState(null);
  const [patient_record_id, setPatientRecordId] = useState(null);
  const [patientRecords, setPatientsRecords] = useState([]);
  const [comment, setComment] = useState("");
  const [visit_type_id, setVisitTypeId] = useState(null);
  const [visitTypes, setVisitTypes] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
    getPatientRecords();
    getVisitTypes();
  }, []);

  async function getTasks() {
    try {
      const res = await axios.get("/api/tasks");
      const { data } = res;

      setTasks(data?.docs);
    } catch (error) {
      console.log(error);
    }
  }
  async function getPatientRecords() {
    try {
      const res = await axios.get("/api/patients");
      const { data } = res;

      setPatientsRecords(data?.docs);
    } catch (error) {
      console.log(error);
    }
  }
  async function getVisitTypes() {
    try {
      const res = await axios.get("/api/visits/types");
      const { data } = res;

      setVisitTypes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="flex flex-col space-y-6 rounded-lg shadow-2xl bg-white p-5 w-[85%] m-auto max-md:w-[95%]">
        <h3 className="text-center font-semibold text-xl">Add Visit</h3>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <div className="w-full">
            <p className="font-normal text-md">Select a Task</p>
            <select
              name="task_id"
              value={task_id}
              onChange={(e) => setTaskId(e.target.value)}
              id=""
              className="w-full p-2 rounded-lg border shadow-sm"
            >
              <option disabled value="">
                Select Task
              </option>
              {tasks?.map((task, i) => (
                <option value={task?.id} key={i}>
                  {task?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full">
            <p className="font-normal text-md">Select a Patient</p>
            <select
              name="patient_record_id"
              value={patient_record_id}
              onChange={(e) => setPatientRecordId(e.target.value)}
              id=""
              className="w-full p-2 rounded-lg border shadow-sm"
            >
              <option disabled value="">
                Select Patient
              </option>
              {patientRecords?.map((patient, i) => (
                <option value={patient?.id} key={i}>
                  {patient?.househole_members?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <div className="w-full">
            <p className="font-normal text-md">Select a Visit Type</p>
            <select
              name="visit_type_id"
              value={visit_type_id}
              onChange={(e) => setVisitTypeId(e.target.value)}
              id=""
              className="w-full p-2 rounded-lg border shadow-sm"
            >
              <option disabled value="">
                Select Visit Type
              </option>
              {visitTypes?.map((type, i) => (
                <option value={type?.id} key={i}>
                  {type?.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-wrap max-md:w-full">
          <Textarea
            label="Comment"
            labelPlacement="outside"
            variant="bordered"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter Allocation Area"
          />
        </div>
      </div>
    </div>
  );
};

export default Add;
