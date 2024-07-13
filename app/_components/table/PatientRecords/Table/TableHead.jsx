"use client";

import { useContext } from "react";
import { Thead, THT, THTS } from "../../components";
import TableContext from "../Provider/TableContext";

function TableHead() {
  const { setOrder = () => {} } = useContext(TableContext);

  return (
    <Thead>
      <THT txt="#" />
      <THTS txt="Vitals" field="vitals" setOrder={setOrder} />
      <THTS txt="Allergies" field="allergies" setOrder={setOrder} />
      <THTS txt="Diagnosis" field="diagnosis" setOrder={setOrder} />
      <THT txt="Actions" />
    </Thead>
  );
}

export default TableHead;
