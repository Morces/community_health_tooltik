import Btn from "./Btn";

import { MdFilterAltOff } from "react-icons/md";

import TableContext from "../Provider/TableContext";

import { useContext } from "react";

function RemoveFilter(props) {
  const { handleRemoveFilters = () => {}, isFiltered = false } = props;

  if (!isFiltered) {
    return null;
  }

  const { setSearch, setShowPagination } = useContext(TableContext);

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
