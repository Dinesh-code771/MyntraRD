import React from "react";
import Search from "./Search";
import Categories from "./Categories";
import Banners from "./Banners";
import useWindowSize from "../hooks/useWindowSize";
import Brands from "./Brands";
import ShopByCategory from "./ShopByCategory";

export default function HomeSection() {
  const { width, height } = useWindowSize();
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white p-2  sticky top-[68px]">
        <Search
          placeholder={"Search by branch and category"}
          className="rounded-full shadow-lg overflow-hidden px-2 md:hidden"
        />
      </div>
      <Categories />
      <Banners
        banner={
          width > 880
            ? [
                {
                  src: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg",
                  alt: "",
                },
                {
                  src: "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/1/1260f21c-497c-44bf-bd38-c7fc088d43ac1733075353899-Prebuzz_1920x504.jpg",
                  alt: "",
                },
              ]
            : [
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
              ]
        }
      />
      <Brands
        title="First Time on Myntra"
        sections={[
          {
            src: [
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
            ],
            alt: [
              "boohooMan",
              "boohooMan",
              "GANT",
              "GANT",
              "GANT",
              "boohooMan",
            ],
          },
          {
            src: [
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
            ],
            alt: [
              "boohooMan",
              "boohooMan",
              "GANT",
              "GANT",
              "GANT",
              "boohooMan",
            ],
          },
          {
            src: [
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png",
              "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png",
            ],
            alt: [
              "boohooMan",
              "boohooMan",
              "GANT",
              "GANT",
              "GANT",
              "boohooMan",
            ],
          },
        ]}
      />
      <ShopByCategory
        title="Shop by Category"
        images={[
          {
            categoryName: "mens-clothing",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/hth991PG_c1a5d8d8de8e46f3b3088f6710979bf6.jpg",
          },
          {
            categoryName: "women-clothing",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/xt3Pbjno_b5dc284221244c99a749cbecd50677db.jpg",
          },
          {
            categoryName: "kids-clothing",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/hth991PG_c1a5d8d8de8e46f3b3088f6710979bf6.jpg",
          },
          {
            categoryName: "ethnic-wear",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/xt3Pbjno_b5dc284221244c99a749cbecd50677db.jpg",
          },
          {
            categoryName: "kids",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/6q8WRXBA_929fe0ca16df41e79c1b15eff8c52d32.jpg",
          },
          {
            categoryName: "footwear",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/56G90xOM_0259569412dc450ebf25ff7cbf24e5f1.jpg",
          },
          {
            categoryName: "accessories",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/osTGPUnc_146cf0dc50b54812a5522577727ffe0d.jpg",
          },
          {
            categoryName: "casual-wear",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/6q8WRXBA_929fe0ca16df41e79c1b15eff8c52d32.jpg",
          },
          {
            categoryName: "beauty-products",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/56G90xOM_0259569412dc450ebf25ff7cbf24e5f1.jpg",
          },
          {
            categoryName: "category-10",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/hth991PG_c1a5d8d8de8e46f3b3088f6710979bf6.jpg",
          },
          {
            categoryName: "category-11",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/xt3Pbjno_b5dc284221244c99a749cbecd50677db.jpg",
          },
          {
            categoryName: "category-12",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/6q8WRXBA_929fe0ca16df41e79c1b15eff8c52d32.jpg",
          },
          {
            categoryName: "category-13",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/56G90xOM_0259569412dc450ebf25ff7cbf24e5f1.jpg",
          },
          {
            categoryName: "category-14",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/osTGPUnc_146cf0dc50b54812a5522577727ffe0d.jpg",
          },
          {
            categoryName: "category-15",
            src: "https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/4/osTGPUnc_146cf0dc50b54812a5522577727ffe0d.jpg",
          },
        ]}
      />
    </div>
  );
}
