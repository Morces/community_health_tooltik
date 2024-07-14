"use client";

import TableHead from "./Table/TableHead";
import useTable from "./Provider/useTable";
import TableRow from "./Table/TableRow";
import { Table, TBody } from "../components";
import Filters from "./Filter";
import { useRouter } from "next/navigation";
import TableContext from "./Provider/TableContext";

export default function Visits() {
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
    status,
    setStatus,
    selectedStatus,
    setSelectedStatus,
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
        status,
        setStatus,
        selectedStatus,
        setSelectedStatus,
        setOrder,
        clearFilters,
      }}
    >
      <Table
        label="All Visits"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setDocs={setDocs}
        isFiltered={isFiltered}
        handleAdd={() => router.push("visits/add")}
        setIsFiltered={setIsFiltered}
        handleRemoveFilters={clearFilters}
        pagination={pagination}
        url="visits/search"
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
