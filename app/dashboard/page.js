"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Graph from "../_components/Dashboard/Graph";

export default function Home() {
  const [timeOfDay, setTimeOfDay] = useState("Morning");
  const [name, setName] = useState("Kazungu!");

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
      <main className="flex min-h-screen w-full mt-5 flex-col items-center pl-24 pr-5 max-md:w-full max-md:p-2">
        <h2 className="font-medium text-3xl">{`Good ${timeOfDay}, ${
          session?.user?.name || name
        }`}</h2>

        <p className="mt-2">
          Don&apos;t wait until it&apos;s too late! Complete you tasks in time 😊
        </p>
      </main>
      <div className="mt-6">
        <Graph />
      </div>
    </div>
  );
}
