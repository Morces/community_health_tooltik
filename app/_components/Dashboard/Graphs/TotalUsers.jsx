import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { BsThreeDotsVertical } from "react-icons/bs";

function TotalUsers() {
  const [showReport, setShowReport] = useState(false);
  const data = [
    {
      name: "Jan",
      Pending: 4000,
      Completed: 2400,
    },
    {
      name: "Feb",
      Pending: 3000,
      Completed: 1398,
    },
    {
      name: "Mar",
      Pending: 2000,
      Completed: 9800,
    },
    {
      name: "Apr",
      Pending: 2780,
      Completed: 3908,
    },
    {
      name: "May",
      Pending: 1890,
      Completed: 4800,
    },
    {
      name: "Jun",
      Pending: 2390,
      Completed: 3800,
    },
    {
      name: "Jul",
      Pending: 3490,
      Completed: 4300,
    },
    {
      name: "Aug",
      Pending: 3000,
      Completed: 1398,
    },
    {
      name: "Sep",
      Pending: 2000,
      Completed: 9800,
    },
    {
      name: "Oct",
      Pending: 2780,
      Completed: 3908,
    },
    {
      name: "Nov",
      Pending: 2780,
      Completed: 3908,
    },
    {
      name: "Dec",
      Pending: 1890,
      Completed: 4800,
    },
  ];

  return (
    <div className="rounded-lg shadow-2xl bg-white flex flex-col p-4 m-5 flex-1">
      <div className="flex justify-between items-center">
        <div className="flex flex-col mt-3 mb-5 w-48 justify-start">
          <h3 className="font-normal">Total System Users</h3>
          <select
            name="Year"
            id=""
            className="w-24 mt-5  border-1 border-gray-500 p-2 rounded-md"
          >
            <option value="">Year</option>
          </select>
        </div>
        <div className="relative"></div>
      </div>

      <div className="mt-5" style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="left"
              iconType="circle"
              height={36}
              width={200}
            />
            <Bar dataKey="Completed" fill="#C91984" barSize={10} />
            <Bar dataKey="Pending" fill="#8F00FF" barSize={10} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TotalUsers;
