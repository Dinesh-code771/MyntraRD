import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function Search({
  className,
  placeholder,
}: {
  className?: string;
  placeholder: string;
}) {
  return (
    <div
      className={`${className} flex items-center  border border-gray-300 px-1`}
    >
      <IoIosSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent px-3 py-1
        focus:outline-none"
      />
    </div>
  );
}
