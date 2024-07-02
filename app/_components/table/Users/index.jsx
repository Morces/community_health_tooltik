"use client";

import TableHead from "./Table/TableHead";
import useTable from "./Provider/useTable";
import TableRow from "./Table/TableRow";
import { Table, TBody } from "../components";
import Filters from "./Filter";
import { useRouter } from "next/navigation";
import TableContext from "./Provider/TableContext";

export default function Members() {
  const {
    limit,
    setLimit,
    docs,
    setDocs,
    isLoading,
    setIsLoading,
    isFiltered,
    setIsFiltered,
    pagination,
    roles,
    setRoles,
    selectedRoles,
    setSelectedRoles,
    setOrder,
    clearFilters,
  } = useTable();

  const router = useRouter();

  return (
    <TableContext.Provider
      value={{
        limit,
        setLimit,
        docs,
        setDocs,
        isLoading,
        setIsLoading,
        isFiltered,
        setIsFiltered,
        pagination,
        roles,
        setRoles,
        selectedRoles,
        setSelectedRoles,
        setOrder,
        clearFilters,
      }}
    >
      <Table
        label="All Members"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setDocs={setDocs}
        isFiltered={isFiltered}
        handleAdd={() => router.push("users/add")}
        setIsFiltered={setIsFiltered}
        handleRemoveFilters={clearFilters}
        pagination={pagination}
        url="users/search"
        FilterComponent={<Filters />}
      >
        <TableHead setOrder={setOrder} />
        <TBody>
          {docs.map((doc, i) => {
            return <TableRow key={doc?.id || i} doc={doc} />;
          })}
        </TBody>
      </Table>
    </TableContext.Provider>
  );
}
