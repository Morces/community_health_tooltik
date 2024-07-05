"use client";

import TableHead from "./Table/TableHead";
import useTable from "./Provider/useTable";
import TableRow from "./Table/TableRow";
import { Table, TBody } from "../components";
// import Filters from "./Filter";
import { useRouter } from "next/navigation";
import TableContext from "./Provider/TableContext";

export default function Roles() {
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
        setOrder,
        clearFilters,
      }}
    >
      <Table
        label="All Roles"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setDocs={setDocs}
        isFiltered={isFiltered}
        handleAdd={() => router.push("roles/add")}
        setIsFiltered={setIsFiltered}
        handleRemoveFilters={clearFilters}
        pagination={pagination}
        url="roles/search"
        // FilterComponent={<Filters />}
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
