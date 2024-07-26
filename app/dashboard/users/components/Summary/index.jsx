import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";

const index = () => {
  return (
    <div className="mt-4 mb-4 flex gap-6 max-md:flex-wrap">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
};

export default index;
