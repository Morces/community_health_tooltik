"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "./Assets/cht_logo.png";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-between p-4 items-center border-b max-md:flex-wrap">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            width={60}
            height={60}
            alt="Logo"
            className="rounded-full"
          />
          <h3 className="font-semibold text-xl">Community Health Toolkit</h3>
        </div>

        <Link
          href="/login"
          className="px-3 py-2 bg-primary text-white font-medium rounded-md"
        >
          <p className="">Sign In</p>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 p-4 h-screen w-full -mt-12">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="Logo"
          className="rounded-full"
        />
        <h3 className="text-2xl font-semibold">
          Welcome to the Community Health Toolkit
        </h3>
        <p className="flex items-center gap-2">
          To continue using this App, you need to sign in{" "}
          <span className="">
            <Link href="/login" className="underline underline-offset-2">
              here
            </Link>
          </span>{" "}
        </p>
      </div>
    </main>
  );
}
