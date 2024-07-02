import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const index = () => {
  return (
    <div className="mt-4 mb-4 flex gap-x-6 max-md:flex-wrap">
      <Card1 />
      <Card2 />
    </div>
  );
};

export default index;
