"use client";

import { useContext } from "react";
import { Thead, THT, THTS } from "../../components";
import TableContext from "../Provider/TableContext";

function TableHead() {
  const { setOrder = () => {} } = useContext(TableContext);

  return (
    <Thead>
      <THT txt="#" />
      <THTS
        txt="Household Head Name"
        field="household_head_name"
        setOrder={setOrder}
      />
      <THTS txt="Description" field="description" setOrder={setOrder} />
      <THTS txt="Location" field="location" setOrder={setOrder} />
      <THTS txt="Total Members" field="total_members" setOrder={setOrder} />
      <THT txt="Actions" />
    </Thead>
  );
}

export default TableHead;
