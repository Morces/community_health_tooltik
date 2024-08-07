"use client";

import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "../../Assets/cht_logo.png";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgOrganisation } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { PiUsers } from "react-icons/pi";
import { GrResources } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { BsHouseHeart } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { RiUserSharedLine } from "react-icons/ri";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { signOut, useSession } from "next-auth/react";

const SideNav = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const isActive = (href) => {
    return pathname === href ? "bg-sky-300 rounded-md" : "";
  };

  const userRole = session?.user?.role;

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white w-48 p-4 z-50 overflow-y-scroll flex flex-col justify-between transform ${
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

        <nav className="flex flex-col space-y-2 mt-6">
          <Link href="/dashboard">
            <p
              className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                "/dashboard"
              )}`}
            >
              <MdOutlineDashboardCustomize className="text-lg" />
              Dashboard
            </p>
          </Link>

          {userRole !== "Health Worker" && (
            <>
              <Link href="/dashboard/organisations">
                <p
                  className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                    "/dashboard/organisations"
                  )}`}
                >
                  <CgOrganisation className="text-lg" />
                  Organisations
                </p>
              </Link>
              <Link href="/dashboard/users">
                <p
                  className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                    "/dashboard/users"
                  )}`}
                >
                  <PiUsers className="text-lg" />
                  Users
                </p>
              </Link>
              <Link href="/dashboard/roles">
                <p
                  className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                    "/dashboard/roles"
                  )}`}
                >
                  <RiUserSharedLine className="text-lg" />
                  Roles
                </p>
              </Link>
            </>
          )}

          <Link href="/dashboard/tasks">
            <p
              className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                "/dashboard/tasks"
              )}`}
            >
              <FaTasks className="text-lg" />
              Tasks
            </p>
          </Link>
          <Link href="/dashboard/households">
            <p
              className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                "/dashboard/households"
              )}`}
            >
              <BsHouseHeart className="text-lg" />
              Households
            </p>
          </Link>
          <Link href="/dashboard/visits">
            <p
              className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                "/dashboard/visits"
              )}`}
            >
              <LiaPeopleCarrySolid className="text-lg" />
              Visits
            </p>
          </Link>
          <Link href="/dashboard/resources">
            <p
              className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                "/dashboard/resources"
              )}`}
            >
              <GrResources className="text-lg" />
              Resources
            </p>
          </Link>
          <Link href="/dashboard/profile">
            <p
              className={`flex gap-2 items-center max-md:text-lg p-3 ${isActive(
                "/dashboard/profile"
              )}`}
            >
              <ImProfile className="text-lg" />
              Profile
            </p>
          </Link>
        </nav>
      </div>

      <div
        className="flex p-4 cursor-pointer"
        onClick={() =>
          signOut({
            redirect: true,
            callbackUrl: `/`,
          })
        }
      >
        <div>
          <p className="flex gap-2 items-center max-md:text-lg text-gray-500">
            <span>
              <AiOutlineLogout />
            </span>
            Log out
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
