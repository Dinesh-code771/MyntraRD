import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import Banners from "./Banners";

export default function HomeSection() {
  return (
    <div className="p-2 flex flex-col gap-2">
      <Search
        placeholder={"Search by branch and category"}
        className="rounded-full shadow-lg overflow-hidden px-2 md:hidden"
      />
      <Categories />
      <Banners
        banner={[
          {
            src: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/DECEMBER/2/dFWjjYZG_3ee3baf3f9b44cafafb4d8ea416464b4.jpg",
            alt: "",
          },
          {
            src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/12/1/fd62d5d6-9ae6-486f-810b-d060197869b81733069583317-h-m-msb1.png",
            alt: "",
          },
          {
            src: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/DECEMBER/2/dFWjjYZG_3ee3baf3f9b44cafafb4d8ea416464b4.jpg",
            alt: "",
          },
          {
            src: "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_414,c_limit,fl_progressive/w_394,q_50,dpr_2,fl_progressive/assets/images/2024/DECEMBER/2/dFWjjYZG_3ee3baf3f9b44cafafb4d8ea416464b4.jpg",
            alt: "",
          },
        ]}
      />
    </div>
  );
}
