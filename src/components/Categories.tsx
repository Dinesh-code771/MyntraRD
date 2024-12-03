import { title } from "process";
import React from "react";
import CatergoryCard from "./CatergoryCard";

export default function Categories() {
  let catergories = [
    {
      src: "",
      title: "Grocery",
    },
    {
      src: "",
      title: "Electronics",
    },
    {
      src: "",
      title: "Fashion",
    },
    {
      src: "",
      title: "Furniture",
    },
    {
      src: "",
      title: "Books",
    },
    {
      src: "",
      title: "Stationary",
    },
  ];
  return (
    <div className="w-full overflow-x-auto flex gap-3 md:hidden">
      {catergories.map((category, index) => {
        return (
          <>
            <CatergoryCard
              key={index}
              src={category.src}
              title={category.title}
            />
          </>
        );
      })}
    </div>
  );
}
