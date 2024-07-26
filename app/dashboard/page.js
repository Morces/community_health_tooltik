"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Calendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import { IoChevronUpSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import AllMembers from "../_components/Dashboard/Cards/AllMembers";
import AllAdmins from "../_components/Dashboard/Cards/AllAdmins";
import AllSupervisors from "../_components/Dashboard/Cards/AllSupervisors";
import AllWorkers from "../_components/Dashboard/Cards/AllWorkers";
import TotalUsers from "../_components/Dashboard/Graphs/TotalUsers";
import Users from "../_components/Dashboard/Other/User";
import TaskPerformance from "../_components/Dashboard/Graphs/TaskPerformance";
import RecentActivities from "../_components/Dashboard/Other/RecentActivities";

export default function Home() {
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [name, setName] = useState("Kazungu!");
  const [showCards, setShowCards] = useState(true);

  const toggle = () => {
    setShowCards((prev) => !prev);
  };

  const { data: session } = useSession();

  useEffect(() => {
    const getCurrentTimeOfDay = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        return "Morning";
      } else if (currentHour >= 12 && currentHour < 18) {
        return "Afternoon";
      } else {
        return "Evening";
      }
    };

    setTimeOfDay(getCurrentTimeOfDay());
  }, []);

  return (
    <div>
      <main className="flex min-h-screen w-full mt-5 flex-col pl-28 pr-5 max-md:w-full max-md:p-2">
        <div className="flex mx-3 justify-between items-center max-md:flex-wrap max-md:w-full max-md:mx-auto">
          <div className="">
            <h2 className="font-medium text-2xl">{`Good ${timeOfDay}, ${
              session?.user?.name || name
            }`}</h2>

            <p className="mt-2">
              Don&apos;t wait until it&apos;s too late! Complete you tasks in
              time 😊
            </p>
          </div>

          <div className="flex gap-3">
            <div
              className="p-2 border border-gray-300 rounded-lg bg-white"
              onClick={toggle}
            >
              <IoChevronUpSharp
                className={`${
                  !showCards && "rotate-180"
                } duration-100 text-2xl text-dark_blue cursor-pointer`}
              />
            </div>
            <div className="p-2 flex items-center border border-gray-300 rounded-lg bg-white">
              <CiMenuKebab className="" />
            </div>
          </div>
        </div>
        <div
          className={`overflow-x-scroll scroll-hidden flex gap-5 max-md:flex-wrap max-md:justify-center mt-4 ${
            !showCards && "hidden"
          }`}
        >
          <AllMembers />
          <AllAdmins />
          <AllSupervisors />
          <AllWorkers />
        </div>

        <div className="mt-5">
          {" "}
          <Users />
        </div>
        <div className="mt-6 w-full flex justify-between gap-6 items-center max-md:flex-col">
          <TotalUsers />
        </div>
        <div className="mt-6 flex gap-6 items-center w-full max-md:flex-col">
          <TaskPerformance />
        </div>
        <div className="flex mt-6">
          <div className="flex gap-x-8 flex-1 w-full">
            <Calendar
              aria-label="Date (Uncontrolled)"
              value={today(getLocalTimeZone())}
              visibleMonths={2}
            />
          </div>
          <div className="flex-1">
            <RecentActivities />
          </div>
        </div>
      </main>
    </div>
  );
}
