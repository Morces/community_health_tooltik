import React from "react";
import AllHouseholds from "../../_components/table/Households";

const page = () => {
  return (
    <div className="px-24 max-md:px-0 max-md:pr-3 ml-6 max-md:ml-0">
      <div className="mt-5">
        <AllHouseholds />
      </div>
    </div>
  );
};

export default page;
