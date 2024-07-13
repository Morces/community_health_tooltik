"use client";

import { useContext } from "react";
import { Thead, THT, THTS } from "../../components";
import TableContext from "../Provider/TableContext";

function TableHead() {
  const { setOrder = () => {} } = useContext(TableContext);

  return (
    <Thead>
      <THT txt="#" />
      <THTS txt="Task Name" field="task_id" setOrder={setOrder} />
      <THTS txt="Visit Type" field="visit_type_id" setOrder={setOrder} />
      <THTS txt="Allocated To" field="allocated_to" setOrder={setOrder} />
      <THTS txt="Comment" field="comment" setOrder={setOrder} />
      <THT txt="Actions" />
    </Thead>
  );
}

export default TableHead;
