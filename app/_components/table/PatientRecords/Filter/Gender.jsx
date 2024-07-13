"use client";

import { useContext } from "react";
import FilterCheckBox from "../../FilterCheckBox";

import { FilterBox } from "../../components";
import TableContext from "../Provider/TableContext";

function GenderFilter() {
  const {
    roles = [],
    selectedRoles = [],
    setSelectedRoles = () => {},
  } = useContext(TableContext);
  return (
    <FilterBox title="Gender Filter">
      {roles.map((role, i) => {
        return (
          <FilterCheckBox
            key={role?.id || i}
            j={role.id.toString()}
            label={role.name}
            input={selectedRoles}
            setInput={setSelectedRoles}
          />
        );
      })}
    </FilterBox>
  );
}

export default GenderFilter;
