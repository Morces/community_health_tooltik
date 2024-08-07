import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const RecentActivities = () => {
  const data = [
    {
      id: 1,
      title: "Polio Vaccination",
      borrow_status: "Performed",
      duration: "3 days ago",
    },
    {
      id: 2,
      title: "Malaria Check Up",
      borrow_status: "Performed",
      duration: "3 days ago",
    },
    {
      id: 3,
      title: "Child Delivery",
      borrow_status: "Performed",
      duration: "7 days ago",
    },
  ];
  return (
    <div className="rounded-md p-3 shadow-xl bg-white">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl">Recent Activities</p>
        {/* <BsThreeDotsVertical className="cursor-pointer text-xl" /> */}
      </div>
      {data.map((item, i) => (
        <div
          key={item?.id || i}
          className="mt-5 flex items-center justify-between w-full"
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <p className="font-bold">{item.title}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">{item.borrow_status}</p>
              <p className="font-light text-dark_grey">{item.duration}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
