"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import logo from "../../Assets/cht_logo.png";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { PiUsers } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { BsHouseHeart } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

const SideNav = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  const isActive = (href) => {
    return router.pathname === href ? "bg-blue-100" : "";
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white w-48 p-4 z-50 flex flex-col justify-between transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0`}
    >
      <div className="">
        <div
          className="mt-2 mb-4 flex justify-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image
            src={logo}
            width={60}
            height={60}
            alt="Logo"
            className="rounded-full"
          />
        </div>

        <nav className="flex flex-col space-y-4 mt-4">
          <a
            href="/dashboard"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/dashboard"
            )}`}
          >
            <MdOutlineDashboardCustomize className="text-lg" />
            Dashboard
          </a>
          <a
            href="/dashboard/organisations"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/dashboard/organisations"
            )}`}
          >
            <CgOrganisation className="text-lg" />
            Organisations
          </a>
          <a
            href="/dashboard/users"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/dashboard/users"
            )}`}
          >
            <PiUsers className="text-lg" />
            Users
          </a>
          <a
            href="/dashboard/tasks"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/dashboard/tasks"
            )}`}
          >
            <FaTasks className="text-lg" />
            Tasks
          </a>
          <a
            href="/dashboard/households"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/dashboard/households"
            )}`}
          >
            <BsHouseHeart className="text-lg" />
            Households
          </a>
          <a
            href="/dashboard/resources"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/dashboard/resources"
            )}`}
          >
            <GrResources className="text-lg" />
            Resources
          </a>
          <a
            href="/dashboard/profile"
            className={`flex gap-2 items-center max-md:text-lg ${isActive(
              "/profile"
            )}`}
          >
            <ImProfile className="text-lg" />
            Profile
          </a>
        </nav>
      </div>

      <div className="flex p-4">
        <a
          href="/logout"
          className="flex gap-2 items-center max-md:text-lg text-gray-500"
        >
          <span>
            <AiOutlineLogout />
          </span>
          Log out
        </a>
      </div>
    </aside>
  );
};

export default SideNav;
