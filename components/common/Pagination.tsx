"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">

      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      >
        Previous
      </Button>

      <div className="flex flex-wrap justify-center gap-2">

        {Array.from(
          { length: totalPages },
          (_, i) => i + 1
        ).map((number) => (
          <Button
            key={number}
            size="icon"
            variant={
              page === number
                ? "default"
                : "outline"
            }
            onClick={() =>
              onPageChange(number)
            }
          >
            {number}
          </Button>
        ))}

      </div>

      <Button
        variant="outline"
        disabled={page === totalPages}
        onClick={() =>
          onPageChange(page + 1)
        }
      >
        Next
      </Button>

    </div>
  );
}