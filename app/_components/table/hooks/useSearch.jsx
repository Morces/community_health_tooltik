"use client";

import { useEffect, useRef } from "react";
import axios from "axios";

export default function useSearch(props) {
  const {
    search,
    searchUrl,
    setDocs = () => {},
    setIsLoading = () => {},
    setShowPagination = () => {},
    setIsFiltered,
  } = props;
  const abortControllerRef = useRef(null);

  useEffect(() => {
    handleSearch();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [search]);

  const handleSearch = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      if (typeof search !== "string" || search.length < 3 || !searchUrl) {
        return;
      }

      setIsLoading(true);

      const res = await axios.get(searchUrl, {
        params: {
          search: search,
        },
        signal: abortControllerRef.current.signal,
      });

      setIsLoading(false);

      if (res.status !== 200) {
        return;
      }

      setShowPagination(false);
      setIsFiltered(true);
      setDocs(res.data.docs || []);
    } catch (e) {
      if (e.name === "AbortError") {
        console.log("Previous search request aborted");
      } else {
        console.error("Error doing search");
        console.error(e);
      }
      setIsLoading(false);
    }
  };
}
