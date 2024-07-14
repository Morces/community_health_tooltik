"use client";

import TableHead from "./Table/TableHead";
import useTable from "./Provider/useTable";

import { Table, TBody } from "../components";

import { useRouter } from "next/navigation";
import TableContext from "./Provider/TableContext";
import Card from "./Table/Card";

export default function Resources() {
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
        label="All Resources"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setDocs={setDocs}
        isFiltered={isFiltered}
        handleAdd={() => router.push("resources/add")}
        setIsFiltered={setIsFiltered}
        handleRemoveFilters={clearFilters}
        pagination={pagination}
        url="roles/search"
        // FilterComponent={<Filters />}
      >
        <TBody>
          <div className="mt-5 flex gap-5 max-md:flex-wrap">
            {docs.map((doc, i) => {
              return <Card key={doc?.id || i} doc={doc} />;
            })}
          </div>
        </TBody>
      </Table>
    </TableContext.Provider>
  );
}
