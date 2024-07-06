"use client";

import Btn from "./Btn";

import { MdFilterAltOff } from "react-icons/md";

import TableContext from "../Provider/TableContext";

import { useContext } from "react";

function RemoveFilter(props) {
  const { handleRemoveFilters = () => {}, isFiltered = false } = props;
  const { setSearch, setShowPagination } = useContext(TableContext);

  if (!isFiltered) {
    return null;
  }

  const clearFilters = () => {
    handleRemoveFilters();
    setSearch("");
    setShowPagination(true);
  };

  return (
    <Btn click={clearFilters}>
      <span className="text-red animate-pulse">
        <MdFilterAltOff />
      </span>
    </Btn>
  );
}

export default RemoveFilter;
