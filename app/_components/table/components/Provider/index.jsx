"use client";

import { useState } from "react";

import TableContext from "./TableContext";

import useSearch from "../../hooks/useSearch";

function Provider({
  children,
  setIsLoading = () => {},
  setDocs = () => {},
  setIsFiltered = () => {},
}) {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState(null);
  const [showPagination, setShowPagination] = useState(true);

  useSearch({
    searchUrl,
    search,
    setIsLoading,
    setDocs,
    setIsFiltered,
    showPagination,
    setShowPagination,
  });

  return (
    <TableContext.Provider
      value={{
        active,
        setActive,
        search,
        setSearch,
        searchUrl,
        setSearchUrl,
        showPagination,
        setShowPagination,
        setIsFiltered,
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export default Provider;
