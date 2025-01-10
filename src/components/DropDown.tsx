import React from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function DropDown({
  title,
  values,
}: {
  title: string;
  values: { id: string; name: string }[];
}) {
  const [selectedValue, setSelectedValue] = React.useState<{
    id: string;
    name: string;
  }>(values[0]);
  return (
    <div className="wrapper absolute z-40 h-[40px] border min-w-[250px] bg-white shadow-md hover:h-auto overflow-hidden">
      <div className="boxx px-2 py-3 flex justify-between">
        <div className="flex gap-2">
          <span className="text-xs text-gray-500">{title}</span>
          <span className="text-xs text-black ml-auto">
            {selectedValue.name}
          </span>
        </div>
        <IoIosArrowDown />
      </div>
      {values.map((value) => {
        return (
          <span
            className={`boxx px-4 py-3 flex text-sm i hover:bg-[#F5F5F6] ${
              value.name === selectedValue.name ? "bg-gray-200" : ""
            }`}
            onClick={() => setSelectedValue(value)}
          >
            {value.name}
          </span>
        );
      })}
    </div>
  );
}
