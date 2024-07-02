import React from "react";
import UserTable from "../../_components/table/Users";
import Summary from "./components/Summary";

const page = () => {
  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <Summary />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <UserTable />
      </div>
    </div>
  );
};

export default page;
