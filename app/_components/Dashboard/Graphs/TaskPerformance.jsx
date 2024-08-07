import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TaskPerformace() {
  const [showReport, setShowReport] = useState(false);

  const data = [
    {
      name: "Jan",
      uv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 2400,
      amt: 2400,
    },
    {
      name: "Aug",
      uv: 3000,
      amt: 2210,
    },
    {
      name: "Sep",
      uv: 2000,
      amt: 2290,
    },
    {
      name: "Oct",
      uv: 2780,
      amt: 2000,
    },
    {
      name: "Nov",
      uv: 1890,
      amt: 2181,
    },
    {
      name: "Dec",
      uv: 2400,
      amt: 2400,
    },
  ];

  return (
    <div className="w-full rounded-lg bg-white shadow-md p-3">
      <div className="flex items-center justify-between mt-5 mb-8 mx-6">
        <p className="text-lg text-dark_blue">Task Completion Rate</p>
        <div className="relative"></div>
      </div>
      <div className="" style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#13C67E" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#A1CAB9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <CartesianGrid vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#13C67E"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TaskPerformace;
