"use client";

import { useEffect, useMemo, useState } from "react";

export default function usePagination<T>(
  items: T[],
  itemsPerPage = 10
) {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.max(
      1,
      Math.ceil(items.length / itemsPerPage)
    );
  }, [items, itemsPerPage]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const currentItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;

    return items.slice(
      start,
      start + itemsPerPage
    );
  }, [items, page, itemsPerPage]);

  return {
    page,
    setPage,
    totalPages,
    currentItems,
    totalItems: items.length,
  };
}