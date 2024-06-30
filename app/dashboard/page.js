"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
    <>
      <main className="flex min-h-screen w-full mt-5 flex-col items-center p-24">
        <h2 className="font-medium text-3xl">{`Good ${timeOfDay}, ${
          session?.user?.name || name
        }`}</h2>

        <p className="mt-2">
          Don't wait until it's too late! Complete you tasks in time 😊
        </p>
      </main>
    </>
  );
}
