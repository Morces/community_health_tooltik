"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const initDoc = [];

export default function useTable() {
  const [limit, setLimit] = useState(10);
  const [docs, setDocs] = useState(initDoc);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  // Pagination
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);

  const [order, setOrder] = useState("id-desc");

  const refetchDocs = () => getDocs({ page: page, limit: limit });

  // Filters
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);

  useEffect(() => {
    getDocs({ page, limit });
  }, [limit, selectedRoles, order, page]);

  useEffect(() => {
    getRoles();
  }, []);

  useEffect(() => {
    if (selectedRoles.length === 0) {
      setIsFiltered(false);
    }
  }, [selectedRoles]);

  async function getDocs({ page, limit }) {
    try {
      setIsLoading(true);
      const res = await axios.get("/api/users", {
        params: {
          page,
          limit,
          order,
          role: selectedRoles.join(","),
        },
      });

      const { data } = res;
      setTotal(data?.pagination?.total || 0);
      setPages(data?.pagination?.pages || 0);
      setHasNextPage(data?.pagination?.hasNextPage || false);
      setHasPrevPage(data?.pagination?.hasPrevPage || false);
      setDocs(data?.docs || initDoc);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching docs:", error);
      setIsLoading(false);
    }
  }

  async function getRoles() {
    try {
      const res = await axios.get("/api/roles");
      const { data } = res;
      setRoles(data?.docs || []);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  }

  async function clearFilters() {
    setSelectedRoles([]);
    setIsFiltered(false);
  }

  function handleNext() {
    if (hasNextPage) {
      setPage((c) => c + 1);
      getDocs({ page: page + 1, limit });
    }
  }

  function handlePrev() {
    if (hasPrevPage) {
      setPage((c) => c - 1);
      getDocs({ page: page - 1, limit });
    }
  }

  return {
    limit,
    setLimit,
    docs,
    setDocs,
    isLoading,
    setIsLoading,
    isFiltered,
    setIsFiltered,
    pagination: {
      page,
      total,
      pages,
      hasNextPage,
      hasPrevPage,
      handleNext,
      handlePrev,
      limit,
      setLimit,
      total_docs: docs?.length || 0,
    },
    selectedRoles,
    setSelectedRoles,
    roles,
    setRoles,
    setOrder,
    clearFilters,
    refetchDocs,
  };
}
