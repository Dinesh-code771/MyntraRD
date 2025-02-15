import React from "react";
import { IoIosSearch } from "react-icons/io";
export default function Search({
  className,
  placeholder,
  value,
  onChange,
}: {
  className?: string;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
}) {
  
  return (
    <div
      className={`${className} flex items-center  border border-gray-300 px-1`}
    >
      <IoIosSearch />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent px-3 py-1
        focus:outline-none"
      />
    </div>
  );
}
