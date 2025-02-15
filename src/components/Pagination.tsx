import React from "react";

export default function Pagination({
  totalData,
  dataPerPage,
  currentPage,
  onPageChange,
}: {
  totalData: number;
  onPageChange: (page: number) => void;
  dataPerPage: number;
  currentPage: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        onClick={() => {
          onPageChange(currentPage - 1);
        }}
      >
        Previous
      </button>
      {Array.from({ length: Math.ceil(totalData / dataPerPage) }).map(
        (_, index) => (
          <button
            className={`${
              currentPage === index + 1
                ? "bg-blue-500 text-white "
                : "text-black bg-indigo-50 "
            } px-4 py-2 rounded-md`}
            key={index}
            onClick={() => {
              onPageChange(index + 1);
            }}
          >
            {index + 1}
          </button>
        )
      )}
      <button
        disabled={currentPage === Math.ceil(totalData / dataPerPage)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
