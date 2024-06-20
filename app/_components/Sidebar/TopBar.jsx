"use client";

import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopNav = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white p-5 z-10 flex justify-between items-center md:justify-center lg:justify-end border-b">
      <div
        className="md:hidden p-2 cursor-pointer rounded-md border focus:outline-none focus:bg-gray-700"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="flex items-center gap-2 text-gray-800">
          <IoMdNotificationsOutline className="text-2xl" />
        </a>
        <a href="/" className="flex items-center gap-2 text-gray-800">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </a>
        <a href="/" className="flex items-center gap-2 text-gray-800">
          Admin
        </a>
      </nav>
    </header>
  );
};

export default TopNav;
