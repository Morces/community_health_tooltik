"use client";

import { useContext } from "react";
import FilterCheckBox from "../../FilterCheckBox";

import { FilterBox } from "../../components";
import TableContext from "../Provider/TableContext";

function StatusFilter() {
  const {
    status = [],
    selectedStatus = [],
    setSelectedStatus = () => {},
  } = useContext(TableContext);
  return (
    <FilterBox title="Task Status Filter">
      {status.map((item, i) => {
        return (
          <FilterCheckBox
            key={item?.id || i}
            j={item.id.toString()}
            label={item.name}
            input={selectedStatus}
            setInput={setSelectedStatus}
          />
        );
      })}
    </FilterBox>
  );
}

export default StatusFilter;
