"use client";

import { useContext } from "react";
import { Thead, THT, THTS } from "../../components";
import TableContext from "../Provider/TableContext";

function TableHead() {
  const { setOrder = () => {} } = useContext(TableContext);

  return (
    <Thead>
      <THT txt="#" />
      <THTS txt="Member Name" field="name" setOrder={setOrder} />
      <THTS txt="Phone" field="phone" setOrder={setOrder} />
      <THTS txt="Email" field="email" setOrder={setOrder} />
      <THTS txt="Role" field="role_id" setOrder={setOrder} />
      <THT txt="Actions" />
    </Thead>
  );
}

export default TableHead;
