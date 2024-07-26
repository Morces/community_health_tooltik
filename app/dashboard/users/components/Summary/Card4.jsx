"use client";

import axios from "axios";
import { UsersRoundIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

const Card4 = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getTotal();
  }, []);

  async function getTotal() {
    try {
      let res = await axios.get("/api/users/analytics/total-workers");
      const { data } = res;
      setTotal(data?.total_members);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-white  justify-between items-center rounded-lg shadow-xl p-3 flex flex-1">
      <div className="flex flex-col">
        <p className="font-bold">{total}</p>
        <h3 className="font-semibold">Total Health Workers</h3>
      </div>
      <UsersRoundIcon />
    </div>
  );
};

export default Card4;
