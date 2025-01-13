import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { IoHandLeft } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValues } from "../Redux/filterSlice";
import MultifilterComponent from "./MultifilterComponent";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
export default function FilterComponent({
  title,
  filterValues,
  isMulitiSelect = false,
  isSearchable = false,
  componentType,
  searchValue,
  setSearchValue,
}: {
  title: string;
  filterValues: { filterName: string; count?: number; type: string }[];
  isMulitiSelect?: boolean;
  isSearchable?: boolean;
  componentType: string;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}) {
  const dispatch = useDispatch();
  const storedValues = useSelector((state: any) => state.filterSlice)[
    componentType
  ];

  const firstItems = filterValues?.slice(0, 9);

  let sortedFilterValues: any = [];
  let Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  if (filterValues?.length > 9) {
    for (let i = 0; i < filterValues.length; i++) {
      if (Alphabets.includes(filterValues[i]?.filterName.charAt(0))) {
        let obj = {
          filterName: filterValues[i]?.filterName.charAt(0),
          count: 100,
          type: "Categorie",
        };
        // setFilterValuesState((prev) => [...prev, obj]);
        sortedFilterValues = [obj, ...filterValues];
        console.log(sortedFilterValues, "ssd");
        console.log(obj, "obj");
        Alphabets = Alphabets.filter(
          (item) => item !== filterValues[i].filterName.charAt(0)
        );
      }
    }
  }

  const [isMulitiSelectEnabled, setIsMulitiSelectEnabled] =
    React.useState<boolean>(false);

  const [isSearchEnabled, setIsSearchEnabled] = React.useState<boolean>(false);

  // useEffect(() => {
  //   let filteredValues = filterValues?.filter((item) => {
  //     return item?.filterName.toLowerCase().includes(searchValue.toLowerCase());
  //   });
  //   setFilterValuesState(filterValues);
  // }, [searchValue, filterValues]);

  async function handleClick(
    e: React.MouseEvent<HTMLInputElement>,
    count: number | undefined,
    type: string
  ) {
    if (isMulitiSelect) {
      if (e.currentTarget.checked) {
        dispatch(
          setFilterValues({
            title: componentType,
            values: [
              ...storedValues,
              {
                filterName: e.currentTarget.value,
                count: count ? count : 0,
                type: type,
              },
            ],
          })
        );
      } else {
        dispatch(
          setFilterValues({
            title: componentType,
            values: storedValues?.filter(
              (item: any) => item?.filterName !== e.currentTarget.value
            ),
          })
        );
      }
    } else {
      dispatch(
        setFilterValues({
          title: componentType,
          values: [
            {
              filterName: e.currentTarget.value,
              count: count ? count : 0,
              type: type,
            },
          ],
        })
      );
    }
  }

  return (
    <div className="relative border-b filterContainerWrapper p-3 flex flex-col gap-3">
      {/* filter header  */}
      <div className="FilterHeader flex justify-between items-center">
        <>
          {!isSearchEnabled ? (
            <>
              <p className="text-sm font-bold uppercase">{title}</p>
              {isSearchable && (
                <div
                  onClick={() => {
                    setIsSearchEnabled(true);
                  }}
                  className="p-2 bg-slate-100 !cursor-pointer rounded-full"
                >
                  <CiSearch className="cursor-pointer" />
                </div>
              )}
            </>
          ) : (
            <div className="flex gap-2 flex-1 border bg-[#F5F5F6]  items-center overflow-hidden p-1 px-2  rounded-xl">
              <input
                type="text"
                className="flex-1 focus:outline-none  bg-transparent text-xs"
                placeholder="Search for Categories"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <RxCross2
                onClick={() => {
                  setIsSearchEnabled(false);
                  setSearchValue("");
                }}
              />
            </div>
          )}
        </>
      </div>
      {/* filter body */}
      <div className="wrapper">
        <ul className="flex flex-col gap-2">
          {firstItems?.map((filter, index) => {
            return (
              <li
                key={index}
                className={`text-sm cursor-pointer flex gap-3 items-center  text-black   `}
              >
                <input
                  className="accent-pink-500 "
                  onClick={(e) => handleClick(e, filter.count, filter.type)}
                  type={isMulitiSelect ? "checkbox" : "radio"}
                  value={filter?.filterName}
                  checked={storedValues
                    .map((item: any) => item?.filterName)
                    .includes(filter?.filterName)}
                />

                <p className="flex gap-2">
                  {parse(filter?.filterName)}
                  {filter.count && (
                    <span className="text-[0.5rem] text-[#94969f] font-bold">
                      {`(${filter.count})`}
                    </span>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* {filter footer} */}
      <>
        {filterValues?.length > 9 ? (
          <span
            onClick={() => {
              setIsMulitiSelectEnabled(true);
            }}
            className="ml-10 text-sm text-[#ff3f6c] cursor-pointer"
          >
            + {filterValues?.length - 9} more
          </span>
        ) : null}
      </>
      {isMulitiSelectEnabled && (
        <MultifilterComponent
          values={sortedFilterValues}
          onClose={setIsMulitiSelectEnabled}
          componentType={componentType}
        />
      )}
    </div>
  );
}
