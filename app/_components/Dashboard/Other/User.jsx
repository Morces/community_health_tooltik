import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlinePhonelink } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const Users = () => {
  return (
    <div className="bg-white p-3 shadow-2xl rounded-lg flex-1">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-medium text-lg">System Users</h1>
        <BsThreeDotsVertical className="text-[#3A35418A]" />
      </div>

      <div className="flex flex-wrap justify-between mt-2">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="rounded-lg p-3.5 bg-[#9155FD] shadow-md">
            <FaArrowTrendUp className="text-white text-xl" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#3A354199] text-sm font-medium">Total Users</p>
            <p className="font-semibold text-xl">245k</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <div className="rounded-lg p-3.5 bg-[#56CA00] shadow-md">
            <MdOutlinePersonOutline className="text-white text-xl" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#3A354199] text-sm font-medium">Total Admins</p>
            <p className="font-semibold text-xl">12.5k</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-lg p-3.5 bg-[#FFB400] shadow-md">
            <MdOutlinePhonelink className="text-white text-xl" />
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-[#3A354199] text-sm font-medium">
              Total Health Workers
            </p>
            <p className="font-semibold text-xl">1.54k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
