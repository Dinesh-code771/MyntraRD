import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

export default function MultifilterComponent({
  onClose,
  values,
  componentType,
}: {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  values: { filterName: string; count?: number; type: string }[];
  componentType: string;
}) {
  const storedValues = useSelector((state: any) => state.filterSlice)[
    componentType
  ];
  const [filteredValues, setFilteredValues] =
    React.useState<{ filterName: string; count?: number; type: string }[]>(
      values
    );
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [hoveredAlphabet, setHoveredAlphabet] = React.useState<string>("");
  const aplhabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // Filter values based on searchValue
  useEffect(() => {

    const filteredValues = values.filter((value) => {
      return value.filterName.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredValues(filteredValues);
  }, [searchValue, values]);

  return (
    <div className="absolute  overflow-x-auto top-0 left-0 shadow-md border rounded-md max-w-[1000px] min-w-[700px] xl:min-w-[900px] h-auto max-h-[600px] bg-white z-50">
      <div className="headerr border-b p-3 flex justify-between sticky top-0 left-0">
        <div className="flex gap-10 items-center">
          <div className="search border">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className=" border-none  text-sm p-1"
              placeholder="Search Brand"
            />
          </div>
          <div className="AlphabetsWrapper flex gap-3">
            {aplhabets?.map((alphabet, index) => {
              return (
                <div key={index} className="cursor-pointer">
                  <p
                    onMouseOver={() => {
                      setHoveredAlphabet(alphabet);
                    }}
                    onMouseOut={() => {
                      setHoveredAlphabet("");
                    }}
                    className="text-xs text-black"
                  >
                    {alphabet}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          onClick={() => {
            onClose(false);
          }}
          className="cursor-pointer"
        >
          <RxCross2 />
        </div>
      </div>
      <div className="bodyy">
        <ul className="flex flex-col w-full flex-wrap p-3 gap-2 h-[400px] pt-5">
          {filteredValues
            ?.sort((a, b) => {
              // Sort alphabetically by filterName
              return a.filterName.localeCompare(b.filterName);
            })
            ?.map((value, index) => {
              return (
                <li
                  key={index}
                  className={`flex items-center gap-2 max-w-[150px] ${
                    hoveredAlphabet === value.filterName.charAt(0) ||
                    hoveredAlphabet === ""
                      ? "opacity-1"
                      : "opacity-[0.2]"
                  } `}
                >
                  {value.filterName.length > 1 ? (
                    <input
                      type="checkbox"
                      className="cursor-pointer accent-pink-500"
                      value={value.filterName}
                      checked={storedValues
                        ?.map((item: any) => item?.filterName)
                        .includes(value?.filterName)}
                    />
                  ) : null}
                  <p
                    className={`text-sm ${
                      value.filterName.length === 1 ? "text-md font-bold" : ""
                    }`}
                  >
                    {value.filterName}
                  </p>
                  {value.filterName.length > 1 ? (
                    <p className="text-xs text-gray-400">{value.count}</p>
                  ) : null}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
