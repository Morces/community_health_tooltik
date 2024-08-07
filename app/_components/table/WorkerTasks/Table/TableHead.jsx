"use client";

import { useContext } from "react";
import { Thead, THT, THTS } from "../../components";
import TableContext from "../Provider/TableContext";

function TableHead() {
  const { setOrder = () => {} } = useContext(TableContext);

  return (
    <Thead>
      <THT txt="#" />
      <THTS txt="Task Name" field="name" setOrder={setOrder} />
      <THTS txt="Allocated By" field="allocated_by" setOrder={setOrder} />
      <THTS
        txt="Allocated Period From"
        field="allocation_period_from"
        setOrder={setOrder}
      />
      <THTS
        txt="Allocated Period To"
        field="allocation_period_to"
        setOrder={setOrder}
      />
      <THTS txt="Allocated Area" field="allocation_area" setOrder={setOrder} />
      <THTS txt="Task Status" field="task_status_id" setOrder={setOrder} />
      <THT txt="Actions" />
    </Thead>
  );
}

export default TableHead;
