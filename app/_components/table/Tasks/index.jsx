"use client";

import TableHead from "./Table/TableHead";
import useTable from "./Provider/useTable";
import TableRow from "./Table/TableRow";
import { Table, TBody } from "../components";
import Filters from "./Filter";
import { useRouter } from "next/navigation";
import TableContext from "./Provider/TableContext";
import Markdone from "./Table/MarkDone";

export default function Organisations() {
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
    taskId,
    setTaskId,
    showMarkDone,
    setShowMarkDone,
    markDone,
    refetchDocs,
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
        taskId,
        setTaskId,
        showMarkDone,
        setShowMarkDone,
        markDone,
        refetchDocs,
      }}
    >
      <Table
        label="All Tasks"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setDocs={setDocs}
        isFiltered={isFiltered}
        handleAdd={() => router.push("tasks/add")}
        setIsFiltered={setIsFiltered}
        handleRemoveFilters={clearFilters}
        pagination={pagination}
        url="tasks/search"
        FilterComponent={<Filters />}
      >
        <TableHead setOrder={setOrder} />
        <TBody>
          {docs.map((doc, i) => {
            return (
              <TableRow
                key={doc?.id || i}
                doc={doc}
                refetchDocs={refetchDocs}
              />
            );
          })}
        </TBody>
      </Table>
      {showMarkDone && (
        <Markdone
          showMarkDone={showMarkDone}
          setShowMarkDone={setShowMarkDone}
          markDone={markDone}
        />
      )}
    </TableContext.Provider>
  );
}
