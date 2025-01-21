import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { RiArrowDownWideLine, RiArrowUpWideLine } from "react-icons/ri";
import FilterComponent from "./FilterComponent";
import { RxCross2 } from "react-icons/rx";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";

import {
  fetctSelectedFilter,
  removePaticularFilter,
  resetFilterValues,
  setParams,
  setPrice,
} from "../Redux/filterSlice";
import Slider from "@mui/material/Slider";
import { pink } from "@mui/material/colors";
import { useEffect } from "react";
import ts from "typescript";
import DropDown from "./DropDown";
import Brands from "./Brands";
import Categories from "./Categories";
import { listDocuments } from "../apis/listDocuments";
import { useParams } from "react-router-dom";
import { insertDataIntoDocument } from "../apis/insertDataIntoDocument";
type productDetailsProps = {
  productDetails: {
    title: string;
    decription: string;
    price: number;
    images: string[];
    size?: string;
    rating: number;
    likes?: string;
  }[];
};
export default function ProductCategory({
  productDetails,
}: productDetailsProps) {
  const dispatch = useDispatch();
  const { name } = useParams<{ name: string }>();

  const [currentSelected, setCurrentSelected] = useState<null | number>(null);
  const [filterDetails, setFilterDetails] = useState({
    brands: [],
    categories: [],
    colors: [],
  });
  const [refetch, setRefetch] = useState(false);

  // const allFilters = useSelector((state: any) => state.filterSlice);

  const [categorySearch, setCatgegorySearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");
  const [searchfilterdDetails, setSearhFilterDetails] = useState({
    searchFilteredBrands: [],
    searchfilterdCategories: [],
  });

  const [values, setValues] = useState<number[]>([0, 0]);
  const color = pink[500];
  const allFilterState = useSelector((state: any) => state.filterSlice);
  const [selectedTopFilter, setSelectedTopFilter] = useState<string[]>([]);

  // {
  //   Categorie: [{},{}.{}],
  //    Brand: [{},{}],
  //    Colors: [],
  //    Discount: [],
  //  }
  let allFilterStateValues: any = [];
  for (let key in allFilterState) {
    // key = Brand
    if (allFilterState[key]?.length > 0 && key !== "params") {
      allFilterStateValues = [...allFilterStateValues, ...allFilterState[key]];
    } else {
      if (Object.keys(allFilterState[key]).length > 0 && key !== "params") {
        allFilterStateValues = [...allFilterStateValues, allFilterState[key]];
      }
    }
  }


  //constants
  const topFiltes = [
    {
      name: "Age",
      values: [
        "0-3",
        "3-6",
        "6-9",
        "9-12",
        "12-15",
        "15-18",
        "18-21",
        "21-24",
        "24-27",
        "27-30",
        "30-33",
        "33-36",
        "36-39",
        "39-42",
        "42-45",
        "45-48",
      ],
    },
    { name: "Bundles", values: ["budles", "singleStyles"] },
    { name: "Color", values: ["Red", "Blue", "Green"] },

    { name: "Country of origin", values: ["India", "China", "USA"] },
    { name: "Size", values: ["S", "M", "L", "XL"] },
  ];

  function handleRemoveFilter(filterDetails: {
    filterName: string;
    count?: number;
    type: string;
  }) {
    dispatch(
      removePaticularFilter({
        type: filterDetails.type,
        value: filterDetails.filterName,
      })
    );
  }

  function handleSlideChange(event: Event, newValue: number | number[]) {
    //storing in local state and in redux store
    // @ts-ignore
    setValues([newValue[0], newValue[1]]);
    // @ts-ignore
    dispatch(setPrice([newValue[0], newValue[1]]));

    //inserting into server
    if (!Array.isArray(newValue)) return;
    const obj: any = {
      filterName: `Rs. ${newValue[0]} To Rs. ${newValue[1]}`,
      isChecked: true,
    };
    insertData({ ...allFilterState, prices: obj });
  }

  function handleClearAll() {
    dispatch(resetFilterValues([]));
  }

  useEffect(() => {
    //if prices is empty obj return
    if (!Object.keys(allFilterState.prices).length) return;
    //if prices is not empty obj
    let name = allFilterState.prices?.filterName;
    let newValue = name?.split(" ");
    console.log(newValue, "df");

    setValues([newValue[1], newValue[newValue.length - 1]]);
  }, [allFilterState.prices]);

  useEffect(() => {
    const categoryNameValue = name;
    async function fetchDetails() {
      const details: any = await listDocuments(
        "676a1ec4001bf5b712d9",
        "676a1ee4001ae452e2df",
        "CategoryType",
        name,
        ["brands", "categories", "colors"]
      );
      setFilterDetails(details);
      setSearhFilterDetails({
        searchFilteredBrands: details?.brands,
        searchfilterdCategories: details?.categories,
      });
    }
    fetchDetails();
  }, []);

  //filter details

  useEffect(() => {
    let categories = searchfilterdDetails.searchfilterdCategories;
    let searchCategories = categories.filter((item: any) => {
      return item?.filterName
        .toLowerCase()
        .includes(categorySearch.toLowerCase());
    });
    setSearhFilterDetails({
      ...searchfilterdDetails,
      searchfilterdCategories: searchCategories,
    });
  }, [categorySearch]);

  useEffect(() => {
    dispatch(setParams(name));
  }, [name]);

  // useEffect(() => {
  //   dispatch(fetctSelectedFilter() as any);
  // }, []);

  async function insertData(allFilterState: any) {
    const res = await insertDataIntoDocument(
      JSON.stringify(allFilterState),
      "676a1ec4001bf5b712d9",
      "676a1ee4001ae452e2df",
      "CategoryType",
      name
    );
    // if (!res) {
    //   console.log("throewinf");
    //   return new Error("error");
    // }
    setRefetch(!refetch);
  }

  useEffect(() => {
    async function fetchAndInsertData() {
      let dispatchRes = await dispatch(fetctSelectedFilter() as any);
    }
    fetchAndInsertData();
  }, [refetch]);

  useEffect(() => {
    async function updateDataInServer() {
      if (allFilterState.params) {
        let dispatchRes = await dispatch(fetctSelectedFilter() as any);
        console.log(dispatchRes.payload.selectedFilters, "dispatchRes");
        insertData({
          ...dispatchRes.payload.selectedFilters,
          params: allFilterState.params,
        });
        console.log(allFilterState, "reddy");
      }
    }
    updateDataInServer();
  }, [allFilterState.params]);

  return (
    <div className="wrapper h-[88%]">
      <div className="w-[80%]  h-full mx-auto py-5 flex flex-col gap-4">
        {/* top section */}
        <div className="container1 flex flex-col gap-4 pb-2 ">
          <div className="">
            <p className=" text-xs text-[#8b8d95]">
              Home /{" "}
              <span className="text-[#9c9ea5] font-bold">
                {" "}
                Kids Wear Online Store
              </span>
            </p>
          </div>
          <div>
            <p className="text-[#282c3e] text-sm font-bold">
              Kids Wear Online Store -{" "}
              <span className="text-[#9c9ea5]"> 376222 items</span>
            </p>
          </div>
        </div>
        {/* bottom section */}
        <div className="flex">
          {/* left section  */}
          <div className="leftWrapper flex-[2] flex flex-col ">
            {/* left section top  */}
            <div className="flex justify-between items-center ">
              <p className="text-sm font-bold uppercase text-black p-3 flex-[0.5] ">
                Filters
              </p>
              {allFilterStateValues.length > 0 && (
                <p
                  onClick={handleClearAll}
                  className="text-xs cursor-pointer text-[#ff3f6c] pr-5 uppercase font-bold"
                >
                  Clear All
                </p>
              )}
            </div>

            {/* left section bottom */}
            <div className="filtersWrapper border-t border-r flex-[9.5]">
              <FilterComponent
                title={""}
                componentType={"Gender"}
                filterValues={[
                  {
                    filterName: "Boys",
                    type: "Discount",
                  },
                  {
                    filterName: "Girls",
                    type: "Discount",
                  },
                ]}
                isMulitiSelect={false}
                isSearchable={false}
                onSelectedFilter={insertData}
                searchValue={""}
                setSearchValue={() => {}}
              />
              <FilterComponent
                title={"Categorie"}
                componentType={"Categorie"}
                filterValues={searchfilterdDetails.searchfilterdCategories}
                isMulitiSelect={true}
                isSearchable={true}
                searchValue={categorySearch}
                onSelectedFilter={insertData}
                setSearchValue={setCatgegorySearch}
              />
              <FilterComponent
                title={"Brand"}
                componentType={"Brand"}
                filterValues={searchfilterdDetails.searchFilteredBrands}
                isMulitiSelect={true}
                searchValue={brandSearch}
                onSelectedFilter={insertData}
                setSearchValue={setBrandSearch}
                isSearchable={true}
              />
              {/* price slide */}
              <div className="px-2 border-t border-b py-4">
                <h3 className="uppercase text-sm text-black font-bold">
                  Price
                </h3>
                <Slider
                  getAriaLabel={() => "Timeline range"}
                  value={values}
                  min={0}
                  max={100000}
                  step={100}
                  size="small"
                  onChange={handleSlideChange}
                />
                <div className="flex  text-xs text-black gap-1 font-bold">
                  <p>$ {values[0]}</p>
                  <span>-</span>
                  <p>${values[1]}</p>
                </div>
              </div>

              <FilterComponent
                title="Colors"
                componentType="Colors"
                filterValues={filterDetails?.colors}
                isMulitiSelect={true}
                searchValue={""}
                setSearchValue={() => {}}
                isSearchable={false}
                onSelectedFilter={insertData}
              />
              <FilterComponent
                title={"Discount Range"}
                componentType={"Discount"}
                filterValues={[
                  {
                    filterName: "10-50",
                    type: "Discount",
                  },
                  {
                    filterName: "40-60",
                    type: "Discount",
                  },
                  {
                    filterName: "96-50",
                    type: "Discount",
                  },
                  {
                    filterName: "0-5",
                    type: "Discount",
                  },
                ]}
                isMulitiSelect={false}
                searchValue={""}
                setSearchValue={() => {}}
                isSearchable={false}
                onSelectedFilter={insertData}
              />
            </div>
          </div>
          {/* right section */}
          <div className="rightWrapper flex-[8] flex flex-col gap-[11px]">
            {/* right section top */}
            <div className="flex  justify-between">
              <div className="flex flex-[4] justify-between items-center">
                <div className="flex gap-3 items-center justify-center">
                  {topFiltes?.map((filter, index) => {
                    return (
                      <div
                        onClick={() => {
                          if (currentSelected === index) {
                            return setCurrentSelected(null);
                          }
                          setCurrentSelected(index);
                        }}
                        key={index}
                      >
                        <p
                          className={`text-[#8b8d95] flex gap-2 items-center cursor-pointer ${
                            currentSelected === index ? "bg-slate-200" : ""
                          } text-sm hover:bg-slate-200 rounded-lg px-2 py-1 `}
                        >
                          {filter.name}
                          {currentSelected != index ? (
                            <RiArrowDownWideLine />
                          ) : (
                            <RiArrowUpWideLine />
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-[6] items-end ">
                <div className="flex gap-3 justify-end relative">
                  <DropDown
                    title="Sort By"
                    values={[
                      { id: "352623", name: "Recommended" },
                      {
                        id: "352624",
                        name: "Popularity",
                      },
                      {
                        id: "352625",
                        name: "Newest",
                      },
                      {
                        id: "352626",
                        name: "Price: Low to High",
                      },
                      {
                        id: "352627",
                        name: "Price: High to Low",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* right section middle */}
            {currentSelected != null && (
              <div className="dropdownfilters  pl-3 pb-4 grid lg:grid-cols-6 xl:grid-cols-9">
                {topFiltes[currentSelected].values?.map((value, index) => {
                  return (
                    <div key={index} className="flex gap-[0.5] items-center ">
                      <input
                        onClick={() => {
                          setSelectedTopFilter([...selectedTopFilter, value]);
                        }}
                        checked={selectedTopFilter.includes(value)}
                        className="accent-pink-500"
                        type="checkbox"
                      />
                      <p className="text-[#8b8d95] cursor-pointer text-sm  rounded-lg px-2 py-1 ">
                        {value}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* selectedFilter */}
            <div className="selectedFilter flex flex-wrap gap-3 px-2">
              {allFilterStateValues?.map((value: any) => {
                return (
                  <div className="flex gap-1 max-w-[500px] min-w-[100px] px-1 py-1 rounded-xl items-center justify-between border text-[#3e4152]">
                    <p className="text-[0.7rem] ">
                      {value.type === "Colors"
                        ? parse(value?.filterName)
                        : value.filterName}
                    </p>
                    <RxCross2
                      onClick={() => {
                        handleRemoveFilter(value);
                      }}
                      size={15}
                      color="#3e4152"
                    />
                  </div>
                );
              })}
            </div>
            {/* right section bottom */}
            <div className="cardsWrapper ] w-full gap-5  p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-t border-l ">
              {
                // map the product details
                productDetails?.map((product, index) => {
                  return (
                    <ProductCard
                      key={index}
                      title={product.title}
                      decription={product.decription}
                      price={product.price}
                      images={product.images}
                      rating={product.rating}
                      likes={product.likes}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
